import React, { Component} from 'react';
import api from '../services/api';
import { BiEditAlt, BiTrash } from "react-icons/bi";
import './main.css';


class Main extends Component {
    state = {
        main: [],
    };

    async componentDidMount() {
        const response = await api.get('produtos');

        this.setState({main: response.data});

    }

    async  deletePost() {
        await api.delete('produtos/:id')
    }

    render() {
        return(
            <section id='post-list'>
                { this.state.main.map(post =>(
                <article>

                    <div className='post-produtos'>
                        <span id='nomeproduto'>Produto: {post.nome}</span>
                        <span id='nomequantidade'>Qtde: {post.inventory}</span>
                        <button >
                            <BiEditAlt></BiEditAlt>
                        </button>
                            
                        <button
                            onClick={() => this.deletePost()}
                        >
                            <BiTrash>
                            </BiTrash>
                        </button>
                    </div>
                </article>
                ))}
            </section>
        )
    }
}

export default Main;