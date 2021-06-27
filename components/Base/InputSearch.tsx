import { useRef, useState } from "react"
import styled, { keyframes } from "styled-components"
import IconSearch from "./IconSearch"
import Input from "./Input"

type TWrapperProps = {
  active: Boolean;
}

const slideIn = keyframes`
  from {
    left: 0;
  }
  to {
    left: 100%;
  }
`

const slideOut = keyframes`
  from {
    left: 100%;
  }
  to {
    left: 0;
  }
`

const InputCustom = styled(Input)`
  position: relative;
  border-bottom: 2px solid white;
`

const WrapperInner = styled.div`
  display: flex;
`

const Wrapper = styled.div.attrs((props : TWrapperProps) => ({
  active: props.active || false,
}))`
  display: flex;
  justify-content: flex-end;
  max-width: 300px;
  height: 44px;
  overflow: hidden;

  ${InputCustom} {
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    animation: ${props => props.active ? slideOut : slideIn} .5s ease;
    transition: visibility .5s ease;
  }
`

const InputSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [toggle, setToggle] = useState<Boolean>(false)
  const onClickIconSearch = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const newToggle = !toggle
    setToggle(newToggle)
    if(newToggle) {
      setTimeout(() => {
        if(inputRef.current) {
          inputRef.current.focus()
        }
      }, 500)
    }
  }
  return (
    <Wrapper
      active={toggle ? true : false}
    >
      <WrapperInner>
        <InputCustom ref={inputRef} placeholder="Search all news"/>
        <IconSearch
          onClick={onClickIconSearch}
        />
      </WrapperInner>
    </Wrapper>
  )
}

export default InputSearch