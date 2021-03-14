pragma solidity >=0.5.0 <0.8.0;
pragma experimental ABIEncoderV2;


contract ChainPass{
    address owner;
    
    modifier subscriberFunc{
       require(hasSubscribed[msg.sender] == true);
        _;
    }
    
    modifier ownerFunc{
        require(msg.sender == owner);
        _;
    }
    
    struct Account{
        string _accountname;
        string[3][] _passwords;
    }
    
    mapping(address => bool) private hasSubscribed;
    mapping(address => Account) private _accounts;

	event Subscribed(address indexed _user);
	
	constructor() public{
	    owner = msg.sender;
	}
    
    function grantAccess(address _user) public ownerFunc{
        hasSubscribed[_user] = true;
    	
    	emit Subscribed(_user);
    }
    
    function setName(string memory _name) public subscriberFunc{
        _accounts[msg.sender]._accountname = _name;
    }
    
    function addPassword(string memory _url, string memory _username, string memory _password) public subscriberFunc{
        _accounts[msg.sender]._passwords.push([_url, _username, _password]);
    }

    function deletePassword(uint _index) public subscriberFunc{
        delete _accounts[msg.sender]._passwords[_index];
    }
    
    function checkIfSubscribed() public view returns(bool){
        return hasSubscribed[msg.sender];
    }
    
    function listPasswords() public subscriberFunc view returns(string[3][] memory){
        return _accounts[msg.sender]._passwords;
    }
    
    function getName() public subscriberFunc view returns(string memory){
        return _accounts[msg.sender]._accountname;
    }
    
    
}