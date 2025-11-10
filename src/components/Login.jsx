import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Intentando Iniciar sesion como: ${username}.`);
        console.log('Usuario:', username, 'Contrasenia:', password);

        setTimeout(() =>  setMessage(''), 3000);
    };

    return (
        <div className="col-12">
            <div className="card shadow-lg rounded-3 border-top border-primary border-5">
                <div className="card-body p-4 p-md-5">
                    <h4 className="card-title fw-bold text-dark text-center mb-4">Inicia sesi&oacute;n</h4>
                    {message && (
                        <div className="alert alert-success border-start border-4 border-success mb-4" role="alert">
                            <p className="fw-bold m-0">Informaci&oacute;n de Intento</p>
                            <p className="m-0">{message}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-12">
                            <label className="form-label fw-semibold text=secondary">
                                Nombre de Usuario
                            </label>
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-control"
                                placeholder="usuario@ejemplo.com" />
                        </div>
                        <div className="col-12">
                            <label className="form-label fw-semibold text=secondary">
                                Contrasenia
                            </label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder="*********" />
                        </div>
                        <div className="col-12 mt-4">
                            <button type="submit" className="btn btn-primary btn-lg w-100 shadow-sm">
                                Acceder
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;