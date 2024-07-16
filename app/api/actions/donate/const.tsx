import {PublicKey, clusterApiUrl} from '@solana/web3.js';
import dotenv from "dotenv";
dotenv.config();

export const DEFAULT_SOL_ADDRESS : PublicKey = new PublicKey(
    process.env.RECIPIENT ?? "BQk3QxwS31L8xasXZ6zfEGLJxLVAgGd79CAkCPW59aE1"
);

export const DEFAULT_SOL_AMOUNT : number = process.env.DEFAULT_AMOUNT ? parseFloat(process.env.DEFAULT_AMOUNT) : 1;

export const DEFAULT_RPC = process.env.RPC_URL ?? clusterApiUrl("devnet");

export const DEFAULT_TITLE = process.env.TITLE ?? "My Blink Project";

export const DEFAULT_AVATAR = process.env.AVATAR ?? "https://github.com/Noobmaster169/solana-blink/blob/main/public/solana_devs.jpg?raw=true";

export const DEFAULT_DESCRIPTION = process.env.DESCRIPTION ?? "Thank you for using my blink";

