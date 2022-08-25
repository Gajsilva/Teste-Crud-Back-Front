import React, { Component} from "react";

import './produto.css'

class Main extends Component{
    state = {
        name: '',
        inventory:'',
    }

    render() {
        return(
            
            <form action="" id="main" onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Nome do produto"
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
export default Main;