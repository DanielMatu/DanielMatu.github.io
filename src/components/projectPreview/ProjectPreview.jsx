import './projectPreview.css'

export default function ProjectPreview({ title, thumbnailPath }) {
    return (
        <div className='project'>
            <div className="projectTitle">{title}</div>
            <img className="projectThumbnail" alt='' src={thumbnailPath} />
        </div>
    )
}
