import Loading from "../Base/Loading"
import Footer from "./TheFooter"
import TheHeader from "./TheHeader"

type Props = {
  loading: Boolean;
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ loading, children } : Props) => {
  return (
    <>
      <TheHeader/>
      { loading ? <Loading/> : children }
      <Footer/>
    </>
  )
}

export default Layout