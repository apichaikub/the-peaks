import { useState } from "react"
import Dropdown from "../Base/Dropdown"
import { TValue as TValueDropdown } from '../Base/Dropdown'

const DropdownFilterNews = () => {
  const [selected, setSelected] = useState<TValueDropdown>(null)
  const options = [
    {
      text: "Newest first",
      value: 1,
    },
    {
      text: "Oldest first",
      value: 2,
    },
    {
      text: "Most popular",
      value: 3,
    },
  ]
  const handleChange = (value: TValueDropdown) => {
    setSelected(value)
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