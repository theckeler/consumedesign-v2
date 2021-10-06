import React, { useEffect, useState, useCallback } from "react";
import connection from "../db";
import connectQuery from "../query";
import Hero from "./Hero";
import Card from "./Card";
import "../css/portfolio.min.css";

export function Portfolio() {
  const [endCursor, setEndCursor] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState([]);
  //console.log(connectQuery);

  const fetchData = useCallback(() => {
    fetch(connection.baseURL, {
      method: "POST",
      headers: connection.headers,
      body: JSON.stringify(connectQuery(endCursor)),
    })
      .then((response) => response.json())
      .then((data) => {
        //  setEndCursor(data.data.posts.pageInfo.endCursor);
        setPortfolioItems(data.data.posts.edges);
        //  console.log("FETCHED");
      })
      .catch((err) => {
        console.error(err);
      });
  }, [endCursor]);

  useEffect(
    (endCursor) => {
      fetchData();
    },
    [fetchData]
  );

  if (!portfolioItems.length) {
    return (
      <>
        <Hero addClassName="loading" />
      </>
    );
  }

  //console.log(portfolioItems);
  return (
    <>
      <Hero addClassName="portfolio-hero" />
      <h1>Portfolio</h1>
      {portfolioItems && (
        <ul>
          {portfolioItems.map((post) => {
            let portfolioItem = post.node;
            return (
              <Card key={portfolioItem.id} portfolioItem={portfolioItem} />
            );
          })}
        </ul>
      )}
    </>
  );
}
