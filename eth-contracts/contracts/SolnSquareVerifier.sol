pragma solidity >=0.4.21 <0.6.0;
import 'openzeppelin-solidity/contracts/drafts/Counters.sol';
import "./ERC721Mintable.sol";

// define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract Verifier {
    function verifyTx(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    )
    public
    returns (bool)
    {
        return true;
    }
}


// define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is NhutNguyenGroupToken {
    using Counters for Counters.Counter;

    Verifier private verifierContract;

    enum SolutionState {Verified, Minted}

    // define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address account;
        SolutionState state;
    }

    Counters.Counter private solutionsCount;

    // define an array of the above struct
    mapping(bytes32 => Solution) private solutions;

    // define a mapping to store unique solutions submitted
    // Create an event to emit when a solution is added
    event SolutionAdded(uint256 index, address account);
    constructor(address verifierContractAddress)
    public
    {
        verifierContract = Verifier(verifierContractAddress);
    }

    // Create a function to add the solutions to the array and emit the event
    function getSolutionHash(uint[2] memory input)
    private
    returns (bytes32)
    {
        return keccak256( abi.encodePacked(input[0], input[1]) );
    }

    function addSolution(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    )
    public
    {
        bytes32 hash = getSolutionHash(input);

        require(solutions[hash].account == address(0), "Solution already exists");

        bool verified = verifierContract.verifyTx(a, b, c, input);

        require(verified, "Solution is not accepted");

        solutionsCount.increment();
        solutions[hash] = Solution(solutionsCount.current(), msg.sender, SolutionState.Verified);
        emit SolutionAdded(solutions[hash].index, solutions[hash].account);
    }


    // Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintNhutNguyenGroupToken(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    )
    public
    {
        bytes32 hash = getSolutionHash(input);

        require(solutions[hash].account == msg.sender, "Not the solution owner");
        require(solutions[hash].state != SolutionState.Minted, "Solution has already been minted");

        mint(solutions[hash].account, solutions[hash].index);
        solutions[hash].state = SolutionState.Minted;
    }
}
