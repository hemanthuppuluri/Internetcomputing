import React, {Component} from 'react';

class GNews extends Component{
	constructor(props){
		super(props);
		this.state = {
			articles: []
		}
	}

	async updateData(){
		fetch('http://newsapi.org/v2/top-headlines?q=coronavirus&pageSize=10&apiKey=dbf20cfbc0e948229c4014644f1aecd0')
	  	.then((response) => {
	    return response.json();
		})
	  	.then((data) => {
		    this.setState({
		    	articles: data.articles
		    });
	  	},
	  	(error) => {
          this.setState({
            error
          });
        }, 2000);
	}
	

	async componentDidMount(){
		
		this.interval = setInterval(() =>this.updateData(), 2000);	

	}



	render(){
		const { error, articles } = this.state;
		console.log(articles);
		if(error){
				return <p> Error: {error.message}</p>;
		}
		return(

			<div className = "news">
				{articles.map((item, index) =>{
					return(
					<div className = "newsApi">
						<ul><li>{item.title}</li></ul>
					</div>
					);
			})}	
			</div>
			);
	}
}



export default GNews;