import {
    React,
    useEffect,
    useRef
} from 'react';
import p5 from 'p5';
import styles from '../styles/SketchComp.module.css';

const SketchComp = () => {

    const myRef = useRef(0);

    const s = (sketch) => {

        //let font;
        let pg;
        let width = 400;
        let height = 400;

        sketch.setup = () => {

            sketch.createCanvas(width, height);
            pg = sketch.createGraphics(width, height);
            sketch.frameRate(60);

        }

        sketch.draw = () => {
            sketch.background(0);


            // PGraphics

            pg.background(0);
            pg.fill(255);
            // pg.textFont(font);
            pg.textSize(400);
            pg.push();
            pg.translate(width / 2, height / 2);
            pg.textAlign(sketch.CENTER, sketch.CENTER);
            pg.text("a", 0, 0);
            pg.pop();


            let tilesX = 16;
            let tilesY = 16;

            let tileW = sketch.int(width / tilesX);
            let tileH = sketch.int(height / tilesY);

            for (let y = 0; y < tilesY; y++) {
                for (let x = 0; x < tilesX; x++) {

                    // WARP

                    let wave = sketch.int(sketch.sin(sketch.frameCount * 0.05 + (x * y) * 0.07) * 100);

                    // SOURCE
                    let sx = x * tileW + wave;
                    let sy = y * tileH;
                    let sw = tileW;
                    let sh = tileH;


                    // DESTINATION
                    let dx = x * tileW;
                    let dy = y * tileH;
                    let dw = tileW;
                    let dh = tileH;



                    sketch.copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

                }
            }
        }
    }

    /*const s = ( sketch ) => {

        let x = 100;
        let y = 100;
      
        sketch.setup = () => {
          sketch.createCanvas(200, 200);
        };
      
        sketch.draw = () => {
          sketch.background(0);
          sketch.fill(255);
          sketch.rect(x,y,50,50);
        };
      };*/

    useEffect(() => {
        console.log(myRef.current);
        let myp5 = new p5(s, myRef.current);
        console.log(myp5);
    }, [])

    return ( 
        <div className = {styles.sketch}
        ref = {myRef}>

        </div>
    )
}

export default SketchComp;