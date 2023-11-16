import React, { useState } from 'react';
import { useAuth } from "@pangeacyber/react-auth";
import './styles.css';

const isValidUrl = (url: string) => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
};

const Tool = () => {
    const { user } = useAuth();
    const [productUrl, setProductUrl] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!isValidUrl(productUrl)) {
            setErrorMessage('Invalid URL. Please enter a valid URL.');
            return;
        }

        try {
            // Make an HTTP request to your backend API endpoint
            const response = await fetch('http://localhost:5000/submit-tool', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productUrl,
                    description,
                    mail: user?.email,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Data submitted successfully:', result);
                setSuccessMessage('Tool submitted successfully. Redirecting to Home page...');
                // Clear input fields after successful submission
                setProductUrl('');
                setDescription('');
                setTimeout(() => {
                    setSuccessMessage('');
                    window.location.href = '/';
                }, 2000);
            } else {
                console.error('Error submitting data:', result.error || 'Unknown error');
                setErrorMessage(result.error || 'error in submittin data');
            }
        } catch (error: any) {
            console.error('Error:', error.message);
            setErrorMessage('Error submitting data. Please try again.');
        }
    };

    return (
        <div className="container">
            <h1>Submit new tool</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Tool URL:
                    <input
                        type="text"
                        value={productUrl}
                        onChange={(e) => setProductUrl(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
        </div>
    );
}

export default Tool;
