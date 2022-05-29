"use strict"
import config from '../config';
import { throwError } from '../lib';
import { Wallet } from '../models';
import { transferFunds, TransferInput } from './tranfer';


/**
 * A function that tranfer funds from a source wallet to multiple destination wallet
 * @param {TransferInput} input 
 * @returns 
 */
export async function transferBulkFunds(input:TransferInput){
    const {sender, recipients} = input

    // Check if number of recipients does not exceed the allowed limit
    if(recipients.length> config.get("NAX_RECIPIENTS_PER_TRANSACTION")) return throwError("You can only transfer to 10 recipients at a time", 400)


    // Get the sender wallet information
    
        const senderallet = await Wallet.findOne({where:{phoneNumber:sender.phoneNumber}, lock:true})
        if(!senderallet) return throwError("Wallet not found", 400)


        const totalAmount = recipients.reduce((acc, cur)=>{
            return acc + cur.amount
        }, 0)



        if(senderallet.balance < totalAmount) return throwError("Balance not enough for this transfer", 400)


        // Transfer funds to all the recipients

      const results = await Promise.allSettled(recipients.map(async (recipient)=>{
            return transferFunds(sender.phoneNumber, recipient)
        }))

      return  results.map((result, index)=>{
            const errorDetails = result.status === 'rejected' ?{reason:result.reason.message}: {}
            return {
                success: result.status === 'fulfilled'?true:false,
                phoneNumber: recipients[index].phoneNumber,
                ...errorDetails
            }
        })



}





