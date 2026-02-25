require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",

  networks: {
    // Réseau local pour le développement
    localhost: {
      url: "http://127.0.0.1:8545",
      gas: 12000000,
    },

    // Réseau Sepolia pour le déploiement en ligne (tesnet)
    sepolia: {
      accounts: [process.env.PRIVATE_KEY],
      url: process.env.ALCHEMY_URL
    },
  }
};