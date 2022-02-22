import React from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { init } from 'emailjs-com' ;
init( " user_mHtCtPRmfXansncIGdpdq " ) ;
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Adress from '../../img/address.png';
import github from '../../img/github.jpg';
import linkedin from '../../img/linkedin.png';


const schema = yup.object({
    user_lastName: yup.string().max(20).required("Votre prénom est requis"),
    user_firstName: yup.string().max(20).required("Votre nom est requis"),
    user_compagny: yup.string().max(30),
    user_phone: yup.string().max(20).required("Votre numéro de téléphone est requis"),
    user_email: yup.string().email("Merci d'entrer une adresse mail valide").max(255).required("Une adresse mail est requis"),
    user_subject: yup.string().max(255).required("Un sujet est requis"),
    message: yup.string().max(1000).required("Un message est requis"),
  }).required();

const Contact = () => {
    

    const { register, formState: {errors}, handleSubmit } = useForm({
        resolver: yupResolver(schema)
      });
   
      const onSubmit = (data, r) => {
        alert("😀 Merci pour votre message, il sera traité au plus vite 😀");
        const templateId = 'template_8ed58w8';
        const serviceId = 'service_mimumje';
        sendFeedback(serviceId, templateId, {user_lastName: data.user_lastName, user_firstName: data.user_firstName, user_compagny: data.user_compagny, user_phone: data.user_phone, user_email: data.user_email, user_subject: data.user_subject, message: data.message, reply_to: r.target.reset()})
      }
     
      const sendFeedback = (serviceId, templateId, variables) => {
        emailjs
        .send(serviceId, templateId, variables)
        .then(res => {
          console.log('succes')
    
        })
        .catch(err => console.error('oups'))
    
      }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title"> Discutons de votre projet</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className='c-icon' />
                               <p className="c-infos"> 07 87 03 61 37 </p>  
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className='c-icon' />
                            <p className="c-infos"> nonoweb17@gmail.com</p> 
                               
                        </div>
                        <div className="c-info-item">
                            <img src={Adress} alt="" className='c-icon' />
                            <p className="c-infos"> 24 rue des écoles, 17270 Montguyon </p> 
                         </div>
                         <div className="c-info-item">
                         <a className='c-a' href='https://github.com/nono-web' target="_blank"> <img src={github} alt="" className='c-icon' /> </a>
                            <p className="c-infos"> nono-web </p> 
                         </div>
                         <div className="c-info-item">
                         <a className='c-a' href='https://www.linkedin.com/in/arnaud-didier-2343a3205/' target="_blank"><img src={linkedin} alt="" className='c-icon' /> </a>
                            <p className="c-infos"> Arnaud Didier  </p> 
                         </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                     <b>Besoin d'un site internet ?</b> Merci de m'envoyer un mail avec vos coordonnées et votre projet afin que je puisse vous recontacter au plus vite.
                 </p>
                 <form onSubmit={handleSubmit(onSubmit)}>
                     <input 
                     type="text"
                      placeholder="Prenom*" 
                      name="user_lastName"
                      {...register("user_lastName")}
                       />
                       {errors.user_lastName && <p id="c-yup">{errors.user_lastName.message}</p>}
                     <input 
                     type="text"
                      placeholder="Nom*"
                       name="user_firstName"
                       {...register("user_firstName")}
                        />
                        {errors.user_firstName && <p id="c-yup">{errors.user_firstName.message}</p>}
                     <input
                      type="text"
                       placeholder="Société"
                        name="user_compagny" 
                        {...register("user_compagny")}
                        />
                     <input
                      type="text"
                       placeholder="Numero de téléphone"
                        name="user_phone" 
                        {...register("user_phone")}
                        />
                        {errors.user_phone && <p id="c-yup">{errors.user_phone.message}</p>}
                     <input type="text"
                      placeholder="Adresse mail*"
                       name="user_email" 
                       {...register("user_email")}
                       />
                       {errors.user_email && <p id="c-yup">{errors.user_email.message}</p>}
                     <input 
                     type="text"
                     placeholder="Sujet du mail*"
                     name="user_subject" 
                     {...register("user_subject")}
                       />
                       {errors.user_subject && <p id="c-yup">{errors.user_subject.message}</p>}
                     <textarea rows="5" 
                     placeholder='Message*'
                      name="message" 
                      {...register("message")}
                      />
                      {errors.message && <p id="c-yup">{errors.message.message}</p>}
                     <button>Soumettre</button>
                 </form>
            </div>
        </div>
    </div>
    )
}

export default Contact
