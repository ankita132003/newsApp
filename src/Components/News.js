import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount(){
    let url =" https://newsapi.org/v2/top-headlines?country=us&apiKey=12100f092b604ee89c754b151fa915b4";
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles})
  }


  render() {
    return (
      <div className="container">
        <h1 className="mt-3">NewsApp - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
           
            return <div className="col-md-3 col-sm-12" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 56)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
           
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" >&larr; Previous</button>
          <button type="button" className="btn btn-primary"> Next &rarr;</button>
        </div>
      </div>
    );
  }
}
