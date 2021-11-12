import image1 from "../imagefiles/image1.png";
import image2 from "../imagefiles/image2.jpg";

import caterpie from "../imagefiles/caterpie.png";
import pikachu from "../imagefiles/pikachu.png";
import meowth from "../imagefiles/meowth.png";
import charmander from "../imagefiles/charmander.png";

import ditto from "../imagefiles/ditto.png";
import mew from "../imagefiles/mew.png";
import eevee from "../imagefiles/eevee.png";
import jigglypuff from "../imagefiles/jigglypuff.png";

const imageIcons = [
  { name: "caterpie", id: 0, src: caterpie },
  { name: "pikachu", id: 0, src: pikachu },
  { name: "meowth", id: 0, src: meowth },
  { name: "charmander", id: 0, src: charmander },
  { name: "ditto", id: 1, src: ditto },
  { name: "mew", id: 1, src: mew },
  { name: "eevee", id: 1, src: eevee },
  { name: "jigglypuff", id: 1, src: jigglypuff },
];

const images = [image1, image2];

const imageData = images.map((img, i) => {
  return {
    src: img,
    id: i,
  };
});

export { imageData, imageIcons };
