import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} -weeding-photography`
    },[title])
}
export default useTitle