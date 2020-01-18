import React from 'react';
import '../assets/styles/components/header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
	<header className="header">
		<img
			src={logo}
			alt=""
			className="header__img"
		/>
		<div className="header__menu">
			<div className="header__menu--profile">
				<p>Perfil</p>
				<img src={userIcon} alt="" />
			</div>
			<ul>
				<li><a href="">Cuenta</a></li>
				<li><a href="">Cerrar sesión</a></li>
			</ul>
		</div>
	</header>
);
export default Header;