import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"
import { SEARCH_TYPE } from "../../constants/news"
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
  min-width: 300px;
  max-width: 300px;
  height: 44px;
  overflow: hidden;

  ${InputCustom} {
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    animation: ${props => props.active ? slideOut : slideIn} .5s ease;
    transition: visibility .5s ease;
  }
`

type Props = {
  onSearchSubmit?(value: String, type: SEARCH_TYPE): void;
}

const InputSearch = ({ onSearchSubmit } : Props) => {
  const router = useRouter()
  const { query } = router

  const inputRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState<Boolean>(false)
  const [input, setInput] = useState<String>(query.q ? query.q.toString() : '')
  const [toggle, setToggle] = useState<Boolean>(false)
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsActive(toggle ? true : false)
  }, [toggle])

  useEffect(() => {
    if(query.q) {
      setToggle(true)
      setIsActive(true)
      setInput(query.q.toString())
    } else {
      setToggle(false)
      setIsActive(false)
    }
  }, [query.q])

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

  const onClickIconEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(onSearchSubmit && input.trim().length) {
      onSearchSubmit(input, SEARCH_TYPE.CLICK)
    } else if(inputRef.current) {
      inputRef.current.focus()
    }
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)

    if(onSearchSubmit) {
      if(timer) {
        clearInterval(timer)
      }
      setTimer(setTimeout(() => {
        onSearchSubmit(e.target.value, SEARCH_TYPE.AUTO)
      }, 1500))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code === 'Enter' && onSearchSubmit && input) {
      onSearchSubmit(input, SEARCH_TYPE.ENTER)
    }
  }

  return (
    <Wrapper
      active={isActive}
    >
      <WrapperInner>
        <InputCustom
          ref={inputRef}
          value={input.toString()}
          placeholder="Search all news"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        { !toggle
          ? <IconSearch src="/images/search-icon@2x.svg" width={17} height={17} onClick={onClickIconSearch}/>
          : <IconSearch src="/images/enter.svg" width={16} height={16} onClick={onClickIconEnter}/> }
      </WrapperInner>
    </Wrapper>
  )
}

export default InputSearch