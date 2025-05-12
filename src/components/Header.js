import React from "react";

function Header() {
    return (
        <div style={{ padding: "20px 0 10px 0", borderBottom: "1px solid #eee", marginBottom: 10 }}>
            <div style={{ fontSize: 14, color: '#888', marginBottom: 4 }}>Home / Properties</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0, fontSize: 24 }}>
                    Houses, Apartments and Flats for rent in Andaman & Nicobar Islands
                </h2>
                <div style={{ textAlign: "right", fontSize: 15 }}>
                    <b>SORT BY :</b> <span style={{ color: '#222' }}>Date Published ▼</span>
                </div>
            </div>
            <div style={{ fontWeight: 'bold', marginTop: 8 }}>
                13 ads in <span style={{ color: '#1a237e' }}>Andaman & Nicobar Islands</span>
            </div>
        </div>
    );
}

export default Header; 