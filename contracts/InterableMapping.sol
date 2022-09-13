// SPDX-License-Identifier: NONE
pragma solidity ^0.8.9;

contract InterableMapping {
    mapping(address => bool) public addressMapping;
    address public owner;
    address[] private addressList;

    constructor() {
        owner = msg.sender;
    }

    modifier OnlyOwner() {
        require(owner == msg.sender, "no permissios");
        _;
    }

    function set(address _address) public OnlyOwner {
        if (!addressMapping[_address]) {
            addressMapping[_address] = true;
            addressList.push(_address);
        }
    }

    function getLength() public view returns (uint) {
        return addressList.length;
    }

    function getAddress(uint _index) public view returns (address) {
        require(_index < addressList.length, "index is too large");
        return addressList[_index];
    }
}