var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ScoringData = require('./ScoringData');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var scores = {"Team 1": ScoringData.addTeam("Team 1", 0)};

function getIndexes(team,match){
	return new Promise((resolve,reject) => {
		for(var i in scores){
			if(i.team === team){
				for(var k in i.matches){
					if(k.match === match){
						resolve([scores.indexOf(i),scores.i.matches(k)]);
					}
				
					else{
						reject("error");
					}
				}
			}
		}
	});
}

function increment(currValue){
	console.log(currValue);
	if(currValue === undefined)
		return 1;
	else
		return (currValue+1)
}

function handleUpdateAddTeam(team,match){
	if(scores[team] === undefined){
		scores[team] = ScoringData.addTeam(team,match);
	}
	
	console.log(scores);
}

function handleUpdateReachDefense(team,match){
	scores[team].matches[match].auto.reachedDefense = !scores[team].matches[match].auto.reachedDefense;
	scores[team].matches[match].auto.reachedDefense? increment(scores[team].stats.auto.defensesReached):scores[team].stats.auto.defensesReached -= 1;
}

function handleUpdateCrossedDefense(team,match){
	scores[team].matches[match].auto.crossedDefense = !scores[team].matches[match].auto.crossedDefense;
}

function handleUpdateCrossDefense(team,match,value){
	console.log(value);
	if(value === 1){
		scores[team].matches[match].auto.defensesCrossed.portcullis = true;
		scores[team].matches[match].auto.defensesCrossed.chevalDeFrise = false;
		scores[team].matches[match].auto.defensesCrossed.rockWall = false;
		scores[team].matches[match].auto.defensesCrossed.moat = false;
		scores[team].matches[match].auto.defensesCrossed.drawbridge = false;
		scores[team].matches[match].auto.defensesCrossed.sallyPort = false;
		scores[team].matches[match].auto.defensesCrossed.roughTerrain = false;
		scores[team].matches[match].auto.defensesCrossed.ramparts = false;
		scores[team].matches[match].auto.defensesCrossed.lowBar = false;
	}
	
	else if(value === 2){
		scores[team].matches[match].auto.defensesCrossed.portcullis = false;
		scores[team].matches[match].auto.defensesCrossed.chevalDeFrise = true;
		scores[team].matches[match].auto.defensesCrossed.rockWall = false;
		scores[team].matches[match].auto.defensesCrossed.moat = false;
		scores[team].matches[match].auto.defensesCrossed.drawbridge = false;
		scores[team].matches[match].auto.defensesCrossed.sallyPort = false;
		scores[team].matches[match].auto.defensesCrossed.roughTerrain = false;
		scores[team].matches[match].auto.defensesCrossed.ramparts = false;
		scores[team].matches[match].auto.defensesCrossed.lowBar = false;
	}
	
	else if(value === 3){
		scores[team].matches[match].auto.defensesCrossed.portcullis = false;
		scores[team].matches[match].auto.defensesCrossed.chevalDeFrise = false;
		scores[team].matches[match].auto.defensesCrossed.rockWall = true;
		scores[team].matches[match].auto.defensesCrossed.moat = false;
		scores[team].matches[match].auto.defensesCrossed.drawbridge = false;
		scores[team].matches[match].auto.defensesCrossed.sallyPort = false;
		scores[team].matches[match].auto.defensesCrossed.roughTerrain = false;
		scores[team].matches[match].auto.defensesCrossed.ramparts = false;
		scores[team].matches[match].auto.defensesCrossed.lowBar = false;
	}
	
	else if(value === 4){
		scores[team].matches[match].auto.defensesCrossed.portcullis = false;
		scores[team].matches[match].auto.defensesCrossed.chevalDeFrise = false;
		scores[team].matches[match].auto.defensesCrossed.rockWall = false;
		scores[team].matches[match].auto.defensesCrossed.moat = true;
		scores[team].matches[match].auto.defensesCrossed.drawbridge = false;
		scores[team].matches[match].auto.defensesCrossed.sallyPort = false;
		scores[team].matches[match].auto.defensesCrossed.roughTerrain = false;
		scores[team].matches[match].auto.defensesCrossed.ramparts = false;
		scores[team].matches[match].auto.defensesCrossed.lowBar = false;
	}
	
	else if(value === 5){
		scores[team].matches[match].auto.defensesCrossed.portcullis = false;
		scores[team].matches[match].auto.defensesCrossed.chevalDeFrise = false;
		scores[team].matches[match].auto.defensesCrossed.rockWall = false;
		scores[team].matches[match].auto.defensesCrossed.moat = false;
		scores[team].matches[match].auto.defensesCrossed.drawbridge = true;
		scores[team].matches[match].auto.defensesCrossed.sallyPort = false;
		scores[team].matches[match].auto.defensesCrossed.roughTerrain = false;
		scores[team].matches[match].auto.defensesCrossed.ramparts = false;
		scores[team].matches[match].auto.defensesCrossed.lowBar = false;
	}
	
	else if(value === 6){
		scores[team].matches[match].auto.defensesCrossed.portcullis = false;
		scores[team].matches[match].auto.defensesCrossed.chevalDeFrise = false;
		scores[team].matches[match].auto.defensesCrossed.rockWall = false;
		scores[team].matches[match].auto.defensesCrossed.moat = false;
		scores[team].matches[match].auto.defensesCrossed.drawbridge = false;
		scores[team].matches[match].auto.defensesCrossed.sallyPort = true;
		scores[team].matches[match].auto.defensesCrossed.roughTerrain = false;
		scores[team].matches[match].auto.defensesCrossed.ramparts = false;
		scores[team].matches[match].auto.defensesCrossed.lowBar = false;
	}
		
	else if(value === 7){
		scores[team].matches[match].auto.defensesCrossed.portcullis = false;
		scores[team].matches[match].auto.defensesCrossed.chevalDeFrise = false;
		scores[team].matches[match].auto.defensesCrossed.rockWall = false;
		scores[team].matches[match].auto.defensesCrossed.moat = false;
		scores[team].matches[match].auto.defensesCrossed.drawbridge = false;
		scores[team].matches[match].auto.defensesCrossed.sallyPort = false;
		scores[team].matches[match].auto.defensesCrossed.roughTerrain = true;
		scores[team].matches[match].auto.defensesCrossed.ramparts = false;
		scores[team].matches[match].auto.defensesCrossed.lowBar = false;
	}
	
	else if(value === 8){
		scores[team].matches[match].auto.defensesCrossed.portcullis = false;
		scores[team].matches[match].auto.defensesCrossed.chevalDeFrise = false;
		scores[team].matches[match].auto.defensesCrossed.rockWall = false;
		scores[team].matches[match].auto.defensesCrossed.moat = false;
		scores[team].matches[match].auto.defensesCrossed.drawbridge = false;
		scores[team].matches[match].auto.defensesCrossed.sallyPort = false;
		scores[team].matches[match].auto.defensesCrossed.roughTerrain = false;
		scores[team].matches[match].auto.defensesCrossed.ramparts = true;
		scores[team].matches[match].auto.defensesCrossed.lowBar = false;
	}
	
	else if(value === 9){
		scores[team].matches[match].auto.defensesCrossed.portcullis = false;
		scores[team].matches[match].auto.defensesCrossed.chevalDeFrise = false;
		scores[team].matches[match].auto.defensesCrossed.rockWall = false;
		scores[team].matches[match].auto.defensesCrossed.moat = false;
		scores[team].matches[match].auto.defensesCrossed.drawbridge = false;
		scores[team].matches[match].auto.defensesCrossed.sallyPort = false;
		scores[team].matches[match].auto.defensesCrossed.roughTerrain = false;
		scores[team].matches[match].auto.defensesCrossed.ramparts = false;
		scores[team].matches[match].auto.defensesCrossed.lowBar = true;
	}
}

function handleUpdateIncrementHighAutoGoals(team,match){
	scores[team].matches[match].auto.highGoal = increment(scores[team].matches[match].auto.highGoal);
	scores[team].stats.auto.highGoals = increment(scores[team].stats.auto.highGoals);
}

function handleUpdateDecrementHighAutoGoals(team,match){
	scores[team].matches[match].auto.highGoal -= 1;
	scores[team].stats.auto.highGoals -= 1;
}

function handleUpdateIncrementLowAutoGoals(team,match){
	scores[team].matches[match].auto.lowGoal = increment(scores[team].matches[match].auto.lowGoal);
	scores[team].stats.auto.lowGoals = increment(scores[team].stats.auto.lowGoals);
}

function handleUpdateDecrementLowAutoGoals(team,match){
	scores[team].matches[match].auto.lowGoal -= 1;
	scores[team].stats.auto.lowGoals -= 1;
}

function handleUpdateIncrementHighTeleopGoals(team,match,callback){
	scores[team].matches[match].teleop.highGoal.successes = increment(scores[team].matches[match].teleop.highGoal.successes);
	scores.needsUpdate?false:true;
}

function handleUpdateDecrementHighTeleopGoals(team,match){
	scores[team].matches[match].teleop.highGoal.successes -= 1;
	scores[team].stats.teleop.highGoal.successes -= 1;
	scores[team].stats.match.highGoal.successes -= 1;
}

function handleUpdateIncrementLowTeleopGoals(team,match){
	scores[team].matches[match].teleop.lowGoal.successes = increment(scores[team].matches[match].teleop.lowGoal.successes);
	scores[team].stats.teleop.lowGoal.successes = increment(scores[team].stats.teleop.lowGoal.successes);
	scores[team].stats.match.lowGoal.successes = increment(scores[team].stats.match.lowGoal.successes);
}

function handleUpdateDecrementLowTeleopGoals(team,match){
	scores[team].matches[match].teleop.lowGoal.successes -= 1;
	scores[team].stats.teleop.lowGoal.successes -= 1;
	scores[team].stats.match.lowGoal.successes -= 1;
}

function handleUpdateIncrementHighGoalsAttempted(team,match){
	scores[team].matches[match].teleop.highGoal.attempted = increment(scores[team].matches[match].teleop.highGoal.attempted);
	scores[team].stats.teleop.highGoal.attempted = increment(scores[team].stats.teleop.highGoal.attempted);
	scores[team].stats.match.highGoal.attempted = increment(scores[team].stats.match.highGoal.attempted);
}

function handleUpdateDecrementHighGoalsAttempted(team,match){
	scores[team].matches[match].teleop.highGoal.attempted -= 1;
	scores[team].stats.teleop.highGoal.attempted -= 1;
	scores[team].stats.match.highGoal.attempted -= 1;
}

function handleUpdateIncrementLowGoalsAttempted(team,match){
	scores[team].matches[match].teleop.lowGoal.attempted = increment(scores[team].matches[match].teleop.lowGoal.attempted);
	scores[team].stats.teleop.lowGoal.attempted = increment(scores[team].matches[match].teleop.lowGoal.attempted);
	scores[team].stats.match.lowGoal.attempted = increment(scores[team].matches[match].teleop.lowGoal.attempted);
}

function handleUpdateDecrementLowGoalsAttempted(team,match){
	scores[team].matches[match].teleop.lowGoal.attempted -= 1;
	scores[team].stats.teleop.lowGoal.attempted -= 1;
	scores[team].stats.match.lowGoal.attempted -= 1;
}

function handleUpdateTeamComments(teamComments,team,match){
	//TODO add comment array
	scores[team].matches[match].teamComments = teamComments;
}



function handleUpdateScale(team,match){
	scores[team].matches[match].scaled = !scores[team].matches[match].scaled;
	scores[team].matches[match].scaled?scores[team].stats.totalScales = increment(scores[team].matches[match].teleop.lowGoal.attempted):scores[team].stats.totalScales -= 1;
}

function handleUpdateScaleHeight(value,team,match){
	console.log(value);
	if(value){
		scores[team].matches[match].scaledHigh = true;
		scores[team].matches[match].scaledLow = false;
	}
	
	else{
		scores[team].matches[match].scaledHigh = false;
		scores[team].matches[match].scaledLow = true;
	}
}

function handleUpdateBreach(team,match){
	// console.log("called");
	scores[team].matches[match].breach = !scores[team].matches[match].breach;
	scores[team].matches[match].breach? scores[team].stats.totalBreaches = increment(scores[team].stats.totalBreaches):scores[team].stats.totalBreaches -= 1;
}

function handleUpdateCapture(team,match){
	scores[team].matches[match].capture = !scores[team].matches[match].capture;
	scores[team].matches[match].capture? scores[team].stats.totalCaptures = increment(scores[team].stats.totalCaptures):scores[team].stats.totalCaptures -= 1;
}

function handleUpdatePerformance(performanceRating,team,match){
	if(performanceRating === 1)
		scores[team].matches[match].performanceRating = "good";
	
	else if(performanceRating === .5)
		scores[team].matches[match].performanceRating = "meh";
	
	else
		scores[team].matches[match].performanceRating = "bad";
}

function handleUpdateOffense(offenseRating,team,match){
	if(offenseRating === 1)
		scores[team].matches[match].offenseRating = "good";
	
	else if(offenseRating === .5)
		scores[team].matches[match].offenseRating = "meh";
	
	else
		scores[team].matches[match].offenseRating = "bad";
}

function handleUpdateDefense(defenseRating,team,match){
	if(defenseRating === 1)
		scores[team].matches[match].defenseRating = "good";
	
	else if(defenseRating === .5)
		scores[team].matches[match].defenseRating = "meh";
	
	else
		scores[team].matches[match].defenseRating = "bad";
}

function handleUpdateAuto(team,match){
	scores[team].matches[match].performedAuto = !scores[team].matches[match].performedAuto;
}

function handleUpdateChallenge(team,match){
	scores[team].matches[match].challenge = !scores[team].matches[match].challenge;
}

function handleUpdateSpy(team,match){
	scores[team].matches[match].spy = !scores[team].matches[match].spy;
}

function handleUpdateHumanPlayer(team,match){
	scores[team].matches[match].humanPlayer = !scores[team].matches[match].humanPlayer;
}

function handleUpdateVision(team,match){
	scores[team].matches[match].vision = !scores[team].matches[match].vision;
}

function handleUpdateBroken(team,match){
	scores[team].matches[match].broken = !scores[team].matches[match].broken;
}

function handleUpdateIncrementPortcullis(team,match){
	scores[team].matches[match].teleop.defensesCrossed.portcullis = increment(scores[team].matches[match].teleop.defensesCrossed.portcullis);
	scores[team].stats.teleop.defensesCrossed.portcullis = increment(scores[team].stats.teleop.defensesCrossed.portcullis);
	scores[team].stats.match.defensesCrossed.portcullis = increment(scores[team].stats.match.defensesCrossed.portcullis);
}

function handleUpdateDecrementPortcullis(team,match){
	scores[team].matches[match].teleop.defensesCrossed.portcullis -= 1;
	scores[team].stats.teleop.defensesCrossed.portcullis -= 1;
	scores[team].stats.match.defensesCrossed.portcullis -= 1;
}

function handleUpdateIncrementChevalDeFrise(team,match){
	scores[team].matches[match].teleop.defensesCrossed.chevalDeFrise = increment(scores[team].matches[match].teleop.defensesCrossed.chevalDeFrise);
	scores[team].stats.teleop.defensesCrossed.chevalDeFrise = increment(scores[team].stats.teleop.defensesCrossed.chevalDeFrise);
	scores[team].stats.match.defensesCrossed.chevalDeFrise = increment(scores[team].stats.match.defensesCrossed.chevalDeFrise);
}

function handleUpdateDecrementChevalDeFrise(team,match){
	scores[team].matches[match].teleop.defensesCrossed.chevalDeFrise -= 1;
	scores[team].stats.teleop.defensesCrossed.chevalDeFrise -= 1;
	scores[team].stats.match.defensesCrossed.chevalDeFrise -= 1;
}

function handleUpdateIncrementMoat(team,match){
	scores[team].matches[match].teleop.defensesCrossed.moat = increment(scores[team].matches[match].teleop.defensesCrossed.moat);
	scores[team].stats.teleop.defensesCrossed.moat = increment(scores[team].stats.teleop.defensesCrossed.moat);
	scores[team].stats.match.defensesCrossed.moat = increment(scores[team].stats.match.defensesCrossed.moat);
}

function handleUpdateDecrementMoat(team,match){
	scores[team].matches[match].teleop.defensesCrossed.moat -= 1;
	scores[team].stats.teleop.defensesCrossed.moat -= 1;
	scores[team].stats.match.defensesCrossed.moat -= 1;
}

function handleUpdateIncrementRamparts(team,match){
	scores[team].matches[match].teleop.defensesCrossed.ramparts = increment(scores[team].matches[match].teleop.defensesCrossed.ramparts);
	scores[team].stats.teleop.defensesCrossed.ramparts = increment(scores[team].stats.teleop.defensesCrossed.ramparts);
	scores[team].stats.match.defensesCrossed.ramparts = increment(scores[team].stats.match.defensesCrossed.ramparts);
}

function handleUpdateDecrementRamparts(team,match){
	scores[team].matches[match].teleop.defensesCrossed.ramparts -= 1;
	scores[team].stats.teleop.defensesCrossed.ramparts -= 1;
	scores[team].stats.match.defensesCrossed.ramparts -= 1;
}

function handleUpdateIncrementDrawbridge(team,match){
	scores[team].matches[match].teleop.defensesCrossed.drawbridge = increment(scores[team].matches[match].teleop.defensesCrossed.drawbridge);
	scores[team].stats.teleop.defensesCrossed.drawbridge = increment(scores[team].stats.teleop.defensesCrossed.drawbridge);
	scores[team].stats.match.defensesCrossed.drawbridge = increment(scores[team].stats.match.defensesCrossed.drawbridge);
}

function handleUpdateDecrementDrawbridge(team,match){
	scores[team].matches[match].teleop.defensesCrossed.drawbridge -= 1;
	scores[team].stats.teleop.defensesCrossed.drawbridge -= 1;
	scores[team].stats.match.defensesCrossed.drawbridge -= 1;
}

function handleUpdateIncrementSallyPort(team,match){
	scores[team].matches[match].teleop.defensesCrossed.sallyPort = increment(scores[team].matches[match].teleop.defensesCrossed.sallyPort);
	scores[team].stats.teleop.defensesCrossed.sallyPort = increment(scores[team].stats.teleop.defensesCrossed.sallyPort);
	scores[team].stats.match.defensesCrossed.sallyPort = increment(scores[team].stats.match.defensesCrossed.sallyPort);
}

function handleUpdateDecrementSallyPort(team,match){
	scores[team].matches[match].teleop.defensesCrossed.sallyPort -= 1;
	scores[team].stats.teleop.defensesCrossed.sallyPort -= 1;
	scores[team].stats.match.defensesCrossed.sallyPort -= 1;
}

function handleUpdateIncrementRockWall(team,match){
	scores[team].matches[match].teleop.defensesCrossed.rockWall = increment(scores[team].matches[match].teleop.defensesCrossed.rockWall);
	scores[team].stats.teleop.defensesCrossed.rockWall = increment(scores[team].stats.teleop.defensesCrossed.rockWall);
	scores[team].stats.match.defensesCrossed.rockWall = increment(scores[team].stats.match.defensesCrossed.rockWall);
}

function handleUpdateDecrementRockWall(team,match){
	scores[team].matches[match].teleop.defensesCrossed.rockWall -= 1;
	scores[team].stats.teleop.defensesCrossed.rockWall -= 1;
	scores[team].stats.match.defensesCrossed.rockWall -= 1;
}

function handleUpdateIncrementRoughTerrain(team,match){
	scores[team].matches[match].teleop.defensesCrossed.roughTerrain = increment(scores[team].matches[match].teleop.defensesCrossed.roughTerrain);
	scores[team].stats.teleop.defensesCrossed.roughTerrain = increment(scores[team].stats.teleop.defensesCrossed.roughTerrain);
	scores[team].stats.match.defensesCrossed.roughTerrain = increment(scores[team].stats.match.defensesCrossed.roughTerrain);
}

function handleUpdateDecrementRoughTerrain(team,match){
	scores[team].matches[match].teleop.defensesCrossed.roughTerrain -= 1;
	scores[team].stats.teleop.defensesCrossed.roughTerrain -= 1;
	scores[team].stats.match.defensesCrossed.roughTerrain -= 1;
}

function handleUpdateIncrementLowBar(team,match){
	scores[team].matches[match].teleop.defensesCrossed.lowBar = increment(scores[team].matches[match].teleop.defensesCrossed.lowBar);
	scores[team].stats.teleop.defensesCrossed.lowBar = increment(scores[team].stats.teleop.defensesCrossed.lowBar);
	scores[team].stats.match.defensesCrossed.lowBar = increment(scores[team].stats.match.defensesCrossed.lowBar);
}

function handleUpdateDecrementLowBar(team,match){
	scores[team].matches[match].teleop.defensesCrossed.lowBar -= 1;
	scores[team].stats.teleop.defensesCrossed.lowBar -= 1;
	scores[team].stats.match.defensesCrossed.lowBar -= 1;
}

var ScoresStore = assign({}, EventEmitter.prototype, {
	getScoresData: function(){
		return(scores);
	},
	
	emitChange: function(){
		this.emit(CHANGE_EVENT)
	},
	
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	
	removeChangeListner: function(callback){
		this.removeListner(CHANGE_EVENT, callback);
	},
	
	dispatcherIndex: AppDispatcher.register(function(payload) {
    	var action = payload.action;
		
		switch(action.actionType){
            case ScoringConstants.ReachedDefense:
                handleUpdateReachDefense(action.team,action.match);
				ScoresStore.emitChange();
                break;
			
			case ScoringConstants.CrossDefense:
				handleUpdateCrossDefense(action.team,action.match,action.value);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.IncrementHighAutoGoals:
				handleUpdateIncrementHighAutoGoals(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementHighAutoGoals:
				handleUpdateDecrementHighAutoGoals(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.IncrementLowAutoGoals:
				handleUpdateIncrementLowAutoGoals(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementLowAutoGoals:
				handleUpdateDecrementLowAutoGoals(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.IncrementHighTeleopGoals:
				handleUpdateIncrementHighTeleopGoals(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementHighTeleopGoals:
				handleUpdateDecrementHighTeleopGoals(action.team,action.match);
				ScoresStore.emitChange();
				break;
				
			case ScoringConstants.IncrementLowTeleopGoals:
				handleUpdateIncrementLowTeleopGoals(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementLowTeleopGoals:
				handleUpdateDecrementLowTeleopGoals(action.team,action.match);
				ScoresStore.emitChange();
				break;
				
			case ScoringConstants.IncrementHighGoalsAttempted:
				handleUpdateIncrementHighGoalsAttempted(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementHighGoalsAttempted:
				handleUpdateDecrementHighGoalsAttempted(action.team,action.match);
				ScoresStore.emitChange();
				break;
				
			case ScoringConstants.IncrementLowGoalsAttempted:
				handleUpdateIncrementLowGoalsAttempted(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementLowGoalsAttempted:
				handleUpdateIncrementLowGoalsAttempted(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.TeamComments:
				handleUpdateTeamComments(action.teamComments,action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.Scale:
				handleUpdateScale(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.ScaleHeight:
				handleUpdateScaleHeight(action.value,action.team,action.match);
				ScoresStore.emitChange();
				break;
				
			case ScoringConstants.Breach:
				handleUpdateBreach(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.Capture:
				handleUpdateCapture(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.Performance:
				handleUpdatePerformance(action.performanceRating,action.team,action.match);
				ScoresStore.emitChange();
				break;
				
			case ScoringConstants.Offense:
				handleUpdateOffense(action.offenseRating,action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.Defense:
				handleUpdateDefense(action.defenseRating,action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.Auto:
				handleUpdateAuto(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.Challenge:
				handleUpdateChallenge(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.Spy:
				handleUpdateSpy(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.HumanPlayer:
				handleUpdateHumanPlayer(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.Vision:
				handleUpdateVision(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.Broken:
				handleUpdateBroken(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.IncrementPortcullis:
				handleUpdateIncrementPortcullis(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementPortcullis:
				handleUpdateDecrementPortcullis(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.IncrementChevalDeFrise:
				handleUpdateIncrementChevalDeFrise(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementChevalDeFrise:
				handleUpdateDecrementChevalDeFrise(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.IncrementMoat:
				handleUpdateIncrementMoat(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementMoat:
				handleUpdateDecrementMoat(action.team,action.match);
				ScoresStore.emitChange();
				break;
				
			case ScoringConstants.IncrementRamparts:
				handleUpdateIncrementRamparts(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementRamparts:
				handleUpdateDecrementRamparts(action.team,action.match);
				ScoresStore.emitChange();
				break;
				
			case ScoringConstants.IncrementDrawbridge:
				handleUpdateIncrementDrawbridge(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementDrawbridge:
				handleUpdateDecrementDrawbridge(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.IncrementSallyPort:
				handleUpdateIncrementSallyPort(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementSallyPort:
				handleUpdateDecrementSallyPort(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.IncrementRockWall:
				handleUpdateIncrementRockWall(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementRockWall:
				handleUpdateDecrementRockWall(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.IncrementRoughTerrain:
				handleUpdateIncrementRoughTerrain(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementRoughTerrain:
				handleUpdateDecrementRoughTerrain(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.IncrementRoughTerrain:
				handleUpdateIncrementLowBar(action.team,action.match);
				ScoresStore.emitChange();
				break;
				
			case ScoringConstants.IncrementLowBar:
				handleUpdateIncrementLowBar(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.DecrementLowBar:
				handleUpdateDecrementLowBar(action.team,action.match);
				ScoresStore.emitChange();
				break;
				
			case ScoringConstants.AddTeam:
				handleUpdateAddTeam(action.team,action.match);
				ScoresStore.emitChange();
				break;
			
			case ScoringConstants.CrossedDefense:
				handleUpdateCrossedDefense(action.team,action.match);
				ScoresStore.emitChange();
				break;
				
        }
		
		return true;
	})
	
});

export default ScoresStore;