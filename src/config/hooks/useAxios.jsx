import axios from 'axios'
import { useEffect, useState } from 'react'

axios.defaults.baseURL = 'https://opentdb.com/'

const useAxios = ({url}) => {
    const [responseRecieved, setResponseRecieved] = useState(null)
    const [errorRecieved, setErrorRecieved] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = () => {
            axios.get(url)
                .then(res => setResponseRecieved(res.data))
                .catch(err => setErrorRecieved(err))
                .finally(() => setLoading(false))
            }
            getData()
    }, [url])

    return { responseRecieved, errorRecieved, loading }
}

export default useAxios