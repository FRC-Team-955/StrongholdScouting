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
	  return new Promise((resolve,reject) => {
		  for(var i in this.scores){
			if(i.team === team){
				for(var k in i.matches){
					if(k.match === match){
						resolve([this.scores.indexOf(i),this.scores.i.matches(k)]);
					}
					
					else{
						reject("error");
					}
				}
			}
		  }
	  })
  }
  
	handleUpdateReachDefense(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].auto.reachedDefense = !this.scores[indexes[0]].matches[indexes[1]].auto.reachedDefense;
			this.scores[indexes[0]].matches[indexes[1]].auto.reachedDefense?this.scores.stats.auto.defensesReached += 1:this.scores[indexes[0]].stats.auto.defensesReached -= 1;
			this.scores[indexes[0]].matches[indexes[1]].auto.reachedDefense?this.scores[indexes[0]].stats.match.defensesReached += 1:this.scores[indexes[0]].stats.match.defensesReached -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateCrossDefense(isCrossDefense,team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].auto.defensesCrossed.isCrossDefense[1] = !this.scores[indexes[0]].matchesmatches[indexes[1]].auto.defensesCrossed.isCrossDefense[1];
			this.scores[indexes[0]].matches[indexes[1]].auto.defensesCrossed.isCrossDefense[1]?this.scores[indexes[0]].stats.auto.defensesCrossed.isCrossDefense[1] += 1:this.scores[indexes[0]].stats.auto.defensesCrossed.isCrossDefense[1] -= 1;
			this.scores[indexes[0]].matches[indexes[1]].auto.defensesCrossed.isCrossDefense[1]?this.scores[indexes[0]].stats.match.defensesCrossed.isCrossDefense[1] += 1:this.scores[indexes[0]].stats.match.defensesCrossed.isCrossDefense[1] -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementHighGoals(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].auto.highGoal += 1;
			this.scores[indexes[0]].stats.auto.highGoals += 1
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementHighGoals(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].auto.highGoal -= 1;
			this.scores[indexes[0]].stats.auto.highGoal -= 1 ;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementLowGoals(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].auto.lowGoal += 1;
			this.scores[indexes[0]].stats.auto.lowGoal += 1 
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementLowGoals(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].auto.lowGoal -= 1;
			this.scores[indexes[0]].stats.auto.lowGoal -= 1 ;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementHighGoalsMade(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.successes +=1;
			this.scores[indexes[0]].stats.teleop.highGoal.successes += 1;
			this.scores[indexes[0]].stats.match.highGoal.successes += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementHighGoalsMade(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.successes -=1;
			this.scores[indexes[0]].stats.teleop.highGoal.successes -= 1;
			this.scores[indexes[0]].stats.match.highGoal.successes -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementLowGoalsMade(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.successes +=1;
			this.scores[indexes[0]].stats.teleop.highGoal.successes += 1;
			this.scores[indexes[0]].stats.match.highGoal.successes += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementLowGoalsMade(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.successes -=1;
			this.scores[indexes[0]].stats.teleop.highGoal.successes -= 1;
			this.scores[indexes[0]].stats.match.highGoal.successes -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementHighGoalsAttempted(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.attempts +=1;
			this.scores[indexes[0]].stats.teleop.highGoal.attempts += 1;
			this.scores[indexes[0]].stats.match.highGoal.attempts += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementHighGoalsAttempted(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.attempts -=1;
			this.scores[indexes[0]].stats.teleop.highGoal.attempts -= 1;
			this.scores[indexes[0]].stats.match.highGoal.attempts -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementLowGoalsAttempted(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.attempts +=1;
			this.scores[indexes[0]].stats.teleop.highGoal.attempts += 1;
			this.scores[indexes[0]].stats.match.highGoal.attempts += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementLowGoalsAttempted(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.highGoal.attempts -=1;
			this.scores[indexes[0]].stats.teleop.highGoal.attempts -= 1;
			this.scores[indexes[0]].stats.match.highGoal.attempts -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateTeamComments(teamComments,team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teamComments = teamComments;
			this.scores[indexes[0]].comments.push(teamComments);
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateMatchComments(matchComments,team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].matchComments = matchComments;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateScale(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].scaled = !this.scores[indexes[0]].matches[indexes[1]].scaled;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateHeight(scaleHeight,team,match){
		this.getIndexes(team,match).then((indexes) =>{
			if(scaleHeight === "high"){
				this.scores[indexes[0]].matches[indexes[1]].scaledHigh = true;
				this.scores[indexes[0]].matches[indexes[1]].scaledLow = false;					
			}
				
			else{
				this.scores[indexes[0]].matches[indexes[1]].scaledHigh = false;
				this.scores[indexes[0]].matches[indexes[1]].scaledLow = true;
		}
		
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateBreach(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].breach = !this.scores[indexes[0]].matches[indexes[1]].breach;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateCapture(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].capture = !this.scores[indexes[0]].matches[indexes[1]].capture;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdatePerformance(performanceRating,team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].performanceRating = performanceRating;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateOffense(offenseRating,team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].offensiveRating = offenseRating;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDefense(defenseRating,team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].defensiveRating = defenseRating;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateAuto(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].performedAuto = !this.scores[indexes[0]].matches[indexes[1]].performedAuto;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateChallenge(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].challenge = !this.scores[indexes[0]].matches[indexes[1]].challenge;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateSpy(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].spy = !this.scores[indexes[0]].matches[indexes[1]].spy;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateHumanPlayer(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].humanPlayer = !this.scores[indexes[0]].matches[indexes[1]].humanPlayer;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateVision(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].vision = !this.scores[indexes[0]].matches[indexes[1]].vision;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateBroken(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].broken = !this.scores[indexes[0]].matches[indexes[1]].broken;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementPortcullis(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.portcullis += 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.portcullis += 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.portcullis += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementPortcullis(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.portcullis -= 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.portcullis -= 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.portcullis -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementChevalDeFrise(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.chevalDeFrise += 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.chevalDeFrise += 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.chevalDeFrise += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementChevalDeFrise(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.chevalDeFrise -= 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.chevalDeFrise -= 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.chevalDeFrise -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementMoat(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.moat += 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.moat += 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.moat += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementMoat(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.moat -= 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.moat -= 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.moat -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementRamparts(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.ramparts += 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.ramparts += 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.ramparts += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementRamparts(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.ramparts -= 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.ramparts -= 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.ramparts -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementDrawbridge(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.drawbridge += 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.drawbridge += 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.drawbridge += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementDrawbridge(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.drawbridge -= 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.drawbridge -= 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.drawbridge -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementSallyPort(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.sallyPort += 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.sallyPort += 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.sallyPort += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementSallyPort(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.sallyPort -= 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.sallyPort -= 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.sallyPort -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementRockWall(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.rockWall += 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.rockWall += 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.rockWall += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementRockWall(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.rockWall -= 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.rockWall -= 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.rockWall -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementRoughTerrain(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.roughTerrain += 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.roughTerrain += 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.roughTerrain += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementRoughTerrain(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.roughTerrain -= 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.roughTerrain -= 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.roughTerrain -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateIncrementLowBar(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.lowBar += 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.lowBar += 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.lowBar += 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
	
	handleUpdateDecrementLowBar(team,match){
		this.getIndexes(team,match).then((indexes) =>{
			this.scores[indexes[0]].matches[indexes[1]].teleop.defensesCrossed.lowBar -= 1;
			this.scores[indexes[0]].stats.teleop.defensesCrossed.lowBar -= 1;
			this.scores[indexes[0]].stats.match.defensesCrossed.lowBar -= 1;
		},
		
		(error) =>{
			console.log(error);
		})
	}
}

export default alt.createStore(ScoresStore, 'ScoresStore');
