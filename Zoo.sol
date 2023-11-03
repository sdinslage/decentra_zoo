
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Zoo is ERC721URIStorage  {

    address owner;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("SomeZoo", "CoolZoo") {
        owner = msg.sender;
    }

    mapping(address => string) public personToZoo;

    function claimZoo(string memory tokenURI)
        public
        returns (uint256)
    {
        require(issuedZoos[msg.sender], "Zoo is not issued");

        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        personToZoo[msg.sender] = tokenURI;
        issuedZoos[msg.sender] = false;

        return newItemId;
    }

    function checkZooOfPerson(address person) external view returns (string memory) {
        return personToZoo[person];
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    mapping(address => bool) public issuedZoos;

    function issueZoo(address to) onlyOwner external {
        issuedZoos[to] = true;
    }


    
}