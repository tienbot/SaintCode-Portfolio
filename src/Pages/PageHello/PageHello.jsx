import React from 'react';
import s from './PageHello.module.css'
import boltUpLeft from './assets/bolt-up-left.svg'
import boltUpRight from './assets/bolt-up-right.svg'
import boltDownLeft from './assets/bolt-down-left.svg'
import boltDownRight from './assets/bolt-down-right.svg'
import arrow from './assets/arrow.svg'
import foodItem from './assets/foodItem.svg'
import {Button} from '../../components/Button/Button'
import SnakeGame from "../../components/SnakeGame/SnakeGame";


export const PageHello = () => {
    //управление через кнопки на странице
    const handleKeyDown = (event) => {
        const { keyCode } = event;
        function clickButton(id){
            setTimeout(()=>{
                document.getElementById(id).style.borderColor='#1E2D3D'
                document.getElementById(id).addEventListener('mousemove', function() {
                    this.style.borderColor='#fff'
                    this.addEventListener('mouseout', function() {
                        this.style.borderColor='#1E2D3D'
                    });
                });
            }, 100)
            document.getElementById(id).style.borderColor='#fff'
        }
  
        if (keyCode === 38) {
            clickButton('upBtn')
        } else if (keyCode === 37) {
            clickButton("leftBtn");
          } else if (keyCode === 40) {
            clickButton("downBtn");
          } else if (keyCode === 39) {
            clickButton("rightBtn");
          } 
      };
  
      document.addEventListener("keydown", handleKeyDown);

  return (
    <main className={s.pageHello}>
        <div className={s.pageHello__text}>
            <div className={s.pageHello__text_top}>
                <p className={s.pageHello__textSuptext}>Hi all. I am</p>
                <h1 className={s.pageHello__h1}>Micheal Weaver</h1>
                <p className={s.pageHello__textSubtext}>&gt;Front-end developer</p>
            </div>
            <div className={s.pageHello__text_bottom}>
                <p className={s.desktop}>&#47;&#47;complete the game to continue</p>
                <p className={s.desktop}>&#47;&#47;you can also see it on my Github page</p>
                <p className={s.mobile}>&#47;&#47;find my profile on Github:</p>
                <p><span className={s.blue}>const</span> <span className={s.green}>githubLink</span><span className={s.white}> = </span> 
                <a className={s.pageHello__a} href="“https://github.com/example/url”">“https://github.com/example/url”</a>
                </p>
            </div>
        </div>
        <div className={s.pageHello__game}>
            <div className={s.game__wrapper}>
                    <SnakeGame/>
                <div className={s.game__components}>
                    <div className={s.game__comtent}>
                        <div className={s.game__control}>
                            <p className={s.white}>&#47;&#47; use keyboard</p>
                            <p className={s.white}>&#47;&#47; arrows to play</p>
                            <div className={s.buttonsControl}>
                                <div className={s.buttonsControl__top}>
                                    <button className={s.btnControl} id='upBtn'>
                                        <img src={arrow} id='upBtnImg' alt="" />
                                    </button>
                                </div>
                                <div className={s.buttonsControl__bottom}>
                                    <button className={s.btnControl} id='leftBtn'>
                                        <img className={s.btnControl_left} src={arrow} id='leftBtnImg' alt=""/>
                                    </button>
                                    <button className={s.btnControl} id='downBtn'>
                                        <img className={s.btnControl_down} src={arrow} id='downBtnImg' alt="" />
                                    </button>
                                    <button className={s.btnControl} id='rightBtn'>
                                        <img className={s.btnControl_right} src={arrow} id='rightBtnImg' alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={s.game__food}>
                            <p className={s.white}>&#47;&#47; food left</p>
                            <div className={s.food__wrapper}>
                                <img src={foodItem} alt="" />
                                <img src={foodItem} alt="" />
                                <img src={foodItem} alt="" />
                                <img src={foodItem} alt="" />
                                <img src={foodItem} alt="" />
                                <img src={foodItem} alt="" />
                                <img src={foodItem} alt="" />
                                <img src={foodItem} alt="" />
                                <img src={foodItem} alt="" />
                                <img src={foodItem} alt="" />
                            </div>
                        </div>
                    </div>
                    <Button textBtn='skip' ghost/>
                </div>

                <img className={s.bolt__UpLeft} src={boltUpLeft} alt="" />
                <img className={s.bolt__UpRight} src={boltUpRight} alt="" />
                <img className={s.bolt__DownLeft} src={boltDownLeft} alt="" />
                <img className={s.bolt__DownRight} src={boltDownRight} alt="" />
            </div>
        </div>
        <div className={s.blurGreen}></div>
        <div className={s.blurBlue}></div>
    </main>
    );
};
