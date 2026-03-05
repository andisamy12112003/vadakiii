import Homepage from './components/Homepage'
import Mainpage from './components/Mainpage'
import { BrowserRouter as Router, Routes, Route} from 'react-router';
import Mainpage1 from './components/Mainpage1';
import Mainpage2 from './components/Mainpage2';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Homepage />} />
        <Route path="/memo" element={<Mainpage />} />
        <Route path="/wish" element={<Mainpage1 />} />
        <Route path="/final" element={<Mainpage2 />} />
      </Routes>
      {/* <MainPage/> */}
    </Router>
  )
}

export default App
