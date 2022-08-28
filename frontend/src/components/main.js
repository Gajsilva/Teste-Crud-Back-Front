import React, { Component} from 'react';
import api from '../services/api'
import './main.css'

class Main extends Component {
    state = {
        main: [],
    };

    async componentDidMount() {
        const response = await api.get('produtos');

        this.setState({main: response.data});

    }

    render() {
        return(
            <section id='post-list'>
                { this.state.main.map(post =>(
                    <article>
                    <header>
                        <span id='nomeproduto'>Produto: {post.nome}</span>
                        <span id='nomequantidade'>Qtde: {post.inventory}</span>
                    </header>

                    <footer>

                    </footer>
                </article>
                ))}
            </section>
        )
    }
}

export default Main;