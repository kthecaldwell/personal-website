import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Title from './Title'
import Menu from './Menu'
import SocialSection from './SocialSection'
import PageNotFound from './PageNotFound'
import Footer from './Footer'
import AboutPage from './AboutPage'
import WorkPage from './WorkPage'
import BlogPage from './BlogPage'
import ContactPage from './ContactPage'


class Main extends Component {

  constructor() {
    super()
    this.state = {
      menuItems: []
    }
  }

  componentDidMount() {
    const data = simulateFetchFromDatabase()
    this.setState({
      menuItems: data
    })
  }

  render() {
    return <div className="container">

             <Switch>
               <Route exact path="/" render={() => (
                 <div className="home">
                   <Title title="Krishan Caldwell" />
                   <Menu items={this.state.menuItems}/>
                   <SocialSection />
                 </div>
               )} />

               <Route path="/work" render={() => (
                   <WorkPage />
               )} />

             <Route path="/about" render={() => (
                   <AboutPage />
               )} />

               <Route path="/blog" render={() => (
                   <BlogPage />
               )} />

               <Route path="/contact" render={() => (
                   <ContactPage />
               )} />

               <Route render={({history}) => (
                   <PageNotFound onBackButton={() => {
                       history.push('/')
                   }} />
               )} />
             </Switch>

             <Footer items={this.state.menuItems}/>

           </div>
  }

}

/**
 * This serves no purpose here. In reality if I were getting real stuff from a
 * real DB then I'd put a function to get the data for that here...
 * TODO: Actually make this one day
 */
function simulateFetchFromDatabase() {
  return [
    {
      id: 0,
      title: "Work",
      link: "/work"
    }, {
      id: 1,
      title: "About",
      link: "/about"
    }, {
      id: 2,
      title: "Blog",
      link: "/blog"
    }, {
      id: 3,
      title: "Contact",
      link: "/contact"
    }
  ]
}

export default Main
