import { CreationOptional, DataTypes, HasManyGetAssociationsMixin, InferAttributes, InferCreationAttributes, Model, Transaction as SequelizeTransaction } from "sequelize";
import { throwError } from "../../lib";
import sequelizeConnection from "../../lib/db";
import Transaction from "../transactions";


class Wallet extends Model<InferAttributes<Wallet>, InferCreationAttributes<Wallet>> {
  declare id: CreationOptional<number>;
  declare balance: number;
  declare phoneNumber: string
  declare accountNumber: string

  async debit(amount: number, t: SequelizeTransaction) {
    if (this.balance < amount) return throwError("Amount is more than available balance", 400)
    await this.update({ balance: this.balance - amount }, { transaction: t })
  }

  async credit(amount: number, t: SequelizeTransaction) {
    await this.update({ balance: this.balance + amount }, { transaction: t })
  }
}

Wallet.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING(12),
      allowNull: false

    },
    accountNumber: {
      type: DataTypes.STRING(16),
      allowNull: false

    }
  },
  { sequelize: sequelizeConnection, timestamps: true }
);


export default Wallet



