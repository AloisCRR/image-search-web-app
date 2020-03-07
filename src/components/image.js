import React from 'react';

const Image = (props) => {

    const { downloads, likes, previewURL, largeImageURL, tags, comments } = props.image;

    return (
        <div className="col-12 col-sm-6 col-md-3 col-lg-2 mb-3">
            <div className="card">
                <img src={previewURL} className="card-img-top" alt={tags} />
                <div className="card-body p-2">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><i className="fab fa-gratipay" style={{ marginRight: 20 + 'px' }}></i>{likes}</li>
                        <li className="list-group-item"><i className="fas fa-download" style={{ marginRight: 20 + 'px' }}></i>{downloads}</li>
                        <li className="list-group-item"><i className="fas fa-comments" style={{ marginRight: 20 + 'px' }}></i>{comments}</li>
                        <li className="list-group-item pt-2 p-0"><a href={largeImageURL} rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-block">View picture</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Image;