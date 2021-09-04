import logo from './logo.svg';
import './App.scss';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Te amo, momo.  
        </p>
        <Button type="primary" onClick={() => console.log("teste")}>Botão do momo</Button>
      </header>
    </div>
  );
}

export default App;
