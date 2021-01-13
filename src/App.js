
import './App.css';
import Weather from "./Weather.js"

function App() {
  return (
  <div className="app container card">
    <Weather defaultCity="Vancouver" />
    <footer>
      <a href="https://github.com/xmicayla/weatherapp_react" target="_blank" rel="noreferrer">Open-source code </a>
      <span>by Micayla Johnson</span>
    </footer>
  </div>  

  );
}

export default App;
