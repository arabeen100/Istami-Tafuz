import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Scrolltop from "./ScrollToTop"
const Layout = () => {
  return (
    <div className="bg-background flex flex-col">
      <Scrolltop />
      <Navbar />
      <main className="flex-1">
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout