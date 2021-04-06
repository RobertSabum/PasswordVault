# ChainPass

## Goal

For this to work as a password storage app on the ethereum blockchain

### Backend
Built in Solidity.
Uses a struct to store Usernames, Passwords and Websites in a 3xN flexible 2D array on memory in the Ethereum blockchain. A cheaper alternative would have been to update the passwords to a written file in JavaScript in the react app then use IPFS to store the file and Ethereum to store the hash of the IPFS file.

### Frontend
Built in ReactJS and use Web3 with Metamask to connect to the local Ganach blockchain during development and Ropsten when its deployed
