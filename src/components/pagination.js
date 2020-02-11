import React from 'react';

const Pagination = props =>{
    return (
        <div className="row justify-content-center py-5">
            <button type="button" className="btn btn-info btn-lg mr-1"><i className="fas fa-arrow-left" style={{ marginRight: 20 + 'px' }}></i>Anterior</button>
            <button type="button" className="btn btn-info btn-lg mr-1">Siguiente<i className="fas fa-arrow-right" style={{ marginLeft: 20 + 'px' }}></i></button>
        </div>
    )
}

export default Pagination;