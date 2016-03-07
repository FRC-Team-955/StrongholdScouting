import ScheduleActions from '../../actions/match/ScheduleActions';

var MatchData = require('./MatchData');

var alt = require('../../alt');
// var TheNodeAlliance = require("the-node-alliance");

// var TBA = new TheNodeAlliance("team955:testing-api:v01");

export class MatchStore {
 	constructor() {
	  this.matches = [];
	  this.bindListeners({
		  handleUpdateSchedule : ScheduleActions.UPDATE_SCHEDULE
	  })
 	}
	
	getTBAMatches(){
		var req = new XMLHttpRequest();
		return new Promise((resolve,reject) =>{
        	req.open("GET", "https://www.thebluealliance.com/api/v2/event/2016waamv/matches?team955:testing-api:v01", true);      // Instantiate XMLHTTPRequest as a GET request at url. Mark as asynchronous
        	req.onreadystatechange = () => { // Runs when ready state changes
            	if(req.readyState === 4){        // Checks if request has been made 
                	if(req.status === 200){          // Checks if request was a success
						resolve(req.responseText);       // Sets Promise equal to the response
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
  
 	handleUpdateSchedule(){
		var tbaMatches = this.getTBAMatches();
		for(var i = 1; i < tbaMatches.length; i++){
			for(var element in tbaMatches){
				if(element.comp_level === "qm" && element.match_number === i){
					var data = MatchData;
					this.getTeamNum(element.alliances.blue,element.alliances.red).then((teamNums) =>{
						data.matchTeams.alliance.blue = teamNums[0];
						data.matchTeams.alliance.red = teamNums[1];
						this.matches.push(data);
					},
					
					(error) =>{
						console.log("error");
					})
				}
  			}
		}
	}
}

export default alt.createStore(MatchStore, 'MatchStore');
