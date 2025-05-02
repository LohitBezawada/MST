import React from 'react';
import { Link } from 'react-router-dom';

const CompletedDonations = () => {
    // Sample campaign data
    const campaigns = [
        { id: 1, title: "Campaign 1", description: "Description of Campaign 1" },
        { id: 2, title: "Campaign 2", description: "Description of Campaign 2" },
        { id: 3, title: "Campaign 3", description: "Description of Campaign 3" }
    ];

    return (
        <div className="container mt-5">
            <h2>Campaigns List</h2>
            <ul className="list-group mt-3">
                {campaigns.map(campaign => (
                    <li key={campaign.id} className="list-group-item">
                        <div>{campaign.title}</div>
                        <div>{campaign.description}</div>
                        <Link to={`/campaigns/${campaign.id}`} className="btn btn-primary mt-2">More Details</Link>
                        <Link to='/payment'><button type="submit" className="btn btn-primary">Donate</button></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CompletedDonations;
