var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var MatchAttributesActions = {
	updateScale(team,match,value){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Scale,
			team: team,
			match: match,
			value: value
		});
	},
	
	updateScaleHeight(scaleHeight,team,match,value){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.ScaleHeight,
			team: team,
			match: match,
			value: value,
			scaleHeight: scaleHeight
		});
	},
	
	updateBreach(team,match,value){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Breach,
			team: team,
			match: match,
			value: value
		});
	},
	
	updateCapture(team,match,value){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Capture,
			team: team,
			match: match,
			value: value
		});
	}
}

export default MatchAttributesActions;