import './App.css'
import Child from './Clase 6/Child'
import Child2 from './Clase 6/Child2'
import Parent from './Clase 6/Parent'


const App = () =>  {
  
  return (
    <>
      <Parent>
        {(texto) => <Child texto={texto}/>}
      </Parent>
      <Parent>
        {(texto) => <Child2 texto={texto}/>}
      </Parent>
    </>
  )
}

export default App
