import './App.css';
import Navbar from './components/Navbar';
import Feature from './components/Feature_block';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content-wrapper">
        <h1>odyssey</h1>
        <h2>ONE</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <button className="btn">BUY ONE</button>
        <div className="feature-home-wrapper">
           <Feature title="speed" desc="80.6 km/h"/>
           <Feature title="Material" desc="Carbon (CF)"/>
           <Feature title="Sizes" desc="S, M, L, XL"/>
        </div>
        

      </div>
    </div>
  );
}

export default App;
