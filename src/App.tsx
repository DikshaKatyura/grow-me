
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Tables from './pages/Tables';
import LoginContextProvider from './context/LoginContextProvider';

const routes = createBrowserRouter([
  {path:'/',element:<Home/>},
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
