import React, { useEffect, useState } from 'react';

import Preloader from './components/Preloader'
import Header from './components/Header';
import Candidates from './components/Candidates';

export default () => {
  const [candidates, setCandidate] = useState([])
  const [getsApi, setGetsApi] = useState(null)
  useEffect(() => {
    const gets = setInterval(() => {
      fetch('http://localhost:8080/votes')
        .then((res) => res.json())
        .then((json) => setCandidate(json.sort((a, b) => b.popularity - a.popularity)))
    }, 1000)
    setGetsApi(gets)
  }, [])


  return (
    <div className="container">
      <div style={candidates.length === 0 ? {
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
      } : { display: "none" }}>
        <Preloader />
      </div>
      <div style={candidates.length === 0 ? { display: "none" } : {}}>
        <Header>Votação</Header>
        <Candidates candidates={candidates} />
      </div>
    </div>
  );
}
