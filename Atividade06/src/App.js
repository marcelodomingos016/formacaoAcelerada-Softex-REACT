import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
    <Header />

    <Routes />
    
    <Footer />
    </BrowserRouter>
  );
}

export default App;
