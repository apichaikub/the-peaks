import Container from "../Base/Container"
import ListNews from "../Combine/ListNews"
import Sidebar from "../Combine/Sidebar"
import H2 from "../Base/H2"

type Props = {
  title: String;
}

const News = ({ title } : Props) => {
  return (
    <>
      <Sidebar padding="20px 0 30px 0">
        <H2>{ title }</H2>
      </Sidebar>
      <Container>
        <ListNews/>
      </Container>
    </>
  )
}

export default News