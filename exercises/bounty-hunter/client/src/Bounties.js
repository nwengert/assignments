import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { getBounties } from "./redux";

class Bounties extends Component {
    componentDidMount() {
        this.props.getBounties();
    }
    
    //write a handleClick function to the buttons to delete
    //bind and all that shtuff
    

    render() {
        const { bounties } = this.props;
        return (
            <div id="bountiesDiv">
                {bounties.map(bounty => (
                    <div key={bounty._id} className="bountyCard">
                        <h2><button>X</button>  {bounty.firstName} {bounty.lastName}</h2>
                        <h3>Status: {bounty.living ? "Alive" : "Dead"}</h3>
                        <h3>Bounty amount: {bounty.bountyAmount}</h3>
                        <h3>Type: {bounty.type}</h3>
                    </div>
                ))}
            </div>
        )
    }
}

export default connect(state => state, { getBounties })(Bounties)