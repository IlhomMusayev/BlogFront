import { useEffect, useState} from 'react'  
 

const useFetch = (url) => {
    const [data, setBlog] = useState(null)
    const [isPending, setIsPanding] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {
          fetch(url)
          .then(res => {
            if(!res.ok){
              throw Error('Not fetch the date for than resource')           
            }
            return res.json()
          })
          .then(data => {
            setBlog(data)
            setIsPanding(false)
            setError(null)
          })
          .catch(err => {
              setIsPanding(false)
            setError(err.message);
          })    
        }, 1000);
      },[url])

      return { data, isPending, error }
}

export default useFetch