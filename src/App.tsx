import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';


function App() {


    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(true);

    return (
        <div className={"App"}>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion titleValue={"Good buy!"}
                       collapsed={accordionCollapsed}
                       items={["Pasha", "Lesha", "Valera", "Sergei"]}
                       onChange={ () => {setAccordionCollapsed(!accordionCollapsed)}}/>

           {/* <OnOff on={switchOn} onChange={setSwitchOn}/>*/}

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}


           {/* <OnOff/>
            <OnOff/>
            <OnOff/>

            <UncontrolledAccordion titleValue={"Hello!"}/>
            <UncontrolledAccordion titleValue={"Good buy!!"}/>*/}


            {/*<Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

           {/* <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>*/}

            {/* <Accordion titleValue={"Hello!"} collapsed={true}/>
            <Accordion titleValue={"Good buy!"} collapsed={false}/>
            */}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering");
    return <h1>{props.title}</h1>
}

export default App;
