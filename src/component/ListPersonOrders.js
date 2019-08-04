import React, { Component } from "react";
import PersonOrderService from "../service/PersonOrderService";

class ListPersonOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      message: null
    };
    this.refreshPersons = this.refreshPersons.bind(this);
  }

  componentDidMount() {
    this.refreshPersons();
  }

  refreshPersons() {
    PersonOrderService.retrieveAllPerson() //HARDCODED
      .then(response => {
        console.log(response);
        this.setState({ persons: response.data });
      });
  }

  addPersonClicked() {
    this.props.history.push(`/persons/-1`)
  }

  render() {
    return (
      <div className="container">
        <h3>Person & Order</h3>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Account Number</th>
                <th>RecordID</th>
                <th>Email</th>
                <th>Address1</th>
                <th>Address2</th>
                <th>ZipCode</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.persons.map(person => (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.recordId}</td>
                  <td>{person.email}</td>
                  <td>{person.address1}</td>
                  <td>{person.address2}</td>
                  <td>{person.zipcode}</td>                  
                  <td>
                    <button className="btn btn-warning">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-success">Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListPersonOrders;
