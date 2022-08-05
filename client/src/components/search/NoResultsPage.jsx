import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NoResultsPage = (props) => {
  const { keywords } = useParams();

  return (
    <div className="no-results-found">
      <p>Sorry, we couldn't find any results for "<b>{keywords}</b>"</p>
    </div>
  );
};

export default NoResultsPage;
