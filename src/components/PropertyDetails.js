import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";

function PropertyDetails({ properties }) {
    const { id } = useParams();
    const property = properties.find((p) => p.id === parseInt(id));
    const [imgIndex, setImgIndex] = useState(0);

    if (!property) return <div>Property not found</div>;
    const images = property.images || [property.image];
    const d = property.details || {};

    // Dummy user info for demonstration
    const user = {
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        name: "OLX User",
        memberSince: property.date || "Yesterday",
        itemsListed: 1
    };

    return (
        <div className="property-details-container">
            <div className="main-section">
                {/* Left: Image and Info */}
                <div className="carousel-section">
                    <div className="main-image">
                        <button onClick={() => setImgIndex((imgIndex - 1 + images.length) % images.length)} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", fontSize: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>&lt;</button>
                        <img src={images[imgIndex]} alt="property" />
                        <button onClick={() => setImgIndex((imgIndex + 1) % images.length)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", fontSize: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>&gt;</button>
                    </div>
                    <div className="thumbnails">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="thumb"
                                className={imgIndex === idx ? "selected" : ""}
                                onClick={() => setImgIndex(idx)}
                            />
                        ))}
                    </div>
                    {/* Summary below image */}
                    <div className="summary-card">
                        <h2 style={{ margin: 0 }}>₹ {property.price.toLocaleString()}</h2>
                        <div style={{ fontSize: 18, marginBottom: 8 }}>{property.bhk} BHK - {property.bathroom} Bathroom - {property.sqft} sqft</div>
                        <div style={{ fontWeight: "bold", marginBottom: 8 }}>{property.title}</div>
                        <div style={{ color: "#555", marginBottom: 8 }}>{property.location}</div>
                        <div style={{ color: "#888", fontSize: 13 }}>{property.date}</div>
                    </div>
                    {/* Details and Description side by side */}
                    <div className="details-and-description">
                        <div className="details-card">
                            <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Details</div>
                            <table>
                                <tbody>
                                    <tr><td>Type</td><td>{d.type}</td><td>Bedrooms</td><td>{d.bedrooms}</td></tr>
                                    <tr><td>Super Built-up area sqft</td><td>{d.superBuiltup}</td><td>Bathrooms</td><td>{d.bathrooms}</td></tr>
                                    <tr><td>Furnishing</td><td>{d.furnishing}</td><td>Listed By</td><td>{d.listedBy}</td></tr>
                                    <tr><td>Bachelors Allowed</td><td>{d.bachelorsAllowed ? "Yes" : "No"}</td><td>Facing</td><td>{d.facing}</td></tr>
                                    <tr><td>Carpet area sqft</td><td>{d.carpetArea}</td><td>Floor No</td><td>{d.floorNo}</td></tr>
                                    <tr><td>Total Floors</td><td>{d.totalFloors}</td><td>Car Parking</td><td>{d.carParking}</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="description-card">
                            <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Description</div>
                            <div>{property.description}</div>
                        </div>
                    </div>
                </div>
                {/* Right: User Info and Posted In (optional) */}
                <div className="info-section">
                    <div className="user-card">
                        <div className="user-info">
                            <img src={user.avatar} alt="avatar" />
                            <div>
                                <div style={{ fontWeight: 'bold' }}>Posted By {user.name}</div>
                                <div className="user-details">Member since {user.memberSince}</div>
                            </div>
                        </div>
                        <div style={{ fontSize: 15, marginBottom: 10 }}>{user.itemsListed} Items listed</div>
                        <button>Chat with seller</button>
                    </div>
                    <div className="posted-in-card">
                        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Posted in</div>
                        <div style={{ fontSize: 14, color: '#555', marginBottom: 8 }}>{property.location}</div>
                        {property.mapUrl && (
                            <iframe
                                src={property.mapUrl}
                                width="100%"
                                height="150"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="map"
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
            <Link to="/" style={{ color: "#1976d2", display: "block", marginTop: 16 }}>&larr; Back to Listings</Link>
        </div>
    );
}

export default PropertyDetails; 