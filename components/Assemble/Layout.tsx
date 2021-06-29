import { SEARCH_TYPE } from "../../constants/news"
import Loading from "../Base/Loading"
import Footer from "./TheFooter"
import TheHeader from "./TheHeader"

type Props = {
  loading?: Boolean;
  children?: JSX.Element | JSX.Element[];
  showFooter?: Boolean;
  onSearchSubmit?(value: String, type: SEARCH_TYPE): void;
}

const Layout = ({ loading = false, children, showFooter = true, onSearchSubmit } : Props) => {
  return (
    <>
      <TheHeader
        onSearchSubmit={onSearchSubmit}
      />
      { loading ? <Loading/> : children }
      { showFooter && <Footer/> }
    </>
  )
}

export default Layout