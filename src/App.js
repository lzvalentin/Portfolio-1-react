import React, {useState} from "react";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import NavBar from "./components/Nav/Navbar";
import Projects from "./Pages/Projects/projects";
import Footer from "./components/Footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

// import Header from "./components/Header"

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />
    }
  }
  return (
    <div className="App">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  )
}
   
export default App;
