import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutPage from "./pages/about"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
