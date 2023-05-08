import NavBar from "./NavBar"
import logo from "../images/logo.svg"

export default () => {
    return (
        <header>
            <img src={logo} />
            <NavBar />
            <div>
                <button>cart</button>
            </div>
        </header>
    )
}