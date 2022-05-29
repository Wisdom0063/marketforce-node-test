"use strict"
import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import sequelizeConnection from "../../lib/db";
import Wallet from '../wallet';

export enum TRANSACTION_TYPES{
    TRANSFER = 'transfer'

}


export interface TransactionModel extends Model<InferAttributes<TransactionModel>, InferCreationAttributes<TransactionModel>> {
    id: CreationOptional<number>;
    amount: number;
    type: TRANSACTION_TYPES
  }



const Transaction = sequelizeConnection.define<TransactionModel>('Transaction', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
  });




  export default Transaction

