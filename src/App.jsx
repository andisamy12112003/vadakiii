import Homepage from './components/Homepage'
import Mainpage from './components/Mainpage'
import { BrowserRouter as Router, Routes, Route} from 'react-router';
import Mainpage1 from './components/Mainpage1';
import Mainpage2 from './components/Mainpage2';
import Mainpage3 from './components/Mainpage3';
import Verificationpage from './components/Verification';
function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Homepage />} />
        <Route path="/memo" element={<Mainpage />} />
        <Route path="/wish" element={<Mainpage1 />} />
        <Route path="/final" element={<Mainpage2 />} />
        <Route path="/gifts" element={<Mainpage3/>}/>
        <Route path="/verify" element={<Verificationpage/>}/>
      </Routes>
      {/* <MainPage/> */}
    </Router>
  )
}

export default App
