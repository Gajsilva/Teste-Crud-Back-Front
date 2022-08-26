import React, { Component} from "react";

import './produto.css'

class Produto extends Component{
    state = {
        name: '',
        inventory:'',
    }

    render() {
        return(
            
            <form action="" id="produto" onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="nome"
                    placeholder="Nome do produto"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <input 
                    type="text"
                    name="inventory"
                    placeholder="Quantidade"
                    onChange={this.handleChange}
                    value={this.state.inventory}
                />
                <button type= "submit">Enviar</button>
            </form>

            
        )
    }
}
export default Produto;