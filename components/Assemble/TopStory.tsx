import Container from "../Base/Container"
import H1 from "../Base/H1"
import ListNews from "../Combine/ListNews"
import Sidebar from "../Combine/Sidebar"
import Filter, { TFilterProps } from "../Combine/Filter"
import Top5News from "../Combine/Top5News"
import { FILTER, NewsItem } from "../../constants/news"

interface Props extends TFilterProps {
  title: String;
  topStories: NewsItem[];
  onChangeOrderBy?(value: FILTER): void;
}

const TopStory = ({ title, topStories, filter, onChangeOrderBy } : Props) => {
  const top5Items = topStories.filter((_: any, index: Number) => index <= 4)
  const restItems = topStories.filter((_: any, index: Number) => index >= 5)
  return (
    <>
      <Sidebar>
        <H1>{ title }</H1>
        <Filter
          filter={filter}
          onChangeOrderBy={onChangeOrderBy}
        />
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