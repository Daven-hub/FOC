import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutPage from "./pages/about"
import { Recrutment } from "./pages/recrutement/recrutment"
import EventsPage from "./pages/Evenement"
import DomainesPage from "./pages/Domaines"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutPage />}/>
          <Route path="/recru" element={<Recrutment />}/>
           <Route path="/event" element={<EventsPage />}/>
           <Route path="/domaine" element = {<DomainesPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
