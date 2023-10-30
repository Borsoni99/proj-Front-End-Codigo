import { Link } from "react-router-dom";
import LinkSegundo from "../components/LinkSegundo";

const Primeiro = () => {
    return (<div>
                <h5>Mini título</h5>
                <LinkSegundo/>
                <Link to="listagem">Listagem</Link>
                <Link to="mapa">Mapa</Link>                
            </div>
            );
};

export default Primeiro;