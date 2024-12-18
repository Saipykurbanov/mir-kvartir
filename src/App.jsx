import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import SignIn from './components/modal/SignIn';
import Profile from './pages/profile/Profile';
import ClientDetail from './pages/client/ClientDetail';
import SuccessWindow from './components/modal/SuccessWindow';
import Registration from './frames/registration/Registration';
import TransferPage from './pages/transfer/TransferPage';
import ScrollToTop from './utils/ScrollToTop';


function App() {

  const screenWidth = window.innerWidth;

  return (
    <main>

      <Router>
        <ScrollToTop />

        <Routes>

            <Route path='/' element={<Main />}/>
            
            <Route path='/profile' element={<Profile />}/>

            {screenWidth > 991 ? <Route path='/transfer' element={<TransferPage />}/> : <></>}
            {screenWidth < 992 ? <Route path='/client/:id' element={<ClientDetail />}/> : <></>}
            {screenWidth < 992 ? <Route path='/become_partner' element={<Registration mode={'page'} />}/> : <></>}

            <Route path='*' />

        </Routes>

        <SignIn />
        <SuccessWindow />

      </Router>
     
    </main>
  )
}

export default App
