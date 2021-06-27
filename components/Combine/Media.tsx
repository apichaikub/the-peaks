import Image from "next/image";
import styled from "styled-components";
import HelperText from "../Base/HelperText";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const WrapperImage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`

const Caption = styled(HelperText)`
  margin-top: 10px;
  opacity: .5;
`

type TMediaProps = {
  src: String;
  caption: String;
}

const Media = ({ src, caption }: TMediaProps) => {
  return (
    <Wrapper>
      <WrapperImage>
        <Image src={src.toString()} alt={caption.toString()} layout="fill" objectFit="cover" />
      </WrapperImage>
      <Caption>{ caption }</Caption>
    </Wrapper>
  )
}

export default Media