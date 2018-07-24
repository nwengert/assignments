import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { getBounties } from "./redux";

class Bounties extends Component {
    componentDidMount() {
        this.props.getBounties();
    }
    
    //write a handleClick function
    //bind and all that shtuff
    

    render() {
        const { bounties } = this.props;
        return (
            <div>
                {bounties.map(bounty => (
                    <div key={bounty._id}>
                        <h1>{bounty.firstName} {bounty.lastName}</h1>
                        <h3>Status: {bounty.living ? "Alive" : "Dead"}</h3>
                        <button>X</button>
                    </div>
                ))}
            </div>
        )
    }
}

    export default connect(state => state, { getBounties })(Bounties)