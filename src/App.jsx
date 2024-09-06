import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';


function App() {

  return (
    <main>

      <Router>

        <Routes>

            <Route path='/' element={<Main />}/>
            <Route path='/profile' element={''}/>

        </Routes>

      </Router>
     
    </main>
  )
}

export default App
