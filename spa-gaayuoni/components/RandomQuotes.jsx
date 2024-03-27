import "../components/RandomQuotes";
import { useState, useEffect } from "react";
import axios from "axios";

export function RandomQuotes() {
  //Initialize the states
  const [data, setData] = useState({});
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //Using useEffect to fetch data from the api

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const url = "https://type.fit/api/quotes"; //free quotes api
        const { data } = await axios.get(url);
        // console.log(data); //debugging point for checking incoming data
        setData(data);
        //Random quote selection:
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex].text;
        const randomAuthor = data[randomIndex].author;
        setQuote(randomQuote);
        setAuthor(randomAuthor);
      } catch (error) {
        console.log(error);
        alert("Oops data loading error");
      } finally {
        setIsLoading(false);
      }
    }
    getData(); //call the function to immediately fetch the data needed

    //setting the interval time for changing the quotes
    const intervalId = setInterval(() => {
      getData();
    }, 30000); // 30 000ms = 30 seconds
    return () => {
      clearInterval(intervalId); //cleanup after each interval
    };
  }, []);

  return (
    <div className="quotes-container">
      <p id="quote-of-day">Quote of the day!</p>
      {isLoading ? (
        <p>Loading quote</p>
      ) : (
        <span className="main-quote">
          <p>`{quote} ` </p> <p>- {author} </p>
        </span>
      )}
    </div>
  );
}
