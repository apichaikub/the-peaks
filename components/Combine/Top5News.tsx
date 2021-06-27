import styled from "styled-components"
import { NewsItem } from "../../constants/news"
import Container from "../Base/Container"
import CardNews from "../Combine/CardNews"
import { TStyles } from '../Combine/CardNews'

const Wrapper = styled.div`
  margin-bottom: 30px;

  @media (min-width: 0px) and (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 540px 1fr 1fr;
  }
`

const Item = styled.div`
  @media (min-width: 0px) and (max-width: 991.98px) {
    margin-bottom: 30px;

    &:last-of-type {
      margin-bottom: 0;
    }

    &:nth-child(1) {
      height: 420px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      height: 252px;
    }

    &:nth-child(4),
    &:nth-child(5) {
      height: 138px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    &:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 3;
      height: 420px;
      margin-bottom: 30px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      height: 252px;
      margin-bottom: 30px;
    }

    &:nth-child(4),
    &:nth-child(5) {
      height: 138px;
    }

    &:nth-child(2),
    &:nth-child(4) {
      margin-right: 15px;
    }

    &:nth-child(3),
    &:nth-child(5) {
      margin-left: 15px;
    }
  }

  @media (min-width: 1200px) {
    &:nth-child(1) {
      grid-row-start: 1;
      grid-row-end: 5;
      max-width: 100%;
      height: 420px;
      margin-right: 30px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      height: 252px;
      margin-bottom: 30px;
    }

    &:nth-child(4),
    &:nth-child(5) {
      height: 138px;
    }

    &:nth-child(2),
    &:nth-child(4) {
      margin-right: 15px;
    }

    &:nth-child(3),
    &:nth-child(5) {
      margin-left: 15px;
    }
  }
`

const style1 : TStyles = {
  body: {
    height: 420,
  },
  footer: {
    height: 130,
    backgroundColor: 'rgba(9, 53, 123, 0.9)',
    borderColor: '#388E3C',
    title: {
      fontSize: 24,
      limitLines: 2,
      lineHeight: 31,
    },
    summary: {
      fontSize: 14,
      limitLines: 2,
      lineHeight: 20,
    },
  },
}
const style2 : TStyles = {
  body: {
    height: 252,
  },
  footer: {
    height: 100,
    backgroundColor: '#09357B',
    borderColor: '#D32F2F',
    title: {
      fontSize: 18,
      limitLines: 3,
      lineHeight: 27,
    },
    summary: {
      fontSize: 14,
      limitLines: 2,
      lineHeight: 20,
    },
  },
}
const style3 : TStyles = {
  body: {
    height: 250,
  },
  footer: {
    height: 138,
    backgroundColor: '#09357B',
    borderColor: '#2196F3',
    title: {
      fontSize: 18,
      limitLines: 4,
      lineHeight: 27,
    },
    summary: {
      fontSize: 14,
      limitLines: 2,
      lineHeight: 20,
    },
  },
}

type Props = {
  items: NewsItem[];
}

const Top5News = ({ items = [] } : Props) => {
  return (
    <Wrapper>
      {
        items.map((item, index) => {
          if(index === 0) {
            return (
              <CardNews
                id={item.id}
                cover={item.cover}
                title={item.title}
                summary={item.summary}
                styles={style1}
              />
            )
          } else if(index >= 1 && index <= 2) {
            return (
              <CardNews
                id={item.id}
                cover={item.cover}
                title={item.title}
                styles={style2}
              />
            )
          } else {
            return (
              <CardNews
                id={item.id}
                title={item.title}
                styles={style3}
              />
            )
          }
        }).map((item, index) => (
          <Item key={index}>{ item }</Item>
        ))
      }
    </Wrapper>
  )
}

export default Top5News