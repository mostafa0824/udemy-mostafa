import { useState } from "react"

const useFormFilds=(initialState={})=>{
    const [filds,setFilds]=useState(initialState)
    const handleChange=(e)=>{
        setFilds({...filds,[e.target.name]:e.target.value})
    }
    return [filds,handleChange]
}
export default useFormFilds