import React, { useEffect, useState } from 'react';
import '../assets/css/styles.css'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/ui/card';

function useIntersectionObserver(selector, options, callback) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                }
            });
        }, options);

        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, [selector, options, callback]);
}

export default function Portfolio() {
    useIntersectionObserver('.hiding-portfolios', {}, (target) => {
        target.classList.add('visible');
    });

    useIntersectionObserver('.hiding-portfolios', {}, (target) => {
        target.classList.add('visible');
    });
    const projects = [
        {
            name: 'Featured Project',
            description: 'A website that offers fitness training services.',
            link: '',
            image: 'https://api.dicebear.com/8.x/bottts/png',

        },
        {
            name: 'name of project2',
            description: 'A website that offers fitness training services.',
            link: ''

        },
        {
            name: 'name of project4',
            description: 'A website that offers fitness training services.',
            link: ''

        },
        {
            name: 'name of projectretg',
            description: 'A website that offers fitness training services.',
            link: ''

        },
        {
            name: 'name of projecth45',
            description: 'A website that offers fitness training services.',
            link: '',
            image: 'https://api.dicebear.com/8.x/lorelei/svg',

        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''

        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''

        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''

        },

    ];


    const [featuredProject, setFeaturedProject] = useState(projects[0]);

    const handleProjectClick = (event, project) => {
        event.preventDefault();
        setFeaturedProject(project);
    };

    return (
        <div className="py-8 px-4 hiding-portfolios">
            <h1 className="text-3xl font-bold text-center mb-4">Portfolio</h1>
            <p className="text-lg text-center mb-8">Check out some of my projects.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Featured project */}
                <Card className="max-w-xl mx-auto col-span-2 md:col-span-1 rounded-lg shadow-lg overflow-hidden my-4 feature-card"> {/* Added 'my-4' for vertical margin */}
                    <CardHeader>
                        <CardTitle>{featuredProject.name}</CardTitle>
                        <CardDescription>{featuredProject.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="px-6 py-4">
                            <img src={featuredProject.image} alt={featuredProject.name} className="mb-4 w-full" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <div className="px-6 py-4">
                            <a href={featuredProject.link} className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600">View Project</a>
                        </div>
                    </CardFooter>
                </Card>

                {/* Other projects */}
                <div className="other-projects">
                    {projects.map((project, index) => (
                        <Card key={index} className="m-2">
                            <CardHeader>
                                <CardTitle>{project.name}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>

                            <CardFooter className="flex justify-center">
                                <a
                                    href={project.link}
                                    className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600"
                                    onClick={(event) => handleProjectClick(event, project)}
                                >
                                    More Details
                                </a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}