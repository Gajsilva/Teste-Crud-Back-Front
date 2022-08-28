import React, { useState} from 'react';

import api from '../services/api';

import './produto.css'

export default function Produto() {

    const [nome, setNome] = useState('');
    const [inventory, setInventory] = useState('');
    
    async function handleSubmit(e)  {
        e.preventDefault();

        const data = {
            nome,
            inventory,
        }

        await api.post('produtos', data)

        this.props.history.push('/')
    };

     
        return(
            
            <form action="" id="produto" onSubmit={handleSubmit} >
                
                <input 
                    type="text"
                    name="nome"
                    placeholder="Nome do produto"
                    onChange={e=>setNome(e.target.value)}
                    value={nome}
                    
                />
                <input 
                    type="text"
                    name="inventory"
                    placeholder="Quantidade"
                    onChange={e=>setInventory(e.target.value)}
                    value={inventory}
                    
                />
                <button type= "submit">Enviar</button>
            </form>

            
        )
    
}
