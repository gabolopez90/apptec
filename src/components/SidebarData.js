import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const sidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Agregar',
        path: '/agregar',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    }
]