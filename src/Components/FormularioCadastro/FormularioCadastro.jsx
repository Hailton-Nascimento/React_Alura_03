import { Switch, TextField, FormControlLabel, Button } from '@material-ui/core';
import React, { useState } from 'react';



function FormularioCadastro() {
    const [nome, setNome] = useState("Hailton");
    const [sobrenome, setSobrenome]= useState("Nascimento");



    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log(`${nome} ${sobrenome}` );
            }}
        >

            <TextField
            value={nome}
                onChange={(event) => {      
                    let temp = event.target.value;                           
                    if (temp.length > 3) {
                        temp = temp.substr(0, 3);
                        
                    }
                    setNome(temp);
                }}
                id="nome"
                fullWidth
                label="Nome"
                required
                autoCapitalize="true"
                margin="normal"
                variant="outlined"
            />
            <TextField
            value={sobrenome}
             onChange={(event) => {
                setSobrenome(event.target.value);
                console.log(nome);
                if (nome.length > 3) {
                    setSobrenome(sobrenome.substr(0, 3));
                }
            }}
                id="sobrenome"
                fullWidth
                label="Sobrenome"
                autoCapitalize="true"
                required
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="cpf"
                fullWidth
                label="CPF"
                required
                variant="outlined"
                margin="normal"
            />

            <FormControlLabel
                control={
                    <Switch
                        defaultChecked
                        name="promocoes"
                        color="primary"
                    />
                }
                label="Promoções"
            />
            <FormControlLabel
                control={
                    <Switch
                        defaultChecked
                        name="novidades"
                        color="primary"
                    />
                }
                label="Novidades"
            />


            <Button variant="contained" color="primary">
                Cadastrar
            </Button>

        </form >
    );

}

export default FormularioCadastro;