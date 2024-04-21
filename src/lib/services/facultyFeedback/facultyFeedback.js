import { api } from "@/lib/middleware/apiInceptors"
import { FACULTY_URL } from ".."

export const postFaculty =async (payload) =>{
    let res = await api.post(FACULTY_URL, payload)
    return res
}