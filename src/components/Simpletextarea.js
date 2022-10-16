import React, { Component } from "react";
import './Simpletextarea.css';

class Simpletextarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        textAreaValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  render() {

   // let val = JSON.stringify(this.props.data.entries);

    return (
<div class="text-secondary">
    <div class="col-md-115">
        <div class="card ccard radius-t-0 h-100">
            <div class="position-tl w-102 border-t-3 brc-primary-tp3 ml-n1px mt-n1px"></div>
            
            <div class="card-header pb-3 brc-secondary-l3">
                <h5 class="card-title mb-2 mb-md-0 text-dark-m3">Unified Network Event Log</h5>
            </div>
            <div class="card-body pt-2 pb-1">
            {this.props.data.entries.map((event) => (
                <div class="d-flex flex-wrap align-items-center my-2 bgc-secondary-l4 bgc-h-secondary-l3 radius-1 p-25 d-style">
                    <span class="text-default-d3 text-90"> 
                        <span class="text-80">{event.datetime}</span> 
                        {event.ponumber}
                    </span> 
                    <span class="ml-2"> {event.component}  </span>
                    <span class="ml-auto text-dark-l2 text-nowrap">   {event.action} </span>
                    <span class="ml-2"></span>
                </div>
            ))}
            </div>
        </div>
    </div>
</div>
      );
    }
}

export default Simpletextarea;

/*



    // this.state.textAreaValue
    return (
      <div>
   
        <label>Search Results</label>

 
        {entries.map((event) => (
        <div>
          <div>
            <div>{event.datetime}</div>
            <div>{event.ponumber}</div>
            <div>{event.comp}</div>
          </div>
        </div>
    ))}



      </div>
    );
  //}


        <textarea rows="20" className="example"
          value={entries}
          onChange={this.handleChange}
        />

    */
