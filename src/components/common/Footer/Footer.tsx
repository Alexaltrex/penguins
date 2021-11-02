import React, {FC} from 'react';
import style from './style.module.scss';
import {SvgIcon} from "../SvgIcon/SvgIcon";

export const Footer: FC = () => {
    return (
        <footer className={style.footer}>
            <p>© 2021 The Penguins.</p>
            <div className={style.social_links}>
                <a href="#">
                    <SvgIcon icon="icon-discord"/>
                </a>
                <a href="#">
                    <SvgIcon icon="icon-twitter"/>
                </a>
            </div>

        </footer>
    );
}