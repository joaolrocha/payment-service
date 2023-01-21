import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        login: Sequelize.STRING,
        password: Sequelize.STRING,
        isProfessional: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        underscored: false, // remove o snack case e deixa o camel case
        freezeTableName: true, // não permite que o sequelize altere o nome da tabela para o plural
        // timestamps: false, // desativa o createdat e updatedat
        modelName: "users" // troca o nome da tabela de User para users
      }
    );
  }

  static associate(models) {
  //  this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }


}

export default User;
