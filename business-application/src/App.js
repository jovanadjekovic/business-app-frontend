import './App.css';

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import PanelComponent from './components/PanelComponent/PanelComponent';

function App() {
  return (
    <div className="App">
      <PanelComponent/>
    </div>
  );
}

export default App;
