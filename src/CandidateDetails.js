import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CandidateDetails.css';

const CandidateDetails = () => {
    const [candidate, setCandidate] = useState({});
    let params = useParams();

    const fetchData = async () => {
        return await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
            .then(response => response.json())
            .then(data => {
                let candidateDetails = data.find(res => res.id == params.id);
                setCandidate(candidateDetails);
            });
    }

    useEffect(() => { fetchData() }, []);
    return (
        <div className="candidate">
            <h1>Candidate Details Page</h1>
            <div className="candidate-details">
                <img src={candidate.Image} />
                <h1>{candidate.name}</h1>
                <button >Reject</button>
                <button >Shortlist</button>
            </div>

        </div>
    )
}

export default CandidateDetails;