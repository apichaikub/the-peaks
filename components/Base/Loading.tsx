import styled, { keyframes } from "styled-components"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 230px 0;
`

const WrapperIcon = styled.div`
  width: 90px;
  height: 90px;
  animation: ${spin} 1.5s linear infinite;
`

const Loading = () => {
  return (
    <Wrapper>
      <WrapperIcon>
        <svg viewBox="0 0 100 100">
            <path d="M30,85
                     A40,40 0 1,1 70,85"
                  fill="none"
                  stroke="#09357B"
                  strokeWidth="6" />
        </svg>
      </WrapperIcon>
    </Wrapper>
  )
}

export default Loading