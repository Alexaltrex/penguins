import React, {FC} from 'react';
import style from './style.module.scss';
import stay from '../../../assets/img/stay1.png';
import stay_bgr from '../../../assets/img/stay_bgr.png';
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";

export const StayConnected: FC = () => {
    return (
        <section className={style.stayConnected}>

            <img className={style.img} src={stay} alt=""/>


            <div className={style.bgr_wrapper}>
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