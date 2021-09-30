import './project.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'
import { Link } from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'


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
        <>
            <Topbar />
            <div className="githubSection">
                <div className="projectPageTitle">{currentProject?.title}</div>
                <a className='githubLink' href={currentProject?.repoUrl}>repository</a>
                &nbsp;
                &nbsp;
                &nbsp;
                <a className='githubLink' href={currentProject?.website}>site </a>
            </div>
            {
                currentProject?.videoPath !== 'none' &&
                <div className="videoSection">
                    <video autoPlay muted controls className='video'>
                        {
                            currentProject &&
                            <source src={currentProject.videoPath} type="video/mp4" />

                        }
                        Your browser does not support the video tag.
                    </video>
                </div>
            }

            {
                currentProject?.videoPath === 'none' &&
                 <div> &nbsp; &nbsp; &nbsp; Preview not available.</div>
            }

            <div className="descriptionSection">
                <div className="descriptionHeader">Skills Used:</div>
                <ul className="descriptionNotes">
                    {currentProject?.bulletPoints.map((bulletPoint, i) => (
                        <li className='descriptionBullets' key={i}>
                            {bulletPoint}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
