var scoringData = require('./ScoringData');
var alt = require('../../alt');

export class ScoresStore {

  constructor() {
	this.scores = [];
    this.bindListeners({
		//Auto
		
	});
  }
  
  handleUpdateReachDefense(isReachDefense){
  	for(var i in this.scores){
		  if(i.teams === [isReachDefense[0]]){
			  i.auto.reachedDefense = true;
			  
		  }
	  }
  }
	  
  }
}

export default alt.createStore(ScoresStore, 'ScoresStore');
