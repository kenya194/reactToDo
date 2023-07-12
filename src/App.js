
import './index.css';
import Navbar from "./navbar";
import Header from "./header";
import Section from "./section";

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
    </div>

  </div>
  );
}

export default App;
