# ChainPass

## Goal

For this to work as a password storage app on the ethereum blockchain

### Backend
Built in Solidity.
I create a struct called account that contains the accounts user given name and passwords in an array. This is a nested array with one flexible component and one fixed component of 3 length. The first slot holds the url to the site or site name, any string identifier works. The second and third components containg the username and password for that site. The users address it then mapped to an account and any function interaction returns only the information of msg.sender. To manage access to simulate if this was a paid service every address is also mapped to a boolean that determines if they have subscribed or not. For now the access is determined by a function accessible to the deployer of the contract. I intend to use an oracle so that I can have fixed price data for a receives payable function which will automatically grant access once payment is received. I intend to also make gas cost taken care of by the service itself to do this I'll make one contract with only view functions on the user side and another contract the user side contract will interact with.



### Frontend

The front end will be built in ReactJS
