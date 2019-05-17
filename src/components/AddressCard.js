import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import array from '../address.json'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import UpdateAddressModal from './UpdateAddressModal'

class AddressCard extends Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  componentDidMount() {
    fetch('https://salty-address-scrape5kitchen.herokuapp.com/')
    .then(res => res.json())
    .then(json => this.setState({ data: json }))
  }

  render() {
    return (
      <div className="AddressCard">
        {/* {array.map( scrape => ( */}
        {this.state.data.map( scrape => (
          <Card className="p-3 m-3" style={{width:"300px"}}>
            <CardBody>
              <CardTitle><h4>{scrape.name}</h4></CardTitle>
              <CardText className="URL"><a href={scrape.url}>{scrape.url}</a></CardText>
              <CardText className="Address">{scrape.address}</CardText>
              <Button>Button</Button>
            </CardBody>
            <UpdateAddressModal scrape={scrape} />
            {/* <updateAddressModal scrape={scrape} refresh={this.getAddress}/>  */}
          </Card>
        ))}
      </div>
    );
  }
}
export default AddressCard;