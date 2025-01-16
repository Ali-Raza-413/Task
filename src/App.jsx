import './App.css'
import Layout from './Components/Layout'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from './Pages/dashboard/Dashboard';
import Inbox from './Pages/inbox/Inbox';
import Schedule from './Pages/schedule/Schedule';
import Settings from './Pages/settings/Settings';
import Reviews from './Pages/reviews/Reviews';
function App() {

  return (
    <>
 <Router>
   <Layout>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/> 
          <Route path='/inbox' element={<Inbox/>}/> 
          <Route path='/schedule' element={<Schedule/>}/> 
          <Route path='/settings' element={<Settings/>}/> 
          <Route path='/reviews' element={<Reviews/>}/> 
        </Routes>
      </Layout>
    </Router>    
    </>
  )
}

export default App
