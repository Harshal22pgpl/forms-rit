import { api } from '@/lib/middleware/apiInceptors'
import { VERIFYPAYMENTS_URL } from ".."

export const postVerifyPayment =async (payload) =>{
    let res = await api.post(VERIFYPAYMENTS_URL, payload)
    return res
}