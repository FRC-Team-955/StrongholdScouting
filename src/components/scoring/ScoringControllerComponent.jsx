// 'use strict';

// import connectToStores from 'alt-utils/lib/connectToStores';
// import React from 'react';
// import MatchStore from '../../stores/match/MatchStore';
// import MatchSelectComponent from './MatchSelectComponent';

// require('styles//scoring/ScoringController.css');

// class Component extends React.Component {
//     render() {
//         return (
//             <ul>
//                 <li>{this.props.foo}</li>
//                 <li>{this.props.bar}</li>
//             </ul>
//         );
//     }
// }

// ScoringControllerComponent = connectToStores(Component, [FooStore, BarStore], (context, props) => ({
//     foo: context.getStore(FooStore).getFoo(),
//     bar: context.getStore(BarStore).getBar()
// }));

// export default ScoringControllerComponent;

// // class ScoringControllerComponent extends React.Component {
// // 	constructor(props){
// // 		super(props);
// // 	}

// // 	static getData(props){
// // 		return my
// // 	}

// // 	onStoreChange(){
// // 		console.log("cool beans man");
// // 		this.setState({
// // 			matchData: MatchStore.getData()
// // 		});
// // 	}
	
// // 	render(){
// // 		return <div
// // 			matchData = {this.state.matchData}>
// // 		</div>;
// // 	}


