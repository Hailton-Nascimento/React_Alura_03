
import { Component } from 'react';
import '../src/assets/App.css';
import FormularioCadastro from './Components/FormularioCadastro';
class App extends Component {
  render() {
    return (
      <frameElement>
        <h1>Formulario de Cadastro</h1>
        <FormularioCadastro/>

      </frameElement>
    );
  }

}

export default App;
