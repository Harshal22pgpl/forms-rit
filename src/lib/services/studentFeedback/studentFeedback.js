import { api } from '@/lib/middleware/apiInceptors'
import { STUDENT_URL } from ".."

export const postStudent =async (payload) =>{
    let res = await api.post(STUDENT_URL, payload)
    return res
}