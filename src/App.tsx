import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { Home } from './pages/Home'
import { ComponentsPage } from './pages/components/ComponentsPage'
import ButtonsPage from './pages/ButtonsPage'
import { CardsPage } from './pages/CardsPage'
import TablesPage from './pages/TablesPage'
import ChartsPage from './pages/ChartsPage'

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
            <Route path="cards" element={<CardsPage />} />
            <Route path="tables" element={<TablesPage />} />
            <Route path="charts" element={<ChartsPage />} />
          </Route>
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
