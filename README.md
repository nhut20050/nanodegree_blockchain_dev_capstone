# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.

# Real Estate Marketplace

> In this project you will be minting your own tokens to represent your title to the properties. Before you mint a token, you need to verify you own the property. You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property. 
> 
> Once the token has been verified you will place it on a blockchain market place (OpenSea) for others to purchase. Let's get started!


## Token

Name: NhutNguyenGroupToken<br>
Symbol: NNG<br>
Token Address: [0x9C64C702DD24547dc70A73C2B18aF57A71B7d7C4](https://rinkeby.etherscan.io/token/0x9C64C702DD24547dc70A73C2B18aF57A71B7d7C4)


## OpenSea

Original Owner: [0x9Ef8EC59A1321698e26e9e29A3110E415298E9C7](https://rinkeby.opensea.io/accounts/0x9Ef8EC59A1321698e26e9e29A3110E415298E9C7)<br>
Buyer of 5 Listings: [0x5c44B70F14caBF8Bf7D6eFA87A5ff37a9194Eaf7](https://rinkeby.opensea.io/accounts/0x5c44B70F14caBF8Bf7D6eFA87A5ff37a9194Eaf7)<br>

Buy Transaction:
[0x8d309eae99d815d014970114386b1814909db6d65e4b51f1f1afd12190d7664c](https://rinkeby.etherscan.io/tx/0x8d309eae99d815d014970114386b1814909db6d65e4b51f1f1afd12190d7664c)
[0x1eb03d3dd8ed4dbe6ea4947a67428dc61f499e7e14aeb44d3c937b25652092c1](https://rinkeby.etherscan.io/tx/0x1eb03d3dd8ed4dbe6ea4947a67428dc61f499e7e14aeb44d3c937b25652092c1)
[0xecf929af613fc43e47c8f45b8b9c9bf80cd6282112718d65f25cca72763343ea](https://rinkeby.etherscan.io/tx/0xecf929af613fc43e47c8f45b8b9c9bf80cd6282112718d65f25cca72763343ea)
[0x2c92aec3d10ca948a1eda933111935228ffc2269f76d158f81f36d95117b8a2d](https://rinkeby.etherscan.io/tx/0x2c92aec3d10ca948a1eda933111935228ffc2269f76d158f81f36d95117b8a2d)
[0x4db05f38669647cc69fcb0b0ee89a6c0085f52c76db66682710301615e0d0c42](https://rinkeby.etherscan.io/tx/0x4db05f38669647cc69fcb0b0ee89a6c0085f52c76db66682710301615e0d0c42)


## Contracts

[SolnSquareVerifier Contract](https://rinkeby.etherscan.io/address/0xAaA47404063e436599b6c2468986B71324bab4B1)<br>
[Verifier Contract](https://rinkeby.etherscan.io/address/0xB0e4097cE91524951A24C76FBbbb242567d4921C)<br>
[NhutNguyenGroupToken Contract](https://rinkeby.etherscan.io/address/0x9C64C702DD24547dc70A73C2B18aF57A71B7d7C4)

```bash
nhutnguyen95@MacBook-Air-cua-Nguyen eth-contracts % truffle migrate --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        11016363
   > block timestamp:     1657703833
   > account:             0x5c44B70F14caBF8Bf7D6eFA87A5ff37a9194Eaf7
   > balance:             0.59943848749736774
   > gas used:            224605 (0x36d5d)
   > gas price:           2.500000012 gwei
   > value sent:          0 ETH
   > total cost:          0.00056151250269526 ETH

   -------------------------------------
   > Total cost:     0.00056151250269526 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > block number:        11016365
   > block timestamp:     1657703836
   > account:             0x5c44B70F14caBF8Bf7D6eFA87A5ff37a9194Eaf7
   > balance:             0.598929772495287117
   > gas used:            157723 (0x2681b)
   > gas price:           2.50000001 gwei
   > value sent:          0 ETH
   > total cost:          0.00039430750157723 ETH


   Deploying 'NhutNguyenGroupToken'
   --------------------------------
   > block number:        11016366
   > block timestamp:     1657703851
   > account:             0x5c44B70F14caBF8Bf7D6eFA87A5ff37a9194Eaf7
   > balance:             0.591417404968242594
   > gas used:            3004947 (0x2dda13)
   > gas price:           2.500000009 gwei
   > value sent:          0 ETH
   > total cost:          0.007512367527044523 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        11016367
   > block timestamp:     1657703865
   > account:             0x5c44B70F14caBF8Bf7D6eFA87A5ff37a9194Eaf7
   > balance:             0.582459177435992975
   > gas used:            3583291 (0x36ad3b)
   > gas price:           2.500000009 gwei
   > value sent:          0 ETH
   > total cost:          0.008958227532249619 ETH

   -------------------------------------
   > Total cost:     0.016864902560871372 ETH

Summary
=======
> Total deployments:   4
> Final cost:          0.017426415063566632 ETH




Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xabfc462c5f867209a0a5503d23319d9a9e28e652d495102d1e003a8c0d9d3217
   > Blocks: 0            Seconds: 5
   > contract address:    0x13F84de14F0562a583E6f4180953d0Ff16851B2F
   > block number:        11016371
   > block timestamp:     1657703882
   > account:             0x5c44B70F14caBF8Bf7D6eFA87A5ff37a9194Eaf7
   > balance:             0.59943848749691853
   > gas used:            224605 (0x36d5d)
   > gas price:           2.500000014 gwei
   > value sent:          0 ETH
   > total cost:          0.00056151250314447 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00056151250314447 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xb8f9de431667b2d893c86873b41e04288b0d68033e2db301f3a14fb73d3df9f7
   > Blocks: 1            Seconds: 9
   > contract address:    0xB0e4097cE91524951A24C76FBbbb242567d4921C
   > block number:        11016373
   > block timestamp:     1657703912
   > account:             0x5c44B70F14caBF8Bf7D6eFA87A5ff37a9194Eaf7
   > balance:             0.598929772494273212
   > gas used:            157723 (0x2681b)
   > gas price:           2.500000013 gwei
   > value sent:          0 ETH
   > total cost:          0.000394307502050399 ETH


   Deploying 'NhutNguyenGroupToken'
   --------------------------------
   > transaction hash:    0xdbeb835452a0b527cde618822be287c16f0883d95595b511b529f547be7258d9
   > Blocks: 2            Seconds: 21
   > contract address:    0x9C64C702DD24547dc70A73C2B18aF57A71B7d7C4
   > block number:        11016375
   > block timestamp:     1657703943
   > account:             0x5c44B70F14caBF8Bf7D6eFA87A5ff37a9194Eaf7
   > balance:             0.591417404952203954
   > gas used:            3004947 (0x2dda13)
   > gas price:           2.500000014 gwei
   > value sent:          0 ETH
   > total cost:          0.007512367542069258 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xbc4c61a9c0ea1127fd922eebb7d5d44b0ad6597026c9523e19c0c5abfd9beb37
   > Blocks: 1            Seconds: 9
   > contract address:    0xAaA47404063e436599b6c2468986B71324bab4B1
   > block number:        11016376
   > block timestamp:     1657703958
   > account:             0x5c44B70F14caBF8Bf7D6eFA87A5ff37a9194Eaf7
   > balance:             0.58245917740203788
   > gas used:            3583291 (0x36ad3b)
   > gas price:           2.500000014 gwei
   > value sent:          0 ETH
   > total cost:          0.008958227550166074 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.016864902594285731 ETH

Summary
=======
> Total deployments:   4
> Final cost:          0.017426415097430201 ETH
```

## Testing

1. `cd eth-contracts` directory
2. Run `truffle compile && truffle migrate --reset`
3. run `truffle test`

Result:
<img src="/images/test-result-01.png" alt="test 1" width="600"/>
</br>
<img src="/images/test-result-02.png" alt="test 1" width="600"/>
</br>
<img src="/images/test-result-03.png" alt="test 1" width="600"/>

## Version

### Truffle

```bash
Truffle v5.5.20 (core: 5.5.20)
Ganache v7.2.0
Solidity - 0.5.5 (solc-js)
Node v16.15.1
Web3.js v1.7.4
```

### Docker
```bash
Docker version 20.10.17, build 100c701
```

## ZoKrates (Optional)
ZoKrates is a toolbox for zkSNARKs on Ethereum. It helps you use verifiable computation in DApps, from the specification of your program in a high level language to generating proofs of computation to verifying those proofs in Solidity.
I already generated one proof in ```./zokrates/code/square/``` directory. 

However, If you want to generate it your self. You need to do the following:

**Step #1:** First install Zokrates. Currently, Docker is the recommended way to get started with Zokrates. You can run a container by running the following command
```bash
docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates /bin/bash
```

**Step #2:** Compile the program written in ZoKrates DSL
```
/path/to/zokrates compile -i <program_name>.code
```

**Step #3:** Generate the Trusted Setup
```
/path/to/zokrates setup
```

**Step #4:** Compute Witness
```
/path/to/zokrates compute-witness -a <a> <b> ... <n>
```

**Step #5:** Compile the program written in ZoKrates DSL
```
/path/to/zokrates compile -i <program_name>.code
```

**Step #5:** Generate Proof
```
/path/to/zokrates generate-proof
```

**Step #5:** Export Verifier
```
path/to/zokrates export-verifier
```

## Mint by Myether

Contract address to interact: 0xAaA47404063e436599b6c2468986B71324bab4B1
Refer to: https://www.youtube.com/watch?v=8MChn-NJJB0

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)