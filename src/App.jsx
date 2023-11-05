import { Outlet } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout/MainLayout"
import Footer from "./Components/Footer/Footer"


function App() {

  return (
    <>
      <MainLayout>
      <Outlet></Outlet>
      <Footer></Footer>
      </MainLayout>
    </>
  )
}

export default App
