import Image from "next/image";
import styled, { keyframes } from "styled-components";

type Color = string

const slideIn = keyframes`
  from {
    top: -32px;
  }
  to {
    top: 0;
  }
`

const Wrapper = styled.div<{ bgColor: Color }>`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 32px;
  background-color: ${props => props.bgColor};
  visibility: visible;
  animation: ${slideIn} .5s ease;
`

const Text = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  color: white;
`

const Icon = styled.span`
  position: relative;
  top: 1px;
  margin-right: 10px;
`

type Props = {
  bgColor: Color;
  text: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
}

const Toast = ({ text, iconSrc, iconWidth, iconHeight, bgColor } : Props) => {
  return (
    <Wrapper bgColor={bgColor}>
        <Icon>
          <Image src={iconSrc} alt="Toast Icon" width={iconWidth} height={iconHeight} />
        </Icon>
        <Text>
          { text }
        </Text>
    </Wrapper>
  )
}

export default Toast