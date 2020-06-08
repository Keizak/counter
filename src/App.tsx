import React, {useState} from 'react';
import style from './css.module.css';
import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
import Settings from "./Components/Settings/Settings";
import {rerenderEntireTree} from "./render";


type AppType =
    {
        state: any
        UpdateMaxValue: (maxvalue:string) => void
    }

function App(props: AppType) {
    let [start, setStart] = useState<string>("0")
    let [max, setMax] = useState<string>("5")
    let [value, setValue] = useState<string>("0")
    let [color, setColor] = useState<string>("white")
    let [error, setError] = useState<boolean>(false)

    function AddValueCounter() {
        let chislo = String(Number(value) + 1)
        let disabled = {
            id: "1", height: "100px", width: "100px", backgroundColor: "green",
            content: "start", borderRadius: "100%", disabled: true
        }
        if (Number(chislo) === Number(max)) {
            setError(true)
            props.state.Header.buttons_Start_Reset.shift()
            props.state.Header.buttons_Start_Reset.unshift(disabled)
            rerenderEntireTree(props.state)
        }
        setValue(chislo)
    }

    function ResetCounter() {
        let enabled = {
            id: "1", height: "100px", width: "100px", backgroundColor: "green",
            content: "start", borderRadius: "100%", disabled: false
        }
        props.state.Header.buttons_Start_Reset.shift()
        props.state.Header.buttons_Start_Reset.unshift(enabled)
        setValue(start)
        setError(false)
        rerenderEntireTree(props.state)
    }

    function ChangeMaxValue(maxvalue: string) {
        if (Number(maxvalue) <= Number(value)) {
            setValue("Ошибка ввода")
        } else setMax(maxvalue)


    }

    function ChangeStartValue(startvalue: string) {
        if (Number(startvalue) <= -1) {
            setValue("Ошибка ввода")
        } else
            setStart(startvalue)
    }

    function ChangeColorValue(selectedcolor: string) {
        setColor(selectedcolor)
    }
    function ChangeInput(maxvalue:string) {
        if(Number(maxvalue) <= Number(value))
        {
            setValue("Ошибка ввода")
        }
        else setMax(maxvalue)
    }
    return (
        <div className={style.App}>
            <Header error={error}
                    value_counter={value}
                    AddValueCounter={AddValueCounter}
                    ResetCounter={ResetCounter}
                    buttons_Start_Reset={props.state.Header.buttons_Start_Reset}
                    color={color}
                    startvalue={start}
                    maxvalue={max}
            />
            <Settings ChangeStartValue={ChangeStartValue}
                      ChangeColorValue={ChangeColorValue}
                      ChangeMaxValue={ChangeMaxValue}
                      UpdateMaxValue={props.UpdateMaxValue}
                      newMaxValue={props.state.Settings.newMaxValue}
                      newStartValue={props.state.Settings.newStartValue}
                      buttons_color={props.state.Settings.buttons_color}
            />
            <Footer/>

        </div>)


}

export default App;
