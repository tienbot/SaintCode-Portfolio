import React, { useState, useEffect, useRef } from "react";
import s from '../../Pages/PageHello/PageHello.module.css';

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [direction, setDirection] = useState("right");
  const [snake, setSnake] = useState([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ]);
  const [apple, setApple] = useState({ x: 15, y: 10 });
  const [gameOver, setGameOver] = useState(false);

  const canvasWidth = 238;
  const canvasHeight = 405;
  const blockSize = 8;

  const moveSnake = () => {
    const head = { x: snake[0].x, y: snake[0].y };

    switch (direction) {
      case "right":
        head.x += 1;
        break;
      case "left":
        head.x -= 1;
        break;
      case "up":
        head.y -= 1;
        break;
      case "down":
        head.y += 1;
        break;
      default:
        break;
    }

    setSnake([head, ...snake.slice(0, -1)]);
  };

  const checkCollision = () => {
    const head = snake[0];

    // Check collision with walls
    if (
      head.x < 0 ||
      head.x >= canvasWidth / blockSize ||
      head.y < 0 ||
      head.y >= canvasHeight / blockSize
    ) {
      setGameOver(true);
    }

    // Check collision with self
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        setGameOver(true);
        break;
      }
    }

    // Check collision with apple
    if (head.x === apple.x && head.y === apple.y) {
      setSnake((prevSnake) => [
        { x: apple.x, y: apple.y },
        ...prevSnake,
      ]);
      generateApple();
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw apple
    ctx.fillStyle = "red";
    ctx.fillRect(
      apple.x * blockSize,
      apple.y * blockSize,
      blockSize,
      blockSize
    );

    // Draw snake
    ctx.fillStyle = "#fff";
    snake.forEach((segment) => {
      ctx.fillRect(segment.x * blockSize, segment.y * blockSize, blockSize, blockSize);
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setCtx(context);
  }, []);

  useEffect(() => {
    if (!ctx) return;

    const handleKeyDown = (event) => {
      const { keyCode } = event;

      if (keyCode === 37 && direction !== "right") {
        setDirection("left");
      } else if (keyCode === 38 && direction !== "down") {
        setDirection("up");
      } else if (keyCode === 39 && direction !== "left") {
        setDirection("right");
      } else if (keyCode === 40 && direction !== "up") {
        setDirection("down");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ctx, direction]);

  useEffect(() => {
    if (!ctx) return;

    const gameLoop = setInterval(() => {
      moveSnake();
      checkCollision();
      draw();
    }, 150);

    return () => {
      clearInterval(gameLoop);
    };
  }, [ctx, moveSnake, checkCollision, draw]);

  const generateApple = () => {
    const newApple = {
      x: Math.floor(Math.random() * (canvasWidth / blockSize)),
      y: Math.floor(Math.random() * (canvasHeight / blockSize)),
    };
    setApple(newApple);
  };

  return (
    <div className={s.game__field}>
        <canvas className={s.snake}
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{width: '100%',
    'maxWidth': '238px', height: '100%' }}
      />
    </div>
  );
};

export default SnakeGame;
