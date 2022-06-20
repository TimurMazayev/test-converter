import React from 'react';
import './styles.css'

const Footer = () => {
    return (
        <div className='footer_wrapper'>
            <h4>API used for currency rate</h4>
            <a className='footer_link' href='https://exchangerate.host/#/' target="_blank">Exchangerate.host</a>
        </div>
    );
};

export default Footer;