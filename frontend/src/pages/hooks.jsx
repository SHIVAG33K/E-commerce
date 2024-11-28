import {useQuery,useMutation,useQueryClient} from '@tanstack/react-query';
import axios from "axios"

export function fetchData (url) {

    const dataa = async( ) => {
        const data = await axios.get(url)
    }

    const { isPending, isError, data, error } =  useQuery(['data'],dataa)

    if (isPending) {
        return <span>Loading...</span>
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>
      }
    

    return data
}


