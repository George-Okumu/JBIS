import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Main'
import Home from './features/jbis/pages/Jbis'
import Forum from './features/forum/pages/Forum'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/events/Jbis" element={<Home />} />
      <Route path='/events/forum' element={<Forum />} />
    </Routes>
    </>
  )
}

export default App