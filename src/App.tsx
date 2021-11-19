import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Pagina2 from './Pagina2';
import Pagina404 from './Pagina404';
import PaginaInicial from './PaginaInicial';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicial} />
        <Route path="/pagina2" component={Pagina2} />
        <Route path="*" component={Pagina404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
