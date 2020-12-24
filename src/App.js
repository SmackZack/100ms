import { MDBCardImage, MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import CharacterDetails from './screens/CharacterDetails'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <div>
      <Router>
        <MDBContainer fluid>
          <Header />
          <Route path="/character/:id" component={CharacterDetails}/>
          <Route path="/page/:pageNumber" component={HomeScreen} />
          <Route path="/search/:keyword" component={HomeScreen} />
          <Route path="/search/:keyword/page/:pageNumber" component={HomeScreen} />
          <Route path="/" component={HomeScreen} exact/>
        </MDBContainer>
      </Router>
    </div>
  )
}

export default App
