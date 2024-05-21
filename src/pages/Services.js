import React from 'react';
import { useNavigate } from 'react-router-dom';

function Services() {
    const navigate = useNavigate();  // Hook to get the navigate function

    return (
        <div style={{ padding: '20px', fontSize: '16px' }}>
            <button 
                style={{ padding: '10px', margin: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                onClick={() => navigate('/')}  // Navigate back to the Home page
            >
                Back to Home
            </button>
            <h2>Our Services</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '800px', margin: 'auto' }}>
                <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Basic Wash</h3>
                    <p>Includes exterior hand wash, drying, and tire cleaning.</p>
                </div>
                <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Deluxe Wash</h3>
                    <p>Includes Basic Wash plus interior vacuuming and window cleaning.</p>
                </div>
                <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Premium Wash</h3>
                    <p>Includes Deluxe Wash plus waxing and interior detailing.</p>
                </div>
                <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Eco Wash</h3>
                    <p>Our environmentally friendly option using waterless cleaning technology.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;