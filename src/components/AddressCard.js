import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import array from '../address.json'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardFooter } from 'reactstrap'
import UpdateAddressModal from './UpdateAddressModal'
import ReadModal from './ReadModal'

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

  onDeleteClick = async _id => {
    await fetch(`https://salty-address-scrape5kitchen.herokuapp.com/`+ _id, {
      method: 'DELETE'
    }).then(resp => {
      this.componentDidMount();
    })
  }

  render() {
    return (
      <div className="AddressCard">
        {/* {array.map( scrape => ( */}
        {this.state.data.map( scrape => (
          <Card className="p-3 m-3" style={{width:"300px"}} key={scrape._id}>
            <CardTitle>{scrape.name}</CardTitle>
            <CardBody>
              <CardText className="Address">{scrape.address}</CardText>
              <CardText className="notes">{scrape.notes}</CardText>
            </CardBody>
            <CardFooter>
              <div className="ButtonGroup">
                <ReadModal scrape={scrape} />
                <UpdateAddressModal scrape={scrape} refresh={this.getAddress}/>
                <Button 
                  style={{height: '2.35em'}}
                  onClick={() => this.onDeleteClick(scrape._id)}
                  color="danger"
                >
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
}
export default AddressCard;