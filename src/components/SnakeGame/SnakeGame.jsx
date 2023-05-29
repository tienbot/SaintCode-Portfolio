import React, { useState, useEffect, useRef } from "react";
import s from '../../Pages/PageHello/PageHello.module.css';
import iconfood from '../../Pages/PageHello/assets/foodItem.svg'
import {Button} from '../../components/Button/Button'

function SnakeGame(){
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState("up");
  const [snake, setSnake] = useState([
    { x: 11, y: 12 },
    { x: 11, y: 13 },
    { x: 11, y: 14 },
    { x: 11, y: 15 },
    { x: 11, y: 16 },
    { x: 11, y: 17 },
    { x: 11, y: 18 },
    { x: 11, y: 19 },
    { x: 11, y: 20 },
    { x: 11, y: 21 },
    { x: 11, y: 20 },
    { x: 12, y: 21 },
    { x: 13, y: 21 },
    { x: 14, y: 21 },
    { x: 15, y: 21 },
    { x: 16, y: 21 },
    { x: 17, y: 21 },
    { x: 17, y: 22 },
    { x: 17, y: 23 },
    { x: 17, y: 24 },
    { x: 17, y: 25 },
    { x: 17, y: 26 },
    { x: 17, y: 27 },
  ]);
  const [apple, setApple] = useState({ x: 11, y: 7 });
  const canvasWidth = 238;
  const canvasHeight = 405;
  const blockSize = 8;
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [gameLoose, setGameLoose] = useState(false);
  const speedGame = 250;

  //передвижение змеи
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

    // Проверка на столкновение со стенами
    if (
      head.x < 0 ||
      head.x >= canvasWidth / blockSize ||
      head.y < 0 ||
      head.y >= canvasHeight / blockSize
    ) {
      setCtx(false);
      setGameLoose(true);
    }

    // Проверка на столкновение с самим собой
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        setCtx(false);
        setGameLoose(true);
        break;
      }
    }

    const increment = () => {
        setCount(prevCount => prevCount + 1);
      };

    // Проверка на столкновение с яблоком
    if (head.x === apple.x && head.y === apple.y) {
      setSnake((prevSnake) => [
        ...prevSnake, { x: apple.x, y: apple.y },
      ]);
      increment()
      LightPoint(count)
      generateApple();
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Прорисовка яблока
    let appleImg = new Image();
    appleImg.src = iconfood;
    ctx.fillStyle = "#43D9AD";
    ctx.drawImage(appleImg, apple.x * blockSize-7, apple.y * blockSize-7);

    // Прорисовка змейки
    ctx.fillStyle = "#43D9AD";
    snake.forEach((segment, index) => {
    if (index === 0) {
        // Прорисовка головы змейки
        const radius = blockSize / 2;
        const x = (segment.x * blockSize) + radius;
        const y = (segment.y * blockSize) + radius;
        ctx.beginPath();
        if (direction === 'up') {
          ctx.arc(x, y + radius, radius, 0, Math.PI, true);
        } else if (direction === 'down') {
          ctx.arc(x, y - radius, radius, 0, Math.PI, false);  
        } else if (direction === 'right') {
          const startAngle = Math.PI * 1.5;
          const endAngle = Math.PI * 0.5;
          ctx.arc(x - radius, y, radius, startAngle, endAngle, false);
        } else if (direction === 'left') {
          const startAngle = Math.PI * 1.5;
          const endAngle = Math.PI * 0.5;
          ctx.arc(x + radius, y, radius, startAngle, endAngle, true);
        }
        ctx.fill();
      } else {
        // Рисование тела змеи
        ctx.fillRect(segment.x * blockSize, segment.y * blockSize, blockSize, blockSize);
        if (index>9){
            let opacity = 0
            for (let i=index; i<snake.length; i++){
                ctx.fillStyle = `rgba(67, 217, 173, ${opacity})`
                opacity=opacity+0.07
            }
        }
    }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setCtx(context);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { keyCode } = event;

      if ((keyCode === 38  || event.target.id.includes('up'))  && direction !== "down") {
        setDirection("up");
      } else if ((keyCode === 37 || event.target.id.includes('left')) && direction !== "right") {
        setDirection("left");
      } else if ((keyCode === 40 || event.target.id.includes('down')) && direction !== "up") {
        setDirection("down");
      } else if ((keyCode === 39 || event.target.id.includes('right')) && direction !== "left") {
        setDirection("right");
      } 
    };
    
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("click", handleKeyDown);
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [direction]);

  useEffect(() => {
    if (!ctx) return;

    const gameLoop = setInterval(() => {
        draw();
        if (gameStarted) {
            moveSnake();
            checkCollision();
        }
    }, speedGame);
    
    return () => {
        clearInterval(gameLoop);
    };
    
  });

  // Генерация яблока на поле
  const generateApple = () => {
    const newApple = {
      x: Math.floor(Math.random() * (canvasWidth / blockSize)),
      y: Math.floor(Math.random() * (canvasHeight / blockSize)),
    };
    setApple(newApple);
  };

  function LightPoint(count){
    if (count<9){
        document.querySelector('.PageHello_food__wrapper__LkGxo').children[count].style.opacity=1
    } else {
        document.querySelector('.PageHello_food__wrapper__LkGxo').children[count].style.opacity=1
        setCtx(false);
        setGameWin(true);
    }
  }

  const startGame = (event) => {
    if (event.target.textContent.includes('start game')){
        setGameStarted(true);
        event.target.style='display:none'
    } else if (event.target.textContent.includes('again')){
        startGameAgain()
    }
  };
  document.addEventListener("click", startGame);

  function startGameAgain() {
    // setGameWin(false);
    // setGameLoose(false);
    // setCount(9);
    // setDirection("up");
    // setSnake([
    //     { x: 11, y: 12 },
    //     { x: 11, y: 13 },
    //     { x: 11, y: 14 },
    //     { x: 11, y: 15 },
    //     { x: 11, y: 16 },
    //     { x: 11, y: 17 },
    //     { x: 11, y: 18 },
    //     { x: 11, y: 19 },
    //     { x: 11, y: 20 },
    //     { x: 11, y: 21 },
    //     { x: 11, y: 20 },
    //     { x: 12, y: 21 },
    //     { x: 13, y: 21 },
    //     { x: 14, y: 21 },
    //     { x: 15, y: 21 },
    //     { x: 16, y: 21 },
    //     { x: 17, y: 21 },
    //     { x: 17, y: 22 },
    //     { x: 17, y: 23 },
    //     { x: 17, y: 24 },
    //     { x: 17, y: 25 },
    //     { x: 17, y: 26 },
    //     { x: 17, y: 27 },
    // ]);
    // setApple({ x: 11, y: 7 });
    // setCtx(null);
    window.location.reload()
  };

  return (
    <>
    <div className={s.game__field}>
        <canvas className={s.snake}
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
        />
        {!gameStarted && <Button textBtn='start game' primary startGame/>}
        {gameWin && <>
            <div className={s.game__message}>WELL DONE!</div>
            <Button textBtn='play-again' playAgain/>
        </>}
        {gameLoose && <>
                <div className={s.game__message}>GAME OVER!</div>
                <Button textBtn='start-again' to="/" playAgain/>
        </>}
    </div>
    </>
  );
};

export default SnakeGame;