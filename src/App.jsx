import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import ListGroup from './Components/ListGroup'
import QuoteComponent from './Components/QuoteComponent'


const App = () => {
  return (
    <>


    <div id='Container'>
    <Navbar/>
    <QuoteComponent/>
    <Form/>
    <ListGroup/>
    </div>
  
    </>
  )
}

export default App