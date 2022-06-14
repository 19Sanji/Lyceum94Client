import React from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "../styles/Gallery.css";

function GalleryPage() {
  const [imgArray, setImgArray] = React.useState([]);

  async function GetImg() {
    await axios.get("http://localhost:3001/gallery").then(function (res) {
      setImgArray(res.data);
    });
  }

  React.useEffect(() => {
    if (imgArray.length === 0) {
      GetImg();
    }
  }, [imgArray]);

  return (
    <div className="gallery row">
      <div className="gallery_content col-12">
        <Carousel>
          {imgArray.map((image) => {
            return (
              <Carousel.Item>
                <img src={"http://localhost:3001/image/gallery/" + image} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
export default GalleryPage;
