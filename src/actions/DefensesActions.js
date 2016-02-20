var alt = require('../alt');

class DefensesActions{
	updatePortcullis(timesCrossed){
		this.dispatch(timesCrossed);
	}
	
	updateChevalDeFrise(timesCrossed){
		this.dispatch(timesCrossed);
	}
	
	updateMoat(timesCrossed){
		this.dispatch(timesCrossed);
	}
	
	updateRamparts(timesCrossed){
		this.dispatch(timesCrossed);
	}
	
	updateDrawbridge(timesCrossed){
		this.dispatch(timesCrossed);
	}
	
	updateSallyPort(timesCrossed){
		this.dispatch(timesCrossed);
	}
	
	updateRockWall(timesCrossed){
		this.dispatch(timesCrossed);
	}
	
	updateRoughTerrain(timesCrossed){
		this.dispatch(timesCrossed);
	}
	
	updateLowBar(timesCrossed){
		this.dispatch(timesCrossed);
	}
}

module.exports = alt.createActions(DefensesActions);