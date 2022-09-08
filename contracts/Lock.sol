// SPDX-License-Identifier: NONE

pragma solidity^0.8.9;
contract PayableTest{
    function pay() public payable{

    }
    function getBalance() public view returns(uint){
        return address(this).balance;
    }
    function getRanddomBalance(address _a) public view returns(uint){
        return _a.balance;
    }
    function transfer() public payable{
        // payable address类型需要用payable包裹
        address payable  account = payable(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2);
        account.transfer(msg.value);
    }
     function transfer2(address payable _account) public payable{
        _account.transfer(msg.value);
    }
    function transfer3() payable external{
        payable(this).transfer(msg.value);
    }
    // 我没太明白为啥要实现这个方法
    fallback () external payable{

    }
     // 我没太明白为啥要实现这个方法
    receive() external payable {
       
    }
}