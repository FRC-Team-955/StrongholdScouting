module.exports = {addTeam: function(team,match){
			return ({
				"matches": 
				{
					[match]: {
						"allianceMembers" : [0,0],
						"isWin" : false,
						"blocks" : 0,
						"auto" : {
							"highGoal" : 0,
							"lowGoal" : 0,
							"defensesCrossed" : {
								"portcullis" : false,
								"chevalDeFrise" : false,
								"rockWall" : false,
								"moat" : false,
								"drawbridge" : false,
								"sallyPort" : false,
								"roughTerrain" : false,
								"ramparts" : false,
								"lowBar" : false
							},
							
							"reachedDefense" : false,
							"crossedDefense": false
						},
						
						"teleop" : {
							"highGoal" : {
								"successes" : 0,
								"attempted" : 0
							},

							"lowGoal" : {
								"successes" : 0,
								"attempted" : 0
							},
							
							"blocks" : 0,
							"defensesCrossed" : {
								"portcullis" : 0,
								"chevalDeFrise" : 0,
								"rockWall" : 0,
								"moat" : 0,
								"drawbridge" : 0,
								"sallyPort" : 0,
								"roughTerrain" : 0,
								"ramparts" : 0,
								"lowBar" : 0
							}
						},
						
						"breach" : false,
						"capture" : false,
						"spy" : false,
						"challenge" : false,
						"scaled" : false,
						"scaledHigh" : false,
						"scaledLow" : false,
						"performedAuto" : false,
						"broken" : false,
						"humanPlayer" : false,
						"vision" : false,
						"performanceRating" : "",
						"offensiveRating" : "",
						"defensiveRating" : "",
						"teamComments" : "",
						"matchComments" : ""
					},
				},
			
			"stats": {
				"teleop": {
					"blocks" : 0,
					
					"highGoal" : {
						"successes" : 0,
						"attempted" : 0,
						"shotPercentage" : 0
					},
					
					"lowGoal" : {
						"successes" : 0,
						"attempted" : 0,
						"shotPercentage" : 0
					},
					
					"defensesCrossed" : {
						"portcullis" : 0,
						"chevalDeFrise" : 0,
						"rockWall" : 0,
						"moat" : 0,
						"drawbridge" : 0,
						"sallyPort" : 0,
						"roughTerrain" : 0,
						"ramparts" : 0,
						"lowBar" : 0
					}	
				},
				
				"auto" : {
					"blocks" : 0,		
					"highGoals" : 0,
					"lowGoals" : 0,
					"defensesCrossed" : {
						"portcullis" : 0,
						"chevalDeFrise" : 0,
						"rockWall" : 0,
						"moat" : 0,
						"drawbridge" : 0,
						"sallyPort" : 0,
						"roughTerrain" : 0,
						"ramparts" : 0,
						"lowBar" : 0,
						"total" : 0
					},
					
					"defensesReached" : 0,
				},
				
				"match" :
				{
					"blocks" : 0,
					
					"scale" : {
						"successes" : 0,
						"fails" : 0,
						"successPercentage" : 0 
					},
					
					"highGoal" : 
					{
						"successes" : 0,
						"attempted" : 0,
						"shotPercentage" : 0
					},
					
					"lowGoal" : 
					{
						"successes" : 0,
						"attempted" : 0,
						"shotPercentage" : 0
					},
					
					"defensesCrossed" : {
						"portcullis" : 0,
						"chevalDeFrise" : 0,
						"rockWall" : 0,
						"moat" : 0,
						"drawBridge" : 0,
						"sallyPort" : 0,
						"roughTerrain" : 0,
						"ramparts" : 0,
						"lowBar" : 0	
					}
				},
				
				"attributes" : 
				{
					"totalBroken" : 0,
					"totalPreformedAuto" : 0,
					"totalSpy" : 0,
					"totalChallenge" : 0,
					"totalHumanPlayer" : 0
				}
			},
			
			"attributes" : {
				"hasAuto" : false,
				"hasScale" : false,
				"hasVision" : false,
				"hasHighShooter" : false,
				"defenses" : {
					"portcullis" : false,
					"chevalDeFrise" : false,
					"rockWall" : false,
					"moat" : false,
					"drawBridge" : false,
					"sallyPort" : false,
					"roughTerrain" : false,
					"ramparts" : false,
					"lowBar" : false
				},
				
				"canBlockShot" : false,
				"tall" : false
			},
			
			"comments" : [""]
		}
	)}};