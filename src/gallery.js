"use-strict";
import React, { Component } from "react";

function Gallery(props) {
  let alternate = "http://via.placeholder.com/150x150";
  return (
    <div>

      {props.items.map(item => {
        let {
          title,
          authors,
          pageCount,
          language,
          imageLinks,
          previewLink
        } = item.volumeInfo;

        return (
          <div className="gallery col-sm-3">

            <a className="image" href={previewLink} target="_blank">
              <img
                src={
                  imageLinks === undefined ? alternate : imageLinks.thumbnail
                }
                alt="Book Image Linking"
                class="img-responsive"
                width="200"
                height="230"
              />
            </a>

            <a href={previewLink} target="_blank">
              <div> <strong>Title:</strong> {title}</div>
              <div> <strong>Author:</strong> {authors}</div>
              <div> <strong>Language:</strong> {language}</div>
              <div> <strong>PageCount:</strong> {pageCount}</div>
            </a>

          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
