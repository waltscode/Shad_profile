import { Outlet, useLocation } from 'react-router-dom'
import {Button} from './components/ui/button'
import {Navbar} from './components/comps/navbar'
import { ThemeProvider } from './components/ui/theme-provider'

import {Footer} from './components/comps/footer'

import { ModeToggle } from './components/ui/mode-toggle'


function App() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <>
<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <Navbar />
    <main>
      <Outlet />
   </main>
   {!isContactPage && <Footer />}
</ThemeProvider>
  </>
);
}
export default App
