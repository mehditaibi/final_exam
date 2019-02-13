import React from "react";
import FormErrors from "./FormErrors";

const NewAuctionForm = props => {
  const { errors = [] } = props;

  const handleSubmit = event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      title: formData.get("title"),
      description: formData.get("description"),
      ends_at: formData.get("endsAt"),
      reserve_price: formData.get("reservePrice")
    });
  };

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>New Auction</h1>
        <div style={{textAlign: 'center'}} >
            <form className="AuctionForm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label> <br />
                <FormErrors noField forField={"title"} errors={errors} />
                <input name="title" id="title" />
            </div>
            <br/>
            <div>
                <label htmlFor="description">Description</label> <br />
                <FormErrors noField forField={"description"} errors={errors} />
                <textarea name="description" id="description" cols="60" rows="4" />
            </div>
            <br/>
            <div>
                <label htmlFor="endsAt">Ends At</label> <br />
                <FormErrors noField forField={"endsAt"} errors={errors} />
                <input name="endsAt" id="endsAt"/>
            </div>
            <br/>
            <div>
                <label htmlFor="reservePrice">Reserve Price</label> <br />
                <FormErrors noField forField={"reservePrice"} errors={errors} />
                <input name="reservePrice" id="reservePrice"/>
            </div>
            <br/>
            <div>
                <input type="submit" value="Submit" />
            </div>
            </form>
        </div>
    </div>
  );
};

export default NewAuctionForm;
