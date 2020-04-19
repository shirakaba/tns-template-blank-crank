/**
 * Controls crank-nativescript log verbosity.
 * true: all logs; false: only error logs.
 */
Object.defineProperty(global, '__DEV__', { value: true });

import { start } from "crank-native";
import { createElement } from "@bikeshaving/crank";
import { StackLayout } from "@nativescript/core";
import AppContainer from "./components/AppContainer";

const rootView = new StackLayout();
rootView.width = { value: 100, unit: "%" };
rootView.height = { value: 100, unit: "%" };

start(
    createElement(
        //@ts-ignore
        AppContainer,
        {
            rootView,
        },
        null
    ) as any, // FIXME: improve typings for this.
    rootView
);