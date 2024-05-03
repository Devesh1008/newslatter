import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
    articles = [
        {
          "source": { "id": "the-washington-post", "name": "The Washington Post" },
          "author": "Geoff Chester",
          "title": "May night sky begins with Eta Aquariid meteor shower - The Washington Post",
          "description": "May is a perfect month to celebrate astronomy. The nights are mild, the springtime constellations are at their best, and a meteor shower greets early risers.",
          "url": "https://www.washingtonpost.com/weather/2024/05/01/eta-aquariid-meteor-shower-may-sky/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YZYHHCN2RFBMJNVH6S7TK2ADRY.jpg&w=1440",
          "publishedAt": "2024-05-01T12:32:45Z",
          "content": "May is the perfect month to celebrate astronomy. The nights are mild, the springtime constellations are at their best, and a meteor shower greets early risers.\r\nAs the month opens, Earth encounters b… [+186 chars]"
        },
      ]
    
    constructor(props) {
        console.log("Here my first constructor");
        super();
        // Initialize state
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        };
    }

    async componentDidMount() {
      let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-04-03&sortBy=publishedAt&apiKey=d5e4ee92e4cd4f3290b5e6f129cb8ae0";
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this .setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

  render() {
    return (
      <div>
        <div className="section">
          <div className="container">
            <div className="section__head">
              <h3>This Is News Component</h3>
            </div>
            <div className="section__body">
               
              <div className="row gap-30">
              {this.state.articles.map((element)=>{
                return <div className="col-12 col-sm-4" key={element.url}>
                <Newsitems
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsURL= {element.url}
                />
              </div>
              })}
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
