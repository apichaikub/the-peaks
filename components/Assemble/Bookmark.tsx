import Container from "../Base/Container"
import H1 from "../Base/H1"
import ListNews from "../Combine/ListNews"
import Sidebar from "../Combine/Sidebar"
import Filter from "../Combine/Filter"
import { NewsItem } from "../../constants/news"

type Props = {
  items: NewsItem[];
}

const Bookmark = ({ items } : Props) => {
  const bookedCount = items.length
  return (
    <div style={{ marginTop: '14px' }}>
      <Sidebar>
        <H1>All bookmark ({ bookedCount })</H1>
        <Filter
          showButtonBookmark={false}
        />
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