const fs = require('fs')

let addressScrape = []

const addressArray = () => {
fs.readFile('../../../address.json', 'utf8', (err, jsonString) => {
  // fs.readFile('./tester.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err)
  }
  try {
    const address = JSON.parse(jsonString) 
    addressScrape = address
    console.log(addressScrape)
  }
   catch(err) {
    console.log('Error parsing JSON String:', err)
  }
})
}
const readArray = async () => {
  await addressArray()
  await console.log(addressScrape)
}