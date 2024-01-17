
import './App.css'
import Person from './components/Person';

function App() {
  return (
    <div className='app'>
     
      <Person
         firstName="Doe" 
         lastName="Jane" 
         age={25} 
         hairColor="Black"
         initialAge = {45}
         />

      <Person 
         firstName="Smith" 
         lastName="John" 
         hairColor="Brown"
         age={25} 
         initialAge = {88}
      />
    </div>
  );
}

export default App
