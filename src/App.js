import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import
{ BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';


function App() {
 return (
    <div className="App">

      <CartProvider>
        <BrowserRouter>
          <NavBar/>
        
          <Switch>
            <Route exact path='/'>
              <ItemListContainer title='Lista de Cartas'/>
            </Route>

            <Route exact path='/productos/:categoryId'>
            <ItemListContainer/>
            </Route>

            <Route exact path='/detail/:itemId'>
              <ItemDetailContainer/>
            </Route>

            <Route path='/contacto'>

            </Route>

            <Route path='/cart'>
              <CartScreen/>
            </Route>

            <Route path='*'>
              <Redirect to='/'/>
            </Route> 


          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;