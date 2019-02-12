import React, { Component } from "react";
import { Auction, Bid } from '../requests';
import AuctionDetails from "./AuctionDetails";
import NewBidForm from "./NewBidForm";
import BidList from "./BidList";

class AuctionShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
    this.createBid = this.createBid.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Auction.one(id).then(auction => {
      this.setState({
        auction: auction,
        loading: false
      });
    });
  }

  createBid(params) {
    Bid.create(params, this.state.auction.id).then(data => {
      if (data.errors) {
        this.setState({ errors: data.errors });
      } else {
        this.props.history.push(`/`);
      }
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <main>
          <h2>Loading...</h2>
        </main>
      );
    }

    return (
      <main>
        <AuctionDetails {...this.state.auction} />
        <NewBidForm onSubmit={this.createBid}/>
        <BidList {...this.state.auction}/>
      </main>
    );
  }
}

export default AuctionShowPage;