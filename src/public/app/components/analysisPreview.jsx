import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ModalThemeComponent from './ModalThemeComponent';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const dialogText = {
	width: "60%",
	height: "100%",
	maxWidth: 'none',
	maxHeight: 'none'
}

const textRow = {
	marginTop: 15
}

const statText = {
	fontSize: 15,
	color: "white",
	padding: 0
}


const statSpacing = {
	marginTop: 20
}

const modal = {
	overflow: "scroll"
}

const stats = (
	<Tabs>
		<Tab label = "General">
			<div className = "container-fluid">
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Performance Rating Average:
					</div>
					<div className = "col-md-4">
						2.2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Offense Rating Average:
					</div>
					<div className = "col-md-4">
						2.2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Defense Rating Average:
					</div>
					<div className = "col-md-4">
						2.2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Offense Rank:
					</div>
					<div className = "col-md-4">
						#4
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Defense Rank:
					</div>
					<div className = "col-md-4">
						#1
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						W/L:
					</div>
					<div className = "col-md-4">
						0/88
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Breach Percentage:
					</div>
					<div className = "col-md-4">
						2%
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Capture Percentage:
					</div>
					<div className = "col-md-4">
						99%
					</div>
				</div>
			</div>
		</Tab>
		<Tab label = "Auto">
			<div className = "container-fluid">
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Total Defense Crossed:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Total High Goals:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Total Low Goals:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Total Defense Reached:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Best Auto Defense:
					</div>
					<div className = "col-md-4">
						Portcullis
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						How Many Defenses:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
			</div>
		</Tab>
		<Tab label = "Goals">
			<div className = "container-fluid">
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						High Goal Ratio:
					</div>
					<div className = "col-md-4">
						6:100
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						High Goal Percentage:
					</div>
					<div className = "col-md-4">
						6%
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Low Goal Ratio:
					</div>
					<div className = "col-md-4">
						2:100
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Low Goal Percentage:
					</div>
					<div className = "col-md-4">
						2%
					</div>
				</div>
			</div>
		</Tab>
		<Tab label = "Defense">
			<div className = "container-fluid">
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Portcullis:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Chival De Frise:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Moat:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Ramparts:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Drawbridge:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Sally Port:
					</div>
					<div className = "col-md-4">
						0
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Rock Wall:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Rough Terrain:
					</div>
					<div className = "col-md-4">
						99
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Low Wall:
					</div>
					<div className = "col-md-4">
						99
					</div>
				</div>
			</div>
		</Tab>
		<Tab label = "Attributes">
			<div className = "container-fluid">
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Total Vision:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Total Broken:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Total Spy:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Total Human Player:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Total Challenge:
					</div>
					<div className = "col-md-4">
						2
					</div>
				</div>
				<div className = "row" style = {textRow}>
					<div className = "col-md-8">
						Total Auto:
					</div>
					<div className = "col-md-4">
						0
					</div>
				</div>
			</div>
		</Tab>
	</Tabs>
)

const image = (
	<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
)

const overlayHeight = {
	height: "100%",
	padding: 0
}

const dark = {
	backgroundColor: "black"
}

const actionStyle = {
	margin: 0
}

const pad = {
	padding: 0
}

const teamList = [955];
var numbRows = (teamList.length-(teamList.length % 3))/3;
const AnalysisPreview = React.createClass({
childContextTypes: {
    	muiTheme: React.PropTypes.object
  	},

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getMuiTheme(ModalThemeComponent),
    };
  },
getInitialState: function(){
		return {
			open: false,
			
		}
	},
	handleOpen: function(){
		this.setState({open: true});
	},
	handleClose: function(){
		this.setState({open: false});
	},
render(){
	var teamArchive = [];
	if(teamList.length < 3){
			if (teamList.length % 3 === 1){
				teamArchive.push((
				<div className = "row">
					<div className = "col-md-4">
					<Card onClick = {this.handleOpen}>
						<CardHeader
							title={teamList[0]}
						/>
						<CardMedia>
							<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
						</CardMedia>
					</Card>
					</div>
					<Dialog
    	    			  modal={false}
    	    			  open={this.state.open}
    	    			  onRequestClose={this.handleClose} 
						  contentStyle = {dialogText}
						  children = {
								<div style = {statText}>
											<Card>
												<CardMedia overlay={<CardTitle children={stats} style = {pad}/>} style = {pad} overlayContentStyle = {overlayHeight}>
													<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
												</CardMedia>
											</Card>
								</div>
						  }
						  actionsContainerStyle = {actionStyle}
    	    			>
    	    			  
    	    			</Dialog>
				</div>
				))
			} else if(teamList.length % 3 === 2){
				teamArchive.push((
				<div className = "row">
					<div className = "col-md-4">
					<Card onClick = {this.handleOpen}>
						<CardHeader
							title={teamList[0]}
						/>
						<CardMedia>
							<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
						</CardMedia>
					</Card>
					</div>
					<div className = "col-md-4">
					<Card onClick = {this.handleOpen}>
						<CardHeader
							title={teamList[1]}
						/>
						<CardMedia>
							<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
						</CardMedia>
					</Card>
					</div>
					<Dialog
    	    			  modal={false}
    	    			  open={this.state.open}
    	    			  onRequestClose={this.handleClose} 
						  contentStyle = {dialogText}
						  children = {
								<div style = {statText}>
											<Card>
												<CardMedia style = {modal} overlay={<CardTitle title = {teamList[0+(3 *team)]} children={stats} />} overlayContentStyle = {overlayHeight}>
													<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
												</CardMedia>
											</Card>
								</div>
						  }
						  overlay = {image}
						  overlayStyle = {dark}
						  actionsContainerStyle = {actionStyle}
    	    			>
    	    			  
    	    			</Dialog>
				</div>
				))
			}
		} else if (teamList.length >= 3){
			for( var team = 0; team < numbRows; team += 1 ) {
				teamArchive.push((
					<div className = "row" >
						<div className = "col-md-4">
						<Card onClick = {this.handleOpen}>
							<CardHeader
								title={teamList[0+(3 * team)]}
							/>
							<CardMedia>
								<img className = "f" src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
							</CardMedia>
						</Card>
						</div>
						<div className = "col-md-4">
						<Card onClick = {this.handleOpen}>
							<CardHeader
								title={teamList[1+(3 * team)]}
							/>
							<CardMedia>
								<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
							</CardMedia>
						</Card>
						</div>
						<div className = "col-md-4">
						<Card onClick = {this.handleOpen}>
							<CardHeader
								title={teamList[2+(3 * team)]}
							/>
							<CardMedia>
								<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
							</CardMedia>
						</Card>
						</div>
						<Dialog
    	    			  modal={false}
    	    			  open={this.state.open}
    	    			  onRequestClose={this.handleClose} 
						  contentStyle = {dialogText}
						  children = {
								<div style = {statText}>
											<Card>
												<CardMedia overlay={<CardTitle title = {teamList[0+(3 *team)]} children={stats} />} overlayContentStyle = {overlayHeight}>
													<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
												</CardMedia>
											</Card>
								</div>
						  }
						  overlay = {image}
						  overlayStyle = {dark}
						  actionsContainerStyle = {actionStyle}
    	    			>
    	    			  
    	    			</Dialog>
					</div>
					
				))}
				if (teamList.length % 3 === 1){
					teamArchive.push((
					<div className = "row">
						<div className = "col-md-4">
						<Card onClick = {this.handleOpen}>
							<CardHeader
								title={teamList[3*numbRows]}
							/>
							<CardMedia>
								<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
							</CardMedia>
						</Card>
						</div>
					</div>
					))
				} else if(teamList.length % 3 === 2){
					teamArchive.push((
					<div className = "row">
						<div className = "col-md-4">
						<Card onClick = {this.handleOpen}>
							<CardHeader
								title={teamList[3*numbRows]}
							/>
							<CardMedia>
								<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
							</CardMedia>
						</Card>
						</div>
						<div className = "col-md-4">
						<Card onClick = {this.handleOpen}>
							<CardHeader
								title={teamList[3*numbRows+1]}
							/>
							<CardMedia>
								<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
							</CardMedia>
						</Card>
						</div>
					</div>
					))
				}
		}
	return(
		<div>{teamArchive}</div>
	)}		
})


export default AnalysisPreview;