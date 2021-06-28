import { useState } from "react"
import { FILTER } from "../../constants/news"
import Dropdown from "../Base/Dropdown"

const options = [
  {
    text: "Newest first",
    value: FILTER.NEWEST,
  },
  {
    text: "Oldest first",
    value: FILTER.OLDEST,
  },
  {
    text: "Most popular",
    value: FILTER.MOST_POPULAR,
  },
]

type Props = {
  value: FILTER;
  onChange?(value: FILTER): void;
}

const DropdownFilterNews = ({ value, onChange } : Props) => {
  const [selected, setSelected] = useState<FILTER>(value || FILTER.NEWEST)

  const handleChange = (value: FILTER) => {
    setSelected(value)
    if(onChange) {
      onChange(value)
    }
  }
  
  return (
    <Dropdown
      value={selected}
      options={options}
      onChange={handleChange}
    />
  )
}

export default DropdownFilterNews