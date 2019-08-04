import React from 'react'
import AccountForm from './AccountForm'
import BookForm from './BookForm'


// Base of the app
export default class Root extends React.Component {
  render() {
    return <div >
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">New Person & Order</h6>
        </div>
        <div className="card-body">
          <AccountForm />
          <BookForm />
        </div>
      </div>
    </div>

  }
}
