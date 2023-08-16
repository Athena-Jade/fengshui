import { Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from'./composants/menu/Menu';
import Footer from './composants/footer/Footer'

//liens vers ces pages
import Livret from './pages/livret/Livret'
import Qui from './pages/qui/Qui'
import Accueil from './pages/accueil/Accueil'
import Atelier from './pages/atelier/Atelier'
import Consultation from './pages/consultation/Consultation'
import Contact from './pages/contact/Contact'

// liens internes
import Bagua from './pages/bagua/Bagua'
import Chi from './pages/chi/Chi'
import Basesel from './pages/bases-el/Basesel'
import Rangement from './pages/rangement/Rangement'
import Remedes from './pages/remedes/Remedes'

function App() { 
  return (
    <>
      <div>     
        <Menu/> 

        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/livret' element={<Livret/>}/>         
          <Route path='/atelier' element={<Atelier/>}/>
          <Route path='consultation' element={<Consultation/>}/>                
          <Route path='/qui' element={<Qui/>}/>
          <Route path='/contact' element={<Contact/>}/>
       
          {/** liens internes vers ces pages */}
          <Route path='/bagua' element={<Bagua/>}/>
          <Route path='/chi' element={<Chi/>}/>
          <Route path='/basesel' element={<Basesel/>}/>
          <Route path='/rangement' element={<Rangement/>}/>
          <Route path='/remedes' element={<Remedes/>}/>                   
        </Routes>

        <Footer/>
        
      </div>     
    </>
  )
}

export default App
