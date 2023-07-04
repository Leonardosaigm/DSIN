import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/register.css"


const Register = (props) => {
    const [cpf, setCpf] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.post("http://localhost:3000/users/", { fullName: name, cpf, password: pass })
            console.log("Usuário cadastrado com sucesso!")
            navigate("/login")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="auth-form-container">
            <h2>Formulário de Cadastro</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nome Completo</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome completo" id="name" name="name" />
                <label htmlFor="cpf">CPF</label>
                <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="number" placeholder="Digite seu CPF" id="cpf" name="cpf" />
                <label htmlFor="password">Senha</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" />
                <button type="submit">Cadastrar</button>
            </form>
            <button className="link-btn" onClick={() => navigate("/login")} >Já possui uma conta? Clique aqui.</button>
        </div>
    )
}

export default Register