// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract trial{

    string first_name;
    string last_name;
    uint public a = 10;
    function setdata(string memory _fname, string memory _lname) public {
        first_name = _fname;
        last_name = _lname;
        a++;
    }
    function getdata() public returns(string memory) {
        return first_name;
    }
}


