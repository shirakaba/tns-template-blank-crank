/** @jsx createElement */
import {createElement} from "@bikeshaving/crank";
import { Color } from "@nativescript/core";

export default function Greeting({name="World"}) {
    return (
        <contentView
            backgroundColor={new Color("yellow")}
            width={{ value: 100, unit: "%" }}
            height={{ value: 100, unit: "%" }}
        >
            <label>Hello {name}</label>
        </contentView>
    );
}
