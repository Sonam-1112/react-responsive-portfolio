import React from "react";
import './App.css'
import './styles/layout.css'
import './styles/navbar.css'
import './styles/typography.css'
import './styles/title.css'
import './styles/about.css'
import './styles/skill.css'
import './styles/service.css'
import './styles/blogs.css'
import './styles/contact.css'
import { Switch,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar/>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact><HomePage/></Route>        
              <Route path="/about" exact><AboutPage/></Route>                         
              <Route path="/blogs" exact><BlogsPage/></Route>             
              <Route path="/contact" exact><ContactPage/></Route>             
            </Switch>
          </div>
        </div>
    </div>
  );
}

export default App; 
