import React, { Component } from 'react'

// Importing module
import Image from './image';
import Pagination from './pagination'

export default class results extends Component {
    
    showImages =()=>{
        const ImagesProp=this.props.imagesResults
        if (ImagesProp.length===0) return null;

        return(
            <React.Fragment>
                <div className="row">
                    {ImagesProp.map(image =>(
                        <Image image={image} key={image.id}/>
                    ))}
                </div>
                <Pagination/>
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
