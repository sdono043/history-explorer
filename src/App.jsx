import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import WorldHistory from './pages/WorldHistory/WorldHistory'
import EarlyUsHistory from './pages/EarlyUsHistory/EarlyUsHistory'

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<WorldHistory />} />
        <Route path="/early-us-history" element={<EarlyUsHistory />} />
      </Routes>
    </HashRouter>
  )
}
