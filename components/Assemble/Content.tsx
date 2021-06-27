import Container from "../Base/Container"
import ContentNews, { IContentNewsProps } from "../Combine/ContentNews"

 const Content = ({ isSaved, createdAt, topic, summary, detail, image } : IContentNewsProps) => {
  return (
    <Container>
      <ContentNews
        isSaved={isSaved}
        createdAt={createdAt}
        topic={topic}
        summary={summary}
        detail={detail}
        image={image}
      />
    </Container>
  )
}

export default Content