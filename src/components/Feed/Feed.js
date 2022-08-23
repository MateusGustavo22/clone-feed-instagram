import "./Feed.css"
import { IoMdMore } from "react-icons/io"
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa"
import { FaRegBookmark } from "react-icons/fa"
import { FaRegPaperPlane } from "react-icons/fa"

function Feed(props) {
  return (
    <div className="feed">
      <div class="user_post">
        <div className="perfil_do_post">
          <div className="perfil_photo">
            <img src={props.perfil}/>
          </div>
          <div className="perfil_name">
            <span>{props.nome}</span>
          </div>
        </div>
        <div className="menu_post">
          <IoMdMore />
        </div>
      </div>
      <div className="post_photo">
        <img src={props.post} />
      </div>
      <div className="post_interations">
        <div className="interations">
          <div className="like">
            <FiHeart />
          </div>
          <div className="coment">
            <FaRegComment />
          </div>
          <div className="directChat">
            <FaRegPaperPlane />
          </div>
        </div>
        <div className="savePost">
          <FaRegBookmark />
        </div>
      </div>
      <div className="likes_count">
        <span>{props.curtidas}</span>
      </div>
    </div>
  )
}

export default Feed