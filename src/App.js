import './App.css';
import MealList from './components/Body/MealList';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Cart from './components/Body/Cart';
import MenuItemDetails from './components/Body/MenuItemDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element : <MealList />
        },
        {
          path: '/cart',
          element : <Cart />
        },
        {
          path: '/meal/:mealId',
          element : <MenuItemDetails />
          
        }
      ]
    }
  ]
)

export default App;
