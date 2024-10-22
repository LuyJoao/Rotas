import { Link } from "react-router-dom"; 

function Sobre(){
    return(
        <div>
            <h1>Sobre</h1>

            <Link to='/contato'>Contato</Link>
            <Link to='/home'>Home</Link>
            <Link to='/produto'>Produto</Link>
        </div>
    );
}

export default Sobre;