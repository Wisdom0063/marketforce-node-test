"use strict"
import { Transaction as SequelizeTransaction } from 'sequelize';

import { throwError } from "../lib"
import sequelizeConnection from "../lib/db"
import { Transaction, Wallet } from "../models"
import { TRANSACTION_TYPES } from "../models/transactions"

export interface TransactionInput {
    amount: number
    phoneNumber: string
}

export type TransactionSourceInput = Omit<TransactionInput, "amount">


export interface TransferInput {
    sender: TransactionSourceInput
    recipients: TransactionInput[]
}


/**
 * A function that transfer funds from one wallet to another wallet
 * @param senderWallet 
 * @param recipient 
 * @returns 
 */

export async function transferFunds(senderPhoneNumber: string, recipient: TransactionInput) {
    // start transaction
    return sequelizeConnection.transaction(async (t: SequelizeTransaction) => {

        const senderWallet = await Wallet.findOne({where:{phoneNumber:senderPhoneNumber}, transaction:t, lock:true})

        if(!senderWallet) return throwError("Sender not found", 400)


        if (senderWallet.phoneNumber === recipient.phoneNumber) return throwError(`Both paties of the transaction are the same`, 400)

        const recipientWallet = await Wallet.findOne({ where: { phoneNumber: recipient.phoneNumber }, transaction: t, lock: true})

        if (!recipientWallet) return throwError(`Wallet not found for ${recipient.phoneNumber}`, 400)

        await Transaction.create({
            amount: recipient.amount, type: TRANSACTION_TYPES.TRANSFER,
        }, { transaction: t })

        await senderWallet.debit(recipient.amount, t)
        await recipientWallet.credit(recipient.amount, t)

    })
}





