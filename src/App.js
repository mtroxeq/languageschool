import './App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Routes, Navigate, Link} from 'react-router-dom';
import Registration from './Registration';
import LeftPanel from './LeftPanel';
import BottomPanel from './BottomPanel';


function App() {
  return (
    <body>
      <Header />
      <div className="Main">
        <LeftPanel/>
        <article className='RightPanel'>
          <BrowserRouter>
          <h1>Zapisz się dziś!</h1>
          <p>Jeśli chcesz się zapisać na lekcję wybranego przez Ciebie języka. Kliknij poniżej.</p>
          <Link to='/registration'>Zapisz się teraz.</Link>
          </BrowserRouter>
        </article>
        
      </div>
      <BottomPanel />
      <Footer />
    </body>
  );
}

export default App;
