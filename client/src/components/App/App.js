import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

class App extends Component {
  render () {
    return (
      <div>
        <Route path='/about' component={Footer} />
        <Route path='/topics' component={Header} />
      </div>
    )
  }
}

export default App
