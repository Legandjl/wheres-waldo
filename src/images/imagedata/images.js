import image1 from "../imagefiles/image1.png";
import caterpie from "../imagefiles/caterpie.png";
import pikachu from "../imagefiles/pikachu.png";
import meowth from "../imagefiles/meowth.png";
import charmander from "../imagefiles/charmander.png";
import mew from "../imagefiles/mew.png";

const imageIcons = [
  { name: "caterpie", id: 0, src: caterpie },
  { name: "pikachu", id: 0, src: pikachu },
  { name: "meowth", id: 0, src: meowth },
  { name: "charmander", id: 0, src: charmander },
  { name: "mew", id: 0, src: mew },
];

const images = [image1];

const imageData = images.map((img, i) => {
  return {
    src: img,
    id: i,
  };
});

export { imageData, imageIcons };
