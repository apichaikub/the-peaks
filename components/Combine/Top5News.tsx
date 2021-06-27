import styled from "styled-components"
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

const Top5News = () => {
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
  return (
    <Wrapper>
      <Item>
        <CardNews
          cover="https://s3-alpha-sig.figma.com/img/9a22/d46b/12d7b042295ca0c1d66af095988e53c0?Expires=1625443200&Signature=J6T3geID7kr6nCpEIkS~4lw9~R5QTYp4or~VO~GfOub~3ThtvfbUQVzFdioRZsI-FjBDR7-vi7aRW6wCSaawK9C35CVL0nsZWQvlplyITTKK8NDGcR7UpFSfkdIrV1oLWldrpCz9bxmbH8UhHUxvr-RP4V7ghvJkXErC0E~FXzF-id8Wg1sIIiHMQRnmJ6OPzMy0sYbnHAulngK2W2iUgbO~F8doSU78Mi9EkPEdg5gVcxfggR2LCft1FTSYKwLmk9y4pa2GjNMx711APs7M6kFlpFAT9YdpCwEKCboDZFRkGlTa5zlU3ol0CBrbZjYLwAz6mrz1wLoujWrNk54BBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Global report: WHO warns of accelerating Covid-19 infections in Africa"
          summary="Continent is seeing more cases spread to the provinces; Trump supporters can’t sue over catching Covid-19 at rallies; Brazil confirms 30,000 new cases"
          styles={style1}
        />
      </Item>
      <Item>
        <CardNews
          cover="https://s3-alpha-sig.figma.com/img/6d9f/ff62/6bc4bf0b4c0c7701199ccde57704427e?Expires=1625443200&Signature=hiLN7f5uTbsk0jch1YwxSfBoqOsz2qmZrgupZHMJWm-tUOedUXAMMvf2zm5hQFRIreiEX0fesUu2yrO~AiykdAGUxfypWBgZtn3RSORYTKckcmmlJm6pWXc5fg5hKP9ykmnKonA61biNaS-iSweOPN8hIky3uALs2iWjvhuybl722g5caw93bOXTWZ09yf154o7H1JsDM~UTIvVEaL1HZRZogDLpSX5-80sZiunf~HTqMj2WS5q8j8yIkU~iGmRNMDgeI9ThA7zoN1rRFqRCsTkDLFNnUmJLHIr4RL-0xtRULxKgpcJoO1DxKyvF8IQF5MjRYkXLjJkN88n7IcziEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="White House 'no regrets' about tear-gassing peaceful protesters"
          styles={style2}
        />
      </Item>
      <Item>
        <CardNews
          cover="https://s3-alpha-sig.figma.com/img/5daf/824a/274401e8d2c7c109b5975affae21972e?Expires=1625443200&Signature=M7GewnPdyRvVJFWDaToH~E1KW6zrSiw7~VShu0kmIvTtXmTmRCgmbrITwGkFL7DEnJ9i8v0VNMp7u7SV7qvZaiJouK772La8eR0Owr2vldUtDdZJzg9mhcpenL~AD8WhlFOh9jXaea~0u~5-WB19VdJMjiVeCGQCnL3AMPHIoFd41vJEun7HZPv97BYUCy0ttROK9JXF-SY8osjnH8SW8OkXZsDcZeL0ujf~on4PDPRsvQeQYvT5su9PD5DWVFHFT4MB2GiLe48kI8KR3RuDhzGSfNgyB4ui8NYbtCfYbNq8iedjdIfWL2j5pMsIHahlstWpf3OPvqBtjpGWAguAMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Sadiq Khan orders review of all London statues for slavery links"
          styles={style2}
        />
      </Item>
      <Item>
        <CardNews
          title="Spike Lee: 'Race relations today are a direct response to having a black president'"
          styles={style3}
        />
      </Item>
      <Item>
        <CardNews
          title="Spanish archaeologist sentenced for faking Basque finds"
          styles={style3}
        />
      </Item>
    </Wrapper>
  )
}

export default Top5News