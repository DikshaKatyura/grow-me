
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Tables from './pages/Tables';
import LoginContextProvider from './context/LoginContextProvider';
import Error from './pages/Error';

const routes = createBrowserRouter([
  {path:'/',element:<Home/>,errorElement:<Error/>},
  {path:'tables',element:<Tables/>}
])

function App() {

  return (
    <LoginContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </LoginContextProvider>
  )
}

export default App
