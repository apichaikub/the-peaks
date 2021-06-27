import Container from "../Base/Container"
import H1 from "../Base/H1"
import ListNews from "../Combine/ListNews"
import Sidebar from "../Combine/Sidebar"
import Filter from "../Combine/Filter"
import Top5News from "../Combine/Top5News"

type Props = {
  title: String;
}

const TopStory = ({ title } : Props) => {
  return (
    <>
      <Sidebar>
        <H1>{ title }</H1>
        <Filter/>
      </Sidebar>
      <Container>
        <Top5News/>
        <ListNews/>
      </Container>
    </>
  )
}

export default TopStory