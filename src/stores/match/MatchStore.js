var ScheduleActions = require('../../actions/match/ScheduleActions');
var TextFieldActions = require('../../actions/match/TextFieldActions');
var EventEmitter = require('events').EventEmitter;

var MatchData = require('./MatchData');


var alt = require('../../components/Dispatcher');
// var TheNodeAlliance = require("the-node-alliance");

// var TBA = new TheNodeAlliance("team955:testing-api:v01");
var test = 9;

export class MatchStore
 {
 	constructor() 
	{
	  this.state = {matches : {"totalMatchNumber" : 0}}
	  
	  this.bindListeners({
		  handleUpdateSchedule : ScheduleActions.UPDATE_SCHEDULE,
          handleUpdateValue : TextFieldActions.UPDATE_VALUE
	  });
 	}
	
	getTBAMatches()
	{
		var req = new XMLHttpRequest();
		return new Promise((resolve,reject) =>
		{
        	req.open("GET", "https://www.thebluealliance.com/api/v2/event/2016waamv/matches?X-TBA-App-Id=team955:testing-api:v01", true);      // Instantiate XMLHTTPRequest as a GET request at url. Mark as asynchronous
        	req.onreadystatechange = () =>
			{ // Runs when ready state changes
            	if(req.readyState === 4)
				{        // Checks if request has been made 
					console.log(req.status);
                	if(req.status === 200)
					{          // Checks if request was a success
						resolve(req.responseText);      // Sets Promise equal to the response
                	}
                
                	else
					{    
                    	reject(req.statusText);  // If the the request failed set the Promise equal to the error text
                	}
            	}
        	};
        
        	req.send();  // Sends the request
    	})
	}
	
	getTeamNum(teamArrayBlue,teamArrayRed)
	{
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
		this.matches.totalMatchNumber += 1;
		console.log(JSON.stringify(this.matches) + " object");
		setTimeout(() => {
      		this.emitChange();
    	}, 100);
		
	}
	
    handleUpdateValue(data){
        console.log(JSON.stringify(data));
        this.matches[data.matchNum+data.textID] = data.value;
		setTimeout(() => {
      		this.emitChange();
    	}, 100);
    }
	
	getMatchData(){
		var test1 = 7;
		// console.log(JSON.stringify(this.matches) + " actually store");
		return this.test;
	}
}

export default alt.createStore(MatchStore, 'MatchStore');