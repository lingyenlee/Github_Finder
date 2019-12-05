import React, { Fragment } from 'react'
import spinner from "./spinner.gif";

const Spinner = () =>
    <Fragment>
        <img src={spinner}
            alt="Loading..."
            style={{ width: "200px", margin: "auto", display: "auto" }}></img>
    </Fragment>

export default Spinner

