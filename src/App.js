import './App.css';
import Header from './Header';
import Footer from './Footer';
//import { BrowserRouter, Route, Routes, Navigate, Link} from 'react-router-dom';
//import Registration from './Registration';
//import LeftPanel from './LeftPanel';
import BottomPanel from './BottomPanel';
import Main from './Main';


function App() {
  return (
    <body>
      <Header />
      <Main />
      <BottomPanel />
      <Footer />
    </body>
  );
}

export default App;
