import React, { Component } from "react";
import { Auction } from "../requests";
import { Link } from "react-router-dom";

class AuctionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auctions: null
    };
  }

  componentDidMount() {
    Auction.all().then(auctions => {
      this.setState({
        auctions: auctions
      });
    });
  }

  render() {
    if (!this.state.auctions) {
      return (
        <main>
          <h1>Loading...</h1>
        </main>
      );
    }
    
    return (
      <main >
        <h1 style={{textAlign: 'center'}}> Current Auctions</h1>
        <div className='container'>
            <ul style={{ padding: 0, listStyle: "none" }}>
            {this.state.auctions.map(auction => (
                <li key={auction.id}>
                <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>{" "}
                </li>
            ))}
            </ul>
        </div>
      </main>
    );
  }
}

export default AuctionIndexPage;
