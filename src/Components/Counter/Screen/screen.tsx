import React from 'react';
import style from './css.module.css'

type ScreenType =
    {
        content : number
        status: any
    }
function Screen(props:ScreenType) {


    return (
        <div className={style.counter}>
            { props.status  && <span className={style.max}>
                {props.content}
            </span> ||
            <span className={style.normal}>
                {props.content}
            </span>
            }
        </div>
    );
}

export default Screen;