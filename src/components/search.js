import React, { Component } from 'react'

export default class search extends Component {
    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-md-8">
                        <input type="text" className="form-control form-control-lg" placeholder="Search for an image. Example: Soccer..."/>
                    </div>
                    <div className="col-md-4">
                        <input type="submit" className="btn btn-primary btn-lg btn-block"/>
                    </div>
                </div>
            </form>
        )
    }
}
