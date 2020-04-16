import './tslib.nativescript'; // For async/await support

declare global {
    const global: any;
}

/** 
 * Controls crank-nativescript log verbosity.
 * true: all logs; false: only error logs.
 */
Object.defineProperty(global, '__DEV__', { value: false });
import * as ReactNativeScript from "react-nativescript";
import AppContainer from "./components/AppContainer";

export const rootRef: React.RefObject<any> = React.createRef<any>();

ReactNativeScript.start(
    React.createElement(
        AppContainer,
        {
            forwardedRef: rootRef
        },
        null
    ),
    /* This ref MUST match the ref that you pass into the base component of your app container. */
    rootRef
);