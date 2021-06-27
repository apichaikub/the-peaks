import Container from "../Base/Container"
import H1 from "../Base/H1"
import ListNews from "../Combine/ListNews"
import Sidebar from "../Combine/Sidebar"
import Filter from "../Combine/Filter"
import Top5News from "../Combine/Top5News"
import { NewsItem } from "../../constants/news"

type Props = {
  title: String;
  topStories: NewsItem[];
}

const TopStory = ({ title, topStories } : Props) => {
  const top5Items = topStories.filter((_: any, index: Number) => index <= 4)
  const restItems = topStories.filter((_: any, index: Number) => index >= 5)
  return (
    <>
      <Sidebar>
        <H1>{ title }</H1>
        <Filter/>
      </Sidebar>
      <Container>
        { top5Items.length &&
        <Top5News
          items={top5Items}
        /> }
        { restItems.length &&
        <ListNews
          items={restItems}
        /> }
      </Container>
    </>
  )
}

export default TopStory