import React, { useState, useEffect } from 'react';
import './CandidateCard.css';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

const CandidateCard = () => {
    const [candidateList, setCandidateList] = useState([]);
    const [candidateListDefault, setCandidateListDefault] = useState([]);

    const fetchData = async () => {
        return await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
            .then(response => response.json())
            .then(data => {
                setCandidateList(data)
                setCandidateListDefault(data)
            });
    }
    const search = function (text) {
        const filtered = candidateListDefault.filter(country => {
            return country.name.toLowerCase().includes(text.toLowerCase())
        });
        setCandidateList(filtered);
    }
    useEffect(() => { fetchData() }, []);
    return (
        <div className="beer-home">
            <h1>Candidate List</h1>
            <div className="search">
                {/* <h5>Search by name </h5> */}
                <input type="text" id="search" placeholder="Search name" onChange={(e) => search(e.target.value)} />
            </div>
            <div className="card-holder">
                {candidateList.map((res, index) => (
                    <div key={index} className="card">
                        <div className="photo">
                            <a target="_blank" href="beer.img">
                                <img src={res.Image} alt="" />
                            </a>
                        </div>
                        <div className="description">
                            <Link to={"/candidate/" + res.id}>
                                <h3>{res.name}</h3>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CandidateCard;