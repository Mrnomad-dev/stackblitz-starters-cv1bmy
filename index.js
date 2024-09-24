const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to stock portfoli analysis API');
});

// Endpoint 1: Calculate the Returns of the Stocks added
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);

  const Return  = (marketPrice - boughtAt) * quantity;
  res.send(Return.toString());
});
//calculate-returns?boughtAt=300&marketPrice=400&quantity=2

// Endpoint 2: Calculate the Total Returns
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalreturns = stock1 + stock2 + stock3 + stock4;
  res.send(totalreturns.toString());
});
//total-returns?stock1=100&stock2=200&stock3=200&stock4=400

//Endpoint 3: Calculate the Return Percentage
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns  = parseFloat(req.query.returns);

  const returnpercentage = (returns / boughtAt) * 100;
  res.send(returnpercentage.toString());
});
///calculate-return-percentage?boughtAt=400&returns=200

//Endpoint 4: Calculate the Total Return Percentage
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let returnpercentage = stock1 + stock2 + stock3 + stock4;
  res.send(returnpercentage.toString());
});
//total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40

//Endpoint 5: Identify the Status of Stocks based on their Return Value
app.get('/status', (req, res) => {
  let returnPercentage  = parseFloat(req.query.returnPercentage );

  let status;
  if (returnPercentage  > 0) {
    status = 'profit';
  } else {
    status = 'loss';
    
  }
  res.send(status);
});
//status?returnPercentage=90

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
