import React, {FC} from 'react';
import burger_nav from '../../../assets/img/burger_nav.png'
import style from './style.module.scss'

export interface IBurgerButton {
    onClickHandler: () => void
}

export const BurgerButton: FC<IBurgerButton> = ({onClickHandler}) => {
    return (
        <button className={style.burgerButton}
                onClick={onClickHandler}
        >
            <img src={burger_nav} alt=""/>
        </button>
    );
}


