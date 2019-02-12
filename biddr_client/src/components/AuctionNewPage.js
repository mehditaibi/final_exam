import React, { Component } from "react";
import { Auction } from "../requests";
import NewAuctionForm from "./NewAuctionForm";

class AuctionNewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.createAuction = this.createAuction.bind(this);
  }

  createAuction(params) {
    Auction.create(params).then(data => {
      if (data.errors) {
        this.setState({ errors: data.errors });
      } else {
        this.props.history.push(`/auctions/${data.id}`);
      }
    });
  }

  render() {
    return (
      <main>
        <NewAuctionForm
          errors={this.state.errors}
          onSubmit={this.createAuction}
        />
      </main>
    );
  }
}

export default AuctionNewPage;
