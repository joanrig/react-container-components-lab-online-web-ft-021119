import React, { Component } from 'react';

// Code MovieReviews Here
const Review = ({
  headline,
  link,
  summary_short
}) => {
  return (

    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>{headline}</a>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
