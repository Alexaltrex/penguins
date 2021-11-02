import React, {FC} from 'react';
import style from './style.module.scss';
import background_penguin from '../../../assets/img/background_penguin.png';
import stay_bgr from '../../../assets/img/stay_bgr.png';
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";

export const StayConnected: FC = () => {
    return (
        <section className={style.stayConnected}>

            <img className={style.background_penguin} src={background_penguin} alt=""/>

            <div className={style.bgr_ice}>
                <img className={style.stayConnected}
                     src={stay_bgr}
                     alt=""
                />
            </div>

            <h2 className={style.title}>STAY CONNECTED</h2>
            <button>
                <SvgIcon icon='icon-twitter'/>
                <span>Follow the Penguins</span>
            </button>
            <button>
                <SvgIcon icon='icon-discord'/>
                <span>join the Penguins</span>
            </button>

        </section>
    );
}