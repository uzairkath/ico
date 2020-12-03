const address = '0x2D48a78FA25BC525f0AF1C4902Ff1aDdeC6E84AF';
const abi = [{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"purchaser","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[],"name":"buyTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"name":"changeRate","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"endIco","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remainingTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weiRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
var rate;
const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(abi, address);
var accounts = [];
const ethereumButton = document.querySelector('.enableEthereumButton');
const buy = document.querySelector('#buy');
const div2 = document.getElementById('div2');
const _address = document.getElementById('address');
console.log(_address)
const myModal = document.getElementById('myModal');
document.addEventListener('DOMContentLoaded', () => {
  if(window.ethereum !== 'undefined'){
  //   ethereum.request({ method: 'eth_requestAccounts' }).then(_accounts => {
  //     console.log(_accounts);
  //     accounts = _accounts;  
  //     _address.innerHTML = `${_accounts[0].substring(0, 20)}....`;

  // })
}
  ethereumButton.addEventListener('click', () => {
    ethereum.request({ method: 'eth_requestAccounts' }).then(_accounts => {
      console.log(_accounts);
      accounts = _accounts;  
      _address.innerHTML = `${_accounts[0].substring(0, 20)}....`;

  })
  });
contract.methods.rate().call()
.then(_rate => {
  console.log(_rate);
  rate = _rate
})
 const form = document.getElementById('form');
 form.addEventListener('submit', e => {
   e.preventDefault();
    const amount = e.target[0].value;
    const value = amount * rate;
    const _value = web3.utils.toBN(value * 1e11);
    console.log(_value);
   console.log(accounts);
   contract.methods.buyTokens().send({from: accounts[0], value: _value})
   .then(result => {
     console.log(result);
   })
 })
})


