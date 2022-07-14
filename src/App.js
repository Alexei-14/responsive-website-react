import React from 'react'
import './App.css'

import { Blog, Footer, Features, Header} from './containers';
import { Article, Brand, Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <Blog/>
      <Footer />  
      <Article />
    </div>
  )
}

export default App