var ScheduleActions = require('../../actions/match/ScheduleActions');
var TextFieldActions = require('../../actions/match/TextFieldActions');

var MatchData = require('./MatchData');


var alt = require('../../components/Dispatcher');
// var TheNodeAlliance = require("the-node-alliance");

// var TBA = new TheNodeAlliance("team955:testing-api:v01");

export class MatchStore {
 	constructor() {
	  this.matches = [];
	  this.bindListeners({
		  handleUpdateSchedule : ScheduleActions.UPDATE_SCHEDULE,
          handleUpdateValue : TextFieldActions.UPDATE_VALUE
	  })
 	}
	
	getTBAMatches(){
		var req = new XMLHttpRequest();
		return new Promise((resolve,reject) =>{
        	req.open("GET", "https://www.thebluealliance.com/api/v2/event/2016waamv/matches?X-TBA-App-Id=team955:testing-api:v01", true);      // Instantiate XMLHTTPRequest as a GET request at url. Mark as asynchronous
        	req.onreadystatechange = () => { // Runs when ready state changes
            	if(req.readyState === 4){        // Checks if request has been made 
					console.log(req.status);
                	if(req.status === 200){          // Checks if request was a success
						resolve(req.responseText);      // Sets Promise equal to the response
                	}
                
                	else{    
                    	reject(req.statusText);  // If the the request failed set the Promise equal to the error text
                	}
            	}
        	};
        
        	req.send();  // Sends the request
    	})
	}
	
	getTeamNum(teamArrayBlue,teamArrayRed){
		return new Promise((resolve,reject) =>{
			var arrayBlueIsReady = false;
			var arrayRedIsReady = true;
			var teamNumsBlue = [];
			var teamNumsRed = [];
			
			for(var i = 0; i < teamArrayRed.length; i++){
				teamNumsBlue[i] = teamArrayRed[i].split("frc")[1];
				if(i === 3){
					arrayBlueIsReady = true;
				}
			}
				
			for(var i = 0; i < teamArrayRed.length; i++){
				teamNumsRed[i] = teamArrayRed[i].split("frc")[1];
				if(i === 3){
					arrayRedIsReady = false;
				}
			}
			
			if(arrayRedIsReady && arrayBlueIsReady){
				resolve([teamArrayBlue,teamArrayRed]);
			}
			
			else{
				reject("Not Ready");
			}
		})
	} 
  
 	// handleUpdateSchedule(){
	// 	var tbaMatches = this.getTBAMatches();
	// 	tbaMatches.then((tba) =>{
	// 		var tbaResponse = JSON.parse("[" + tba + "]");
	// 		console.log(tbaResponse.length);
	// 		for(var i = 1; i < tbaResponse.length; i++){
	// 			console.log(i + "i");
	// 			for(var element in tbaResponse){
	// 				console.log(element);
	// 				if(element.comp_level === "qm" && element.match_number === i){
	// 					var data = MatchData;
	// 					this.getTeamNum(element.alliances.blue,element.alliances.red).then((teamNums) =>{
	// 						data.matchTeams.alliance.blue = teamNums[0];
	// 						data.matchTeams.alliance.red = teamNums[1];
	// 						this.matches.push(data);
	// 						console.log(this.matches+ " first");
	// 					},
						
	// 					(error) =>{
	// 						console.log("error");
	// 					})
	// 				}
	// 			}
	// 		}
	// 	},
		
	// 	(error) =>{
	// 		console.log("error");
	// 	})
		
	// 	console.log(this.matches + " last");
	// }
    
    handleUpdateSchedule(matchNum){
        this.matches.push(MatchData);
        // console.log(this.matches.length);
        // for(var i = 0; i < this.matches.length; i++){
            // console.log(JSON.stringify(this.matches[i]) + " Matches");
        // }
    }
    
    handleUpdateValue(data){
        console.log("reached store");
        console.log(data[0] + " match");
        console.log(data[1] + " key");
        console.log(data[0] + " value");
        
        if(data[1] === "b1"){
            this.matches[data[0]-1].matchTeams.alliance.blue[0] = data[2];
        }
        
        else if(data[1] === "b2"){
            this.matches[data[0]-1].matchTeams.alliance.blue[1] = data[2];
        }
        
        else if(data[1] === "b3"){
            this.matches[data[0]-1].matchTeams.alliance.blue[2] = data[2];
        }
        
        else if(data[1] === "r1"){
            this.matches[data[0]-1].matchTeams.alliance.red[0] = data[2];
        }
        
        else if(data[1] === "r2"){
            this.matches[data[0]-1].matchTeams.alliance.red[1] = data[2];
        }
        
        else if(data[1] === "r3"){
            this.matches[data[0]-1].matchTeams.alliance.red[2] = data[2];
        }
            
        else if(data[1] === "bs"){
            this.matches[data[0]-1].matchScore.alliance.blue = data[2];
        }
        
        else if(data[1] === "rs"){
            this.matches[data[0]-1].matchScore.alliance.red = data[2];
        }
    }
}

export default alt.createStore(MatchStore, 'MatchStore');

