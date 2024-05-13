
import './App.css';
import { Layout } from './components/layout/Layout';
import { Route, Routes} from "react-router-dom";
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Portfolio } from './pages/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Layout>
  
  <Routes>
  <Route  path="tik-tok-ersonal-lesson-plan/"  element= {<Home />}/>
  <Route  path="tik-tok-ersonal-lesson-plan/about"  element= {<About />}/>
  <Route  path="tik-tok-ersonal-lesson-plan/portfolio"  element= {<Portfolio />}/>
  {/* <Route  path="/services"  element= {<Services/>}/> */}
  {/* <Route  path="/contactUs"  element= {<ContactUs />}/> */}
  {/* <Route  path="/login"  element= {<Login />}/> */}
  </Routes>

</Layout>
    </div>
  );
}

export default App;
