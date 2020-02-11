import React, { Component } from 'react'

// Importing module
import Image from './image';

export default class results extends Component {
    
    showImages =()=>{
        const ImagesProp=this.props.imagesResults
        if (ImagesProp.length===0) return null;
        console.log(ImagesProp);

        return(
            <React.Fragment>
                <div className="row">
                    {ImagesProp.map(image =>(
                        <Image image={image} key={image.id}/>
                    ))}
                </div>
            </React.Fragment>
        )
    }
    
    render() {
        return (
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
        )
    }
}
