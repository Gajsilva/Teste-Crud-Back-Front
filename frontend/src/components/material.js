import React, { Component} from 'react';

import './material.css'

class Material extends Component{
    state = {
        name: '',
        inventory:'',
    }

    render() {
        return(
            
            <form action="" id="material" onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="nome"
                    placeholder="Nome do Material"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <input 
                    type="text"
                    name="Material"
                    placeholder="Quantidade"
                    onChange={this.handleChange}
                    value={this.state.inventory}
                />
                <button type= "submit">Enviar</button>
            </form>

            
        )
    }
}
export default Material;