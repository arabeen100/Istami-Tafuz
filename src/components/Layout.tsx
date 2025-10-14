import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Scrolltop from "./ScrollToTop"
const Layout = () => {
  return (
    <div className="bg-background">
      <Scrolltop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout