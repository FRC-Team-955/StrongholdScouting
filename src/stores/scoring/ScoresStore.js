var scoringData = require('./ScoringData');
var alt = require('../../alt');

export class ScoresStore {

  constructor() {
	this.scores = [];
    this.bindListeners({
		//Auto	
	});		  
  }
  
  getIndexes(team,match){
	  for(var i in this.scores){
			if(i.team === team){
				for(var k in i.matches){
					if(k.match === match){
						return [this.scores.indexOf(i),this.scores.i.matches(k)];
					}
				}
			}
	  }
  }
  
  handleUpdateReachDefense(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].auto.reachedDefense = !this.scores[indexes[0]].matches[indexes[1]].auto.reachedDefense;
		this.scores[indexes[0]].matches[indexes[1]].auto.reachedDefense?this.scores.stats.auto.defensesReached += 1:this.scores[indexes[0]].stats.auto.defensesReached -= 1;
		this.scores[indexes[0]].matches[indexes[1]].auto.reachedDefense?this.scores[indexes[0]].stats.match.defensesReached += 1:this.scores[indexes[0]].stats.match.defensesReached -= 1;
	}
	
	handleUpdateCrossDefense(isCrossDefense,team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].auto.defensesCrossed.isCrossDefense[1] = !this.scores[indexes[0]].matchesmatches[indexes[1]].auto.defensesCrossed.isCrossDefense[1];
		this.scores[indexes[0]].matches[indexes[1]].auto.defensesCrossed.isCrossDefense[1]?this.scores[indexes[0]].stats.auto.defensesCrossed.isCrossDefense[1] += 1:this.scores[indexes[0]].stats.auto.defensesCrossed.isCrossDefense[1] -= 1;
		this.scores[indexes[0]].matches[indexes[1]].auto.defensesCrossed.isCrossDefense[1]?this.scores[indexes[0]].stats.match.defensesCrossed.isCrossDefense[1] += 1:this.scores[indexes[0]].stats.match.defensesCrossed.isCrossDefense[1] -= 1;
	}
	
	handleUpdateIncrementHighGoals(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].auto.highGoal += 1;
		this.scores[indexes[0]].stats.auto.highGoals += 1
	}
	
	handleUpdateDecrementHighGoals(team,match){
	var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].auto.highGoal -= 1;
		this.scores[indexes[0]].stats.auto.highGoal -= 1 ;
	}
	
	handleUpdateIncrementLowGoals(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].auto.lowGoal += 1;
		this.scores[indexes[0]].stats.auto.lowGoal += 1 
	}
	
	handleUpdateDecrementLowGoals(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].auto.lowGoal -= 1;
		this.scores[indexes[0]].stats.auto.lowGoal -= 1 ;
	}
	
	handleUpdateIncrementHighGoalsMade(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.successes +=1;
		this.scores[indexes[0]].stats.teleop.highGoal.successes += 1;
		this.scores[indexes[0]].stats.match.highGoal.successes += 1;
	}
	
	handleUpdateDecrementHighGoalsMade(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.successes -=1;
		this.scores[indexes[0]].stats.teleop.highGoal.successes -= 1;
		this.scores[indexes[0]].stats.match.highGoal.successes -= 1;
	}
	
	handleUpdateIncrementLowGoalsMade(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.successes +=1;
		this.scores[indexes[0]].stats.teleop.highGoal.successes += 1;
		this.scores[indexes[0]].stats.match.highGoal.successes += 1;
	}
	
	handleUpdateDecrementLowGoalsMade(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.successes -=1;
		this.scores[indexes[0]].stats.teleop.highGoal.successes -= 1;
		this.scores[indexes[0]].stats.match.highGoal.successes -= 1;
	}
	
	handleUpdateIncrementHighGoalsAttempted(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.attempts +=1;
		this.scores[indexes[0]].stats.teleop.highGoal.attempts += 1;
		this.scores[indexes[0]].stats.match.highGoal.attempts += 1;
	}
	
	handleUpdateDecrementHighGoalsAttempted(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.attempts -=1;
		this.scores[indexes[0]].stats.teleop.highGoal.attempts -= 1;
		this.scores[indexes[0]].stats.match.highGoal.attempts -= 1;
	}
	
	handleUpdateIncrementLowGoalsAttempted(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.attempts +=1;
		this.scores[indexes[0]].stats.teleop.highGoal.attempts += 1;
		this.scores[indexes[0]].stats.match.highGoal.attempts += 1;
	}
	
	handleUpdateDecrementLowGoalsAttempted(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.attempts -=1;
		this.scores[indexes[0]].stats.teleop.highGoal.attempts -= 1;
		this.scores[indexes[0]].stats.match.highGoal.attempts -= 1;
	}
	
	handleUpdateTeamComments(teamComments,team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teamComments = teamComments;
		this.scores[indexes[0]].comments.push(teamComments);
	}
	
	handleUpdateMatchComments(matchComments,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].matchComments = matchComments;
	}
	
	handleUpdateScale(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].scaled = !this.scores[indexes[0]].matches[indexes[1]].scaled;
	}
	
	handleUpdateHeight(scaleHeight,team,match){
		var indexes = this.getIndexes(team,match);
		if(scaleHeight === "high"){
			this.scores[indexes[0]].matches[indexes[1]].scaledHigh = true;
			this.scores[indexes[0]].matches[indexes[1]].scaledLow = false;					
		}
				
		else{
			this.scores[indexes[0]].matches[indexes[1]].scaledHigh = false;
			this.scores[indexes[0]].matches[indexes[1]].scaledLow = true;
		}
	}					
}



export default alt.createStore(ScoresStore, 'ScoresStore');
