import { readdirSync } from "fs";
import { basename, dirname } from "path";
import Sequelize from 'sequelize';
import { fileURLToPath } from 'url';
import databaseConfig from "../config/config.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    const imports = readdirSync(__dirname) // ler os arquivos da pasta
      .filter(
        (file) => file.indexOf('.') !== 0 // filtra pelas condicoes
          && file !== basename(__filename) // ignora o arquivo atual -> index
          && file.slice(-4) === '.mjs', // filtra pela extencão .mjs
      ).map(async (path) => {
        const { default: model } = await import(`./${path}`);
        return model;
      });

    Promise.all(imports).then((models)=>{
      models.map(model => model.init(this.connection))
      .map(model => model?.associate && model?.associate(this.connection.models));
    })
  }
}

export default new Database();
