import React, {useState} from 'react';
import style from './css.module.css';
import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
import Settings from "./Components/Settings/Settings";
import {rerenderEntireTree} from "./render";
import {useLocalStorage} from "./render - Copy";


type AppType =
    {
        state: any
        UpdateMaxValue: (maxvalue: string) => void
        UpdateStartValue: (startvalue: string) => void
        UpdateMaxValueVectors:(max:number) => void
        UpdateStartValueVectors:(start:number) => void
    }

function App(props: AppType) {
    // let [start, setStart] = useState<string>(String(props.state.Header.StartValue))
    // let [max, setMax] = useState<string>(String(props.state.Header.MaxValue))
    let [start, setStart] = useLocalStorage("StartValue", String(props.state.Header.StartValue))
    let [max, setMax] = useLocalStorage("MaxValue", String(props.state.Header.StartValue))
    let [value, setValue] = useState<string>(start)
    // let [color, setColor] = useState<string>("white")
    let [color, setColor]=  useLocalStorage("Color", "White")
    let [error, setError] = useState<boolean>(false)

    function AddValueCounter() {
        let disabled = {
            id: "1", height: "100px", width: "100px", backgroundColor: "green",
            content: "start", borderRadius: "100%", disabled: true
        }
        let chislo = String(Number(value) + 1)
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
        props.state.Header.MaxValue = setMax(maxvalue)
    }

    function ChangeStartValue(startvalue: string) {
        props.state.Header.StartValue = setStart(startvalue)

    }

    function ErrorValues(inputerror: boolean) {
        let disabled1 = {
            id: "1", height: "100px", width: "100px", backgroundColor: "green",
            content: "start", borderRadius: "100%", disabled: true
        }
        let disabled2 = {
            id: "2", height: "100px", width: "100px", backgroundColor: "red",
            content: "reset", borderRadius: "100%", disabled: true
        }
        let enabled1 = {
            id: "1", height: "100px", width: "100px", backgroundColor: "green",
            content: "start", borderRadius: "100%", disabled: false
        }
        let enabled2 = {
            id: "2", height: "100px", width: "100px", backgroundColor: "red",
            content: "reset", borderRadius: "100%", disabled: false
        }
        if (inputerror) {
            props.state.Header.buttons_Start_Reset.shift()
            props.state.Header.buttons_Start_Reset.shift()
            props.state.Header.buttons_Start_Reset.unshift(disabled2)
            props.state.Header.buttons_Start_Reset.unshift(disabled1)
            setValue("Ошибка ввода")
            rerenderEntireTree(props.state)
        } else {
            props.state.Header.buttons_Start_Reset.shift()
            props.state.Header.buttons_Start_Reset.shift()
            props.state.Header.buttons_Start_Reset.unshift(enabled2)
            props.state.Header.buttons_Start_Reset.unshift(enabled1)
            setValue(String(props.state.Settings.StartValue))
        }

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

        </div>)
}

export default App;
