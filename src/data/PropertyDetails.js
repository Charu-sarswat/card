import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

function PropertyDetails({ properties }) {
    const { id } = useParams();
    const property = properties.find((p) => p.id === parseInt(id));
    const [imgIndex, setImgIndex] = useState(0);

    if (!property) return <div>Property not found</div>;
    const images = property.images || [property.image];
    const d = property.details || {};

    return (
        <div style={{ display: "flex", gap: 32, padding: 32 }}>
            {/* Left: Image Carousel */}
            <div style={{ flex: 1, maxWidth: 500 }}>
                <div style={{ background: "#000", display: "flex", alignItems: "center", justifyContent: "center", height: 400, position: "relative" }}>
                    <button onClick={() => setImgIndex((imgIndex - 1 + images.length) % images.length)} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", fontSize: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>&lt;</button>
                    <img src={images[imgIndex]} alt="property" style={{ maxHeight: 380, maxWidth: "100%", objectFit: "contain" }} />
                    <button onClick={() => setImgIndex((imgIndex + 1) % images.length)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", fontSize: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>&gt;</button>
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 8, justifyContent: "center" }}>
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt="thumb"
                            style={{ width: 60, height: 40, objectFit: "cover", border: imgIndex === idx ? "2px solid #1976d2" : "1px solid #ccc", cursor: "pointer" }}
                            onClick={() => setImgIndex(idx)}
                        />
                    ))}
                </div>
            </div>

            {/* Right: Summary and Details */}
            <div style={{ flex: 1, minWidth: 350 }}>
                <h2>₹ {property.price.toLocaleString()}</h2>
                <div style={{ fontSize: 18, marginBottom: 8 }}>{property.bhk} BHK - {property.bathroom} Bathroom - {property.sqft} sqft</div>
                <div style={{ fontWeight: "bold", marginBottom: 8 }}>{property.title}</div>
                <div style={{ color: "#555", marginBottom: 8 }}>{property.location}</div>
                {/* Details Table */}
                <table style={{ width: "100%", marginBottom: 16, borderCollapse: "collapse" }}>
                    <tbody>
                        <tr><td>Type</td><td>{d.type}</td><td>Bedrooms</td><td>{d.bedrooms}</td></tr>
                        <tr><td>Super Built-up area sqft</td><td>{d.superBuiltup}</td><td>Bathrooms</td><td>{d.bathrooms}</td></tr>
                        <tr><td>Furnishing</td><td>{d.furnishing}</td><td>Listed By</td><td>{d.listedBy}</td></tr>
                        <tr><td>Bachelors Allowed</td><td>{d.bachelorsAllowed}</td><td>Facing</td><td>{d.facing}</td></tr>
                        <tr><td>Carpet area sqft</td><td>{d.carpetArea}</td><td>Floor No</td><td>{d.floorNo}</td></tr>
                        <tr><td>Total Floors</td><td>{d.totalFloors}</td><td>Car Parking</td><td>{d.carParking}</td></tr>
                    </tbody>
                </table>
                {/* Description */}
                <div style={{ marginBottom: 16 }}>
                    <b>Description:</b>
                    <div>{property.description}</div>
                </div>
                {/* Map */}
                {property.mapUrl && (
                    <iframe
                        src={property.mapUrl}
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="map"
                    ></iframe>
                )}
                <Link to="/" style={{ color: "#1976d2", display: "block", marginTop: 16 }}>&larr; Back to Listings</Link>
            </div>
        </div>
    );
}

export default PropertyDetails;
