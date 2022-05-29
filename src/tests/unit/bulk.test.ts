

import { disconnect } from "../../lib";
import sequelizeConnection from "../../lib/db";
import { dbInit, Transaction, Wallet } from "../../models";
import { transferBulkFunds } from "../../services"
import { transferFunds } from "../../services/tranfer";
import { Senarious, wallets } from "../stories";


afterAll( ()=>{
     disconnect()
 })
const dbTeardown = async () => {
    await Wallet.destroy({ cascade: true, truncate: true, force: true });
    await Transaction.destroy({ cascade: true, truncate: true, force: true });

}


describe.only('Transfer Service', () => {

    describe('Transfer', () => {
        beforeEach( async ()=>{

            await dbInit()

            await Wallet.bulkCreate(wallets)
    })

    afterEach(async()=>{

        try {
            await dbTeardown()

        } catch (error) {
            console.log(error)
        }


    })



  
        it('should throw an error if sender wallet is not found', async () => {

            const context = Senarious["WalletNotFound"]
                 try {
                    await transferBulkFunds(context.data)

                 } catch (error:any) {
                    const recipientsWallet = await Promise.all(context.data.recipients.map(async recipient=> {
                      const wallet =  await Wallet.findOne({where:{accountNumber: recipient.accountNumber}})
                      return wallet?.balance
                    }
                ))
                     expect(error.message).toEqual(context.expectedResult)
                     expect(recipientsWallet).toEqual([ 0, 0 ])
                     
                 }
        })



        it('should transfer funds when sender wallet has enough balance and all recipients wallet found', async () => {
            const context = Senarious["EnoughBalance"]
                const result =    await transferBulkFunds(context.data)
                const senderWallet = await Wallet.findOne({where:{accountNumber: context.data.sender.accountNumber}})

                const recipientsWallet = await Promise.all(context.data.recipients.map(async recipient=> {
                  const wallet =  await Wallet.findOne({where:{accountNumber: recipient.accountNumber}})
                  return wallet?.balance
                }
                ))

                expect(senderWallet?.balance).toEqual(920)
                expect(recipientsWallet).toEqual([ 50, 30 ])
                expect(result).toEqual(context.expectedResult)
                     
        })


        it('should only transfer funds to recipients found else otherwise', async () => {
            const context = Senarious["SomeDestinationWalletNotFound"]
                const result =    await transferBulkFunds(context.data)
                const senderWallet = await Wallet.findOne({where:{accountNumber: context.data.sender.accountNumber}})
                const founddestinationWallet = await Wallet.findOne({where:{accountNumber: context.data.recipients[0].accountNumber}})
                expect(senderWallet?.balance).toEqual(950)
                expect(founddestinationWallet?.balance).toEqual(50)
                expect(result).toEqual(context.expectedResult)
                     
        })


        it('should not transfer when amount is more than sender\'s banlance', async () => {
            const context = Senarious["InsufficientBalance"]
            try {
                await transferBulkFunds(context.data)

             } catch (error:any) {
                const recipientsWallet = await Promise.all(context.data.recipients.map(async recipient=> {
                  const wallet =  await Wallet.findOne({where:{accountNumber: recipient.accountNumber}})
                  return wallet?.balance
                }
            ))
                 expect(error.message).toEqual(context.expectedResult)
                 expect(recipientsWallet).toEqual([ 0, 0 ])
                 
             }
                     
        })


        it('should not transfer if sender is same as recipient', async () => {
            const context = Senarious["SameWallet"]
                const result =    await transferBulkFunds(context.data)
                const senderWallet = await Wallet.findOne({where:{accountNumber: context.data.sender.accountNumber}})
                const recipientsBalance = await Promise.all(context.data.recipients.map(async recipient=> {
                    const wallet =  await Wallet.findOne({where:{accountNumber: recipient.accountNumber}})
                    return wallet?.balance
                  }
                  ))
             expect(senderWallet?.balance).toEqual(950)
                expect(recipientsBalance).toEqual([50, 950])
                expect(result).toEqual(context.expectedResult)
                     
        })


        it('should not transfer if recipients is more than allowed limit', async () => {
            const context = Senarious["RecipientsLimit"]
                 try {
                    await transferBulkFunds(context.data)

                 } catch (error:any) {
                    const senderWallet = await Wallet.findOne({where:{accountNumber: context.data.sender.accountNumber}})

                     expect(error.message).toEqual(context.expectedResult)
                     expect(senderWallet?.balance).toEqual(1000)
                     
                 }
                     
        })



    })
})