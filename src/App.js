
import './index.css';
import Navbar from "./navbar";
import Header from "./header";
import Section from "./section";
import Category from './category';

function App() {
 
  return (
  <div className="APP">
    <div className="nav">
    <Navbar />
    </div>
    <div className="head">
    <Header />
    </div>
    <div>
      <Section />
      <Category />
    </div>

  </div>
  );
}

export default App;
