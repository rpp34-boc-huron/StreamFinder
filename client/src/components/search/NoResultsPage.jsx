import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';

const NoResultsPage = (props) => {
  const { keywords } = useParams();

  return (
    // <div className="no-results-found">
    //   <p>Sorry, we couldn't find any results for "<b>{keywords}</b>"</p>
    // </div>
    <Container
    sx={{ fontSize: '25px', 'padding-top': '50px', textAlign: 'center' }}>
      <div className="no-results-found">
        <p>Sorry, we couldn't find any results for "<b>{keywords}</b>"</p>
      </div>
    </Container>
  );
};

export default NoResultsPage;
