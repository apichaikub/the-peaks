import { SEARCH_TYPE } from "../../constants/news"
import Loading from "../Base/Loading"
import Footer from "./TheFooter"
import TheHeader from "./TheHeader"

type Props = {
  loading?: Boolean;
  children?: JSX.Element | JSX.Element[];
  onSearchSubmit?(value: String, type: SEARCH_TYPE): void;
}

const Layout = ({ loading = false, children, onSearchSubmit } : Props) => {
  return (
    <>
      <TheHeader
        onSearchSubmit={onSearchSubmit}
      />
      { loading ? <Loading/> : children }
      <Footer/>
    </>
  )
}

export default Layout