import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'


import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Home from './pages/home'
import BlogDetail from './pages/BlogDetail'
import Category from './pages/category';
import CategoryItem from './pages/categoryItem';
import AboutMe from './pages/aboutMe';
import Message from './pages/message';


function App() {


  return (
    <Router>
      <div className="">
        <Nav />
        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/detail/:id'><BlogDetail /></Route>
          <Route path='/category' ><Category /></Route>
          <Route path='/categoryItem/:name/:id' ><CategoryItem /></Route>
          <Route path='/aboutme' ><AboutMe /></Route>
          <Route path='/message' ><Message /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
