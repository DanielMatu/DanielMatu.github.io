import './home.css'
import ProjectPreview from '../../components/projectPreview/ProjectPreview'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'

export default function Home() {

    const { projects, featuredProjects } = useContext(ProjectContext)
    return (
        <>
            <div className='topInfo'>
                <div className="topName">Daniel Matu</div>
                <div className="topDesc">danielmatu859@gmail.com</div>
            </div>

            <div className="featuredSection">
                <div className="sectionTitle">Featured</div>
                <div className="featuredProjects">
                    {
                        featuredProjects.map(project => (
                            <Link key={project.id} to = {'/projects/' + project.id} style={{textDecoration: 'none'}}>
                                <ProjectPreview title={project.title} thumbnailPath={project.thumbnailPath} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

