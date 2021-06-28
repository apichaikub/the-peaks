import Container from "../Base/Container"
import H1 from "../Base/H1"
import ListNews from "../Combine/ListNews"
import Sidebar from "../Combine/Sidebar"
import Filter, { TFilterProps } from "../Combine/Filter"
import { FILTER, NewsItem } from "../../constants/news"

interface Props extends TFilterProps {
  items: NewsItem[];
  onChangeOrderBy?(value: FILTER): void;
}

const SearchResult = ({ items, filter, onChangeOrderBy } : Props) => {
  return (
    <div style={{ marginTop: '14px' }}>
      <Sidebar>
        <H1>Search results</H1>
        <Filter
          filter={filter}
          onChangeOrderBy={onChangeOrderBy}
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

export default SearchResult