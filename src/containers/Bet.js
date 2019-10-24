import React, { Component } from "react";
import moment from "moment";

class Bet extends Component {
  render() {
    return(
    <tr>
      <td>{moment(this.props.bet.created_at).format("Do MMMM YYYY, HH:mm")}</td>
      <td>{(this.props.bet.payout || parseInt(this.props.bet.payout) === 0) ? this.props.bet.payout : "Still ongoing"}</td>
    </tr>);
  }
}
export default Bet;
