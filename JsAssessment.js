/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const videoGamesNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name , _characterName, _companyName, _gameType) {
    const videoGameNFT = {
        "name" : _name,
        "characterName" : _characterName,
        "companyName" : _companyName,
        "gameType" : _gameType
    }

    videoGamesNFTs.push(videoGameNFT);
    console.log("Minted : " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < videoGamesNFTs.length ; i++){
        console.log("\nID no. : " + (i + 1));
        console.log("Name : " + videoGamesNFTs[i].name);
        console.log("Character Name : " + videoGamesNFTs[i].characterName);
        console.log("Company Name : " + videoGamesNFTs[i].companyName);
        console.log("Game Type : " + videoGamesNFTs[i].gameType);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + videoGamesNFTs.length);
}

// call your functions below this line
mintNFT("Assassin's Creed Black Flag", "Edward Kennway", "Ubisoft", "Adventure");
mintNFT("Grand theft Auto 5", "Franklin", "Rockstar", "Online Multiplayer");
mintNFT("Uncharted 4", "Nathan Drake", "Naughty Dogs", "Stealth and Shooting");

listNFTs();

getTotalSupply();
