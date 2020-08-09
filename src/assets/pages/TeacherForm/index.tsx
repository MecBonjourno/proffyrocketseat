import React , { useState } from 'react';

import './styles.css'

import PageHeader from '../../../components/PageHeader';
import Input from '../../../components/Input';

import warningIcon from '../../images/icons/warning.svg'
import Textarea from '../../../components/TextArea';
import Select from '../../../components/Select';


function TeacherForm(){
    const [scheduleItems, setScheduleItems] = useState([ 
        { week_day: 0, from: '', to: '',}
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0, from: '', to: '',
            }
        ]);
        
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Vem dar Aulas com a gente!"
            description="O primeiro passo é se inscrever!"
            />

            <main>
                <fieldset>
                    <legend> Seus Dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Bio" />
                </fieldset>
                <fieldset>
                <legend>Sobre a Aula</legend>

                <Select 
                name="subject" 
                label="Matéria" 
                options={[ 
                    { value: 'Artes', label: 'Artes' }, 
                    { value: 'Ciências', label: 'Ciências' }, 
                    { value: 'Biologia', label: 'Biologia' }, 
                    { value: 'Educação Física', label: 'Educação Física' }, 
                    { value: 'Geografia', label: 'Geografia' }, 
                    { value: 'Física', label: 'Física' }, 
                    { value: 'História', label: 'História' }, 
                    { value: 'Matemática', label: 'Matemáticamatemática' }, 
                    { value: 'Português', label: 'Português' }, 
                    { value: 'Química', label: 'Química' }, 
                    { value: 'Inglês', label: 'Inglês' }, 
                    ]}/>
                <Input name="cost" label="Custo da hora-aula" />
                </fieldset>
                <fieldset>
                    <legend>Horarios disponiveis
                    <button type="button" onClick={addNewScheduleItem}>
                        + Novo Horário
                    </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                        <Select
                            name="week_day" 
                            label="Dia da Semana" 
                            options={[ 
                            { value: '0', label: 'Domingo' }, 
                            { value: '1', label: 'Segunda' }, 
                            { value: '2', label: 'Terça' }, 
                            { value: '3', label: 'Quarta' }, 
                            { value: '4', label: 'Quinta' }, 
                            { value: '5', label: 'Sexta' }, 
                            { value: '6', label: 'Sábado' }, 
                            ]}/>
                            <Input name="from" label="Das" type="time"/>
                            <Input name="to" label="Até" type="time"/>
                         </div>
                        )
                    })
                    } 
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} />
                        Importante! <br />
                        Preencha todos os Dados!
                    </p>
                    <button type="button" >
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;