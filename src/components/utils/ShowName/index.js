import React, { fragment, Fragment } from "react";

const ShowName = ({ userName }) => {
  return (
    <Fragment>
      <p>{userName}</p>
    </Fragment>
  );
};

export default ShowName;
