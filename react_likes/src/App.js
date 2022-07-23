import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Likes from './components/Likes.jsx'

function App() {
  const[like, setLike] = useState([
    
  ])
  const[dislike, setDislike] = useState([
    
  ])

  const countLikes = () => {
    let counter = Likes + 1
    setLike(counter)
  }

  
 return(
  <div className='app'>
     < Likes />
  </div>
 )

}

export default App;
