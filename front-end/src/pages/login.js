import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [cpf, setCpf] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const route = await axios.post("http://localhost:3000/users/login", { cpf, password: pass })
            console.log("Usuário logado com sucesso!")
            props.setId(route.data.id)
            navigate("/schedule")
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="cpf">CPF</label>
                <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="number" placeholder="Digite seu CPF" id="cpf" name="cpf" />
                <label htmlFor="password">Senha</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => navigate("/register")}>Não possui uma conta? Clique aqui.</button>
        </div>
    )
}



export default Login