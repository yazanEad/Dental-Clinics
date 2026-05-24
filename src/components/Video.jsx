import { AiFillCaretRight } from "react-icons/ai"
import { Link } from "react-router-dom"

function Video({video}) {
  return (
    <div>
      <div className="container-fluid container-lg">
              <div className="video-wrapper">
                <video
                  className="video-element"
                  src={video} 
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <Link to="https://www.youtube.com/" className="video-icon">
                  <AiFillCaretRight />
                </Link>
              </div>
            </div>
    </div>
  )
}

export default Video
