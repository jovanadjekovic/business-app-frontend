import React from "react";
import { Panel } from 'primereact/panel';
import CardComponent from "../CardComponent/CardComponent";
import "./PanelComponentStyle.css";
import Labels from "../../locale/Labels";

const PanelComponent = () => {

    return(
    <div>
        <Panel header={Labels.PANEL_HEADER} >
            <div className="card-left-style">
                <CardComponent id={Labels.FIRST_CARD_ID}/>
            </div>
            <div className="card-right-style">
                <CardComponent id={Labels.SECOND_CARD_ID}/>
            </div>
        </Panel>
    </div>
    );
}

export default PanelComponent;