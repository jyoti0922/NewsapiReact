import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <>
        <div className="my-3">
          <Card>
            <div className="d-flex  position-absolute top-0 right-0">
              <Badge className="bg-danger rounded-pill ">
                {source}
                <span className="visually-hidden">unread message</span>
              </Badge>
            </div>
            <Card.Img
              variant="top"
              src={
                !imageUrl
                  ? "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"
                  : imageUrl
              }
            />
            <Card.Body>
              <Card.Title>{title}...</Card.Title>
              <Card.Text>{description}...</Card.Text>
              <Card.Text>
                By {!author ? "unknown" : author} on
                {new Date(date).toGMTString()}
              </Card.Text>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn-sm btn-dark btn"
              >
                Read more
              </a>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
export default NewsItems;
