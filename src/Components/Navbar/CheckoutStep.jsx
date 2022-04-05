import React from 'react';
import { useNavigate } from 'react-router';
import "./CheckoutStep.css";

export default function CheckoutSteps(props) {
const navigate = useNavigate();

    return (
        <div className='row checkout-steps'>
            <div className={props.step1 ? 'active' : ''} onClick={()=>navigate('/')}>Accueil</div>
            <div className={props.step2 ? 'active' : ''} onClick={()=>navigate('/presentation')}>Presentation</div>
            <div className={props.step3 ? 'active' : ''} onClick={()=>navigate('/prestation')}>Prestation</div>
            <div className={props.step4 ? 'active' : ''} onClick={()=>navigate('/creation')}>Création</div>
            <div className={props.step5 ? 'active' : ''} onClick={()=>navigate('/contact')}>Contact</div>
        </div>
    )
}