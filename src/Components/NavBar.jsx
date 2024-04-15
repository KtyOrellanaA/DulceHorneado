import logo from "../assets/LOGO_DulceHorneado_LOGO_DulceHorneado_Color_Horizontal.png";
import MenuTextStyle from "../Components/MenuTextStyle";
import CartWidget from "./CartWidget";

const NavBar = () => {

    let texto1 = "INICIO"
    let texto2 = "TORTAS"
    let texto3 = "POSTRES"
    let texto4 = "EMPANADAS"
    let texto5 = "BOCADITOS"
    let texto6 = "PANADERÍA"
    let texto7 = "LOCALES"
    let texto8 = "CONTÁCTANOS"

    return (
        <div className="container-fluid">
            {/* Aquí va el LOGO*/}
            <div className="row p-2">
                <div className="col"></div>
                <div className="col-md-10 text-center">
                    <a href="#">
                        <img src={logo} alt="Dulce Horneado" width={400} />
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            {/* Aquí inicia las opciones de menú */}
            <div className="row colorRojizoFondo" >
                <ul className="nav justify-content-center">
                    <li className="nav-item"><MenuTextStyle texto={texto1} /></li>
                    <li className="nav-item"><MenuTextStyle texto={texto2} /></li>
                    <li className="nav-item"><MenuTextStyle texto={texto3} /></li>
                    <li className="nav-item"><MenuTextStyle texto={texto4} /></li>
                    <li className="nav-item"><MenuTextStyle texto={texto5} /></li>
                    <li className="nav-item"><MenuTextStyle texto={texto6} /></li>
                    <li className="nav-item"><MenuTextStyle texto={texto7} /></li>
                    <li className="nav-item"><MenuTextStyle texto={texto8} /></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;