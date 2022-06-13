const process = require('process');

import { HardhatUserConfig } from "hardhat/types";

import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';

const config: HardhatUserConfig = {
	defaultNetwork: "hardhat",
	solidity: {
		compilers: [
			{
				version: "0.8.2",
				settings: {

					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
			{
				version: "0.4.18", // used for compilation of WETH
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
			{
				version: "0.5.16", // used for compilation of uniswap factory and pair
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
			{
				version: "0.6.6", // used for uniswap router
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			}
		],
	},
	typechain: {
		outDir: 'typechain',
		target: 'ethers-v5',
	}
};