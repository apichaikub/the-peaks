import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFriendlyDate } from "../../helpers/date";
import Detail from "../Base/Detail";
import H1 from "../Base/H1";
import HelperText from "../Base/HelperText";
import Line from "../Base/Line";
import Summary from "../Base/Summary";
import ButtonIconBookmark from "./ButtonIconBookmark";
import Media from "./Media";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 445px;
  grid-row-gap: 10px;
  grid-column-gap: 30px;
  padding-top: 60px;

  @media (min-width: 0px) and (max-width: 991.98px) {
    grid-template-columns: 1fr;
    margin-top: 15px;
  }  
`

const Box = styled.div`
  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  &:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  @media (min-width: 0px) and (max-width: 991.98px) {
    &:nth-child(3) {
      grid-row-start: 1;
      margin-bottom: 10px;
    }
  }
`

const Topic = styled(H1)`
  font-size: 34px;
`

const SummaryCustom = styled(Summary)`
  font-family: Georgia;
  font-size: 20px;
  line-height: 26px;
`

type Media = {
  image: {
    src: String;
    caption: String;
  }
}

export interface IContentNewsProps extends Media {
  isSaved: Boolean;
  createdAt: String;
  topic: String;
  summary: String;
  detail: String;
  onClickButtonBookmark?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const ContentNews = ({ isSaved, createdAt, topic, summary, detail, image, onClickButtonBookmark } : IContentNewsProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])

  const buttonText = isSaved
    ? 'REMOVE BOOKMARK'
    : 'ADD BOOKMARK'
    
  const friendlyDate = getFriendlyDate(createdAt.toString())
  return (
    <Wrapper>
      <Box>
        { mounted &&
        <ButtonIconBookmark
          active={isSaved}
          text={buttonText}
          onClick={onClickButtonBookmark}
        /> }
        <HelperText
          transform="uppercase"
          style={{ display: 'flex', margin: '18px 0 10px 0' }}
        >
          { friendlyDate }
        </HelperText>
        <Topic>{ topic }</Topic>
        { mounted &&
        <SummaryCustom dangerouslySetInnerHTML={{ __html: summary ? summary.toString() : '' }} /> }
        <Line />
      </Box>
      { mounted &&
      <Box>
        <Detail dangerouslySetInnerHTML={{ __html: detail ? detail.toString() : '' }}/>
      </Box> }
      <Box>
        <Media
          src={image.src}
          caption={image.caption}
        />
      </Box>
    </Wrapper>
  )
}

export default ContentNews