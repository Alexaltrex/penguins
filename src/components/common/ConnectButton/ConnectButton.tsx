import style from './style.module.scss'
import React, {FC} from "react";
import {SvgIcon} from "../SvgIcon/SvgIcon";

export const ConnectButton:FC = () => {
    return (
        <div className={style.outer_wrapper}>
            <SvgIcon icon='icon-go-to-top' />
            <div className={style.wrapper}>
                <button className={style.connectButton}>
                    <span>Connect wallet to Buy</span>
                </button>

            </div>
        </div>


    );
}


