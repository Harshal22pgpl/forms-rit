import { api } from "@/lib/middleware/apiInceptors"
import { GRIEVENCE_URL } from ".."

export const postGrievence =async (payload) =>{
    let res = await api.post(GRIEVENCE_URL, payload)
    return res
}