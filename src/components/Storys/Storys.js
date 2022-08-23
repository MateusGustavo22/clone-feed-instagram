import "./Storys.css"
import ney from "./ney.jpg"

function Storys(props) {
  return (
      <div className="story">
        <div className="perfil">
          <div className="user_foto">
            <img src={props.perfil}/>
          </div>
        </div>
        <div className="userName">
          <span>{props.nome}</span>
        </div>
      </div>
  )
}

export default Storys