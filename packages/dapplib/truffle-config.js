require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name rifle magic concert grace inhale flock solve'; 
let testAccounts = [
"0x8d1ff60ba35d0c770b6a8687a512ec128615496fd2f3e5fc3913a201bf58b2ba",
"0xe21b16b61f98f1152990929896bcedc7e3dbbdeadd1daa0f678f7fc590254197",
"0x2d4ebd05f07436576978a956a4645b9ea15b459d53dd1989a81a503df4caf36f",
"0x6c0c28fd6dc3817f4bc2fe503d9b79cd1c6a64cf4574020d37fe69f1f9059c5d",
"0x44e72921addcc67ff2f00babc6cffd0c83b6c433903d5e07a6bb25672c6564b8",
"0x468b376bf6aa494f0db084fdd73eb08bfbd4e3cce5e6923654bb7f8ed59859d7",
"0xe702bdefc66325a4c66fc66eb80ae6b4b4fd1b0ea7bb8a199dbccbf12f1df40a",
"0x8fdccbfe2ee5d82896f08bfe1fe4779edc0f7ff35d0d2850c0c8d2380837ce8c",
"0xb1fb7c45176d59fc82164860e5e290a14d151af49be748b5dbdedd5b84c6b768",
"0x6dbeeff40326dddc67ef32e9d3cb9de823ed25e215e3774d1e31d1d33b3606aa"
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
            version: '^0.8.0'
        }
    }
};

