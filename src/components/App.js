import React, { useState, useEffect } from "react";

function App() {
    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.message);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching the dog image:", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return <img src={imageUrl} alt="A Random Dog" />;
}

export default App;
