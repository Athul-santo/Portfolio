import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
