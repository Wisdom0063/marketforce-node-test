import joi from "joi"

const recipientsSchema = joi.object({
    phoneNumber: joi.string().required(),
    amount: joi.number().min(0).required()
})

export const transferBulkSchema = joi.object({
    sender: joi.object({
        phoneNumber: joi.string().required()
    }),
    recipients: joi.array().items(recipientsSchema)
})