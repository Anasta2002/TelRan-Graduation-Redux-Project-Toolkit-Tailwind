import { Link, useLocation } from "react-router-dom"
import s from './Breadcrumbs.module.css'
import React from "react"
import Container from "../Container/Container"
import BreadcrumbsIcon from "../../../assets/icons/Breadcrumbs"

export default function Breadcrumbs() {
    const location = useLocation();
    const pathParts = location.pathname.split('/').filter(part => part !== '');
    const homepage = location.pathname === '/'

    const crumbs = pathParts.map((part, index) => {
        const path = `/${pathParts.slice(0, index + 1).join('/')}`;
        const isLastCrumb = index === pathParts.length - 1;

        return (
            <div className={s.crumb} key={path}>
                <Link to={path}>
                    {part}
                </Link>
                {!isLastCrumb && (
                    <BreadcrumbsIcon />
                )}
            </div>
        );
    });

    return (
        <Container>
            <div className={s.breadcrumbs}>
                { !homepage && 
                    <>
                        <Link to={'/'}>Home </Link>
                        <BreadcrumbsIcon />
                    </>
                }
                {crumbs}
            </div>
        </Container>
    );
}









