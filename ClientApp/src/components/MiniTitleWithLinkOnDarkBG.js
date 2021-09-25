import React from "react";

export function MiniTitleWithLinkOnDarkBG(props) {
  return (
    <div className="offset-lg-3 col-lg-6 offset-md-2 col-md-8 col-sm-12 mb-3 p-3 text-center bg-dark rounded">
      <h2 className="text-light">
        {props.title + " "}
        <a className="text-info" href={props.linkHref}>
          {props.linkText}
        </a>
      </h2>
    </div>
  );
}
