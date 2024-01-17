import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './App.css';
import About from './screens/About';
import Contact from './screens/Contact';
import Register from './screens/Register';
import UserList from './screens/UserList';
import Registra from './screens/Registra';

const router=createBrowserRouter([
  {
    path:"/",
    element: <UserList />
  },
  {
    path:"/registra",
    element: <Registra />
  },
  {
    path:"/about",
    element: <div>About Us</div>
  },
])
function App() {
  return(
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;

// Redux and Context API