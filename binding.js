// TrezorConnect.ethereumGetAddress(0, function (response) {
//     if (response.success) { // success
//         console.log('Address: ', response.address);
//     } else {
//         console.error('Error:', response.error); // error message
//     }
// });

// Pasos:
// * crear un "provider"
//   https://github.com/MetaMask/provider-engine
// * Accounts: 2 posibilidades:
//   1. tener una interfaz que permita agregar accounts administradas desde trezor.
//      Esto requiere de una UI tipo metamask. Esto implica también que el provider funciona en el
//      background como metamask y por lo tanto es nece sario crear un 'inpage provider' además.
//   2. obtener 1 address desde trezor cada vez que se use getAccounts.
//