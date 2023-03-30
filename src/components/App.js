import styles from '../styles/App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ReserveTablePage from '../pages/ReserveTablePage';

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/ReserveTable",
    element:<ReserveTablePage/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
