import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
   
    handleClick = (e) => {
        window.setTimeout( () => {
            e.persist();
            this.props.onDelayedClick(e);
        },
        this.props.delay
        )
    }
    
    render() {
        return(
            <button onClick={this.handleClick}>Button</button>
        )

    }
}