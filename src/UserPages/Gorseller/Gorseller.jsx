import { useState } from "react";
import "./Gorseller.css";
import defaultImage from "../../assets/muayehane.png"; // Your default image path
import { useSelector } from "react-redux";

function Gorseller() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index); // Set the selected image index for enlargement
    };

    const handleClose = () => {
        setSelectedImageIndex(null); // Close the enlarged image view
    };

    const handleNext = (e) => {
        e.stopPropagation(); // Prevent modal click closing
        setSelectedImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = (e) => {
        e.stopPropagation(); // Prevent modal click closing
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Temporary array to represent default images (replace with fetched data later)
    const images = new Array(8).fill(defaultImage); // 8 default images

    const { lang, articles } = useSelector(state => state.language)

    return (
        <div>
            {lang == "tr"
                ?
                <h2 className="title">Muayehane Görselleri</h2>
                :
                <h2 className="title">Clinic Images</h2>
            }
            <div className="image-grid">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Default ${index}`}
                        className="image-box"
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>

            {/* Enlarge image view with navigation */}
            {selectedImageIndex !== null && (
                <div className="modal" onClick={handleClose}>
                    <span className="arrow left-arrow" onClick={handlePrevious}>
                        &#8249;
                    </span>
                    <img
                        src={images[selectedImageIndex]}
                        alt="Enlarged view"
                        className="enlarged-image"
                        onClick={(e) => e.stopPropagation()} // Stop modal close on image click
                    />
                    <span className="arrow right-arrow" onClick={handleNext}>
                        &#8250;
                    </span>
                </div>
            )}
        </div>
    );
}

export default Gorseller;
