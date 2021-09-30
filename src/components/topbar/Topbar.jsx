import './topbar.css'
import { Link } from 'react-router-dom'

export default function Topbar() {
    return (
        <div>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="logo">Home</span>
                    </Link>
                </div>
                
                <div className="topbarRight">
                    <div className="infoContainer">
                        <div className="name">Daniel Matu</div>
                        <div className="email">danielmatu859@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
