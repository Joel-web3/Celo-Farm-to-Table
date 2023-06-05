require("@nomiclabs/hardhat-waffle");

module.exports = {
	networks: {
    	celo: {
        	url: "https://alfajores-forno.celo-testnet.org",
        	accounts: [`PRIVATE_KEY`]
    	},
	},
	solidity: "0.8.4",
};
