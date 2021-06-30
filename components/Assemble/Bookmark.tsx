import Container from "../Base/Container"
import H1 from "../Base/H1"
import ListNews from "../Combine/ListNews"
import Sidebar from "../Combine/Sidebar"
import { TFilterProps } from "../Combine/Filter"
import { FILTER, NewsItem } from "../../constants/news"

interface Props extends TFilterProps {
  items: NewsItem[];
  onChangeOrderBy?(value: FILTER): void;
}

const Bookmark = ({ items, filter, onChangeOrderBy } : Props) => {
  return (
    <div style={{ marginTop: '14px' }}>
      <Sidebar>
        <H1>All bookmark ({ items.length })</H1>
      </Sidebar>
      <Container>
        <ListNews
          items={items}
        />
      </Container>
    </div>
  )
}

export default Bookmark