import { Link } from "react-router-dom"; 

function Produto(){
    return(
        <div>
            <h1>Produtos:</h1>
            <h1>Dragon Ball Sparking Zero</h1>
            <h1>Cuphead</h1>
            <h1>Minecraft</h1>

            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>
            <Link to='/home'>Home</Link>
        </div>
    );
}

export default Produto;