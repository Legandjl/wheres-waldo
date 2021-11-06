import image1 from "../imagefiles/image1.png";
import image2 from "../imagefiles/image2.webp";
import image3 from "../imagefiles/image3.jpg";

const images = [image1, image3];

const imageData = images.map((img, i) => {
  return {
    src: img,
    id: i,
  };
});

export default imageData;
