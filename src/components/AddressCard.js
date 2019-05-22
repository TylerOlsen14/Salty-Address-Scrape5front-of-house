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
            <CardBody>
              <CardTitle><h3>{scrape.name}</h3></CardTitle>
              <CardSubtitle><h5>{scrape._id}</h5></CardSubtitle>
              <CardText className="URL"><a href={scrape.url}>{scrape.url}</a></CardText>
              <CardText className="Address">{scrape.address}</CardText>
            </CardBody>
            <CardFooter>
              <div style={{display: 'flex'}}>
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
            {/* <UpdateAddressModal scrape={scrape} /> */}

          </Card>
        ))}
      </div>
    );
  }
}
export default AddressCard;