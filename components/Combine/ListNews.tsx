import styled from "styled-components"
import Container from "../Base/Container"
import CardNews from "../Combine/CardNews"
import { TStyles } from '../Combine/CardNews'

const Wrapper = styled.div`
  margin-left: -15px;
  margin-right: -15px;

  @media (min-width: 0px) and (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Item = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
`

const ListNews = () => {
  const style : TStyles = {
    body: {
      height: 345,
    },
    footer: {
      height: 130,
      backgroundColor: 'rgba(9, 53, 123, 0.9)',
      borderColor: '#388E3C',
      title: {
        fontSize: 20,
        limitLines: 2,
        lineHeight: 29,
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
          cover="https://s3-alpha-sig.figma.com/img/4b3c/e346/7205343d627a66b35c43d45ef30426fe?Expires=1625443200&Signature=YjGwTViyXzcJwuhTus8TDCkQfBLaOcHPI9nk4SFGIbA-IqyFiqzQV9GoUXPXi2jdAInHo7LkHgDAdatVRBTpXLcC6BYyexIOUUIAzkjpU7CLIuoygaO~vS9e0bSzHqRKnr3RIFfTKeuZto17FdSCssk7dsRg3NKMBwduHksOG19qrnUTUr9TyvYcAA5SwyFEvN7IVFAehOdXNateH77xPTzMMp~rsafJQXJihbpl-BKuqZlB9~FJhyqBXtsJII5Fty9Vjj~pNF6TXLKDfeSwWeUkRNzEKkftUur178-PJTXC5-Av3nkNDSDYDOjZjtfP3Q6BjKaVpCj5YlhwN~37fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Coronavirus live news: markets fall over fears of long US"
          summary="Republican senators on Capitol Hill have expressed their dismay at a Donald Trump."
          styles={style}
        />
      </Item>
      <Item>
        <CardNews
          cover="https://s3-alpha-sig.figma.com/img/4b3c/e346/7205343d627a66b35c43d45ef30426fe?Expires=1625443200&Signature=YjGwTViyXzcJwuhTus8TDCkQfBLaOcHPI9nk4SFGIbA-IqyFiqzQV9GoUXPXi2jdAInHo7LkHgDAdatVRBTpXLcC6BYyexIOUUIAzkjpU7CLIuoygaO~vS9e0bSzHqRKnr3RIFfTKeuZto17FdSCssk7dsRg3NKMBwduHksOG19qrnUTUr9TyvYcAA5SwyFEvN7IVFAehOdXNateH77xPTzMMp~rsafJQXJihbpl-BKuqZlB9~FJhyqBXtsJII5Fty9Vjj~pNF6TXLKDfeSwWeUkRNzEKkftUur178-PJTXC5-Av3nkNDSDYDOjZjtfP3Q6BjKaVpCj5YlhwN~37fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Coronavirus live news: markets fall over fears of long US"
          summary="Republican senators on Capitol Hill have expressed their dismay at a Donald Trump."
          styles={style}
        />
      </Item>
      <Item>
        <CardNews
          cover="https://s3-alpha-sig.figma.com/img/4b3c/e346/7205343d627a66b35c43d45ef30426fe?Expires=1625443200&Signature=YjGwTViyXzcJwuhTus8TDCkQfBLaOcHPI9nk4SFGIbA-IqyFiqzQV9GoUXPXi2jdAInHo7LkHgDAdatVRBTpXLcC6BYyexIOUUIAzkjpU7CLIuoygaO~vS9e0bSzHqRKnr3RIFfTKeuZto17FdSCssk7dsRg3NKMBwduHksOG19qrnUTUr9TyvYcAA5SwyFEvN7IVFAehOdXNateH77xPTzMMp~rsafJQXJihbpl-BKuqZlB9~FJhyqBXtsJII5Fty9Vjj~pNF6TXLKDfeSwWeUkRNzEKkftUur178-PJTXC5-Av3nkNDSDYDOjZjtfP3Q6BjKaVpCj5YlhwN~37fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Coronavirus live news: markets fall over fears of long US"
          summary="Republican senators on Capitol Hill have expressed their dismay at a Donald Trump."
          styles={style}
        />
      </Item>
      <Item>
        <CardNews
          cover="https://s3-alpha-sig.figma.com/img/4b3c/e346/7205343d627a66b35c43d45ef30426fe?Expires=1625443200&Signature=YjGwTViyXzcJwuhTus8TDCkQfBLaOcHPI9nk4SFGIbA-IqyFiqzQV9GoUXPXi2jdAInHo7LkHgDAdatVRBTpXLcC6BYyexIOUUIAzkjpU7CLIuoygaO~vS9e0bSzHqRKnr3RIFfTKeuZto17FdSCssk7dsRg3NKMBwduHksOG19qrnUTUr9TyvYcAA5SwyFEvN7IVFAehOdXNateH77xPTzMMp~rsafJQXJihbpl-BKuqZlB9~FJhyqBXtsJII5Fty9Vjj~pNF6TXLKDfeSwWeUkRNzEKkftUur178-PJTXC5-Av3nkNDSDYDOjZjtfP3Q6BjKaVpCj5YlhwN~37fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Coronavirus live news: markets fall over fears of long US"
          summary="Republican senators on Capitol Hill have expressed their dismay at a Donald Trump."
          styles={style}
        />
      </Item>
      <Item>
        <CardNews
          cover="https://s3-alpha-sig.figma.com/img/4b3c/e346/7205343d627a66b35c43d45ef30426fe?Expires=1625443200&Signature=YjGwTViyXzcJwuhTus8TDCkQfBLaOcHPI9nk4SFGIbA-IqyFiqzQV9GoUXPXi2jdAInHo7LkHgDAdatVRBTpXLcC6BYyexIOUUIAzkjpU7CLIuoygaO~vS9e0bSzHqRKnr3RIFfTKeuZto17FdSCssk7dsRg3NKMBwduHksOG19qrnUTUr9TyvYcAA5SwyFEvN7IVFAehOdXNateH77xPTzMMp~rsafJQXJihbpl-BKuqZlB9~FJhyqBXtsJII5Fty9Vjj~pNF6TXLKDfeSwWeUkRNzEKkftUur178-PJTXC5-Av3nkNDSDYDOjZjtfP3Q6BjKaVpCj5YlhwN~37fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Coronavirus live news: markets fall over fears of long US"
          summary="Republican senators on Capitol Hill have expressed their dismay at a Donald Trump."
          styles={style}
        />
      </Item>
      <Item>
        <CardNews
          cover="https://s3-alpha-sig.figma.com/img/4b3c/e346/7205343d627a66b35c43d45ef30426fe?Expires=1625443200&Signature=YjGwTViyXzcJwuhTus8TDCkQfBLaOcHPI9nk4SFGIbA-IqyFiqzQV9GoUXPXi2jdAInHo7LkHgDAdatVRBTpXLcC6BYyexIOUUIAzkjpU7CLIuoygaO~vS9e0bSzHqRKnr3RIFfTKeuZto17FdSCssk7dsRg3NKMBwduHksOG19qrnUTUr9TyvYcAA5SwyFEvN7IVFAehOdXNateH77xPTzMMp~rsafJQXJihbpl-BKuqZlB9~FJhyqBXtsJII5Fty9Vjj~pNF6TXLKDfeSwWeUkRNzEKkftUur178-PJTXC5-Av3nkNDSDYDOjZjtfP3Q6BjKaVpCj5YlhwN~37fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Coronavirus live news: markets fall over fears of long US"
          summary="Republican senators on Capitol Hill have expressed their dismay at a Donald Trump."
          styles={style}
        />
      </Item>
    </Wrapper>
  )
}

export default ListNews