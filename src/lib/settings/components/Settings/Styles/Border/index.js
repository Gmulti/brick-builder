import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"

import BorderColor from "../BorderColor";
import BorderStyle from "../BorderStyle";
import BorderWidth from "../BorderWidth";

class Border extends Component {

    render() {

        return (
            <Fragment>
                <BorderWidth 
                    {...this.props} 
                />
                <BorderStyle 
                    {...this.props} 
                />
                <BorderColor 
                    {...this.props} 
                />
            </Fragment>
        )
    }
}

Border.propTypes = {
    component: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

export default Border
