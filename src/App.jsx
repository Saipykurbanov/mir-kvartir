import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import SignIn from './components/modal/SignIn';


function App() {

  return (
    <main>

      <Router>

        <Routes>

            <Route path='/' element={<Main />}/>
            
            <Route path='/profile' element={''}/>

        </Routes>

        <SignIn />

      </Router>
     
    </main>
  )
}

export default App
