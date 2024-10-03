import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        if (!response.ok) {
          throw new Error();
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setImageArray(jsonData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
