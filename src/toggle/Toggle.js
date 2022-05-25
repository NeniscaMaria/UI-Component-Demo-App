import React from "react";
import "./toggle.css";
import {CheckBox} from "grommet";

const Toggle = (props) => {
    const {value, setValue, label} = props;
    return (
        <div className={"checkbox"}>
            <CheckBox checked={value} label={label}
                onChange={(event) => setValue(event.target.checked)}
            />
        </div>
    )
}

export default Toggle