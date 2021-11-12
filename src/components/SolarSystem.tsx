import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

interface Star {
  x: number;
  y: number;
  z: number;
}

interface Sun {
  name: string;
  distance: number;
  radius: number;
  img: p5Types.Image | undefined;
}

interface Planet {
  name: string;
  distance: number;
  radius: number;
  speed: number;
  angle: number;
  img: p5Types.Image | undefined;
}

export default function SolarSystem(): JSX.Element {
  let myCamera;
  const stars: Star[] = [];
  const sun: Sun = {
    name: "Sun",
    distance: 0,
    radius: 100,
    img: undefined,
  };
  const planets: Planet[] = [
    {
      name: "Mercury",
      distance: 139,
      radius: 5,
      speed: 0.05,
      angle: 0,
      img: undefined,
    },
    {
      name: "Venus",
      distance: 172,
      radius: 12,
      speed: 0.035,
      angle: 1.57,
      img: undefined,
    },
    {
      name: "Earth",
      distance: 200,
      radius: 13,
      speed: 0.029,
      angle: 0.52,
      img: undefined,
    },
    {
      name: "Mars",
      distance: 252,
      radius: 7,
      speed: 0.024,
      angle: 4.71,
      img: undefined,
    },
    {
      name: "Jupiter",
      distance: 600,
      radius: 100,
      speed: 0.013,
      angle: 3.66,
      img: undefined,
    },
    {
      name: "Saturn",
      distance: 900,
      radius: 70,
      speed: 0.009,
      angle: 5.49,
      img: undefined,
    },
    {
      name: "Uranus",
      distance: 1000,
      radius: 25,
      speed: 0.006,
      angle: 2.36,
      img: undefined,
    },
    {
      name: "Neptune",
      distance: 1100,
      radius: 22,
      speed: 0.005,
      angle: 0,
      img: undefined,
    },
  ];
  const moon: Planet = {
    name: "Moon",
    distance: 20,
    radius: 3,
    speed: 0.05,
    angle: 0,
    img: undefined,
  };
  const preload = (p5: p5Types) => {
    sun.img = p5.loadImage("https://i.postimg.cc/0NbzSXtw/sunmap.jpg");
    planets[0].img = p5.loadImage(
      "https://i.postimg.cc/JzTyGCQ8/mercurymap.jpg"
    );
    planets[1].img = p5.loadImage("https://i.postimg.cc/zGDbzGKp/venusmap.jpg");
    planets[2].img = p5.loadImage(
      "https://i.postimg.cc/sg3SMcdY/earthmap1k.jpg"
    );
    planets[3].img = p5.loadImage(
      "https://i.postimg.cc/BQBPfKLX/mars-1k-color.jpg"
    );
    planets[4].img = p5.loadImage(
      "https://i.postimg.cc/FzjdRfTC/jupitermap.jpg"
    );
    planets[5].img = p5.loadImage(
      "https://i.postimg.cc/MHkfq0mj/saturnmap.jpg"
    );
    planets[6].img = p5.loadImage(
      "https://i.postimg.cc/43ShFRKP/uranusmap.jpg"
    );
    planets[7].img = p5.loadImage(
      "https://i.postimg.cc/V600xZn8/neptunemap.jpg"
    );
    moon.img = p5.loadImage("https://i.postimg.cc/cCXDP9JB/moonmap4k.jpg");
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth - 25, p5.windowHeight - 130, p5.WEBGL);
    createStars(p5);

    //Camera position
    myCamera = p5.createCamera();
    myCamera.setPosition(0, -400, 1500);
    myCamera.lookAt(0, 0, 0);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.orbitControl(4, 4);
    p5.directionalLight(p5.color(150, 100, 0, 0.05), p5.createVector(0, -1, 0));
    p5.pointLight(p5.color(150, 100, 0), 0, 0, 0);
    p5.ambientLight(180, 150, 150);

    p5.noStroke();

    drawStars(p5);
    drawSun(p5);
    drawOrbits(p5);
    drawPlanets(p5);
  };

  const drawSun = (p5: p5Types) => {
    if (sun.img !== undefined) {
      p5.texture(sun.img);
    } else {
      p5.ambientMaterial(p5.color("#ed6663"));
    }
    p5.push();
    p5.rotateY(p5.frameCount / 100);
    p5.pop();
    p5.sphere(sun.radius);
  };

  const drawPlanets = (p5: p5Types) => {
    for (const planet of planets) {
      p5.push();
      planet.angle = drawPlanet(
        p5,
        planet.name,
        planet.distance,
        planet.radius,
        planet.speed,
        planet.angle,
        planet.img
      );
      p5.pop();
    }
  };

  function drawPlanet(
    p5: p5Types,
    name: string,
    distance: number,
    radius: number,
    speed: number,
    angle: number,
    img: p5Types.Image | undefined
  ) {
    const x = distance * p5.cos(angle);
    const y = distance * p5.sin(angle);

    p5.translate(x, 0, y);
    angle += speed;
    if (img !== undefined) {
      p5.texture(img);
    } else {
      p5.ambientMaterial(p5.color("#e93dc8"));
    }
    p5.rotateY(p5.frameCount / 100);
    p5.sphere(radius);

    if (name === "Saturn") {
      drawRings(p5, 100);
    } else if (name === "Earth") {
      drawMoon(p5);
    }

    return angle;
  }

  const drawMoon = (p5: p5Types) => {
    p5.rotateX(-p5.PI / 4);
    const x = moon.distance * p5.cos(moon.angle);
    const y = moon.distance * p5.sin(moon.angle);

    p5.translate(x, 0, y);
    moon.angle += moon.speed;
    if (moon.img !== undefined) {
      p5.texture(moon.img);
    }
    p5.rotateY(p5.frameCount / 100);
    p5.sphere(moon.radius);
  };

  const drawRings = (p5: p5Types, distanceFromPlanet: number) => {
    p5.rotateX(p5.PI / 4);
    p5.strokeWeight(10);
    p5.stroke(170);
    p5.noFill();
    p5.ellipse(0, 0, distanceFromPlanet * 2, distanceFromPlanet * 2, 50);
  };

  const drawOrbits = (p5: p5Types) => {
    for (const planet of planets) {
      p5.push();
      drawOrbit(p5, planet.distance);
      p5.pop();
    }
  };

  function drawOrbit(p5: p5Types, distance: number) {
    // draw orbit
    p5.rotateX(p5.PI / 2);
    p5.strokeWeight(0.5);
    p5.stroke(150);
    p5.noFill();
    p5.ellipse(0, 0, distance * 2, distance * 2, 50);
  }

  const createStars = (p5: p5Types) => {
    for (let i = 0; i < 1300; i++) {
      const star = p5Types.Vector.random3D().mult(p5.random(1600, 5000));
      stars.push(star);
    }
  };
  const drawStars = (p5: p5Types) => {
    for (const star of stars) {
      p5.push();
      drawStar(p5, star);
      p5.pop();
    }
  };
  function drawStar(p5: p5Types, star: Star) {
    p5.translate(star.x, star.y, star.z);
    p5.ambientMaterial(p5.color("#fff"));
    p5.sphere(3);
  }

  return <Sketch setup={setup} draw={draw} preload={preload} />;
}
