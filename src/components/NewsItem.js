import React, {useState, useEffect} from "react";

const NewsItem = (props)=> {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
      <div className="my-4">
        <div className="card">

          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
            <span
              className="badge bg-danger"
              style={{ left: "80%", zIndex: "1" }}
            >
              {" "}
              {source}{" "}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://th.bing.com/th/id/OIP.Xjv4jj8-pdUIXFaDZ-JqAQHaD6?rs=1&pid=ImgDetMain"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            style={{ height: "180px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              {" "}
              <small className="text-body-secondary text-muted">
                {" "}
                <strong> By </strong> {!author ? "unknown" : author}{" "}
                <strong> at </strong> {new Date(date).toGMTString()}{" "}
              </small>{" "}
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark rounded"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
