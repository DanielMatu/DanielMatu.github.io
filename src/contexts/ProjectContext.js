import { createContext } from 'react'

const state = {
    projects: [

    ],
    featuredProjects: [
        {
            id: '0',
            title: 'Social Media',
            thumbnailPath: './images/favicon.ico',
            bulletPoints: ['lmao', 'lmao', 'lmao'],
            videoPath: '../videos/social media demo.mp4'
        },
    
        {
            id: '1',
            title: 'React Tarot',
            thumbnailPath: './images/favicon.ico',
            bulletPoints: ['lmao', 'lmao', 'lmao'],
            videoPath: '../videos/tarot%20preview.mp4'
        }
    ]
}

export const ProjectContext = createContext(state)

export const ProjectContextProvider = ({ children }) => {
    return (
        <ProjectContext.Provider value={{
            projects : state.projects,
            featuredProjects: state.featuredProjects
        }} >
            {children}
        </ProjectContext.Provider>
    )
}