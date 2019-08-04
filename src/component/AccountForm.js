import React from "react";

class AccountForm extends React.Component {
  constructor() {
    super();
    this.state = {
      accountNumber: "",
      recordId: "",
      email: "",
      address1: "",
      address2: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    console.log("Account ID : " + this.state.accountNumber);
    console.log("Record ID : " + this.state.recordId);
    console.log("email : " + this.state.email);

    const url = "http://ec2-54-85-78-66.compute-1.amazonaws.com:8080/api/personOrders/create";
    const data = {
      recordId: "231",
      email: "pgoesafsdf@aarp.org",
      address1: "Northwest Dr",
      address2: "4 APT",
      zipcode: "44563"
    };
    fetch(url, {
      method: "POST", // or ‘PUT’
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label className="col-2 col-form-label">Account Number</label>
          <div className="col-10">
            <input
              className="form-control"
              type="text"
              name="accountNumber"
              value={this.state.accountNumber}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-2 col-form-label">Record ID</label>
          <div className="col-10">
            <input
              className="form-control"
              type="search"
              name="recordId"
              value={this.state.recordId}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-2 col-form-label">Email</label>
          <div className="col-10">
            <input
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-2 col-form-label">Address 1</label>
          <div className="col-10">
            <input
              className="form-control"
              type="text"
              name="address1"
              value={this.state.address1}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-2 col-form-label">Address 2</label>
          <div className="col-10">
            <input
              className="form-control"
              type="text"
              name="address2"
              value={this.state.address2}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AccountForm;
