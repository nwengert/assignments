import React, { Component } from 'react';
import { connect } from "react-redux";
import { getBounties } from "./redux";
const axios = require('axios');

// import PropTypes from 'prop-types';


class Bounties extends Component {
    componentDidMount() {
        this.props.getBounties();
        console.log(this.props);
    }
    
    //write a handleClick function to the buttons to delete
    //bind and all that shtuff
    handleClick(e){
        axios
          .delete("/bounties")
          .then(function (response){
                console.log(response.data);
            })
          .catch(function(err){
                console.log(err);
            })
    }
    

    render() {
        const { bounties } = this.props;
        return (
            <div id="bountiesDiv">
                {bounties.map(bounty => (
                    <div key={bounty._id} className="bountyCard">
                        <h2><button>&times;</button>  {bounty.firstName} {bounty.lastName}</h2>
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