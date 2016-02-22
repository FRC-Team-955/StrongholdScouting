var scoringData = require('./ScoringData');
var alt = require('../../alt');

export class ScoresStore {

  constructor() {
	this.scores = [];
    this.bindListeners({
		//Auto	
	});		  
  }
  
  // Auto
  
  handleUpdateReachDefense(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match].auto.reachedDefense = !i.matches[i.matches.length - 1].auto.reachedDefense;
				i.matches[match].auto.reachedDefense?i.stats.auto.defensesReached += 1:i.stats.auto.defensesReached -= 1;
				i.matches[match].auto.reachedDefense?i.stats.match.defensesReached += 1:i.stats.match.defensesReached -= 1;
			}
		}
	}
	
	handleUpdateCrossDefense(isCrossDefense,team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].auto.defensesCrossed.isCrossDefense[1] = !i.matches[i.matches.length-1].auto.defensesCrossed.isCrossDefense[1];
				i.matches[match-1].auto.defensesCrossed.isCrossDefense[1]?i.stats.auto.defensesCrossed.isCrossDefense[1] += 1:i.stats.auto.defensesCrossed.isCrossDefense[1] -= 1;
				i.matches[match-1].auto.defensesCrossed.isCrossDefense[1]?i.stats.match.defensesCrossed.isCrossDefense[1] += 1:i.stats.match.defensesCrossed.isCrossDefense[1] -= 1;
			}
		}
	}
	
	handleUpdateIncrementHighGoals(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].auto.highGoal += 1;
				i.stats.auto.highGoals += 1
			}
		}
	}
	
	handleUpdateDecrementHighGoals(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].auto.highGoal -= 1;
				i.stats.auto.highGoal -= 1 ;
			}
		}
	}
	
	handleUpdateIncrementLowGoals(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].auto.lowGoal += 1;
				i.stats.auto.lowGoal += 1 
			}
		}
	}
	
	handleUpdateDecrementLowGoals(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].auto.lowGoal -= 1;
				i.stats.auto.lowGoal -= 1 ;
			}
		}
	}
	
	handleUpdateIncrementHighGoalsMade(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].teleop.highGoal.successes +=1;
				i.stats.teleop.highGoal.successes += 1;
				i.stats.match.highGoal.successes += 1;
			}
		}
	}
	
	handleUpdateDecrementHighGoalsMade(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].teleop.highGoal.successes -=1;
				i.stats.teleop.highGoal.successes -= 1;
				i.stats.match.highGoal.successes -= 1;
			}
		}
	}
	
	handleUpdateIncrementLowGoalsMade(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].teleop.highGoal.successes +=1;
				i.stats.teleop.highGoal.successes += 1;
				i.stats.match.highGoal.successes += 1;
			}
		}
	}
	
	handleUpdateDecrementLowGoalsMade(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].teleop.highGoal.successes -=1;
				i.stats.teleop.highGoal.successes -= 1;
				i.stats.match.highGoal.successes -= 1;
			}
		}
	}
	
	handleUpdateIncrementHighGoalsAttempted(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].teleop.highGoal.attempts +=1;
				i.stats.teleop.highGoal.attempts += 1;
				i.stats.match.highGoal.attempts += 1;
			}
		}
	}
	
	handleUpdateDecrementHighGoalsAttempted(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].teleop.highGoal.attempts -=1;
				i.stats.teleop.highGoal.attempts -= 1;
				i.stats.match.highGoal.attempts -= 1;
			}
		}
	}
	
	handleUpdateIncrementLowGoalsAttempted(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].teleop.highGoal.attempts +=1;
				i.stats.teleop.highGoal.attempts += 1;
				i.stats.match.highGoal.attempts += 1;
			}
		}
	}
	
	handleUpdateDecrementLowGoalsAttempted(team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].teleop.highGoal.attempts -=1;
				i.stats.teleop.highGoal.attempts -= 1;
				i.stats.match.highGoal.attempts -= 1;
			}
		}
	}
	
	handleUpdateTeamComments(teamComments,team,match){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].teamComments = teamComments;
				i.comments.push(teamComments);
			}
		}
	}
	
	handleUpdateMatchComments(matchComments,match){
		this.scores.matches[match-1].matchComments = matchComments;
	}
	
	handleUpdateScale(){
		for(var i in this.scores){
			if(i.team === team){
				i.matches[match-1].scaled = !i.matches[match-1].scaled;
			}
		}
	}
	
	// handleUpdateScaleHeigh()
}



export default alt.createStore(ScoresStore, 'ScoresStore');
