import './App.css'

function App() {

  return (
    <>
    <div className="container">
      <div className="aling">
        <h1>LOGO</h1>
        <h4>Gmail</h4>
        <input type="email" placeholder='Gmail'/>
        <h4>Senha</h4>
        <input type="password" placeholder='Senha'/>

      </div>
      <div className="link">
        <button>ENTRAR</button>

        <p>Não é registrado ainda ? <a className='a'>Cadastrar-se</a></p>
      </div>
    </div>
    </>
  )
}

export default App