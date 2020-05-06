require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture struggle cruise oval unaware hidden deputy foster genuine'; 
let testAccounts = [
"0x606db85ad0e00cc2f1fb2f239580a600b25f36061338219b4b70003df12ba80f",
"0x4a57d89b705aeb5b716059527ce3a74681d118c58c428ccc5ad94495dcd1cbc1",
"0xaadce633206f48280342b82a03a4e2d81f9d34842d271cff2798643e2e3fd74e",
"0xe62b925587ac3e57bb93b98ce9eef7dea36bbd0200485bdcb1d2c57620843c04",
"0x90b94ba33abf5bb2abb6ce92b00f37b814816caa4b481fd59a3088ccd5392f88",
"0xf0421afe91d61c212df1804277e9a4aa2ea6fa6c0fc94b3dcc64ca768a9eae2b",
"0x699286206be665710d4ad96eb21e204cbff10b3b2158de0cf3a6f022b4eaf37d",
"0x19adac9577e38498a8a06b6e358c50f1c7333f9f59e371c8b1953a89b0ec545d",
"0x1dc8df7636686328ef28b6a9d66ba63353cd3bbbc9160b8fda70d73874e7a359",
"0xd303b146666ff43bfb69634e1b8dd16778240d80b2756d228729d46a34a8457f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
