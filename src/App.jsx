import { Outlet } from 'react-router-dom'
import {Button} from './components/ui/button'
import {Navbar} from './components/comps/navbar'
import { ThemeProvider } from './components/ui/theme-provider'

import {Footer} from './components/comps/footer'

import { ModeToggle } from './components/ui/mode-toggle'


function App() {


  return (
    <>
<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <Navbar />
    <main>
      <Outlet />
   </main>
   <Footer />
</ThemeProvider>
  </>
);
}
export default App
