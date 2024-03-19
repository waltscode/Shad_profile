import React, { useEffect } from 'react';
import { useTheme } from '../components/ui/theme-provider'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/ui/card';


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
        <div id="about" className= {`app-container grad-bkg ${theme === 'dark' ? 'dark-theme' : 'light-theme'} `}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 hiding h-screen ">
                <Card>
                    <CardHeader>
                        <CardTitle>Front End Technologies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Here are some key front-end technologies:</p>
                        <ul>
                            <li><strong>HTML5:</strong></li>
                            <li><strong>CSS3:</strong></li>
                            <li><strong>JavaScript (ECMAScript):</strong></li>
                            <li><strong>React:</strong></li>
                            <li><strong>Figma:</strong></li>
                            <li><strong>Tailwind CSS:</strong></li>
                            <li><strong>Bootstrap:</strong></li>
                            <li><strong>Shadow DOM (Shadcn):</strong></li>
                            <li><strong>Netlify:</strong></li>
                            <li><strong>Heroku:</strong></li>
                        </ul>
                    </CardContent>
                </Card>
                <div>
                    <img src="/images/blue2.png" alt="profile picture" className='blob-effect' />
                </div>
            </div>
    
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 hiding h-screen">
                <div className="icons">
                    <div className="flex flex-wrap justify-center items-center">
                        <img src="/images/logos/html.png" alt="" className="techlogo" />
                        <img src="/images/logos/css3.png" alt="" className="techlogo" />
                        <img src="/images/logos/javascript.png" alt="" className="techlogo" />
                        <img src="/images/logos/JavaScript-logo.png" alt="" className="techlogo" />
                        <img src="/images/logos/Webpack.png" alt="" className="techlogo" />
                        <img src="/images/logos/react.png" alt="" className="techlogo" />
                        <img src="/images/logos/Figma.png" alt="" className="techlogo" />
                        <img src="/images/logos/TailwindCSS.png" alt="" className="techlogo" />
                        <img src="/images/logos/Bootstrapnew.png" alt="" className="techlogo" />
                        <img src="/images/logos/handlebars.png" alt="" className="techlogo" />
                        <img src="/images/logos/netlify.png" alt="" className="techlogo" />
                        <img src="/images/logos/Heroku.png" alt="" className="techlogo" />
                    </div>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Front End Technologies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Here are some key front-end technologies:</p>
                        <ul>
                            <li><strong>HTML5:</strong></li>
                            <li><strong>CSS3:</strong></li>
                            <li><strong>JavaScript (ECMAScript):</strong></li>
                            <li><strong>React:</strong></li>
                            <li><strong>Figma:</strong></li>
                            <li><strong>Tailwind CSS:</strong></li>
                            <li><strong>Bootstrap:</strong></li>
                            <li><strong>Shadow DOM (Shadcn):</strong></li>
                            <li><strong>Netlify:</strong></li>
                            <li><strong>Heroku:</strong></li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
    
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 hiding2 h-screen">
                <Card>
                    <CardHeader>
                        <CardTitle>Back End Technologies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Back-end development involves working on the server-side of web applications, handling data storage, processing, and communication with the front end.</p>
                        <p>Here are some key back-end technologies:</p>
                        <ul>
                            <li><strong>MySQL:</strong></li>
                            <li><strong>Sequelize:</strong></li>
                            <li><strong>MongoDB:</strong></li>
                            <li><strong>Mongoose:</strong></li>
                            <li><strong>jQuery:</strong></li>
                            <li><strong>Node.js:</strong></li>
                            <li><strong>Insomnia:</strong></li>
                            <li><strong>Vite:</strong></li>
                        </ul>
                    </CardContent>
                </Card>
    
                <div className='flex flex-wrap justify-center items-center'>
                    <img src="/images/logos/Insomnia.png" alt="" className="techlogo" />
                    <img src="/images/logos/jquery.png" alt="" className="techlogo" />
                    <img src="/images/logos/mongodb.png" alt="" className="techlogo" />
                    <img src="/images/logos/Mongoose.js.png" alt="" className="techlogo" />
                    <img src="/images/logos/mysql.png" alt="" className="techlogo" />
                    <img src="/images/logos/sequelize.png" alt="" className="techlogo" />
                    <img src="/images/logos/nodejs (1).png" alt="" className="techlogo" />
                    <img src="/images/logos/Vite.js.png" alt="" className="techlogo" />
                </div>
            </div>
        </div>
    );
}