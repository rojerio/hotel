import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


function App() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação, se necessário
    navigate('/Home'); // Redireciona para a página inicial ou para onde desejar
  };

  const handleRegister = () => {
    navigate('/Register'); // Redireciona para a página de cadastro
  };

  return (
    <>
      <div className="container">
        <div className="align">
          <h1>LOGO</h1>
          <h4>Gmail</h4>
          <input type="email" placeholder='Gmail' />
          <h4>Senha</h4>
          <input type="password" placeholder='Senha' />
        </div>
        <div className="link">
          <button onClick={handleLogin}>ENTRAR</button>
          <p>Não é registrado ainda? <a className='a' onClick={handleRegister}>Cadastrar-se</a></p>
        </div>
      </div>
    </>
  );
}

export default App;