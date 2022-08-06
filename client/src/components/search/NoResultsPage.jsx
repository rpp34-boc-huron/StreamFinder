import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';

const NoResultsPage = (props) => {
  const { keywords } = useParams();

  return (
    <Container
    sx={{ fontSize: '25px', paddingTop: '50px', textAlign: 'center', color: 'rgba(0,0,0,0.5)' }}>
      <div className="no-results-found">
        <p>Sorry, we couldn't find any results for "<b>{keywords}</b>"</p>
      </div>
    </Container>
  );
};

export default NoResultsPage;
