// require("@nomicfoundation/hardhat-toolbox");

// // new
// const NEXT_PUBLIC_POLYGON_MUMBAI_RPC =
//   "https://polygon-mumbai.g.alchemy.com/v2/j56K1VBzhBDVfqRJpcwxNXcr7-hKln0j";
// const NEXT_PUBLIC_PRIVATE_KEY =
//   "df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e";

// module.exports = {
//   defaultNetwork: "polygon_mumbai",

//   networks: {
//     hardhat: {
//       chainId: 80001,
//     },
//     polygon_mumbai: {
//       url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
//       accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
//     },
//   },
//   solidity: {
//     version: "0.8.17",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };

// for local
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  hardhat: {
    chainId: 31337,
    // gas: 2100000,
    // gasPrice: 8000000000,
  },
  // networks: {
  //   hardhat: {},
  //   polygon_mumbai: {
  //     url: "Your alchemy url",
  //     accounts: [`0x${"Your private key here"}`],
  //   },
  // },
};
