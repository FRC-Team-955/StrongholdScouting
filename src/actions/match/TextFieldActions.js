var alt = require('../../components/Dispatcher');

class TextFieldActions {
    updateValue(matchNum,key,value){
        return [matchNum,key,value];
        console.log("dispatched");
    }
}

module.exports = alt.createActions(TextFieldActions);
