var Web3 = require('web3');
var web3 = new Web3();

web3.setProvider(new web3.providers.WebsocketProvider('ws://localhost:8546'));

var vv = web3.version;
console.log(vv);

// Works on RPC, not WS.
//var b = web3.eth.getBlock('latest').then(function(res, err) {
//    console.log(res, err);
//});
// Also not working -- 'connection not open on send()'
web3.eth.getBlock('latest', function (res, err){
    console.log(res, err);
});

console.log(web3.eth.defaultBlock);

