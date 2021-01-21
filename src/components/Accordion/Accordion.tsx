import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering");

        return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
                { !props.collapsed && <AccordionBody items={props.items}/>}
            </div>);

}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return <h3 onClick={ props.onChange}>{props.title}</h3>

}

type AccordionBodyPropsType = {
    items: Array<string>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering");
    return (
        <ul>
            { props.items.map( (i, index) => <li onClick={ props.onClick(i.value) } key={index}>{i.title}</li>)}
        </ul>
    );
}
export default Accordion;