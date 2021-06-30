import { useRouter } from "next/router"
import { SEARCH_TYPE } from "../constants/news"
const { ENTER, CLICK } = SEARCH_TYPE

const useSearch = () => {
  const router = useRouter()

  const handleSearchSubmit = (value: String, type: SEARCH_TYPE) => {
    if([ENTER, CLICK].includes(type)) {
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