import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss'
import Logos from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'


interface SideBarProps {

}

export const SideBar: React.FC<SideBarProps> = ({ }) => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' >qsdqdqs
                <img src={Logos} alt="logo" />
                <img src={LogoSubtitle} className="sub-logo" alt="logo" />
            </Link>
        </div>
    );
}