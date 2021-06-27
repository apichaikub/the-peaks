import styled from "styled-components"
import Container from "../Base/Container"
import InputSearch from "../Base/InputSearch"
import Logo from "../Base/Logo"

const Wrapper = styled.div`
  display: flex;
  background-color: #09357B;
  min-height: 126px;
`

const WrapperInner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`

const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
`

const WrapperRight = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

const TheHeader = () => {
  return (
    <Wrapper>
      <Container>
        <WrapperInner>
          <WrapperLeft>
            <Logo/>
          </WrapperLeft>
          <WrapperRight>
            <InputSearch/>
          </WrapperRight>
        </WrapperInner>
      </Container>
    </Wrapper>
  )
}

export default TheHeader