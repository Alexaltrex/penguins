import {FC} from "react";
import style from './style.module.scss';
import successImg from '../../../assets/img/success.png';
import fail from '../../../assets/img/fail.png';


export interface IModal {
        success: boolean
        onCloseHandler: () => void
}

export const Modal:FC<IModal> = ({success, onCloseHandler}) => {

    return (
        <div className={style.modal}>
            <div className={style.card}>
                <p className={style.title}>Your NFT</p>
                <p className={style.subtitle}
                   style={{
                       color: success ? '#00B307' : '#B30000'
                   }}
                >
                    {success ? 'successfully generated' : 'something wrong'}
                </p>
                <img className={style.img}
                    src={success ? successImg : fail  }
                />
                <button className={style.button}
                        style={{
                            background: success ? '#98C61F' : '#ED3A14'
                        }}
                        onClick={() => {
                            if (!success) {
                                onCloseHandler();
                            }
                        }}
                >
                    {
                        success ? 'try again' : '[ X ]'
                    }
                </button>

                {
                    success &&
                    <button className={style.close}
                            onClick={() => onCloseHandler()}
                    >
                        x
                    </button>
                }


            </div>


        </div>
    )

}