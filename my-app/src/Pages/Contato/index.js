import { Link } from "react-router-dom"; 

function Contato(){
    return(
        <div>
            <h1>Telefone: 42 9 9822-7372</h1>

            <Link to='/sobre'>Sobre</Link>
            <Link to='/home'>Home</Link>
            <Link to='/produto'>Produto</Link>
        </div>
    );
}

export default Contato;