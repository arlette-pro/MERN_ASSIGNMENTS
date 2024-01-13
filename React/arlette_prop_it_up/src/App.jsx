import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <PersonCard 
        firstName="John" 
        lastName="Doe" 
        age={25} 
        hairColor="Brown" 
      />
      <PersonCard 
        firstName="Smith" 
        lastName="Smith" 
        age={30} 
        hairColor="Brown" 
      />
      <PersonCard 
        firstName="Fillmore" 
        lastName="Millard" 
        age={50} 
        hairColor="Brown" 
      />
      <PersonCard 
        firstName="Smith" 
        lastName="Maria" 
        age={62} 
        hairColor="Brown" 
      />
    </div>
  );
}

export default App
