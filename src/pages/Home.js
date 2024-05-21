import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();  // Hook to get the navigate function

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Welcome to Sparkle Clean Car Wash</h1>
            <p>Your trusted partner in keeping your vehicle clean and shining.</p>
            <button 
                style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                onClick={() => navigate('/services')}  // Use navigate to go to the Services page
            >
                Learn More
            </button>
        </div>
    );
}

export default Home;