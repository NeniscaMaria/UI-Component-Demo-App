import "./App.css";
import React from "react";
import EditIcon from "./assets/editIcon.svg";
import {Button} from "smart-button-test";
import Toggle from "./Toggle";
import {sizeOptions} from "./constants";
import {Select} from "grommet";

function App() {
    const [size, setSize] = React.useState("small");
    const [reverse, setReverse] = React.useState(false);
    const [primary, setPrimary] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [accent, setAccent] = React.useState(false);
    const [critical, setCritical] = React.useState(false);
    const [fill, setFill] = React.useState(false);
    const [showIcon, setShowIcon] = React.useState(false);
    const [showLabel, setShowLabel] = React.useState(true);
    const [plain, setPlain] = React.useState(false);
    const label = "Click me!";
    const icon = <img width="14px" src={EditIcon} alt={"edit"}/>;
    
    const onClick = () => {
        console.log("Button was clicked");
    }
    
    const renderToggles = () => {
        return (
            <div className="togglesContainer">
                <Select options={sizeOptions} value={size}
                    onChange={({ option }) => setSize(option)}
                />
                <Toggle label={"Icon"} value={showIcon} setValue={setShowIcon}/>
                <Toggle label={"Label"} value={showLabel} setValue={setShowLabel}/>
                <Toggle label={"Reverse"} value={reverse} setValue={setReverse}/>
                <Toggle label={"Primary"} value={primary} setValue={setPrimary}/>
                <Toggle label={"Secondary"} value={secondary} setValue={setSecondary}/>
                <Toggle label={"Accent"} value={accent} setValue={setAccent}/>
                <Toggle label={"Critical"} value={critical} setValue={setCritical}/>
                <Toggle label={"Fill"} value={fill} setValue={setFill}/>
                <Toggle label={"Plain"} value={plain} setValue={setPlain}/>
            </div>
        );
    }

    return (
          <div className="App">
              {renderToggles()}
              <div className="button-container">
                  <Button small={size==="small"} medium={size==="medium"}
                      large={size==="large"} primary={primary} plain={plain}
                      onClick={onClick} secondary={secondary} label={showLabel && label} accent={accent}
                      icon={showIcon && icon} critical={critical} reverse={reverse} fill={fill}
                  />
              </div>
          </div>
    );
}

export default App;
