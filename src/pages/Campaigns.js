import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Campaigns = () => {
    const { id } = useParams();

    // Mock data for campaign details
    const campaignDetails = {
        id: id,
        title: `Campaign ${id}`,
        description: `Description of Campaign ${id}`,
        requiredAmount: 1000, // Sample required amount
        collectedAmount: 500 // Sample collected amount
    };

    return (
        <div className="container mt-5">
            <h2>Campaign Details</h2>
            <div>
                <h3>{campaignDetails.title}</h3>
                <p>{campaignDetails.description}</p>
                <p>Required Amount: ${campaignDetails.requiredAmount}</p>
                <p>Collected Amount: ${campaignDetails.collectedAmount}</p>
                <Link to='/payment'><button className="btn btn-primary">Donate</button></Link>
            </div>
        </div>
    );
}

export default Campaigns;
