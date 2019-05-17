import React from 'react';
import array from '../address.json'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import UpdateAddressModal from './UpdateAddressModal'

function AddressCard() {
  return (
    <div className="AddressCard">
      {array.map( scrape => (
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
export default AddressCard;