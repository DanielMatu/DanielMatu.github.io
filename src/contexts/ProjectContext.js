import { createContext } from 'react'

import projects from '../data/projects'
const state = projects 

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