import React, { Component } from 'react'

export default class results extends Component {
    
    showImages =()=>{
        if (this.props.imagesResults.length===0) return null;
        console.log(this.props.imagesResults);
    }
    
    render() {
        return (
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
        )
    }
}
