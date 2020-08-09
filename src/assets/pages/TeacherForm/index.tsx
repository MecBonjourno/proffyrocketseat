import React , { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import './styles.css'

import PageHeader from '../../../components/PageHeader';
import Input from '../../../components/Input';

import warningIcon from '../../images/icons/warning.svg'
import Textarea from '../../../components/TextArea';
import Select from '../../../components/Select';
import api from '../../../services/api';


function TeacherForm(){
    const history = useHistory();

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')


    const [scheduleItems, setScheduleItems] = useState([ 
        { week_day: 0, from: '', to: '',}
    ]);

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {  name,avatar,whatsapp,bio,subject,cost: Number(cost), schedule: scheduleItems}).then(()=>{
            alert('Feito!')

            history.push('/');
        }).catch(()=>{
            alert('Erro!')
        })

        // console.log({
           
        // })
    }

    function setScheduleItemValue(position: number, field: string, value: string) { 
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index)=> { 
            if(index ===position){
                    return{...scheduleItem, [field]: value }
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItems);
    }

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
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend> Seus Dados</legend>

                    <Input name="name" label="Nome completo" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    <Input name="avatar" label="Avatar" value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/>
                    <Input name="whatsapp" label="WhatsApp" value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}} />
                    <Textarea name="bio" label="Bio"  value={bio} onChange={(e)=>{setBio(e.target.value)}} />
                </fieldset>
                <fieldset>
                <legend>Sobre a Aula</legend>

                <Select 
                name="subject" 
                label="Matéria" 
                value={subject}
                onChange={(e)=>{setSubject(e.target.value)}}
                options={[ 
                    { value: 'Artes', label: 'Artes' }, 
                    { value: 'Ciências', label: 'Ciências' }, 
                    { value: 'Biologia', label: 'Biologia' }, 
                    { value: 'Educação Física', label: 'Educação Física' }, 
                    { value: 'Geografia', label: 'Geografia' }, 
                    { value: 'Física', label: 'Física' }, 
                    { value: 'História', label: 'História' }, 
                    { value: 'Matemática', label: 'Matemática' }, 
                    { value: 'Português', label: 'Português' }, 
                    { value: 'Química', label: 'Química' }, 
                    { value: 'Inglês', label: 'Inglês' }, 
                    ]}/>
                <Input name="cost" label="Custo da hora-aula" value={cost} onChange={(e) => {setCost(e.target.value)}}/>
                </fieldset>
                <fieldset>
                    <legend>Horarios disponiveis
                    <button type="button" onClick={addNewScheduleItem}>
                        + Novo Horário
                    </button>
                    </legend>

                    {scheduleItems.map((scheduleItem, index) => {
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                        <Select
                            name="week_day" 
                            label="Dia da Semana" 
                            value={scheduleItem.week_day}
                            onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                            options={[ 
                            { value: '0', label: 'Domingo' }, 
                            { value: '1', label: 'Segunda' }, 
                            { value: '2', label: 'Terça' }, 
                            { value: '3', label: 'Quarta' }, 
                            { value: '4', label: 'Quinta' }, 
                            { value: '5', label: 'Sexta' }, 
                            { value: '6', label: 'Sábado' }, 
                            ]}/>
                            <Input name="from" label="Das" type="time" value={scheduleItem.from} onChange={e => setScheduleItemValue(index, 'from', e.target.value)}/>
                            <Input name="to" label="Até" type="time" value={scheduleItem.to} onChange={e => setScheduleItemValue(index, 'to', e.target.value)}/>
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
                    <button type="submit" >
                        Salvar Cadastro
                    </button>
                </footer>
            </form>
            </main>
        </div>
    )
}

export default TeacherForm;