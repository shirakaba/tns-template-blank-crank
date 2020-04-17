/** 
 * Controls crank-nativescript log verbosity.
 * true: all logs; false: only error logs.
 */
Object.defineProperty(global, '__DEV__', { value: false });

import { start } from "crank-native";
import { createElement } from "@bikeshaving/crank";
import AppContainer from "./components/AppContainer";

start(
    createElement(
        AppContainer,
        {},
        null
    )
);