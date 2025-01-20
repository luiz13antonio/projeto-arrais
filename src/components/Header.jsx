import logo from "../assets/logo-arrais.webp"
const Header = () => {
    return (
        <header className="w-2/12 h-screen p-4 border-r">
            <img 
                src={logo} 
                alt="Arrais Veículos" 
                className="m-auto"
            />
        </header>
    );
}
 
export default Header;