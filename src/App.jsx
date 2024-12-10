import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"
import PostIndex from "./pages/posts/Index"
import PostShow from "./pages/posts/Show"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/posts">
              <Route path="" Component={PostIndex}></Route>
              <Route path=':id' Component={PostShow} ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
