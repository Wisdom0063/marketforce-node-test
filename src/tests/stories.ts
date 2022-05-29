
export const wallets = [
    {"accountNumber":"9522472304453404", "phoneNumber":"233508546701", balance:1000},
    {"accountNumber":"3903637496898622", "phoneNumber":"233508546702", balance:0},
    {"accountNumber":"7976501968436394", "phoneNumber":"233508546703", balance:0},
    {"accountNumber":"5626856361760157", "phoneNumber":"233508546704", balance:0},
    {"accountNumber":"2786780801633821", "phoneNumber":"233508546705", balance:0}
]

export const Senarious = {

     "WalletNotFound":{
        expectedResult : "Wallet not found",
        data:{
            sender:{"accountNumber":"9522472305453404", "phoneNumber":"233508646701"},
            recipients:[
                {"accountNumber":"3903637496898622", "phoneNumber":"233508546702", amount: 50},
                   {"accountNumber":"7976501968436394", "phoneNumber":"233508546703", amount: 30}
            ]
        }

     },

     "EnoughBalance":{
        expectedResult : [{
            success:true,
            phoneNumber:"233508546702"
        },
    
        {
            success:true,
            phoneNumber:"233508546703"
        }],
        data:{
            sender:{"accountNumber":"9522472304453404", "phoneNumber":"233508546701"},
            recipients:[
                {"accountNumber":"3903637496898622", "phoneNumber":"233508546702", amount: 50},
                   {"accountNumber":"7976501968436394", "phoneNumber":"233508546703", amount: 30}
            ]
        }

     },

     "SomeDestinationWalletNotFound":{
        expectedResult : [{
            success:true,
            phoneNumber:"233508546702"
        },
    
        {
            success:false,
            reason: "Wallet not found for 233508146703",
            phoneNumber:"233508146703"
        }],
        data:{
            sender:{"accountNumber":"9522472304453404", "phoneNumber":"233508546701"},
            recipients:[
                {"accountNumber":"3903637496898622", "phoneNumber":"233508546702", amount: 50},
                   {"accountNumber":"7976501963436394", "phoneNumber":"233508146703", amount: 30}
            ]
        }

     },

     "InsufficientBalance":{
        expectedResult : "Balance not enough for this transfer",
        data:{
            sender:{"accountNumber":"9522472304453404", "phoneNumber":"233508546701"},
            recipients:[
                {"accountNumber":"3903637496898622", "phoneNumber":"233508546702", amount: 1001},
                   {"accountNumber":"7976501968436394", "phoneNumber":"233508546703", amount: 1005}
            ]
        }

     },

     "SameWallet":{
        expectedResult : [{
            success:true,
            phoneNumber:"233508546702"
        },
    
        {
            success:false,
            reason: "Both paties of the transaction are the same",
            phoneNumber:"233508546701"
        }],
        data:{
            sender:{"accountNumber":"9522472304453404", "phoneNumber":"233508546701"},
            recipients:[
                {"accountNumber":"3903637496898622", "phoneNumber":"233508546702", amount: 50},
                   {"accountNumber":"9522472304453404", "phoneNumber":"233508546701", amount: 30}
            ]
        }

     },

     "RecipientsLimit":{
        expectedResult : "You can only transfer to 10 recipients at a time",
        data:{
            sender:{"accountNumber":"9522472304453404", "phoneNumber":"233508546701"},
            recipients:[
                {"accountNumber":"3903637496898622", "phoneNumber":"233508546702", amount: 50},
                   {"accountNumber":"9522472304453404", "phoneNumber":"233508546701", amount: 30},
                   {"accountNumber":"3903637496898622", "phoneNumber":"233508546702", amount: 50},
                   {"accountNumber":"9522472304453404", "phoneNumber":"233508546701", amount: 30},
                   {"accountNumber":"3903637496898622", "phoneNumber":"233508546702", amount: 50},
                   {"accountNumber":"9522472304453404", "phoneNumber":"233508546701", amount: 30},
                   {"accountNumber":"3903637496898622", "phoneNumber":"233508546702", amount: 50},
                   {"accountNumber":"9522472304453404", "phoneNumber":"233508546701", amount: 30},
                   {"accountNumber":"3903637496898622", "phoneNumber":"233508546702", amount: 50},
                   {"accountNumber":"9522472304453404", "phoneNumber":"233508546701", amount: 30},
                   {"accountNumber":"3903637496898622", "phoneNumber":"233508546702", amount: 50},
                   {"accountNumber":"9522472304453404", "phoneNumber":"233508546701", amount: 30}
            ]
        }

     }

}


