import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Input } from "antd";
import { useContext, useRef } from "react";
import { LoginContext } from "../contexts/LoginContext";

const Login = () => {

    const usuarioValue = useRef();
    const senhaValue = useRef();
    const { setUsuario } = useContext(LoginContext);

  async function login() {

        const usuario = usuarioValue.current.input.value;
        const senha = senhaValue.current.input.value;
        if (usuario == '') {
            alert("Digite o seu usuario")
            return;
        }
        if (senha == '') {
            alert("Digite a senha")
            return;
        }
        const request = await fetch("http://projeto-arrais-api.onrender.com/usuario/login", {
            method: "POST",
            Headers: {"content-type":"aplication/json"},
            body: JSON.stringify({ usuario, senha})
        });
        const response = await request.json();

        if(response){
            setUsuario(response);
            sessionStorage.setItem("usuario", JSON.stringify(response))
        }

    }
    return (
        <div className="h-screen flex justify-center items-center">
            <form className="w-1/4 p-4 border rounded">
                <Input
                    ref={usuarioValue}
                    className="mb-3"
                    placeholder="email@email.com"
                    prefix={
                        <UserOutlined className="text-black/25" />
                    }
    
                />
                <Input.Password
                    ref={senhaValue}
                    className="mb-3"
                    placeholder="input password"
    
                />
                <Button
                    type="primary"
                    className="bg-laranja hover:!bg-laranja2 w-full"
                    onClick={login}
                >
                    Entrar
                </Button>
                <Button
                    className="mt-4 w-full hover:bg-gray-200"
                    href="/"
                >
                    voltar
                </Button>
            </form>
        </div>
    );
}



export default Login;