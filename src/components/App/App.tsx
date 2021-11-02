import React, {FC, useState} from 'react';
import './style.module.scss';
import {Home} from "./Home/Home";
import style from './style.module.scss'
import {PreSale} from "./PreSale/PreSale";
import background_desktop from '../../assets/img/background_desktop.jpg';
import desktop_ice_left_1 from '../../assets/img/desktop_ice_left_1.png';
import desktop_ice_right_1 from '../../assets/img/desktop_ice_right_1.png';
import gorizont_ice from '../../assets/img/gorizont_ice.png';
import {About} from "./About/About";
import {Rarity} from "./Rarity/Rarity";
import {BurgerMenu} from "../common/BurgerMenu/BurgerMenu";
import {BurgerButton} from "../common/BurgerButton/BurgerButton";
import {Roadmap} from "./Roadmap/Roadmap";
import {StayConnected} from "./StayConnected/StayConnected";
import {Footer} from "../common/Footer/Footer";
import {ConnectButton} from "../common/ConnectButton/ConnectButton";
import about_ice_mobile from "../../assets/img/gorizont_ice.png";
import {Modal} from "../common/Modal/Modal";

export const App: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const onClickHandler = () => setIsOpen(!isOpen)

    return (
        <div className={style.app}
             style={
                 isOpen || showModal
                     ? {
                         overflow: "hidden"
                     }
                     : {}
             }
        >
            <BurgerMenu isOpen={isOpen}
                        onClickHandler={onClickHandler}
            />
            <BurgerButton onClickHandler={onClickHandler}/>
            <div className={style.background_mobile}>
                <div className={style.sky}/>
                <div className={style.water}/>
            </div>

            <ConnectButton/>

            <img className={style.about_ice_mobile}
                 src={about_ice_mobile}
                 alt=""/>

            <div className={style.background_desktop}>
                <img className={style.main}
                     src={background_desktop}
                     alt=""/>

                <img className={style.gorizont_ice}
                     src={gorizont_ice}
                     alt=""/>
                <img className={style.desktop_ice_left_1}
                     src={desktop_ice_left_1}
                     alt=""/>
                <img className={style.desktop_ice_right_1}
                     src={desktop_ice_right_1}
                     alt=""/>
            </div>

            <Home />
            <PreSale setShowModalHandler={(showModal: boolean) => setShowModal(showModal)}/>
            <About />
            <Rarity />
            <Roadmap />
            <StayConnected/>
            <Footer/>

            {
                showModal &&
                <Modal success={false} onCloseHandler={() => setShowModal(false)}/>
            }



        </div>
    );
}


