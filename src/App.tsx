import React, {useState} from 'react';
import style from './css.module.css';
import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
import Settings from "./Components/Settings/Settings";
import {rerenderEntireTree} from "./render";


type AppType =
    {
        state: any
        UpdateMaxValue: (maxvalue: string) => void
        UpdateStartValue: (startvalue: string) => void
        UpdateMaxValueVectors:(max:number) => void
        UpdateStartValueVectors:(start:number) => void
    }

function App(props: AppType) {
    let a = String(props.state.Header.MaxValue)
    let b = String(props.state.Header.StartValue)
    let [start, setStart] = useState<string>(b)
    let [max, setMax] = useState<string>(a)
    let [value, setValue] = useState<string>("0")
    let [color, setColor] = useState<string>("white")
    let [error, setError] = useState<boolean>(false)

    function AddValueCounter() {
        let disabled = {
            id: "1", height: "100px", width: "100px", backgroundColor: "green",
            content: "start", borderRadius: "100%", disabled: true
        }
        let chislo = String(Number(value )+ 1)
        if (Number(chislo) === Number(max)) {
            setError(true)
            props.state.Header.buttons_Start_Reset.shift()
            props.state.Header.buttons_Start_Reset.unshift(disabled)
            rerenderEntireTree(props.state)
        }
        setValue(chislo)
        rerenderEntireTree(props.state)
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

    function ErrorValues(inputerror:boolean) {
        if (inputerror) {
            setValue("Ошибка ввода")
            rerenderEntireTree(props.state)
        }
        else {
            setValue(props.state.Header.StartValue)
            rerenderEntireTree(props.state)
        }

    }

    function ChangeMaxValue(maxvalue: string) {
        setValue(props.state.Header.StartValue)
        props.state.Header.MaxValue=setMax(maxvalue)
        rerenderEntireTree(props.state)
    }

    function ChangeStartValue(startvalue: string) {
        setValue(props.state.Header.StartValue)
        props.state.Header.StartValue=setStart(startvalue)
        rerenderEntireTree(props.state)

    }

    function ChangeColorValue(selectedcolor: string) {
        setColor(selectedcolor)
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
                      ErrorValues={ErrorValues}
                      UpdateMaxValue={props.UpdateMaxValue}
                      UpdateStartValue={props.UpdateStartValue}
                      newMaxValue={props.state.Settings.MaxValue}
                      newStartValue={props.state.Settings.StartValue}
                      buttons_color={props.state.Settings.buttons_color}
            />
            <Footer/>

        </div>)


}

export default App;
