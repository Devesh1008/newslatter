import React, { Component } from 'react'

export default class Newsitems extends Component {

  render() {
    let {title, description, imgUrl, newsURL} = this.props;
    return (
      <>
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="#" className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
