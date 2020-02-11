import React, { Component } from 'react'

export default class search extends Component {
    
    get_data=React.createRef();

    passing_data= (e)=>{
        e.preventDefault();
        this.props.data(this.get_data.current.value);
    }
    
    render() {
        return (
            <form onSubmit={this.passing_data}>
                <div className="row">
                    <div className="col-md-8">
                        <input ref={this.get_data} type="text" className="form-control form-control-lg" placeholder="Search for an image. Example: Soccer..."/>
                    </div>
                    <div className="col-md-4" id="searchButton">
                        <input type="submit" className="btn btn-primary btn-lg btn-block" value="Search"/>
                    </div>
                </div>
            </form>
        )
    }
}
