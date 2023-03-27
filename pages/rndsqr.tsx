import Head from "next/head";
import { useEffect } from "react";
import styles from "@/styles/Button.module.scss";

const randomize = (
  arrayOfNum: number[],
  alwaysReturn: boolean,
  limitColors: boolean,
  randomizeLimits: boolean
) => {
  const randomIndex = Math.floor(Math.random() * arrayOfNum.length);
  const number = arrayOfNum[randomIndex];
  const randomizedNum = Math.floor(
    Math.random() * number + Math.random() / new Date().getTime()
  );
  const shouldReturn = Math.floor(Math.random() * 2);

  if (alwaysReturn) {
    return randomizedNum;
  } else if (shouldReturn) {
    if (limitColors) {
      if (randomizeLimits) {
        let randomizedUpperLimit = Math.max(
          Math.floor(Math.random() * 255),
          200
        );
        let randomizedLowerLimit = Math.min(
          Math.floor(Math.random() * 255),
          200
        );

        if (randomizedNum > randomizedUpperLimit) {
          return randomizedUpperLimit;
        } else if (randomizedNum < randomizedLowerLimit) {
          return randomizedLowerLimit;
        }
      } else {
        if (randomizedNum > 240) {
          return 240;
        } else if (randomizedNum < 20) {
          return 20;
        }
      }
    } else {
      return randomizedNum;
    }
  }
};

class Square {
  private x;
  private y;
  private alwaysReturn;
  private limitColors;
  private context;
  private squareSize;
  private randomizeLimits;

  constructor(
    x: number,
    y: number,
    squareSize: number,
    alwaysReturn: boolean,
    limitColors: boolean,
    randomizeLimits: boolean,
    context: CanvasRenderingContext2D
  ) {
    this.x = x;
    this.y = y;
    this.alwaysReturn = alwaysReturn;
    this.limitColors = limitColors;
    this.context = context;
    this.squareSize = squareSize;
    this.randomizeLimits = randomizeLimits;
  }

  draw() {
    let R = randomize(
      [this.x, this.y],
      this.alwaysReturn,
      this.limitColors,
      this.randomizeLimits
    );
    let G = randomize(
      [this.x, this.y],
      this.alwaysReturn,
      this.limitColors,
      this.randomizeLimits
    );
    let B = randomize(
      [this.x, this.y],
      this.alwaysReturn,
      this.limitColors,
      this.randomizeLimits
    );
    this.context.fillStyle = `rgb(${R}, ${G}, ${B})`;
    this.context.fillRect(this.x, this.y, this.squareSize, this.squareSize);
  }
}

const drawAllSquares = (
  canvas: HTMLCanvasElement | null,
  context: CanvasRenderingContext2D | null
) => {
  const alwaysReturn = /* Math.floor(Math.random() * 2) */ false;
  const limitColors = Math.floor(Math.random() * 2);
  const randomizeLimits = Math.floor(Math.random() * 2);
  const squareSize = 10;

  if (canvas && context) {
    context.clearRect(0, 0, canvas?.width, canvas?.height);
    for (let x = 0; x < canvas.width; ) {
      for (let y = 0; y < canvas.height; ) {
        let square = new Square(
          x,
          y,
          squareSize,
          !!alwaysReturn,
          !!limitColors,
          !!randomizeLimits,
          context
        );
        square.draw();
        y += squareSize;
      }
      x += squareSize;
    }
  }
};

const handleReloadClick = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  drawAllSquares(canvas, context);
};

const handleDownloadClick = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  let imageData = canvas.toDataURL();
  let tmpLink = document.createElement("a");
  tmpLink.download = `square-${new Date().getTime()}.png`;
  tmpLink.href = imageData;
  document.body.appendChild(tmpLink);
  tmpLink.click();
  document.body.removeChild(tmpLink);
};

const handleSizeChange = (e: any) => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  canvas.width = e.target.value;
  canvas.height = e.target.value;
  drawAllSquares(canvas, context);
};

const RandomSquare = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    if (window.innerWidth < 450) {
      canvas.style.width = "100%";
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientWidth;
    } else {
      canvas.width = window.innerWidth / 2;
      canvas.height = window.innerWidth / 2;
    }
    (document.getElementById("size") as HTMLInputElement).value =
      "" + canvas.clientWidth;
    drawAllSquares(canvas, context);
  }, []);

  return (
    <>
      <Head>
        <title>Random Square</title>
      </Head>
      <section className="container mx-auto px-6 md:px-16 py-8 md:py-12">
        <h1 className="m-0 mb-8">Randomized Square</h1>
        <div className="flex flex-col items-start md:flex-row">
          <div>
            <div className="flex mb-4">
              <label className="mr-3 flex-shrink-0" htmlFor="size">
                Size (in px):
              </label>
              <input
                className="text-black max-w-[50%]"
                type="number"
                name="size"
                id="size"
                onInput={handleSizeChange}
              />
            </div>
            <div>
              <button
                className={`${styles.button} bg-blue-800 hover:bg-blue-700 mb-8 mr-6`}
                onClick={handleReloadClick}
              >
                Reload
              </button>
              <button
                className={`${styles.button} bg-blue-800 hover:bg-blue-700 mb-8`}
                onClick={handleDownloadClick}
              >
                Download
              </button>
            </div>
          </div>
          <canvas id="canvas"></canvas>
        </div>
      </section>
    </>
  );
};

export default RandomSquare;
