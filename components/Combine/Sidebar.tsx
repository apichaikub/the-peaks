import styled from "styled-components"
import Container from "../Base/Container"

type Padding = String | null

const Wrapper = styled.div<{ padding: Padding; }>`
  padding: ${props => props.padding ? props.padding.toString() : '30px 0'};
`

const WrapperInner = styled.div`
  display: flex;
  justify-content: space-between;
`

type SidebarProps = {
  children: JSX.Element | JSX.Element[];
  padding?: Padding;
}

const Sidebar = ({ children, padding } : SidebarProps) => {
  return (
    <Wrapper padding={padding || null}>
      <Container>
        <WrapperInner>
          { children }
        </WrapperInner>
      </Container>
    </Wrapper>
  )
}

export default Sidebar