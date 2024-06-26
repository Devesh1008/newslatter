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
        {
          "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
          "author": "Al Jazeera",
          "title": "At least 24 dead, dozens injured, after road collapses in southern China - Al Jazeera English",
          "description": "Some 30 people are being treated in hospital after being rescued from their cars following road cave in.",
          "url": "https://www.aljazeera.com/news/2024/5/1/at-least-19-killed-dozens-injured-after-road-collapses-in-southern-china",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/WEBMAP-CHINA-MEIZHOU-1714543438.jpg?resize=1200%2C675",
          "publishedAt": "2024-05-01T12:00:53Z",
          "content": "At least 24 people have been killed after part of a highway collapsed in southern Chinas Guangdong province.\r\nState broadcaster CCTV reported a 17.9-metre (58.7-foot) stretch of the S12 highway betwe… [+803 chars]"
        },
        {
          "source": { "id": null, "name": "TODAY" },
          "author": "Gina Vivinetto",
          "title": "Melissa McCarthy Reacts After Barbra Streisand Clarifies Ozempic Comment - TODAY",
          "description": "Melissa McCarthy had a hilarious reaction after Barbra Streisand asked if she took Ozempic in an Instagram comment.",
          "url": "https://www.today.com/popculture/barbra-streisand-melissa-mccarthy-ozempic-rcna150098",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/rockcms/2024-04/Barbra-Streisand-Melissa-McCarthy-te-240430-cda0d5.jpg",
          "publishedAt": "2024-05-01T11:46:00Z",
          "content": "Melissa McCarthy is taking Barbra Streisand's comments about whether she took Ozempic in stride.\r\nThe \"Bridesmaids\" star responded to the legendary singer in a May 1 Instagram post.\r\nMcCarthy was hol… [+3362 chars]"
        },
       
        {
          "source": { "id": null, "name": "Variety" },
          "author": "Ellise Shafer",
          "title": "Daniel Radcliffe Says J.K. Rowling’s Anti-Trans Stance ‘Makes Me Really Sad’ and Not Speaking Out Would Have Been ‘Immense Cowardice’: ‘I Wanted to Try and Help People’ - Variety",
          "description": "'Harry Potter' star Daniel Radcliffe is opening up about J.K. Rowling's continued comments against trans women, saying that it 'makes me really sad.'",
          "url": "https://variety.com/2024/film/global/daniel-radcliffe-jk-rowling-anti-trans-makes-me-really-sad-1235988334/",
          "urlToImage": "https://variety.com/wp-content/uploads/2024/05/daniel-radcliffe.jpg?w=1000&h=563&crop=1",
          "publishedAt": "2024-05-01T09:30:00Z",
          "content": "“Harry Potter” star Daniel Radcliffe is opening up about J.K. Rowling‘s continued comments against trans women, saying that it “makes me really sad.” \r\nIn a new interview with the Atlantic, Radcliffe… [+1958 chars]"
        },
        {
          "source": { "id": null, "name": "NPR" },
          "author": "Stephanie Colombini",
          "title": "Six-week abortion ban takes effect in Florida - NPR",
          "description": "Florida has been a major access point for abortion in the South. Now its residents, along with thousands more in the region, will have to seek abortion care elsewhere after six weeks of pregnancy.",
          "url": "https://www.npr.org/2024/05/01/1247990353/florida-6-week-abortion-ban-south",
          "urlToImage": "https://media.npr.org/assets/img/2024/04/30/abortion-rights-rally-tampa4-stephanie-colombini-10-2-21-_wide-183d84caf858aeade61036aaaae8a4add2799cf6.jpg?s=1400&c=100&f=jpeg",
          "publishedAt": "2024-05-01T09:01:16Z",
          "content": "Thousands of abortion rights protesters rallied in Tampa on Oct. 2, 2021.\r\nStephanie Colombini/WUSF\r\nTAMPA, Fla. Starting today, people can no longer access legal abortions in Florida beyond six week… [+9371 chars]"
        },
        {
          "source": { "id": null, "name": "NPR" },
          "author": "Ben Giles",
          "title": "Christian conservatives wrestle with shifting GOP stance on Arizona abortion ban - NPR",
          "description": "After former President Donald Trump and Arizona GOP senate candidate Kari Lake distanced themselves from the law, some abortion rights opponents are left wondering who they can count on.",
          "url": "https://www.npr.org/2024/05/01/1248273158/christian-conservatives-wrestle-trump-kari-lake-arizona-abortion-ban",
          "urlToImage": "https://media.npr.org/assets/img/2024/04/30/gettyimages-2147887603_wide-287b184ee40f17d0faf13b8ba80cb4bfc4a9344a.jpg?s=1400&c=100&f=jpeg",
          "publishedAt": "2024-05-01T09:00:49Z",
          "content": "Anti-abortion rights advocates demonstrate prior to an Arizona House of Representatives session at the Arizona State Capitol on April 17 in Phoenix.\r\nRebecca Noble/Getty Images\r\nPHOENIX - A potential… [+5993 chars]"
        },
        {
          "source": { "id": null, "name": "NPR" },
          "author": "Domenico Montanaro",
          "title": "2024 election poll: Trump vs. Biden and what Republicans and Democrats fear - NPR",
          "description": "A new 2024 election poll from NPR/PBS NewsHour/Marist shows fundamental divides over concerns for America's future and what to teach the next generation.",
          "url": "https://www.npr.org/2024/05/01/1248249250/election-poll-trump-biden-voters",
          "urlToImage": "https://media.npr.org/assets/img/2024/04/30/diptych-6-_wide-8e55afe9ee5276b78bd0866f6e4002fb64050f43.jpg?s=1400&c=100&f=jpeg",
          "publishedAt": "2024-05-01T09:00:47Z",
          "content": "The 2024 presidential race remains extremely close between President Biden and former President Donald Trump, according to the latest polling from NPR/PBS NewsHour/Marist.\r\nEvan Vucci/AP; Eduardo Mun… [+6163 chars]"
        },
        {
          "source": { "id": "nbc-news", "name": "NBC News" },
          "author": "Barbara Mantel",
          "title": "Science shows how a surge of anger could raise heart attack risk - NBC News",
          "description": "Is anger linked to heart attacks? New research finds that a bout of anger impairs blood vessel function which can raise the risk of atherosclerosis, which in turn raises heart disease risk.",
          "url": "https://www.nbcnews.com/health/health-news/science-shows-surge-anger-raise-heart-attack-risk-rcna149360",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-04/240430-heart-attack-disease-anger-cs-14d471.jpg",
          "publishedAt": "2024-05-01T09:00:40Z",
          "content": "Can a burst of anger take a toll on the heart? \r\nPrevious research has suggested theres a link between an acute episode of anger and an increased risk of heart attack. Researchers from Columbia Unive… [+4404 chars]"
        },
        {
          "source": { "id": "cbs-news", "name": "CBS News" },
          "author": "Aimee Picchi",
          "title": "The Fed rate decision meeting is today. Here are the odds of a cut. - CBS News",
          "description": "Inflation-weary consumers have also been slammed by high borrowing costs. Here's what economists expect the Fed to announce.",
          "url": "https://www.cbsnews.com/news/federal-reserve-interest-rate-meeting-may-1-2024/",
          "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/03/20/5079c24b-d80c-4526-949c-b27df00d142b/thumbnail/1200x630/c0e55d6c7998921c0394cc06d1112cff/gettyimages-2063432845.jpg?v=5b44a284b59f1e101ea6bf2f76b493fc",
          "publishedAt": "2024-05-01T09:00:00Z",
          "content": "U.S. economy slowed during 1st quarter of 2024, falling short of forecasts \r\nU.S. economy slowed during 1st quarter of 2024, falling short of forecasts02:28\r\nThe Federal Reserve on Wednesday afternoo… [+4063 chars]"
        },
        {
          "source": { "id": null, "name": "YouTube" },
          "author": null,
          "title": "Expert reveals King Charles’ outfit exposed SIGNIFICANT detail about monarch’s wellbeing - GBNews",
          "description": "Jennie Bond reveals that King Charles was wearing a special tie during his visit yesterday. The monarch wore a tie with dinosaurs on, which the royal expert ...",
          "url": "https://www.youtube.com/watch?v=oueRIRfH3I0",
          "urlToImage": "https://i.ytimg.com/vi/oueRIRfH3I0/maxresdefault.jpg",
          "publishedAt": "2024-05-01T07:51:31Z",
          "content": null
        },

        {
          "source": { "id": null, "name": "BBC News" },
          "author": null,
          "title": "Democrats make shock move to back Republican speaker Mike Johnson - BBC.com",
          "description": "House Democrats say they will support their Republican opponent as he faces removal by fringe party members.",
          "url": "https://www.bbc.com/news/world-us-canada-68933018",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1D6F/production/_133253570_johnson.jpg",
          "publishedAt": "2024-05-01T07:09:41Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "Android Authority" },
          "author": null,
          "title": "Amazfit Helio is a Galaxy Ring rival coming to the US for $299 - Android Authority",
          "description": "The Amazfit Helio is a $299 smart ring that works best when paired with an Amazfit smartwatch. It'll be available in the US staring May 15.",
          "url": "https://www.androidauthority.com/amazfit-helio-smart-ring-us-price-availability-release-date-3438862/",
          "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2024/01/Amazfit-Helio-Ring_1.jpg",
          "publishedAt": "2024-05-01T06:58:51Z",
          "content": "<ul><li>The Amazfit Helio smart ring will finally go on sale in the US on May 15.</li><li>The wearable is priced at $299 but can be purchased alongside an Amazfit smartwatch for $149.</li></ul>\r\nAmaz… [+1709 chars]"
        },
        {
          "source": { "id": null, "name": "Yahoo Entertainment" },
          "author": "Dan Devine",
          "title": "Tyrese Maxey saved the Sixers' season with one of the toughest playoff performances ever - Yahoo Sports",
          "description": "On Tuesday, Maxey — an All-Star, the league’s Most Improved Player, and now, author of one of the most legendary postseason performances in Philadelphia...",
          "url": "https://sports.yahoo.com/tyrese-maxey-saved-the-sixers-season-with-one-of-the-toughest-playoff-performances-ever-064338458.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/kmkyuI7LSDBHDNK2Vheqjg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NTE-/https://s.yimg.com/os/creatr-uploaded-images/2024-04/7bbaa5a0-0781-11ef-b59c-3556703d4252",
          "publishedAt": "2024-05-01T06:43:38Z",
          "content": "NEW YORK Tyrese Maxey could feel the pit in his gut growling, growing, deepening. He knew how bad it was, and how much worse it was about to get. He could almost reach out and touch the nightmares th… [+8559 chars]"
        },
        {
          "source": { "id": null, "name": "CBS Sports" },
          "author": "Leger Douzable",
          "title": "NFL Draft grades 2024: Former 10-year NFL veteran analyzes every team's draft class, reveals favorite picks - CBS Sports",
          "description": "Some teams aced the test, whereas others needed improvement",
          "url": "https://www.cbssports.com/nfl/news/nfl-draft-grades-2024-former-10-year-nfl-veteran-analyzes-every-teams-draft-class-reveals-favorite-picks/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/04/30/957921ab-0e9c-4d54-9139-584341463149/thumbnail/1200x675/127b2531cee90fe63b99328f5ac1a11a/nfl-draft-2024.jpg",
          "publishedAt": "2024-05-01T06:40:00Z",
          "content": "The 2024 NFL Draft is in the books, but there's still plenty to discuss. Now that 257 players have heard their names called, it's time to analyze how each team fared with its draft class. That's what… [+4234 chars]"
        },
        {
          "source": { "id": null, "name": "ScienceAlert" },
          "author": "Carly Cassella",
          "title": "Bird Flu in Raw Cow Milk Has Killed Farm Cats in a Concerning First - ScienceAlert",
          "description": "In mid-March, a mysterious disease began to spread among cows at a north Texas dairy farm.",
          "url": "https://www.sciencealert.com/bird-flu-in-raw-cow-milk-has-killed-farm-cats-in-a-concerning-first",
          "urlToImage": "https://www.sciencealert.com/images/2024/05/FarmCatsMilk.jpg",
          "publishedAt": "2024-05-01T06:05:35Z",
          "content": "In mid-March, a mysterious disease began to spread among cows at a north Texas dairy farm. Just a few days later, cats on the farm started acting strange.\r\nTheir eyes and noses leaked copiously, they… [+3349 chars]"
        },
        {
          "source": { "id": "associated-press", "name": "Associated Press" },
          "author": null,
          "title": "Ryan Gosling and Mikey Day reprise viral Beavis and Butt-Head characters at 'Fall Guy' premiere - The Associated Press",
          "description": "Ryan Gosling and Mikey Day aren’t done playing Beavis and Butt-Head yet — the pair appeared as the characters at the premiere of Gosling’s latest film. Gosling, who stars in “The Fall Guy” opposite Emily Blunt, walked the carpet twice Tuesday in Los Angeles. …",
          "url": "https://apnews.com/article/beavis-butthead-gosling-mikey-day-fall-guy-f9fbf1a670781788b5a088ce11b1f0c7",
          "urlToImage": "https://dims.apnews.com/dims4/default/d89c468/2147483647/strip/true/crop/2245x1263+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe7%2F3d%2Fb1555d8fb609c8b16b593733dff9%2Fa814ec0020944bd1bd728daceb598839",
          "publishedAt": "2024-05-01T05:50:00Z",
          "content": "LOS ANGELES (AP) Ryan Gosling and Mikey Day arent done playing Beavis and Butt-Head yet the pair appeared as the characters at the premiere of Goslings latest film.\r\nGosling, who stars in The Fall Gu… [+1049 chars]"
        },
        {
          "source": { "id": "associated-press", "name": "Associated Press" },
          "author": "JAKE OFFENHARTZ, JOSEPH B. FREDERICK, STEFANIE DAZIO",
          "title": "Police clear pro-Palestinian protesters from Columbia University's Hamilton Hall - The Associated Press",
          "description": "The pro-Palestinian demonstration that paralyzed Columbia University ended in dramatic fashion. Police carrying riot shields burst into a building late Tuesday that protesters took over the previous night and made dozens of arrests. On the other side of the c…",
          "url": "https://apnews.com/article/israel-palestinian-campus-student-protests-war-c6e5549532c85f13493daa22d0d143ac",
          "urlToImage": "https://dims.apnews.com/dims4/default/18c7111/2147483647/strip/true/crop/3600x2025+0+108/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7d%2F54%2Fd06f9b4bf53883f0c650429d7913%2F9cdfc88bde804860b2e5e4f1d17880c9",
          "publishedAt": "2024-05-01T05:48:00Z",
          "content": "NEW YORK (AP) The pro-Palestinian demonstration that paralyzed Columbia University ended in dramatic fashion, with police carrying riot shields bursting into a building that protesters took over the … [+9228 chars]"
        }
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
                    newsURL= ""
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
