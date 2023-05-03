import React from 'react';
import cl from './PagesHeader.module.css'

const PagesHeader = (props) => {
	return (
<header className={cl.header} >{props.title}</header>
	);
};

export default PagesHeader;