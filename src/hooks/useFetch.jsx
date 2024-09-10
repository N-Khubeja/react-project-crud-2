import { useCallback, useEffect, useState } from "react"

const useFetch = ({url,method}) => {
    const [error,seterror] = useState(false)
    const [loading,setloading] = useState(false)
    const [response,setresponse] = useState(null)

    const onFetch = useCallback(() => {
        setloading(true)
        fetch(url,{
            method,
            headers:{
                 "Content-Type": "application/json",
                 "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        })
        .then((res) => {
            if(!res.ok) throw new Error('...error')
            return res.json()
        })
        .then((data) => {
            setresponse(data)
            console.log(data)
        })
        .catch((err) => seterror(err))
        .finally(() => setloading(false))
        
        return() => {
            seterror(false)
            setloading(false)
            setresponse(null)
        }
    },[url,method])

    useEffect(() => {
        onFetch()
    },[onFetch])

    return {error,loading,response,resend:onFetch}
}

export default useFetch