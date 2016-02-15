import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

const teamList = [955, 5, 34, 24];
var teamArchive = [];
var numbRows = (teamList.length-(teamList.length % 3))/3;
if(teamList.length < 3){
	if (teamList.length % 3 === 1){
		teamArchive.push((
		<div className = "row">
			<div className = "col-md-4">
			<Card>
				<CardHeader
					title={teamList[0]}
				/>
				<CardMedia>
					<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nLB6FN64td-9bxHcVuVgS0oC178zVfL09ah6MSE4YzM953kqVg"/>
				</CardMedia>
			</Card>
			</div>
		</div>
		))
	} else if(teamList.length % 3 === 2){
		teamArchive.push((
		<div className = "row">
			<div className = "col-md-4">
			<Card>
				<CardHeader
					title={teamList[0]}
				/>
				<CardMedia>
					<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nLB6FN64td-9bxHcVuVgS0oC178zVfL09ah6MSE4YzM953kqVg"/>
				</CardMedia>
			</Card>
			</div>
			<div className = "col-md-4">
			<Card>
				<CardHeader
					title={teamList[1]}
				/>
				<CardMedia>
					<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nLB6FN64td-9bxHcVuVgS0oC178zVfL09ah6MSE4YzM953kqVg"/>
				</CardMedia>
			</Card>
			</div>
		</div>
		))
	}
} else if (teamList.length >= 3){
	for( var team = 0; team < numbRows; team += 1 ) {
		teamArchive.push((
			<div className = "row" >
				<div className = "col-md-4">
				<Card>
					<CardHeader
						title={teamList[0+(3 * team)]}
					/>
					<CardMedia>
						<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nLB6FN64td-9bxHcVuVgS0oC178zVfL09ah6MSE4YzM953kqVg"/>
					</CardMedia>
				</Card>
				</div>
				<div className = "col-md-4">
				<Card>
					<CardHeader
						title={teamList[1+(3 * team)]}
					/>
					<CardMedia>
						<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nLB6FN64td-9bxHcVuVgS0oC178zVfL09ah6MSE4YzM953kqVg"/>
					</CardMedia>
				</Card>
				</div>
				<div className = "col-md-4">
				<Card>
					<CardHeader
						title={teamList[2+(3 * team)]}
					/>
					<CardMedia>
						<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nLB6FN64td-9bxHcVuVgS0oC178zVfL09ah6MSE4YzM953kqVg"/>
					</CardMedia>
				</Card>
				</div>
			</div>
		))}
		if (teamList.length % 3 === 1){
			teamArchive.push((
			<div className = "row">
				<div className = "col-md-4">
				<Card>
					<CardHeader
						title={teamList[3*numbRows]}
					/>
					<CardMedia>
						<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nLB6FN64td-9bxHcVuVgS0oC178zVfL09ah6MSE4YzM953kqVg"/>
					</CardMedia>
				</Card>
				</div>
			</div>
			))
		} else if(teamList.length % 3 === 2){
			teamArchive.push((
			<div className = "row">
				<div className = "col-md-4">
				<Card>
					<CardHeader
						title={teamList[3*numbRows]}
					/>
					<CardMedia>
						<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nLB6FN64td-9bxHcVuVgS0oC178zVfL09ah6MSE4YzM953kqVg"/>
					</CardMedia>
				</Card>
				</div>
				<div className = "col-md-4">
				<Card>
					<CardHeader
						title={teamList[3*numbRows+1]}
					/>
					<CardMedia>
						<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nLB6FN64td-9bxHcVuVgS0oC178zVfL09ah6MSE4YzM953kqVg"/>
					</CardMedia>
				</Card>
				</div>
			</div>
			))
		}
}
		

const AnalysisPreview = () => (
		<div>{teamArchive}</div>
);

export default AnalysisPreview;