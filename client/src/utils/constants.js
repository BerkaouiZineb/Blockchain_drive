import abi from './upload.json'

// Smart Contract
export const contractAddress = artifact.address;
export const contractAbi = artifact.abi;

// Pinata IPFS 
export const API_Key = import.meta.env.VITE_API_KEY;
export const API_Secret = import.meta.env.VITE_API_SECRET;
export const JWT = import.meta.env.VITE_JWT;

import artifact from './upload.json'