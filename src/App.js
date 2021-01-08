import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Grid from './components/Grid/Grid.js';
import GSAPTest from './components/GSAPTest/GSAPTest.js';

function App() {
  return (
    <div className="mainDiv">
      <Header />
      {/* <GSAPTest /> */}
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
