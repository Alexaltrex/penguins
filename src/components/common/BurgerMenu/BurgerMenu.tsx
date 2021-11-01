import React, {FC} from 'react';
import style from './style.module.scss'
import thePenguins from "../../../assets/img/ThePenguins.png";
import {links} from "../../App/Home/Menu/Menu";
import clsx from "clsx";
import {SvgIcon} from "../SvgIcon/SvgIcon";

export interface IBurgerMenu {
    isOpen: boolean
    onClickHandler: () => void
}

export const BurgerMenu: FC<IBurgerMenu> = ({isOpen, onClickHandler}) => {
    return (
        <div
            className={clsx({
                [style.burgerMenu]: true,
                [style.burgerMenu_open]: isOpen,
            })}

        >
            <img className={style.logo}
                 src={thePenguins}
                 alt="the Penguins"/>

                 <div className={style.links}>
                {
                    links.map(
                        link => (
                            <a className={style.link}
                               key={link.slug}
                               href={`#${link.slug}`}
                               onClick={onClickHandler}
                            >
                                {link.title}
                            </a>
                        )
                    )
                }
            </div>

            <div className={style.social_links}>
                <a href="#">
                    <SvgIcon icon="icon-discord"/>
                </a>
                <a href="#">
                    <SvgIcon icon="icon-twitter"/>
                </a>
            </div>

        </div>
    );
}


