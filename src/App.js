import "./App.css"
import Header from "./components/header/Header"
import Storys from "./components/Storys/Storys"
import Feed from "./components/Feed/Feed"
import tnt from "./imagens/posts/tnt.jpg"
import tnt_post from "./imagens/posts/tnt_post.jpg"
import messi_perfil from "./imagens/posts/messi_perfil.jpg"
import messi_post from "./imagens/posts/messi_post.jpg"
import cr7_perfil from "./imagens/posts/cr7_perfil.jpg"
import cr7_post from "./imagens/posts/cr7_post.jpg"
import ney_perfil from "./imagens/posts/ney.jpg"
import ney_post from "./imagens/posts/ney_post.jpg"

function App() {
  return (
    <div className="insta">
     <Header />
     <div className="storys_area">
       <Storys nome="neymarjr" perfil={ney_perfil}/>
       <Storys nome="leomessi" perfil={messi_perfil}/>
       <Storys nome="tntsports" perfil={tnt}/>
       <Storys nome="cristiano" perfil={cr7_perfil}/>
     </div>
     <Feed nome="tntsportsbr" perfil={tnt} post={tnt_post} curtidas="17483 curtidas" />
     <Feed nome="leomessi" perfil={messi_perfil} post={messi_post} curtidas="264782 curtidas" />
     <Feed nome="cristiano" perfil={cr7_perfil} post={cr7_post} curtidas="168373 curtidas" />
     <Feed nome="neymarjr" perfil={ney_perfil} post={ney_post} curtidas="628390 curtidas"  />
    </div>
  )
}

export default App