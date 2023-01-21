import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../../database/models/user.mjs";
import {v4 as uuid} from "uuid";

//verificar se body.login e body.senha existe

const signup = async (req, res) => {
  const { login, password, isProfessional } = req.body

  if (!login || !password)
    return res.status(400).json({ message: "login and password are required" })

  try {
    const existingUser = await User.findOne({ where: {login} })
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: uuid(),
      login: login,
      password: hashedPassword
    }
    if (isProfessional)
      newUser.isProfessional = isProfessional

    const result = await User.create(newUser)

    const token = jwt.sign({ login: result.login, id: result._id }, process.env.JWT_SECRET_KEY);
    res.status(201).json({ user: result, token: token })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Sever internal error" })
  }
}




export default signup

// usuario senha
// buscar no bd um usuario que tenha esse login
// comparar se a senha do bd é igual a senha daqui
// dps da senha, assinar o jwt token e retornar p usuario o usuario e o token dentro
// de um objeto
