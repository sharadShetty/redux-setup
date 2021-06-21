import React from 'react';
import { connect } from 'react-redux';

const List = ({ articles }) => {
  return (
    <ul>
      {articles.map((article, index) => (
        <li key={index}>{article.title}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

export default connect(mapStateToProps, null)(List);
