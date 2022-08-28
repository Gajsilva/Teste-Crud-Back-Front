import React, { Component} from 'react';
import api from '../services/api';
import { BiEditAlt, BiTrash } from "react-icons/bi";
import './main.css';


class Main extends Component {
    state = {
        posts: [],
    };

    async componentDidMount() {
        const response = await api.get('produtos');

        this.setState({posts: response.data});

    }

    handleDelete = async (id) =>  {
         await api.delete(`/produtos/${id}`)
        
    }

        render() {
        return(
            <section id='post-list'>
                { this.state.posts.map(post =>(
                <article key={post.id}>

                    <div className='post-produtos'>
                        <span id='nomeproduto'>Produto: {post.nome}</span>
                        <span id='nomequantidade'>Qtde: {post.inventory}</span>
                        <button >
                            <BiEditAlt></BiEditAlt>
                        </button>
                            
                        <button
                            onClick={() => this.handleDelete(post.id)}
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