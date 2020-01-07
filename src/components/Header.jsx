import React from 'react';
import '../assets/styles/components/header.scss'

const Header = ()=> (
    <header className="header">
			<img
				src="./assets/logo-platzi-video-BW2.png"
				alt=""
				className="header__img"
			/>
			<div className="header__menu">
				<div className="header__menu--profile">
					<p>Perfil</p>
					<img src="./assets/user-icon.png" alt="" />
				</div>
				<ul>
					<li><a href="">Cuenta</a></li>
					<li><a href="">Cerrar sesión</a></li>
				</ul>
			</div>
		</header>
);
export default Header;