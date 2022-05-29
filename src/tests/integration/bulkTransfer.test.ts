

import { disconnect } from "../../lib";
import sequelizeConnection from "../../lib/db";
import { dbInit, Transaction, Wallet } from "../../models";
import { AppRoutes } from "../../routes";
import { request } from "../helpers";
import { Senarious, wallets } from "../stories";


afterAll( ()=>{
    disconnect()
})
const dbTeardown = async () => {
   await Wallet.destroy({ cascade: true, truncate: true, force: true });
   await Transaction.destroy({ cascade: true, truncate: true, force: true });

}


describe.only('Transfer Endpoints', () => {

   describe('Transfer', () => {
       beforeEach( async ()=>{
           try {
            await dbInit()

            await Wallet.bulkCreate(wallets)
           } catch (error) {
               console.log(error)
               
           }
  
   })

   afterEach(async()=>{

       try {
           await dbTeardown()

       } catch (error) {
           console.log(error)
       }


   })

        it('should return an error response if sender wallet not found', async () => {

            const { body: data, status } = await request.post(AppRoutes.transfers).send(Senarious["WalletNotFound"].data)

            expect(data).toEqual({ error: { message: 'Wallet not found' } })
            expect(status).toEqual(400)

        })



        it('should return an error response if recipients are more than limit', async () => {

            const { body: data, status } = await request.post(AppRoutes.transfers).send(Senarious["RecipientsLimit"].data)

            expect(data).toEqual({ error: { message: 'You can only transfer to 10 recipients at a time' } })
            expect(status).toEqual(400)


        })


        it('should return an error response if recipients are more than limit', async () => {

            const { body: data, status } = await request.post(AppRoutes.transfers).send(Senarious["RecipientsLimit"].data)

            expect(data).toEqual({ error: { message: 'You can only transfer to 10 recipients at a time' } })
            expect(status).toEqual(400)


        })


        it('should return an error response if recipients are more than limit', async () => {

            const { body: data, status } = await request.post(AppRoutes.transfers).send(Senarious["EnoughBalance"].data)

            const expectedResult = {
                data: [
                    { success: true, phoneNumber: '233508546702' },
                    { success: true, phoneNumber: '233508546703' }
                ]
            }
            expect(data).toEqual(expectedResult)
            expect(status).toEqual(200)


        })






    })
})