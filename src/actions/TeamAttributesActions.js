var alt = require('../alt');

class TeamAttributesActions{
	updateAuto(isAuto){
		this.dispatch(isAuto);
	}
	
	updateChallenge(isChallenge){
		this.dispatch(isChallenge);
	}
	
	updateSpy(isSpy){
		this.dispatch(isSpy);
	}
	
	updateHumanPlayer(isHumanPlayer){
		this.dispatch(isHumanPlayer);
	}
	
	updateVision(hasVision){
		this.dispatch(hasVision);
	}
	
	updateBroken(isBroken){
		this.dispatch(isBroken);
	}
}

module.exports = alt.createActions(TeamAttributesActions);