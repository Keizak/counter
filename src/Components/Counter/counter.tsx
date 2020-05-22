import React, {ChangeEvent, useState} from 'react';
import style from './css.module.css'
import Screen from './Screen/screen';

type CounterType =
    {
        SetMax: (event: ChangeEvent<HTMLInputElement>) => void
        maxcount:number
        value:number
        error: any
        ButtonGo: () => void
        ButtonReset: () => void

    }
function Counter(props:CounterType) {

    return (
        <div className={style.main}>
            <div className={style.maxvalue}>Max:</div>
            <div className={style.maxvalue}><input onChange={props.SetMax} value={props.maxcount}/></div>
            <div className={style.screen}>
                <Screen content={props.value} status= {props.error} />
            </div>

            <div className={style.box}>
                {props.error &&
                    <button disabled onClick={props.ButtonGo} className={style.max}>Go</button>
                ||<button  onClick={props.ButtonGo} className={style.go}>Go</button>}
				<button onClick={props.ButtonReset} className={style.reset}>Reset</button>

            </div>
        </div>
    );
}

export default Counter;
