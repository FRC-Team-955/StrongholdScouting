import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

const dialogText = {
	width: "60%",
	height: "100%",
	maxWidth: 'none',
	maxHeight: 'none'
}



const statText = {
	fontSize: 15,
	color: "white"
}

const statSpacing = {
	marginTop: 20
}

const stats = (
	<div className = "container-fluid" style = {statText}>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				High Accuracy:
			</div>
			<div className = "col-md-4">
				5
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				High Accuracy:
			</div>
			<div className = "col-md-4">
				5
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				High Accuracy:
			</div>
			<div className = "col-md-4">
				5
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				High Accuracy:
			</div>
			<div className = "col-md-4">
				5
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				High Accuracy:
			</div>
			<div className = "col-md-4">
				5
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				High Accuracy:
			</div>
			<div className = "col-md-4">
				5
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				High Accuracy:
			</div>
			<div className = "col-md-4">
				5
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				High Accuracy:
			</div>
			<div className = "col-md-4">
				5
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				Low Accuracy:
			</div>
			<div className = "col-md-4">
				5
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				Total Defenses Crossed:
			</div>
			<div className = "col-md-4">
				5
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				Worst A Defense:
			</div>
			<div className = "col-md-4">
				Portcullis
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				Worst B Defense:
			</div>
			<div className = "col-md-4">
				Moat
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				Worst C Defense:
			</div>
			<div className = "col-md-4">
				Sally Port
			</div>
		</div>
		<div className = "row" style = {statSpacing}>
			<div className = "col-md-8">
				Worst D Defense:
			</div>
			<div className = "col-md-4">
				Rough Terrain
			</div>
		</div>
	</div>
)

const image = (
	<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
)

const overlayHeight = {
	height: "100%"
}

const dark = {
	backgroundColor: "black"
}

const actionStyle = {
	margin: 0
}

const teamList = [955];
var numbRows = (teamList.length-(teamList.length % 3))/3;
const AnalysisPreview = React.createClass({
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