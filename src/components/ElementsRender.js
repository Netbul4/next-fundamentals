import React, {Component} from 'react';
import data from '../helpers/data.json';

function ListItem(props){
    return(
        <li>
            <a href={props.el.web} target="_blank">{props.el.name}</a>
        </li>
    );
}

export default class ElementsRender extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
        }
    }
    render(){
        return(
            <div>
                <h2>Elements Rendering</h2>
                <h3>Year Stations</h3>
                <ol>
                    {
                        this.state.seasons.map((el, index) => (
                            <li key={index}>{el}</li>
                        ))
                    }
                </ol>
                <h3>Frameworks Frontend Javascript</h3>
                <ul>
                    {
                        data.frameworks.map((el, index) => (
                            <ListItem key={el.id} el={el}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}