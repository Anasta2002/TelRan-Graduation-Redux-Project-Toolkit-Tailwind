import React from 'react'
import Instagramm from '../../assets/icons/Instagramm'
import s from './Footer.module.css'
import { Link } from 'react-router-dom'
import Phone from '../../assets/icons/Phone'
import Facebook from '../../assets/icons/Facebook'
import Twitter from '../../assets/icons/Twitter';
import Messager from '../../assets/icons/Messager'
import Container from '../UI/Container/Container'

export default function Footer() {
  return (
    <div className={s.footer_wrapper}>
        <Container>
            <div className={s.footer}>
                <div className={s.side_part}>
                    <p className='h4'>Contact us</p>
                    <div className='flex'>
                        <a href="tel:+49 999 999 99 99" className={s.contact_icon}><Phone /></a>
                        <Link to={'https://web.facebook.com/'} className={s.contact_icon}><Facebook /></Link>
                        <Link to={'https://www.instagram.com/'}  className={s.contact_icon}><Instagramm /></Link>     
                        <Link to={'https://www.twitter.com/'}  className={s.contact_icon}><Twitter /></Link>       
                        <Link to={'https://www.messenger.com/'}  className={s.contact_icon}><Messager /></Link>                 
                    </div>
                </div>
                <div className={s.side_part}>
                    <p className='h4'>Address</p>
                    <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                    <p>Working Hours: 24 hours a day</p>
                </div>
            </div>  
        </Container>  
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.402683339232!2d13.372396477620809!3d52.508051237112966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1695403201082!5m2!1sru!2sde" width="100%" height="600" className={s.footer_map}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
    </div>
  )
}
