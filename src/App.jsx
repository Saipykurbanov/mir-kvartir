import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Header from './components/header/Header';



function App() {

  return (
    <main>

      <Router>

        <Header />

        <Routes>

            <Route path='/' element={<Main />}/>
            <Route path='/profile' element={''}/>

        </Routes>

      </Router>
     
    </main>
  )
}

export default App
