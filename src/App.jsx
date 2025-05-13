import Contato from "./pages/Contato"
import Inicio from "./pages/Inicio"
import Sobre from "./pages/Sobre"
import Layout from "./components/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (

    <BrowserRouter>

      <Routes>


        <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="sobre" element={<Sobre />}/>
        <Route path="contato" element={<Contato />}/>
        </Route>



      </Routes>


    </BrowserRouter>

  )
}
export default App


