import Container from "../Base/Container"
import H1 from "../Base/H1"
import ListNews from "../Combine/ListNews"
import Sidebar from "../Combine/Sidebar"
import Filter from "../Combine/Filter"

const Bookmark = () => {
  return (
    <div style={{ marginTop: '14px' }}>
      <Sidebar>
        <H1>All bookmark</H1>
        <Filter
          showButtonBookmark={false}
        />
      </Sidebar>
      <Container>
        <ListNews/>
      </Container>
    </div>
  )
}

export default Bookmark