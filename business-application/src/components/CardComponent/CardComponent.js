import React, { useEffect, useState } from "react";
import { Card } from 'primereact/card';
import "./CardComponentStyle.css";
import axios from "axios";
import { Button } from 'primereact/button';
import "./CardComponentStyle.css";
import Labels from "../../locale/Labels";

const CardComponent = (props) => {
    const [businessEntry, setBusinessEntry] = useState();
    const [workingHoursArray, setWorkingHoursArray] = useState();
    const [workingDaysArray, setWorkingDaysArray] = useState();
    const [daysArray, setDaysArray] = useState(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:8080/place-mgmt/place-list/place/'+`${props.id}`).then((res) => {
            setBusinessEntry(res.data);
            objectToArray(res.data.openingHours.days);
        });
    }

    const objectToArray = (obj) => {
        const keys = Object.keys(obj);
        const workingDaysArray = [];
        const map = new Map();
        for(let i = 0; i < keys.length; i++){
            workingDaysArray.push(keys[i]);
           map.set(keys[i],obj[keys[i]]);
        };
        setWorkingDaysArray(workingDaysArray);
        setWorkingHoursArray(map);
     };

    const header = (
        <img alt="Card" src={require("../../images/placeholder.jpg")} className="img-size" />
    );

    return(
    <div>
        <Card title={businessEntry?.displayedWhat} subTitle={businessEntry?.displayedWhere}  header={header}>
            <h3 className="text-align-left">{Labels.WORKING_HOURS}</h3> 
               {daysArray?.map((value) =>{
                   if(workingDaysArray?.includes(value)){
                       return(<p className="text-align-left"><b className="font-size-bold">{value.toUpperCase()} </b>:
                               { workingHoursArray?.get(value).map((value) => {
                                   return(<span><span className="float-right">{value.start} - {value.end}</span><br/></span>);
                               })}
                            </p>);
                   } else {
                    return(<p className="text-align-left" ><b className="font-size-bold">{value.toUpperCase()} </b>: <span className="float-right">{Labels.LABEL_CLOSED} </span></p>);
                   }
               })}
        </Card>
    </div>
    );
}

export default CardComponent;