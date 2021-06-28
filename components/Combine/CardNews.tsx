import Image from "next/image"
import styled, { css } from "styled-components"
import Card from "../Base/Card"
import CardBody from "../Base/CardBody"
import CardFooter from "../Base/CardFooter"
import Link from "../Base/Link"
import Summary from "../Base/Summary"
import { removeHTML } from "../../helpers/dom"

type BORDER_COLOR = '#388E3C' | '#D32F2F' | '#FFC107' | '#2196F3';

type TFontSize = {
  fontSize: Number;
}

type TCardCustomProps = {
  height: Number;
}

type TLimitLines = {
  limitLines: Number;
}

type TLineHeight = {
  lineHeight: Number;
}

interface TText extends TFontSize, TLimitLines, TLineHeight {}

export type TStyles = {
  body: {
    height: Number;
  };
  footer: {
    height: Number;
    backgroundColor: String;
    borderColor: BORDER_COLOR;
    title: TText;
    summary: TText;
  };
}

interface ITopicProps extends TText {}

interface ISummaryCustomProps extends TText {}

type TCardFooterCustomProps = {
  position: String;
  height: Number;
  borderColor: BORDER_COLOR;
  backgroundColor: String;
}

type TCardNewsProps = {
  id: String;
  cover?: String;
  title: String;
  summary?: String;
  styles: TStyles;
}

const CSSlimitLines = css<TLimitLines>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.limitLines.toString()};
  -webkit-box-orient: vertical;
`

const CSSText = css<TText>`
  ${CSSlimitLines};
  font-size: ${props => `${props.fontSize.toString()}px`};
  line-height: ${props => `${props.lineHeight.toString()}px`};
`

const CardCustom = styled(Card)<TCardCustomProps>`
  position: relative;
  width: 100%;
  height: ${props => `${props.height.toString()}px`};
`

const CardBodyCustom = styled(CardBody)`
  justify-content: center;
  overflow: hidden;
`

const CardFooterCustom = styled(CardFooter)<TCardFooterCustomProps>`
  flex-direction: column;
  width: 100%;
  bottom: 0;
  padding: 10px;
  position: ${props => props.position.toString()};
  min-height: ${props => `${props.height.toString()}px`};
  max-height: ${props => `${props.height.toString()}px`};
  background-color: ${(props) => props.backgroundColor.toString()};
  border-bottom: 3px solid ${(props) => props.borderColor.toString()};
`

const Topic = styled.div<ITopicProps>`
  font-weight: 700;
  color: white;
  ${CSSText}
`

const SummaryCustom = styled(Summary)<ISummaryCustomProps>`
  font-weight: 400;
  color: white;
  ${CSSText}
`

const CardNews = ({ id, cover, title, summary, styles }: TCardNewsProps) => {
  const cardProps = {
    height: styles.body.height,
  }
  const footerProps = {
    position: cover ? 'absolute' : 'relative',
    backgroundColor: styles.footer.backgroundColor,
    borderColor: styles.footer.borderColor,
    height: styles.footer.height,
  }
  const topicProps = {
    fontSize: styles.footer.title.fontSize,
    limitLines: styles.footer.title.limitLines,
    lineHeight: styles.footer.title.lineHeight,
  }
  const summaryProps = {
    fontSize: styles.footer.summary.fontSize,
    limitLines: styles.footer.summary.limitLines,
    lineHeight: styles.footer.summary.lineHeight,
  }
  const link = `/content/${id}`
  return (
    <CardCustom { ...cardProps }>
      { cover &&
      <CardBodyCustom>
        <Link href={link}>
          {/* TODO: handle not found and not provided an image */}
          <Image src={cover.toString()} alt="Image" layout="fill" objectFit="cover" />
        </Link>
      </CardBodyCustom> }
      <CardFooterCustom { ...footerProps }>
        <Link href={link}>
          <Topic { ...topicProps }>
            { title }
          </Topic>
        </Link>
        { summary &&
        <SummaryCustom { ...summaryProps }>
          <Link href={link}>
            { removeHTML(summary ? summary.toString() : '') }
          </Link>
        </SummaryCustom> }
      </CardFooterCustom>
    </CardCustom>
  )
}

export default CardNews