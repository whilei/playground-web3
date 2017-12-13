var Web3 = require('web3');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

// console.log(web3);

// var bn = web3.eth.blockNumber;
// console.log(bn);

var v = web3.version.api;
console.log(v);

var vv = web3.version;
console.log(vv);

web3.version.getNetwork(function(error, result){
    console.lot(error, result);
});

//var coinbase = web3.eth.coinbase;
//console.log(coinbase);
//
//var balance = web3.eth.getBalance(coinbase);
//console.log(balance.toString(10));
