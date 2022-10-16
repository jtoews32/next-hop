import './App.css';
import SearchTextArea from './components/SearchTextArea';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}  from 'react';
 
class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      poNumber: "",
      startDate: "",
      endDate: "",
      data: { entries: [] }
    }
  }

  changeMessage() {

    const entries = {
      "entries" : [
        {"datetime":"12/12/2022 10:30:10 AM", "ponumber":"PO00012", "component":"Supplier", "action":"Order Placement"}, 
        {"datetime":"12/12/2022 10:30:10 AM", "ponumber":"PO00012", "component":"OS", "action":"Order"}, 
        {"datetime":"12/12/2022 10:40:00 AM", "ponumber":"PO00012", "component":"DSCO", "action":"Po ACK"}, 
        {"datetime":"12/12/2022 10:50:10 AM", "ponumber":"PO00012", "component":"UNITE", "action":"Order Create"}, 
        {"datetime":"12/12/2022 10:50:10 AM", "ponumber":"PO00012", "component":"DSCO", "action":"Shipment"}, 
        {"datetime":"12/12/2022 10:50:10 AM", "ponumber":"PO00012", "component":"OS", "action":"Confirmation Email"}
      ]
    };

    this.setState({ data: entries  });


  /*
    fetch('http://localhost:8080/events')
      .then(res => res.json())
      .then((data) => {
        this.setState({ data: entries  })
      })
      .catch(console.log);
*/
  }

  componentDidMount() {}

  getPoNumber = (event) => {
    this.setState({poNumber : event.target.value})
  };

  getEndDate= (event) => {
    this.setState({endDate : event.target.value})
  };

  getStartDate = (event) => {
    this.setState({startDate: event.target.value})
  };

  render() {

    return (
<div class="p-3 mb-2 bg-light text-white">
  <div class="container">
    <header class="d-flex flex-row py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link" aria-current="page">Order Packets</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Item Packets</a></li>
      </ul>
    </header>
    <header class="py-3 mb-3 border-bottom">
      <div class="container-fluid d-grid gap-3 align-items-center" >
        <div class="d-flex align-items-center">
          <form class="w-100 me-3" role="search">
            <input onChange={this.getPoNumber} type="search" class="form-control" placeholder="PO Number" aria-label="Search" />
            <input onChange={this.getStartDate} type="search" class="form-control" placeholder="Start Date (ex 05/23/2022 10:23:34 AM PST)" aria-label="Search" />
            <input onChange={this.getEndDate} type="search" class="form-control" placeholder="End Date (ex 05/23/2022 11:23:34 AM PST)" aria-label="Search" />
          </form>
          <div class="flex-shrink-0">
            <button class="btn btn-sm btn-secondary" onClick={()=>this.changeMessage()}>Search</button>
          </div>
        </div>
      </div>
      </header>
      <br />
      <div class="container-fluid pb-3">
        <div class="d-grid gap-3">
          <div class="bg-light border rounded-3">
            <div class="bg-light border rounded-3">
              <SearchTextArea data={this.state.data} />
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
    )
  }
}

export default App;
