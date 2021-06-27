import Container from "../Base/Container"
import H1 from "../Base/H1"
import ListNews from "../Combine/ListNews"
import Sidebar from "../Combine/Sidebar"
import Filter from "../Combine/Filter"

const SearchResult = () => {
  return (
    <div style={{ marginTop: '14px' }}>
      <Sidebar>
        <H1>Search results</H1>
        <Filter/>
      </Sidebar>
      <Container>
        <ListNews/>
      </Container>
    </div>
  )
}

export default SearchResult