import React from 'react';

import './styles.css'

import PageHeader from '../../../components/PageHeader';

// import whatsappIcon from '../../images/icons/whatsapp.svg'
import TeacherItem from '../../../components/TeacherItem';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes Proffys estão disponiveis">
                <form id="search-teachers">
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
                    <Select 
                name="week_dat" 
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
                    <Input type="time" name="Time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>

        </div>
    )
}

export default TeacherList;