import React from 'react';

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem () {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/19106040_1320004351440855_1343920671894378555_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=ceWEzo9tRysAX9aLb-D&_nc_ht=scontent.fudi1-1.fna&oh=b3162dc8253570c8337cec3f0f24e700&oe=5F50656A"></img>
            <div>
                <strong>Guilherme Zago</strong>
                <span>React Native</span>
            </div>    
        </header>
        <p>Zago é o cara do código da gurizada sempre disponiveis pra um novo projeto!
            <br /><br />
            É isso memo
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$ 200,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon}/>
                Entrar em Contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem;