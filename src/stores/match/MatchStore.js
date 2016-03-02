var MatchData = require('./MatchData');

var alt = require('../../alt');
var TheNodeAlliance = require("the-node-alliance");

var TBA = new TheNodeAlliance("team955:testing-api:v01");

export class MatchStore {

 	constructor() {
	  this.matches = [];  
 	}
	 
	getTeamNum(teamArray){
		var teamNums = [];
		for(var i = 0; i < teamArray.length; i++){
			teamNums[i] = teamArray[i].split("frc");
		}
	} 
  
 	handleUpdateSchedule()
 	{
		var tbaMatches = TBA.event.matches;
		for(var i = 1; i < tbaMatches.length; i++){  
			for (var element in tbaMatches) {
				if(element.comp_level === "qm" && element.match_number === i){
					var data = MatchData;
					data.matchTeams.alliance.blue = getelement.alliances.blue
					this.matches.push();
				}
  			}
		}
	}
  
}

export default alt.createStore(MatchStore, 'MatchStore');
