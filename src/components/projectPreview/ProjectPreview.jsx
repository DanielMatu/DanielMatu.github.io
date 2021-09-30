import './projectPreview.css'

export default function ProjectPreview({ title, thumbnailPath, isFeatured }) {
    return (
        <div className='project'>
            <div className="projectTitle">
                {title}
                {isFeatured &&
                    <span className="featuredMark">&nbsp;*</span>
                }
            </div>
            <img className="projectThumbnail" alt='' src={thumbnailPath} />
        </div>
    )
}
