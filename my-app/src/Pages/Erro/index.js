import { Link } from "react-router-dom"; 

function Erro(){
    return(
        <div>
            <h1>Pagina Erro</h1>

            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>
            <Link to='/produto'>Produto</Link>
        </div>
    );
}

export default Erro;