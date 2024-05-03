import React, { Component } from 'react'

export default class Newsitems extends Component {

  render() {
    let {title, description, imgUrl, newsURL} = this.props;
    return (
      <>
        <div className="card">
          <img src={!imgUrl?"https://i.ytimg.com/vi/PYe2uv-evOo/hqdefault.jpg": imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsURL} target='_blank' className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
