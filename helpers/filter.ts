import { FILTER } from "../constants/news"

export const getFilterValue = (str: String) : FILTER => {
  if(str === FILTER.OLDEST) {
    return FILTER.OLDEST
  } else if(str === FILTER.MOST_POPULAR) {
    return FILTER.MOST_POPULAR
  } else {
    return FILTER.NEWEST
  }
}