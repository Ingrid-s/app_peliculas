import { useState } from "react";
import { Router } from "react-router-dom";

const Home = () => {
    return (
        <div className="d-flex align-items-center justify-content-center p-5 text-center text-secondary bg-white">
            <div>
                <h2 className="display-5 fw-bold mb-4 text-primary">P&aacute;gina Principal</h2>
                <p className="lead">
                    Bienvenido a la aplicaci&oacute;n. Usa el men&uacute; de navegaci&oacute;n para moverte.
                </p>
                <p className="mt-4 text-sm text-muted">
                    Aqu&iacute; es donde ir&iacute;a el contenido principal de la app :v
                </p>
            </div>
        </div>
    );
}

export default Home;