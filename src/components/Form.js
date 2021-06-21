import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../redux/actions/index';

const Form = ({ addArticle }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addArticle({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => dispatch(addArticle(article)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
