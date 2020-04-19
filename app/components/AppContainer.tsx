/** @jsx createElement */
import {createElement} from "@bikeshaving/crank/cjs/index";
import { alert } from "tns-core-modules/ui/dialogs";
import { ItemSpec } from "tns-core-modules/ui/layouts/grid-layout/grid-layout";
import { Frame } from "@nativescript/core";

interface Props {
    name: string,
    rootView: Frame,
}

export default function Greeting({ name = "World", rootView }: Props) {
    console.log(`AppContainer got rootView:`, rootView);
    return (
        <gridLayout
            width={{ value: 100, unit: "%" }}
            height={{ value: 100, unit: "%" }}
            rows={[
                new ItemSpec(1, "star"),
                new ItemSpec(1, "auto"),
                new ItemSpec(1, "auto"),
                new ItemSpec(1, "star"),
            ]}
            columns={[
                new ItemSpec(1, "star"),
                new ItemSpec(200, "pixel"),
                new ItemSpec(1, "star"),
            ]}
        >
            <label
                row={1}
                col={1}
                className="info"
                textAlignment={"center"}
                fontSize={24}
            >
                <formattedString>
                    <span className="fas" text="&#xf135;"/>
                    <span> Hello {name}</span>
                </formattedString>
            </label>
            <button
                row={2}
                col={1}
                fontSize={24}
                textAlignment={"center"}
                onTap={() => alert("Tap received!")}
            >
                Tap me
            </button>
        </gridLayout>
    );
}
