var alt = require('../alt');

class MatchAttributesActions{
	updateScale(team,match){
		this.dispatch(team,match);
	}
	
	updateScaleHeight(scaleHeight,team,match){
		this.dispatch(scaleHeight,team,match);
	}
	
	updateBreach(team,match){
		this.dispatch(team,match);
	}
	
	updateCapture(team,match){
		this.dispatch(team,match);
	}
}

module.exports = alt.createActions(MatchAttributesActions);