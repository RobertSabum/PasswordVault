pragma solidity >=0.5.0;
pragma experimental ABIEncoderV2;


contract ChainPass{
    
    struct Account{//struct holding the accounts name and passwords
        string _accountname;
        string[3][] _passwords;
    }
    
    mapping(address => Account) private _accounts;//keeps track of everyones account
    
    function setName(string memory _name) public {//sets the desired name of the account
        _accounts[msg.sender]._accountname = _name;
    }
    
    function addPassword(string memory _url, string memory _username, string memory _password) public {//adds a password to the array
        _accounts[msg.sender]._passwords.push([_url, _username, _password]);
    }

    function deletePassword(uint _index) public {//deletes a password at a given index
        delete _accounts[msg.sender]._passwords[_index];
    }
    
    function listPasswords() public  view returns(string[3][] memory){
        return _accounts[msg.sender]._passwords;
    }
    
    function getName() public  view returns(string memory){
        return _accounts[msg.sender]._accountname;
    }
    
    
}