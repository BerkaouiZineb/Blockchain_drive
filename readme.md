# Blockchain Drive – Securing Data Using Ethereum & IPFS

Ce projet vise à concevoir une **application web de stockage de fichiers décentralisé** basée sur la **blockchain Ethereum** et le système de fichiers distribué **IPFS**.
Les fichiers sont stockés sur IPFS via **Pinata**, tandis que leurs liens sont enregistrés sur la blockchain à l’aide d’un **smart contract**, garantissant sécurité, traçabilité et contrôle d’accès.
# Blockchain Drive – Securing Data Using Ethereum & IPFS

Ce projet vise à concevoir une **application web de stockage de fichiers décentralisé** basée sur la **blockchain Ethereum** et le système de fichiers distribué **IPFS**.
Les fichiers sont stockés sur IPFS via **Pinata**, tandis que leurs liens sont enregistrés sur la blockchain à l’aide d’un **smart contract**, garantissant sécurité, traçabilité et contrôle d’accès.

## Architecture du projet

* **Frontend** : React.js
* **Blockchain** : Ethereum (Smart Contract Solidity)
* **Stockage décentralisé** : IPFS
* **Service IPFS** : Pinata
* **Wallet** : MetaMask

## Installation et exécution

### 1. Prérequis

* Node.js
* MetaMask
* Hardhat
* Compte Pinata

### 2. Installation

```bash
git clone https://github.com/BerkaouiZineb/Blockchain-Drive.git
cd Blockchain-Drive
npm install
```

### 3. Lancer la blockchain locale

```bash
npx hardhat node
```

### 4. Déployer le smart contract

```bash
npx hardhat run scripts/deploy.js
```

### 5. Lancer le frontend

```bash
cd client
npm install
npm start
cd client
npm install
npm start
```

## Configuration Pinata

Les clés Pinata doivent être renseignées dans :

```
client/src/utils/constants.js
```

* API Key
* API Secret ou JWT
