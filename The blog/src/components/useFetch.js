import { useEffect, useState } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController()//to prevent an error
        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not reach the fetch')
                    }
                    return res = res.json();
                })
                .then(data=>{
                    setData(data)
                    setPending(false)
                    setError(null)
                })
                .catch(err => {
                    if(err.name !== 'AbortError')
                    {
                    setError(err.message)
                    setPending(false)
                    }
                })
        },500)
        return () => abortCont.abort()
    }, [url])
    return {data, pending, error}
}

export default useFetch;