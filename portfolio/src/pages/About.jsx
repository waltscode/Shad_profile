import React, { useEffect } from 'react';
import {useTheme} from '../components/ui/theme-provider'
import {  Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '../components/ui/card';
import '../assets/css/styles.css'

export default function About() {
    const { theme } = useTheme();
    
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hiding');
    hiddenElements.forEach(element => {
      observer.observe(element);
    });

    const hiddenElements2 = document.querySelectorAll('.hiding2');
hiddenElements2.forEach(element => {
  observer.observe(element);
});

    // Cleanup function
    return () => {
      hiddenElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div id="about" className={`app-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
    <div className='layowave overflow-visible'></div>
    <div className="bkg-container flex-container">
        

      <div className="hero-left hiding">
        <h1 className='blu hero-text'>Name: John Walters </h1>
      </div>
      <div className="hero-right hiding">
        <img src="/images/blue2.png" alt="profile picture" className=" prof-img blob-effect" />
      </div>
    </div>

    <div className="icons icon-container blue-bkrnd">
      <div className="waves">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className='icons-left'>
        <div className="icon hiding techlogo">
          <img src="/images/logos/html.png" alt="" />
        </div>
        <div className="icon hiding techlogo">
          <img src="/images/logos/css3.png" alt="" />
        </div>
        <div className="icon hiding techlogo">
          <img src="/images/logos/javascript.png" alt="" />
        </div>
        <div className="icon hiding techlogo">
          <img src="/images/logos/JavaScript-logo.png" alt="" />
        </div>
        <div className="icon hiding techlogo">
          <img src="/images/logos/Webpack.png" alt="" />
        </div>
        <div className="icon hiding techlogo">
          <img src="/images/logos/react.png" alt="" />
        </div>
        <div className="icon hiding techlogo">
          <img src="/images/logos/Figma.png" alt="" />
        </div>
        <div className="icon hiding techlogo">
          <img src="/images/logos/TailwindCSS.png" alt="" />
        </div>
        <div className="icon hiding techlogo">
          <img src="/images/logos/Bootstrapnew.png" alt="" />
        </div>
        <div className="icon hiding techlogo">
          <img src="/images/logos/handlebars.png" alt="" />
        </div>
        <div className="icon hiding techlogo">
          <img src="/images/logos/netlify.png" alt="" />
        </div>
        <div className="icon hiding techlogo">
          <img src="/images/logos/Heroku.png" alt="" />
        </div>
      </div>
      <div className="icons-right hiding">
      <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
      </div>
    </div>

    <div className="icons icon-container orange-bkgrnd">
    <div className="waves-blue">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className="icons-left hiding2">
      <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
      </div>
      <div className='icons-right'>
        <div className="icon hiding2 techlogo">
          <img src="/images/logos/Insomnia.png" alt="" />
        </div>
        <div className="icon hiding2 techlogo">
          <img src="/images/logos/jquery.png" alt="" />
        </div>
        <div className="icon hiding2 techlogo">
          <img src="/images/logos/mongodb.png" alt="" />
        </div>
        <div className="icon hiding2 techlogo">
          <img src="/images/logos/Mongoose.js.png" alt="" />
        </div>
        <div className="icon hiding2 techlogo">
          <img src="/images/logos/mysql.png" alt="" />
        </div>
        <div className="icon hiding2 techlogo">
          <img src="/images/logos/sequelize.png" alt="" />
        </div>
        <div className="icon hiding2 techlogo">
          <img src="/images/logos/nodejs (1).png" alt="" />
        </div>
        <div className="icon hiding2 techlogo">
          <img src="/images/logos/Vite.js.png" alt="" />
        </div>
        
      </div>
     
    </div>
  </div>
);
}