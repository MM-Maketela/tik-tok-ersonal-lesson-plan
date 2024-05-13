
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
  <Route  path="/"  element= {<Home />}/>
  <Route  path="/about"  element= {<About />}/>
  <Route  path="/portfolio"  element= {<Portfolio />}/>
  {/* <Route  path="/services"  element= {<Services/>}/> */}
  {/* <Route  path="/contactUs"  element= {<ContactUs />}/> */}
  {/* <Route  path="/login"  element= {<Login />}/> */}
  </Routes>

</Layout>
    </div>
  );
}

export default App;
