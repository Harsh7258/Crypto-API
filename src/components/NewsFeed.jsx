import { useEffect, useState } from "react";
import axios from 'axios';

const NewsFeed = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
            
            const options = {
                method: 'GET',
                url: 'https://crypto-update-live.p.rapidapi.com/news',
                headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_NEWS_FEED_APIKEY,
                'X-RapidAPI-Host': 'crypto-update-live.p.rapidapi.com'
                }
            };
            
            try {
                 axios.request(options).then((response) => {
                    //  console.log(response.data)
                     setArticles(response.data)
                 });
            } catch (error) {
                console.log(error);
            }
    }, []);
    // console.log(articles);

    const firstSevenArticles = articles?.slice(0, 7)

    return (
        <div>
            <h2>News Feed</h2>
            {firstSevenArticles?.map((article, _index) => (
                <div key={_index}> 
                    <a href={article.URL}> 
                    <p className="m-2"> {article.Title} </p> 
                    </a> 
                </div>
            ))}
        </div>
    );
};

export default NewsFeed;