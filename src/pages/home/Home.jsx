import './home.css'
import ProjectPreview from '../../components/projectPreview/ProjectPreview'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'
import Topbar from '../../components/topbar/Topbar'

export default function Home() {

    const { projects, featuredProjects } = useContext(ProjectContext)
    return (
        <>
            <Topbar />

            <div className="featuredSection">
                <div className="sectionTitle">Featured Projects <span className="featuredMark">*</span> </div>
                <hr />
                <br />
                <div className="featuredProjects">
                    {
                        featuredProjects.map(project => (
                            <Link key={project.id} to={'/projects/' + project.id} style={{ textDecoration: 'none' }}>
                                <ProjectPreview title={project.title} thumbnailPath={project.thumbnailPath} isFeatured={true} />
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="projectSection">
                <div className="sectionTitle">Projects</div>
                <hr />
                <br />

                <div className="projects">
                    {
                        projects.map(project => (
                            <Link key={project.id} to={'/projects/' + project.id} style={{ textDecoration: 'none' }}>
                                <ProjectPreview title={project.title} thumbnailPath={project.thumbnailPath} isFeatured={false} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

