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
	
	handleUpdateMatchComments(matchComments,team,match){
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
	
	handleUpdateBreach(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].breach = !this.scores[indexes[0]].matches[indexes[1]].breach;
	}
	
	handleUpdateCapture(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].capture = !this.scores[indexes[0]].matches[indexes[1]].capture;
	}
	
	handleUpdatePerformance(performanceRating,team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].performanceRating = performanceRating;
	}
	
	handleUpdateOffense(offenseRating,team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].offensiveRating = offenseRating;
	}
	
	handleUpdateDefense(defenseRating,team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].defensiveRating = defenseRating;
	}
	
	handleUpdateAuto(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].performedAuto = !this.scores[indexes[0]].matches[indexes[1]].performedAuto;
	}
	
	handleUpdateChallenge(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].challenge = !this.scores[indexes[0]].matches[indexes[1]].challenge;
	}
	
	handleUpdateSpy(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].spy = !this.scores[indexes[0]].matches[indexes[1]].spy;
	}
	
	handleUpdateHumanPlayer(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].humanPlayer = !this.scores[indexes[0]].matches[indexes[1]].humanPlayer;
	}
	
	handleUpdateVision(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].vision = !this.scores[indexes[0]].matches[indexes[1]].vision;
	}
	
	handleUpdateBroken(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].broken = !this.scores[indexes[0]].matches[indexes[1]].broken;
	}
	
	handleUpdateIncrementPortcullis(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.portcullis += 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.portcullis += 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.portcullis += 1;
	}
	
	handleUpdateDecrementPortcullis(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.portcullis -= 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.portcullis -= 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.portcullis -= 1;
	}
	
	handleUpdateIncrementChevalDeFrise(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.chevalDeFrise += 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.chevalDeFrise += 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.chevalDeFrise += 1;
	}
	
	handleUpdateDecrementChevalDeFrise(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.chevalDeFrise -= 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.chevalDeFrise -= 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.chevalDeFrise -= 1;
	}
	
	handleUpdateIncrementMoat(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.moat += 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.moat += 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.moat += 1;
	}
	
	handleUpdateDecrementMoat(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.moat -= 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.moat -= 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.moat -= 1;
	}
	
	handleUpdateIncrementRamparts(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.ramparts += 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.ramparts += 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.ramparts += 1;
	}
	
	handleUpdateDecrementRamparts(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.ramparts -= 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.ramparts -= 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.ramparts -= 1;
	}
	
	handleUpdateIncrementDrawbridge(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.drawbridge += 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.drawbridge += 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.drawbridge += 1;
	}
	
	handleUpdateDecrementDrawbridge(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.drawbridge -= 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.drawbridge -= 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.drawbridge -= 1;
	}
	
	handleUpdateIncrementSallyPort(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.sallyPort += 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.sallyPort += 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.sallyPort += 1;
	}
	
	handleUpdateDecrementSallyPort(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.sallyPort -= 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.sallyPort -= 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.sallyPort -= 1;
	}
	
	handleUpdateIncrementRockWall(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.rockWall += 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.rockWall += 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.rockWall += 1;
	}
	
	handleUpdateDecrementRockWall(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.rockWall -= 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.rockWall -= 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.rockWall -= 1;
	}
	
	handleUpdateIncrementRoughTerrain(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.roughTerrain += 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.roughTerrain += 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.roughTerrain += 1;
	}
	
	handleUpdateDecrementRoughTerrain(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.roughTerrain -= 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.roughTerrain -= 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.roughTerrain -= 1;
	}
	
	handleUpdateIncrementLowBar(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.lowBar += 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.lowBar += 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.lowBar += 1;
	}
	
	handleUpdateDecrementLowBar(team,match){
		var indexes = this.getIndexes(team,match);
		this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.lowBar -= 1;
		this.scores[indexes[0]].stats.teleop.defensesCrossed.lowBar -= 1;
		this.scores[indexes[0]].stats.match.defensesCrossed.lowBar -= 1;
	}
}

export default alt.createStore(ScoresStore, 'ScoresStore');
