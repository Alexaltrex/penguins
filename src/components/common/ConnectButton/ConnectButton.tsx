import style from './style.module.scss'
import React, {FC} from "react";
import {SvgIcon} from "../SvgIcon/SvgIcon";

export const ConnectButton:FC = () => {
    return (
        <div className={style.outer_wrapper}>
            <a href="#home">
                <SvgIcon icon='icon-go-to-top' />
            </a>

            <div className={style.wrapper}>
                <button className={style.connectButton}>
                    <span>Connect wallet</span>
                </button>

            </div>
        </div>


    );
}


