import alt from '../../alt.js';

class MatchAttributesActions {
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

export default MatchAttributesActions;