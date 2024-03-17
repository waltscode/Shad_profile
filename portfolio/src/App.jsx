import { Outlet } from 'react-router-dom'
import {Button} from './components/ui/button'
import {Navbar} from './components/comps/navbar'
import { DrawerDialogDemo } from './components/comps/draw'
import './assets/css/styles.css'


function App() {


  return (
    <>

    <Navbar />
    <main>
      <Outlet />
    <Button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Click me</Button>
   <DrawerDialogDemo></DrawerDialogDemo>
   </main>
  </>
);
}
export default App
