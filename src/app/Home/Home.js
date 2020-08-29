import React from 'react';
import HeroSection from './sections/HeroSection';
import About from './sections/About';
import Projects from './sections/Projects';
import ProjectContextProvider from '../contexts/ProjectContext';

const Home = () => {
    return (
        <React.Fragment>
            <HeroSection />
            <About />
            <ProjectContextProvider>
                <Projects />
            </ProjectContextProvider>
        </React.Fragment>
    )
}

export default Home
