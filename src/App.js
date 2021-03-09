import './App.css';
import Header from './containers/header/Header';
import Main from './containers/main/Main';
import About from './containers/main/About'
import Contact from './containers/main/Contact'
import Home from './containers/main/Home'
import Questions from './containers/main/Questions'
import Shop from './containers/main/Shop'
import Supplies from './containers/main/Supplies'
import Tutorials from './containers/main/Tutorials';
import Footer from './containers/footer/Footer';

import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  const routes = [
    { title: "Home", path: "/" , component: <Home /> },
    { title: "Shop", path: "/shop", component: <Shop /> },
    { title: "Supplies", path: "/supplies", component: <Supplies /> },
    { title: "Tutorials", path: "/tutorials", component: <Tutorials /> },
    { title: "About", path: "/about", component: <About /> },
    { title: "FAQ's", path: "/questions", component: <Questions /> },
    { title: "Contact", path: "/contact", component: <Contact /> }
  ]

  const [ showDrawer , toggleSlideDrawer ] = useState(false)
  const toggleDrawer = () => toggleSlideDrawer(!showDrawer)

  return (
    <div className="App">
      <Router>
        <Header routes={routes} toggleDrawer={toggleDrawer}/>
        <Main routes={routes} showDrawer={showDrawer} toggleDrawer={toggleDrawer}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
