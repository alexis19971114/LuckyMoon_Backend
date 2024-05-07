// Globals
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import dotenv from "dotenv";
dotenv.config();

import { ethers } from "ethers";
import { logError } from "./logging.js";
import {calcNextBlockBaseFee} from "./utils.js";
import IERC20ABI from "./abi/IERC20.js";

import IUniswapV2PairAbi from "./abi/IUniswapV2Pair.js";

// Contracts
export const CONTRACTS = {
  UNIV2_ROUTER: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
  UNIV32_ROUTER: "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
  UNIV2_FACTORY: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
  DEAD: "0x0000000000000000000000000000000000000000",
  DEAD2: "0x000000000000000000000000000000000000dead"
};

// Helpful tokens for testing
export const TOKENS = {
  WETH: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
};

export const httpProvider = new ethers.providers.JsonRpcProvider(
  process.env.RPC_URL
);

export const wssProvider = new ethers.providers.WebSocketProvider(
  process.env.RPC_URL_WSS
);

// Common contracts
export const uniswapV2Pair = new ethers.Contract(
  ethers.constants.AddressZero,
  IUniswapV2PairAbi,
  wssProvider
);

export const IERC20 = new ethers.Contract(
  ethers.constants.AddressZero,
  IERC20ABI,
  wssProvider
)

export const TOKEN_LIST_SEND_SIZE = 500
export const NONCE_SMALL_LEVEL = 3
export const NONCE_HIGH_LEVEL = 1000
export const SAME_DELTA = 0.000000001
export const FILTER_NONCE_COUNT= 5
export const FILTER_SNIPERS_COUNT= 1
export const SNIPER_NUMBER_MIN = 10
export const NONCE0_MIN = 10
export const NONCE0_OWNER_DELTA = 3
export const WALLET_NUMBER_MIN = 10
export const MAX_NUMBER = 999999999
export const DOUBLE_SNIPER_WALLET = 5

export const APIKEY = 'H149MYX2CAY1ZEMNGWC4E5RY7V9GKY9VU1'