var alt = require('../alt');

class MatchAttributesActions{
	updateScale(isScale){
		this.dispatch(isScale);
	}
	
	updateScaleHeight(scaleHeight){
		this.dispatch(scaleHeight);
	}
	
	updateBreach(isBreach){
		this.dispatch(isBreach);
	}
	
	updateCapture(isCapture){
		this.dispatch(isCapture);
	}
}

module.exports = alt.createActions(MatchAttributesActions);