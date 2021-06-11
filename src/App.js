
import { Component } from 'react';
import '../src/assets/App.css';
import FormularioCadastro from './Components/FormularioCadastro';
import { Container } from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <h1>Formulario de Cadastro</h1>
        <FormularioCadastro />
      </Container>
    );
  }

}

export default App;
