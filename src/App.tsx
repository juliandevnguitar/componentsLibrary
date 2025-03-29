import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { Home } from './pages/Home'
import { ComponentsPage } from './pages/components/ComponentsPage'
import ButtonsPage from './pages/ButtonsPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="components">
            <Route index element={<ComponentsPage />} />
            {/* Aquí puedes añadir más rutas para cada componente específico */}
            <Route path="buttons" element={<ButtonsPage />} />
            <Route path="cards" element={<div>Página de Cards</div>} />
            <Route path="forms" element={<div>Página de Forms</div>} />
          </Route>
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
