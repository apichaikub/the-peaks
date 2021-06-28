import { useRouter } from "next/router"
import { SEARCH_TYPE } from "../constants/news"

const useSearch = () => {
  const router = useRouter()

  const handleSearchSubmit = (value: String, type: SEARCH_TYPE) => {
    if(type === SEARCH_TYPE.ENTER) {
      router.push({
        pathname: '/search',
        query: {
          q: value.toString(),
        },
      })
    }
  }

  return {
    handleSearchSubmit
  }
}

export default useSearch