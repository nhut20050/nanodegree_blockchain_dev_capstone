
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const Verifier = artifacts.require('Verifier');

let accounts;
let owner;

let instance;
let tokenIndex;

const proof = {
    "proof": {
        "a": ["0x15378bfca865e2696a7b46debd121856f01ac748625fd16a52ed4a48fdc778d6", "0x2930bfef7e4dd1fffbc61f07b1e5f71623b7c159860342ff8a898eb61e9d7e64"],
        "b": [["0x13062ef4238a1ab0e5352f07e047ac840f52e5d67ac61c7932d40f26b66e1e0b", "0x2782d9288b2da52b2a7755c9feea814a4ba3776babacee905e123561355b6a38"], ["0x1eb03d21d0de7e7c62dfb2555b0daa7afb839318d5571a5cbda52b6dd1ec4643", "0x38f07d41c46439370702081fb7ccb30bd407860ce5847588f19d5663f534f81"]],
        "c": ["0x28a794b5bfc302d96399501a84fac6dd18faa7ba98614860e16722d93440642", "0x223d7d3554fd060a72180552b32f35a67b82966b4081f1c8a698e0292a8a2abc"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"]
};

contract('SolnSquareVerifier', acc => {
    accounts = acc;
    owner = accounts[0];
});


before(async function () {
    const verifierAddress = (await Verifier.deployed()).address;
    instance = await SolnSquareVerifier.new(verifierAddress, {from: owner});
});

// Test if a new solution can be added for contract - SolnSquareVerifier
it('should add new solution with correct proof', async function () {

    const tx = await instance.addSolution(
        proof.proof.a,
        proof.proof.b,
        proof.proof.c,
        proof.inputs,
        {from: owner}
    );

    const SolutionAddedEvent = tx.logs.find((log) => log.event === 'SolutionAdded');
    const solutionAddedEventEmitted = !!(SolutionAddedEvent);

    tokenIndex = SolutionAddedEvent.args.index;

    assert.equal(solutionAddedEventEmitted, true, "New solution added event not emitted");
});

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
it('should mint token with verified proof', async function () {

    await instance.mintNhutNguyenGroupToken(
        proof.proof.a,
        proof.proof.b,
        proof.proof.c,
        proof.inputs,
        {from: owner}
    );

    const tokenOwner = await instance.ownerOf(tokenIndex);

    assert.equal(tokenOwner, owner, "Minter is not token owner");
});
