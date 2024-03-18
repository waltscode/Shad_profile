import { Outlet } from 'react-router-dom'
import {Button} from './components/ui/button'
import {Navbar} from './components/comps/navbar'
import { ThemeProvider } from './components/ui/theme-provider'
import { DrawerDialogDemo } from './components/comps/draw'

import { ModeToggle } from './components/ui/mode-toggle'


function App() {


  return (
    <>
<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <Navbar />
    <main>
      <Outlet />
   </main>
</ThemeProvider>
  </>
);
}
export default App
