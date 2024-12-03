import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '../App.css'
import image2 from '../assets/image2.png'


const MainSection = () => {
    return (
        <div className="container mt-5 pt-5"> {/* Add margin-top to push it below the navbar */}
            <div className="row">
                <div className="col-md-6"> {/* Left column for description */}
                    <h2>Short Description</h2>
                    <p>
                        This is a short description of the website or product. You can provide
                        key information that highlights features, benefits, or any other relevant
                        details that will engage your audience.
                    </p>

                </div>
                <div className="col-md-6"> {/* Right column for image */}
                    <img
                        src={image2} // Replace with your image URL
                        alt="Description"
                        className="img-fluid curved-image" // Ensure the image is responsive
                    />
                </div>
            </div>
        </div>
    );
};

export default MainSection;