const Verifier = artifacts.require("./Verifier.sol");
const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
const NhutNguyenGroupToken = artifacts.require('NhutNguyenGroupToken');

module.exports = async function (deployer) {
    await deployer.deploy(Verifier);
    await deployer.deploy(NhutNguyenGroupToken);
    await deployer.deploy(SolnSquareVerifier, Verifier.address);
};