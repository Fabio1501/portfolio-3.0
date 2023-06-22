import Landing from "./components/landing/Landing";
import { Route, Routes } from 'react-router-dom'
import Projects from "./components/projects/Projects";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";
import Details from "./components/blog/Details";

export default function App() {
  return (
    <div className="bg-black">
      <Nav></Nav>
      <Routes>
        <Route
          exact
          path='/'
          element = {<Landing/>}
        />
        <Route
          exact
          path='/projects'
          element = {<Projects/>}
        />
         <Route
          exact
          path='/contact'
          element = {<Contact/>}
        />
        <Route
          exact
          path='/blog'
          element = {<Blog/>}
        />

        <Route
          exact
          path='/blog/:id'
          element = {<Details/>}
        />
      </Routes>
      <Footer></Footer>
    </div>
  )
}
