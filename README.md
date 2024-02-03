![logo](https://github.com/AIMAN10001/AIMAN10001/blob/main/NFT%20marketplace-2.png)

# Full Stack NFT Marketplace Project

<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg" alt="Solidity" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="40" height="40"/>
  <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="Next.js" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="40" height="40"/>
</p>

## Overview

This project is a comprehensive full-stack responsive NFT marketplace built using cutting-edge technologies. Below are the key points highlighting the various components and features of this marketplace.

### Front-End Technologies

- **React JS and Next Js**: Employed for crafting the user interface of the NFT marketplace website.
- **React Context API**: Used for state management, ensuring seamless handling of data throughout the application.
- **Custom CSS**: Developed a fully customized responsive CSS for designing components and the overall website template.

### Smart Contract Development

- **Solidity Smart Contract**: Implemented a robust smart contract for the NFT marketplace and fund transfer, ensuring secure and efficient transactions.
- **State Management**: Leveraged the Solidity smart contract to maintain the state of the marketplace.

### Financial Transactions

- **Transfer Funds**: Integrated a secure section allowing users to transfer funds from one account to another.

### Testing and Development

- **Hardhat**: Utilized for testing the solidity smart contract in a local development environment.
- **Node Js and NPM Packages**: Employed for building both the front end and back end of the NFT marketplace project.

## Website Template Design

In this section, I meticulously crafted the NFT marketplace website template with dynamic functionality using React JS, Next Js, and Node Js. The components and pages include:

- `AudioLive`
- `BigNFTSlider`
- `Brand`
- `Button`
- `Category`
- `Collection`
- `Error`
- `Filter`
- `Followertab`
- `Footer`
- `Herosection`
- `LikeProfile`
- `Loader`
- `NavBar`
  - `Discover`
  - `HelpCenter`
  - `Color Theme`
  - `Notification`
  - `Profile`
  - `SideBar`
- `NFTCard`
- `Servise`
- `Slider`
- `Subscribe`
- `Title`
- `Video`
- `AboutUs Page`
- `Account Page`
- `Author Page`
- `Blog Page`
- `Collection Page`
- `ConnectWallet Page`
- `ContactUs Page`
- `Login and Signup Page`
- `NFT Details Page`
- `ResellToken Page`
- `Search Page`
- `Subscription Page`
- `TransferFunds Page`
- `Upload NFT Page`
- `TopCreators Page`

## Solidity Smart Contract Deployment to Polygon

In this section, detail the process of deploying the Solidity smart contract to the Polygon Mumbai Testnet. Follow these steps:

1. Open Metamask wallet and navigate to "Settings" in the top right corner.
2. Select "Networks" from the left menu.
3. Connect your wallet to the Mumbai Testnet with the following parameters:
   - Network Name: Polygon Mumbai Testnet
   - New RPC URL: `https://polygon-mumbai.g.alchemy.com/v2/your-api-key`
   - ChainID: `80001`
   - Symbol: `MATIC`
   - Block Explorer URL: `https://mumbai.polygonscan.com/`

Additional deployment instructions include:

- Running tests using `hardhat test`
- Spinning up a local development node with `npx hardhat node`
- Deploying the smart contract to localhost with `npx hardhat run scripts/deploy.js --network localhost/polygon_mumbai`
- Initiating the development server with `npm run dev`
