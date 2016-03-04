var MatchData = require('./MatchData');

var alt = require('../../alt');
var ScheduleActions = require('../actions/ScheduleActions');
var TheNodeAlliance = require("the-node-alliance");

var TBA = new TheNodeAlliance("team955:testing-api:v01");

export class MatchStore {

 	constructor() {
	  this.matches = [];
	  this.bindListeners({
		  handleUpdateLocations : ScheduleActions.UPDATE_SCHEDULE
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
		var tbaMatches = TBA.event.matches;
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
