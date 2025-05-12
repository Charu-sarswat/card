import React from "react";
import { Link } from "react-router-dom";

function Listings({ properties, filters }) {
    return (
        <div className="listings">
            {properties.map((property) => (
                <Link to={`/property/${property.id}`} key={property.id} style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="property-card">
                        <img src={property.images ? property.images[0] : property.image} alt={property.title} />
                        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>₹ {property.price.toLocaleString()}</div>
                        <div style={{ fontSize: '15px' }}>
                            {property.bhk} BHK - {property.bathroom} Bathroom - {property.sqft} sqft
                        </div>
                        <div style={{ fontSize: '14px', color: '#444' }}>{property.title}</div>
                        <div style={{ fontSize: '13px', color: '#888' }}>{property.location}</div>
                        <div style={{ fontSize: '12px', color: '#888' }}>{property.date}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Listings; 