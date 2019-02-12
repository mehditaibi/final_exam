import React from "react";
import FormErrors from "./FormErrors";

const NewBidForm = props => {
  const { errors = [] } = props;

  const handleSubmit = event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      price: formData.get("price")
    });
  };

  return (
    <form className="BidForm" onSubmit={handleSubmit}>

      <div>
        <label htmlFor="price">Price</label> <br />
        <FormErrors noField forField={"price"} errors={errors} />
        <input name="price" id="price" />
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>

    </form>
  );
};

export default NewBidForm;
