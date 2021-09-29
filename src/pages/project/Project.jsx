import './project.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'


export default function Project() {

    const { projects, featuredProjects } = useContext(ProjectContext)
    const params = useParams()
    const [currentProject, setCurrentProject] = useState()

    useEffect(() => {
        let foundProject
        foundProject = projects.find(project => project.id === params.projectId)
        if (foundProject === undefined) {
            foundProject = featuredProjects.find(featuredProject => featuredProject.id === params.projectId)
        }
        setCurrentProject(foundProject)
    }, [params])


    return (
        <div>
            <div className="videoSection">
                <div className="videoLabel">Demo</div>
                <video autoPlay muted controls className='video'>
                    <source src={currentProject?.videoPath} type="video/mp4" />
                </video>
            </div>
            {console.log('heres current project')}
            {console.log(currentProject)}
            <ul className="descriptionNotes">
                {currentProject?.bulletPoints.map((bulletPoint, i) => (
                    <li key={i}>
                        {bulletPoint}
                    </li>
                ))}
            </ul>
        </div>
    )
}
