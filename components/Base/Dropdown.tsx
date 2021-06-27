import { useState } from "react";
import styled from "styled-components";

export type TValue = String | Number | null

export type TOptions = {
  text: String;
  value: TValue;
}

type TWrapperProps = {
  active: Boolean;
}

type TDropdownProps = {
  placeholder?: String;
  value: TValue;
  options: TOptions[];
  onChange?(value: TValue): void;
}

const WrapperSelected = styled.div``

const WrapperOptions = styled.div`
  position: absolute;
  width: 100%;
  top: calc(100% - 1px);
  left: 0;
  box-sizing: border-box;
`

const Item = styled.li`
  position: relative;
  padding: 11px 8px;
  cursor: pointer;
  user-select: none;
  list-style: none;
  background-color: white;
  &:hover {
    background-color: #eee;
  }
`

const ItemSelected = styled(Item)`
  &:hover {
    background-color: white;
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
  }
`

const List = styled.ul`
  position: relative;
  width: 255px;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: white;
  border: 1px solid transparent;
`

const Placeholder = styled.span`
  color: gray;
`

const borderBlack = '1px solid rgba(0, 0, 0, 0.42)'
const borderWhite = '1px solid white'

const Wrapper = styled.div.attrs((props : TWrapperProps) => ({
  active: props.active || false,
}))`
  display: flex;
  position: relative;
  z-index: 1;
  ${ItemSelected}:after {
    transform: ${props => props.active && 'rotate(180deg)'};
  }
  ${WrapperSelected} {
    border-bottom: ${props => props.active ? borderWhite : borderBlack};
    border-top: ${props => props.active ? borderBlack : borderWhite};
    border-right: ${props => props.active ? borderBlack : borderWhite};
    border-left: ${props => props.active ? borderBlack : borderWhite};
  }
  ${WrapperOptions} {
    border-right: ${props => props.active ? borderBlack : borderWhite};
    border-left: ${props => props.active ? borderBlack : borderWhite};
    border-bottom: ${props => props.active ? borderBlack : borderWhite};
  }
`

const Dropdown = ({ placeholder, value, options, onChange }: TDropdownProps) => {
  const [toggle, setToggle] = useState<Boolean>(false)
  const selected : String | null = (() => {
    const item = options.find((item) => item.value === value) || null
    return item
      ? item.text
      : null
  })()
  const onSelectedItem = (value: TValue) => {
    if(onChange) {
      onChange(value)
    }
    setToggle(!toggle)
  }
  return (
    <Wrapper
      active={toggle}
    >
      <WrapperSelected>
        <List>
          <ItemSelected
            onClick={(e) => setToggle(!toggle)}
          >
            { selected ? selected :
              <Placeholder>
                { placeholder || "Select an item" }
              </Placeholder>
            }
          </ItemSelected>
        </List>
      </WrapperSelected>
      { toggle &&
        <WrapperOptions>
          <List>
            { options.map((item, index) => {
                return (
                  <Item
                    key={index}
                    onClick={(e) => onSelectedItem(item.value)}
                  >
                    { item.text }
                  </Item>
                )
              }) }
          </List>
        </WrapperOptions>
      }
    </Wrapper>
  )
}

export default Dropdown