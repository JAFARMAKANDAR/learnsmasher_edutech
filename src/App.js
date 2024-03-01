

import Dashboard from "./Pages/Pages/Dashboard";
import Sidebar from "./Components/Sidebar";
import "./main.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Tutorials from "./Pages/Pages/Tutorials";
import Interview from "./Pages/Pages/Interview";
import Mnc from "./Pages/Pages/Mnc";
import Roadmap from "./Pages/Pages/Roadmap";
import Cheat from "./Pages/Pages/Cheat";
import Resume from "./Pages/Pages/Resume";
import Crtificate from "./Pages/Pages/Crtificate";
import Exam from "./Pages/Pages/Exam";
import Test from "./Pages/Pages/Test";
import Google from "./Pages/Pages/Google";
import Trust from "./Pages/Pages/Trust";
import Door from "./Pages/Pages/Door";
import Support from "./Pages/Pages/Support";
import Social from "./Pages/Pages/Social";
function App() {
 
  return (
    <>

   <Router>
    <Sidebar>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/Tutorials" element={<Tutorials/>}/>
      <Route path="/Interview" element={<Interview/>}/>
      <Route path="/Mnc" element={<Mnc/>}/>
      <Route path="/Roadmap" element={<Roadmap/>}/>
      <Route path="/Cheat" element={<Cheat/>}/>
      <Route path="/Resumes" element={<Resume/>}/>
      <Route path="/Crtificate" element={<Crtificate/>}/>
      <Route path="/Exam" element={<Exam/>}/>
      <Route path="/Test" element={<Test/>}/>
      <Route path="/Google" element={<Google/>}/>
      <Route path="/Trust" element={<Trust/>}/>
      <Route path="/Door" element={<Door/>}/>
      <Route path="/Support" element={<Support/>}/>
      <Route path="/Social" element={<Social/>}/>

    </Routes>
    </Sidebar>
   </Router>
    </>
  );
}

export default App;
