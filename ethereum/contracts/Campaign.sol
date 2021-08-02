pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(string name1,string name2,string name3)  public {
        address newCampaign = new Campaign(msg.sender,name1,name2,name3);
        deployedCampaigns.push(newCampaign);
        
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Candidate {
        string name;
        uint candidateVoteCount;
    }

    Candidate[] public candidates;
    address public manager;
    uint public totalVoteCount;
    mapping(address => bool) addressVerify; //address verify
    

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(address creator,string name1,string name2,string name3) public {
        manager = creator;
        totalVoteCount = 0;
        createCandidate(name1);
        createCandidate(name2);
        createCandidate(name3);
        
    }
    
    

    function createCandidate(string name) public  {
        Candidate memory newCandidate = Candidate({  
           name: name,
           candidateVoteCount: 0
        });

        candidates.push(newCandidate);
    }

    function vote(uint index) public {
        require(!addressVerify[msg.sender]);    //address verify
        Candidate storage candidate = candidates[index];
        candidate.candidateVoteCount++;
        totalVoteCount++;
        addressVerify[msg.sender] = true;       //address verify
    }



    function getSummary() public view returns (
      uint, uint, uint, string, string, string//, string
      ) {
        return (
          candidates[0].candidateVoteCount,
          candidates[1].candidateVoteCount,
          candidates[2].candidateVoteCount,
          //candidates[3].candidateVoteCount,
          candidates[0].name,
          candidates[1].name,
          candidates[2].name
          //candidates[3].name
        );
    }

 
  //  function getCandidateCount() public view returns (uint) {        //Might not require
   //     return candidates.length;
   // }
    
}
