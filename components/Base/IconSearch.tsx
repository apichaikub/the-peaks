import styled from "styled-components"
import Image from 'next/image'

const WrapperIconSearch = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 90px;
  background-color: #2153A3;
  border-bottom: 2px solid white;
  cursor: pointer;
`

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`

type TIconSearchProps = {
  onClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

const IconSearch = ({ onClick }: TIconSearchProps) => {
  return (
    <WrapperIconSearch
      onClick={(e) => onClick && onClick(e)}
    >
      <Icon>
        <Image src="/images/search-icon@2x.svg" alt="Search Icon" width={17} height={17} />
      </Icon>
    </WrapperIconSearch>
  )
}

export default IconSearch