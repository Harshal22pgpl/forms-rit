import { api } from "@/lib/middleware/apiInceptors"
import { ANTI_RAGGING } from ".."

export const postAntiRagging =async (payload) =>{
    let res = await api.post (ANTI_RAGGING, payload)
    return res
}