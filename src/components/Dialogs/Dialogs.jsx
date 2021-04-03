import React from "react";
import Style from './Dialogs.module.css';
const Dialogs = (props) =>{
    return (
       <div>
            <div className={Style.dialogs}>
                <div className={Style.dialogs__items}>
                     <div className={Style.dialogs__item + ' ' + Style.active} >
                        aaaaa
                    </div>
                    <div className={Style.dialogs__item}>
                        bbbbbb
                    </div>
                    <div className={Style.dialogs__item}>
                        cccccc
                    </div>
                    <div className={Style.dialogs__item}>
                        ddddddd
                    </div>
                </div>
                <div className={Style.dialogs__messages}>
                    <div className={Style.message__item}>Hello</div>
                    <div className={Style.message__item}>well</div>
                    <div className={Style.message__item}>eeee</div>
                </div>
            </div>
       </div>
    )
}

export default Dialogs;