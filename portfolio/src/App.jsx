import { Outlet } from 'react-router-dom'
import {Button} from './components/ui/button'
import {Navbar} from './components/comps/navbar'
import { ThemeProvider } from './components/ui/theme-provider'
import { DrawerDialogDemo } from './components/comps/draw'
import './assets/css/styles.css'
import { ModeToggle } from './components/ui/mode-toggle'


function App() {


  return (
    <>
<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <Navbar />
    <main>
      <Outlet />
    <Button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Click me</Button>
   <DrawerDialogDemo></DrawerDialogDemo>
    <ModeToggle></ModeToggle>
   </main>
</ThemeProvider>
  </>
);
}
export default App
