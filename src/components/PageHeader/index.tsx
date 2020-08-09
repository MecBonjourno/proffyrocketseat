import React from 'react';

import './styles.css'

import { Link } from 'react-router-dom';

import backicon from '../../assets/images/icons/back.svg'
import logoimg from '../../assets/images/logo.svg'

interface PageHeaderPros {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderPros> = (props) => {
    return (
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backicon} alt="back"/>
            </Link>
            <img src={logoimg} alt="Proffy"/>
        </div>
        <div className="header-content">
          <strong> {props.title}</strong>

         { props.description && <p>{props.description}</p>}

        {props.children}
        </div>

    </header>
    )
}

export default PageHeader;