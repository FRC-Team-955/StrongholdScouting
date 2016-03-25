import ScoringConstants from'../../constants/ScoringConstants'

var AppDispatcher = require('../../components/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var scores = {};

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
	})
}
  
function handleUpdateReachDefense(team,match){
	!scores[team].matches.auto.reachedDefense?true:false;
	scores[team].matches.auto.reachedDefense?scores[team].stats.auto.defensesReached += 1:scores[team].stats.auto.defensesReached -= 1;
}

function handleUpdateCrossDefense(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].auto.defensesCrossed.isCrossDefense[1] = !scores[indexes[0]].matchesmatches[indexes[1]].auto.defensesCrossed.isCrossDefense[1];
		scores[indexes[0]].matches[indexes[1]].auto.defensesCrossed.isCrossDefense[1]?scores[indexes[0]].stats.auto.defensesCrossed.isCrossDefense[1] += 1:scores[indexes[0]].stats.auto.defensesCrossed.isCrossDefense[1] -= 1;
		scores[indexes[0]].matches[indexes[1]].auto.defensesCrossed.isCrossDefense[1]?scores[indexes[0]].stats.match.defensesCrossed.isCrossDefense[1] += 1:scores[indexes[0]].stats.match.defensesCrossed.isCrossDefense[1] -= 1;
	},
		
	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementHighAutoGoals(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].auto.highGoal += 1;
		scores[indexes[0]].stats.auto.highGoals += 1
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementHighAutoGoals(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].auto.highGoal -= 1;
		scores[indexes[0]].stats.auto.highGoal -= 1 ;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementLowAutoGoals(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].auto.lowGoal += 1;
		scores[indexes[0]].stats.auto.lowGoal += 1 ;
},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementLowAutoGoals(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].auto.lowGoal -= 1;
		scores[indexes[0]].stats.auto.lowGoal -= 1 ;
},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementHighTeleopGoals(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.highGoal.successes +=1;
		scores[indexes[0]].stats.teleop.highGoal.successes += 1;
		scores[indexes[0]].stats.match.highGoal.successes += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementHighTeleopGoals(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.highGoal.successes -=1;
		scores[indexes[0]].stats.teleop.highGoal.successes -= 1;
		scores[indexes[0]].stats.match.highGoal.successes -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementLowTeleopGoals(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.highGoal.successes +=1;
		scores[indexes[0]].stats.teleop.highGoal.successes += 1;
		scores[indexes[0]].stats.match.highGoal.successes += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementLowTeleopGoals(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.highGoal.successes -=1;
		scores[indexes[0]].stats.teleop.highGoal.successes -= 1;
		scores[indexes[0]].stats.match.highGoal.successes -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementHighGoalsAttempted(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.highGoal.attempts +=1;
		scores[indexes[0]].stats.teleop.highGoal.attempts += 1;
		scores[indexes[0]].stats.match.highGoal.attempts += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementHighGoalsAttempted(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.highGoal.attempts -=1;
		scores[indexes[0]].stats.teleop.highGoal.attempts -= 1;
		scores[indexes[0]].stats.match.highGoal.attempts -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementLowGoalsAttempted(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.highGoal.attempts +=1;
		scores[indexes[0]].stats.teleop.highGoal.attempts += 1;
		scores[indexes[0]].stats.match.highGoal.attempts += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementLowGoalsAttempted(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.highGoal.attempts -=1;
		scores[indexes[0]].stats.teleop.highGoal.attempts -= 1;
		scores[indexes[0]].stats.match.highGoal.attempts -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateTeamComments(teamComments,team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teamComments = teamComments;
		scores[indexes[0]].comments.push(teamComments);
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateMatchComments(matchComments,team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].matchComments = matchComments;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateScale(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].scaled = !scores[indexes[0]].matches[indexes[1]].scaled;
	},

	(error) =>{
	console.log(error);
	})
}

function handleUpdateScaleHeight(scaleHeight,team,match){
	getIndexes(team,match).then((indexes) =>{
		if(scaleHeight === "high"){
			scores[indexes[0]].matches[indexes[1]].scaledHigh = true;
			scores[indexes[0]].matches[indexes[1]].scaledLow = false;					
		}
	
		else{
		scores[indexes[0]].matches[indexes[1]].scaledHigh = false;
		scores[indexes[0]].matches[indexes[1]].scaledLow = true;
		}
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateBreach(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].breach = !scores[indexes[0]].matches[indexes[1]].breach;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateCapture(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].capture = !scores[indexes[0]].matches[indexes[1]].capture;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdatePerformance(performanceRating,team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].performanceRating = performanceRating;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateOffense(offenseRating,team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].offensiveRating = offenseRating;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDefense(defenseRating,team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].defensiveRating = defenseRating;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateAuto(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].performedAuto = !scores[indexes[0]].matches[indexes[1]].performedAuto;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateChallenge(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].challenge = !scores[indexes[0]].matches[indexes[1]].challenge;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateSpy(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].spy = !scores[indexes[0]].matches[indexes[1]].spy;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateHumanPlayer(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].humanPlayer = !scores[indexes[0]].matches[indexes[1]].humanPlayer;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateVision(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].vision = !scores[indexes[0]].matches[indexes[1]].vision;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateBroken(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].broken = !scores[indexes[0]].matches[indexes[1]].broken;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementPortcullis(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.portcullis += 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.portcullis += 1;
		scores[indexes[0]].stats.match.defensesCrossed.portcullis += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementPortcullis(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.portcullis -= 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.portcullis -= 1;
		scores[indexes[0]].stats.match.defensesCrossed.portcullis -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementChevalDeFrise(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.chevalDeFrise += 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.chevalDeFrise += 1;
		scores[indexes[0]].stats.match.defensesCrossed.chevalDeFrise += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementChevalDeFrise(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.chevalDeFrise -= 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.chevalDeFrise -= 1;
		scores[indexes[0]].stats.match.defensesCrossed.chevalDeFrise -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementMoat(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.moat += 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.moat += 1;
		scores[indexes[0]].stats.match.defensesCrossed.moat += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementMoat(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.moat -= 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.moat -= 1;
		scores[indexes[0]].stats.match.defensesCrossed.moat -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementRamparts(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.ramparts += 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.ramparts += 1;
		scores[indexes[0]].stats.match.defensesCrossed.ramparts += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementRamparts(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.ramparts -= 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.ramparts -= 1;
		scores[indexes[0]].stats.match.defensesCrossed.ramparts -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementDrawbridge(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.drawbridge += 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.drawbridge += 1;
		scores[indexes[0]].stats.match.defensesCrossed.drawbridge += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementDrawbridge(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.drawbridge -= 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.drawbridge -= 1;
		scores[indexes[0]].stats.match.defensesCrossed.drawbridge -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementSallyPort(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.sallyPort += 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.sallyPort += 1;
		scores[indexes[0]].stats.match.defensesCrossed.sallyPort += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementSallyPort(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.sallyPort -= 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.sallyPort -= 1;
		scores[indexes[0]].stats.match.defensesCrossed.sallyPort -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementRockWall(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.rockWall += 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.rockWall += 1;
		scores[indexes[0]].stats.match.defensesCrossed.rockWall += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementRockWall(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.rockWall -= 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.rockWall -= 1;
		scores[indexes[0]].stats.match.defensesCrossed.rockWall -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementRoughTerrain(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.roughTerrain += 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.roughTerrain += 1;
		scores[indexes[0]].stats.match.defensesCrossed.roughTerrain += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementRoughTerrain(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.roughTerrain -= 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.roughTerrain -= 1;
		scores[indexes[0]].stats.match.defensesCrossed.roughTerrain -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateIncrementLowBar(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.lowBar += 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.lowBar += 1;
		scores[indexes[0]].stats.match.defensesCrossed.lowBar += 1;
	},

	(error) =>{
		console.log(error);
	})
}

function handleUpdateDecrementLowBar(team,match){
	getIndexes(team,match).then((indexes) =>{
		scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.lowBar -= 1;
		scores[indexes[0]].stats.teleop.defensesCrossed.lowBar -= 1;
		scores[indexes[0]].stats.match.defensesCrossed.lowBar -= 1;
	},

	(error) =>{
		console.log(error);
	})
}

var ScoresStore = assign({}, EventEmitter.protorype, {
	getStoreData : function(){
		return(scores);
	},
	
	emitChange : function(){
		this.emit(CHANGE_EVENT)
	},
	
	addChangeListener : function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	
	removeChangeListner : function(callback){
		this.removeListner(CHANGE_EVENT, callback);
	},
	
	dispatcherIndex : AppDispatcher.register(function(payload) {
    	var action = payload.action;
		
		switch(action.actionType){
            case ScoringConstants.ReachedDefense:
                handleUpdateReachDefense(action.team,action.match);
				this.emitChange();
                break;
			
			case ScoringConstants.CrossDefense:
				handleUpdateCrossDefense(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.IncrementHighAutoGoals:
				handleUpdateIncrementHighAutoGoals(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.DecrementHighAutoGoals:
				handleUpdateDecrementHighAutoGoals(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.IncrementLowAutoGoals:
				handleUpdateIncrementLowAutoGoals(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.DecrementLowAutoGoals:
				handleUpdateDecrementLowAutoGoals(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.IncrementHighTeleopGoals:
				handleUpdateIncrementHighTeleopGoals(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.DecrementHighTeleopGoals:
				handleUpdateDecrementHighTeleopGoals(action.team,action.match);
				this.emitChange();
				break;
				
			case ScoringConstants.IncrementLowTeleopGoals:
				handleUpdateIncrementLowTeleopGoals(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.DecrementLowTeleopGoals:
				handleUpdateDecrementLowTeleopGoals(action.team,action.match);
				this.emitChange();
				break;
				
			case ScoringConstants.IncrementHighGoalsAttempted:
				handleUpdateIncrementHighGoalsAttemptedcase(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.DecrementHighGoalsAttempted:
				handleUpdateDecrementHighGoalsAttempted(action.team,action.match);
				this.emitChange();
				break;
				
			case ScoringConstants.IncrementLowGoalsAttempted:
				handleUpdateIncrementLowGoalsAttempted(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.DecrementLowGoalsAttempted:
				handleUpdateIncrementLowGoalsAttempted(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.TeamComments:
				handleUpdateTeamComments(action.teamComments,action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.MatchComments:
				handleUpdateMatchComments(action.matchComments,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.Scale:
				handleUpdateScale(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.ScaleHight:
				handleUpdateScaleHeight(action.scaleHeight,action.team,action.match);
				this.emitChange();
				break;
				
			case ScoringConstants.Breach:
				handleUpdateBreach(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.Capture:
				handleUpdateCapture(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.Performance:
				handleUpdatePerformance(action.performanceRating,action.team,action.match);
				this.emitChange();
				break;
				
			case ScoringConstants.offenseRating:
				handleUpdateOffense(action.offenseRating,action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.defenseRating:
				handleUpdateDefense(action.defenseRating,action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.Auto:
				handleUpdateAuto(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.Challenge:
				handleUpdateChallenge(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.Spy:
				handleUpdateSpy(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.HumanPlayer:
				handleUpdateHumanPlayer(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.Vision:
				handleUpdateVision(action.team,action.match);
				this.emitChange();
				break;
			
			case handleUpdateBroken:
				handleUpdateBroken(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateIncrementPortcullis:
				handleUpdateIncrementPortcullis(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateDecrementPortcullis:
				handleUpdateDecrementPortcullis(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateIncrementChevalDeFrise:
				handleUpdateIncrementChevalDeFrise(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateDecrementChevalDeFrise:
				handleUpdateDecrementChevalDeFrise(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateIncrementMoat:
				handleUpdateIncrementMoat(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateDecrementMoat:
				handleUpdateDecrementMoat(action.team,action.match);
				this.emitChange();
				break;
				
			case ScoringConstants.handleUpdateIncrementRamparts:
				handleUpdateIncrementRamparts(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateDecrementRamparts:
				handleUpdateDecrementRamparts(action.team,action.match);
				this.emitChange();
				break;
				
			case ScoringConstants.handleUpdateIncrementDrawbridge:
				handleUpdateIncrementDrawbridge(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateDecrementDrawbridge:
				handleUpdateDecrementDrawbridge(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateIncrementSallyPort:
				handleUpdateIncrementSallyPort(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateDecrementSallyPort:
				handleUpdateDecrementSallyPort(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateIncrementRockWall:
				handleUpdateIncrementRockWall(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateDecrementRockWall:
				handleUpdateDecrementRockWall(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateIncrementRoughTerrain:
				handleUpdateIncrementRoughTerrain(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateDecrementRoughTerrain:
				handleUpdateDecrementRoughTerrain(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateIncrementRoughTerrain:
				handleUpdateIncrementLowBar(action.team,action.match);
				this.emitChange();
				break;
			
			case ScoringConstants.handleUpdateDecrementLowBar:
				handleUpdateDecrementLowBar(action.team,action.match);
				this.emitChange();
				break;
        }
	})
});

export default ScoresStore;