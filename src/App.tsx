import Card from './components/Card'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { projects } from './data/project'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'
import ProjectDashbord from './pages/ProjectDashbord'
import ProjectDetails from './pages/ProjectDetails'
import CreateProject from './pages/CreateProjects'

function App() {
  return (
    <div className='bg-black'>

      {/* <LandingPage/>
      <Footer/>
     <ProjectDashbord/>
       */}

        <Router>
          <Routes>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/dashboard' element={<ProjectDashbord/>}/>
              <Route path='/dashboard/:id' element={<ProjectDetails/>}/>
              <Route path='/create-project' element={<CreateProject/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App