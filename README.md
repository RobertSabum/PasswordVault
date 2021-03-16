# ChainPass

## Goal

For this to work as a password storage app on the ethereum blockchain

### Backend
Built in Solidity.
I create a struct called account that contains the accounts user given name and passwords in an array. This is a nested array with one flexible component and one fixed component of 3 length. The first slot holds the url to the site or site name, any string identifier works. The second and third components containg the username and password for that site. The users address it then mapped to an account and any function interaction returns only the information of msg.sender. To require registering as a user, every address is also mapped to a boolean that determines if they have registered or not. For now the access is determined by a register(address) function accessible to the deployer of the contract.


### Frontend

The front end will be built in ReactJS. It'll have components for main objects like a password container, individual passwords anda modification bar. Inside src I'll write all the web3 stuff into its own component so I dont re-write all the web3 code. for development I'll connect the site to the local host ganache blockchain and when it's deployed on the test net and IPFS it'll use metamask.
