import { Router } from 'express';

import { getPlotInfo, getContractInfo, getContractInfoByPair, setContractLevel, deleteSwappedTokens, deleteLockedTokens, deleteOldTokens, deleteLevel1Tokens, getBlockTxnsForTokens, setGasFeeOnSnipingTxns, getFilteredMevTokensApi, getFilteredTokensTest, getFilteredTokensApi, getFilteredBribetokensApi, getFilteredNonceTokensApi, getFilteredWalletTokensApi } from '../controllers/contractInfo.js';

export const contractInfoRouter = Router();

contractInfoRouter.get('/', getContractInfo);
contractInfoRouter.get('/pair', getContractInfoByPair);
contractInfoRouter.get('/txns', getBlockTxnsForTokens);
contractInfoRouter.get('/filter', getFilteredTokensApi);
contractInfoRouter.get('/filterMev', getFilteredMevTokensApi);
contractInfoRouter.get('/filterNonce', getFilteredNonceTokensApi);
contractInfoRouter.get('/filterBribe', getFilteredBribetokensApi);
contractInfoRouter.get('/filterWallet', getFilteredWalletTokensApi);
contractInfoRouter.get('/test', getFilteredTokensTest);
contractInfoRouter.post('/setTokenLevel', setContractLevel);
contractInfoRouter.post('/deleteSwappedTokens', deleteSwappedTokens);
contractInfoRouter.post('/deleteLockedTokens', deleteLockedTokens);
contractInfoRouter.post('/deleteOldTokens', deleteOldTokens);
contractInfoRouter.post('/deleteLevel1Tokens', deleteLevel1Tokens);
contractInfoRouter.post('/setGasFeeForSnipers', setGasFeeOnSnipingTxns)

contractInfoRouter.get('/plot', getPlotInfo);