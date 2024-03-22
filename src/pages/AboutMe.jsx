import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';


export function AboutMe() {

    return (
        <div id="about">
            
            <div className="app-container md:mr-20 md:ml-20 md:mb-20">
                <div className="grid grid-cols-6 contact-top">
                    <div className="col-span-1">
                        <Card className="text-left">
                            <CardHeader>
                                <CardTitle className="text-3xl">Stay</CardTitle>
                                
                            </CardHeader>
                            <CardContent>
                                {/* Card content */}
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-1">
                        <Card className="text-left">
                            <CardHeader>
                                <CardTitle className="text-3xl">Tuned!</CardTitle>
                              
                            </CardHeader>
                            <CardContent>
                                {/* Card content */}
                            </CardContent>
                        </Card>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default AboutMe;