# Etherficate
## Abstract
Our project, Etherficate, provides a decentralized E-learning platform where the certificates earned by students are stored on Ethereum blockchain as NFTs.

NFT's or Non Fungible Tokens are assets stored on the blockchain.

An course website will be implemented which will allow a passwordless login through an Ethereum wallet and will also serve as means to pay for the courses in ETH. 
When the user completes the course, the certificate will be issued as a form of digital asset, which will be minted to their Ethereum wallet.

## Reason
In today's day and age anyone with a laptop or smartphone can forge an important certificate such as a degree of proof of qualification or ownership and present it as their own.
Authenticating these certificates by conventional methods are:-
 - Time consuming
 - Costly
 - Tedious
   
But there is something that is irrefutably unique and that is your wallet id.
So what if certificates were issued using your crypto wallet id? And what if they were validated by more than 500,000 nodes?
Our project leverages the consensus algorithm for the Ethereum blockchain to securely issue certificates using  a crypto wallet.
This also makes it free and easy  to authenticate instantly.
## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)
- [NFT.Storage](https://nft.storage/) (Connection to IPFS)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Setup .env file:
Before running any scripts, you'll want to create a .env file with the following values (see .env.example):

- **REACT_APP_NFT_STORAGE_API_KEY=""**

Need to create an account on [NFT.Storage](https://nft.storage/), and create a new API key.

### 4. Run tests
`$ npx hardhat test`

### 5. Start Hardhat node
`$ npx hardhat node`

### 6. Run deployment script
In a separate terminal execute:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 7. Start frontend
`$ npm run start`