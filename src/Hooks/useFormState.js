import { useState } from "react"

const useFormFilds=(initialState={})=>{
    const [filds,setFilds]=useState(initialState)
    const handleChange=(e)=>{
        setFilds({...filds,[e.target.name]:e.target.value})
    }
    const resetFilds=()=> setFilds(initialState)
    return [filds,handleChange,resetFilds]
}
export default useFormFilds