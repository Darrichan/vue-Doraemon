const code = `
.pokonyan {
  width: 572px;
  height: 397px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -286px;
  margin-top: -198px;
}

.header {
  width: 340px;
  height: 318px;
  position: absolute;
  right: 12px;
  top: 0;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 48%;
  background: #00a0e9;
  border: #000 solid 2px;
  z-index: 6;
}

.header .face {
  width: 305px;
  height: 235px;
  position: absolute;
  right: -8px;
  bottom: 0px;
  background: #fff;
  border: #000 solid 2px;
  border-top-left-radius: 40%;
  border-top-right-radius: 40%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  -webkit-transform: rotate(-25deg);
  -moz-transform: rotate(-25deg);
  transform: rotate(-25deg);
}

.header .eye {
  width: 75px;
  right: 182px;
  height: 97px;
  position: absolute;
  border: #000 solid 2px;
  border-radius: 50%;
  background: #fff;
  top: 34px;
  -webkit-transform: rotate(-20deg);
  -moz-transform: rotate(-20deg);
  transform: rotate(-20deg);
}

.header .eyeBlack {
  width: 18px;
  height: 36px;
  position: absolute;
  right: 7px;
  bottom: 23px;
  overflow: hidden;
  background: #000;
  border-radius: 50%;
}

.header .eyeWhite {
  width: 8px;
  height: 12px;
  position: absolute;
  right: 3px;
  bottom: 13px;
  overflow: hidden;
  background: #fff;
  border-radius: 50%;
}

.header .eyer {
  right: 110px;
  top: 2px;
  -webkit-transform: rotate(-28deg);
  -moz-transform: rotate(-28deg);
  transform: rotate(-28deg);
}

.header .eyer .eyeBlack {
  left: 14px;
  bottom: 28px;
}

.header .noseLine {
  width: 20px;
  height: 160px;
  border-right: #000 solid 2px;
  border-radius: 50%;
  position: absolute;
  right: 120px;
  top: 100px;
  -webkit-transform: rotate(-20deg);
  -moz-transform: rotate(-20deg);
  transform: rotate(-20deg);
}

.header .quilt {
  width: 100px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 220px;
  right: 60px;
}

.header .nose {
  width: 44px;
  height: 44px;
  position: absolute;
  top: 84px;
  right: 132px;
  background: #e0002a;
  border-radius: 50%;
  border: 2px solid #000;
}

.header .nose .white {
  width: 13px;
  height: 13px;
  position: absolute;
  top: 14px;
  left: 10px;
  background: #fff;
  border-radius: 50%;
}

.header .mouthBox {
  width: 290px;
  height: 82px;
  position: absolute;
  bottom: 84px;
  right: 0px;
  overflow: hidden;
  -webkit-transform: rotate(-20deg);
  -moz-transform: rotate(-20deg);
  transform: rotate(-20deg);
}

.header .mouthBox .mouth {
  width: 290px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  border: #000 solid 2px;
}

.header .beard {
  width: 107px;
  height: 3px;
  background: #000;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
}

.header .beard1 {
  top: 170px;
  left: 60px;
  -webkit-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  transform: rotate(-10deg);
}

.header .beard2 {
  top: 200px;
  left: 62px;
  -webkit-transform: rotate(-20deg);
  -moz-transform: rotate(-20deg);
  transform: rotate(-20deg);
}

.header .beard3 {
  top: 230px;
  left: 68px;
  -webkit-transform: rotate(-30deg);
  -moz-transform: rotate(-30deg);
  transform: rotate(-30deg);
}

.header .beard4 {
  top: 120px;
  right: -10px;
  -webkit-transform: rotate(-20deg);
  -moz-transform: rotate(-20deg);
  transform: rotate(-30deg);
}

.header .beard5 {
  top: 150px;
  right: -20px;
  -webkit-transform: rotate(-30deg);
  -moz-transform: rotate(-30deg);
  transform: rotate(-20deg);
}

.header .beard6 {
  top: 180px;
  right: -30px;
  -webkit-transform: rotate(-40deg);
  -moz-transform: rotate(-40deg);
  transform: rotate(-10deg);
}
/*脖子*/

.neckBox {
  width: 302px;
  height: 318px;
  position: absolute;
  background: #e0002a;
  border: #000 solid 2px;
  z-index: 4;
  right: 41px;
  top: 18px;
  overflow: hidden;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 48%;
}

.neckBox .necka {
  width: 340px;
  height: 318px;
  position: absolute;
  background: #e0002a;
  z-index: 4;
  right: 5px;
  bottom: -3px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 48%;
}
/*铃铛*/

.bell {
  width: 56px;
  height: 56px;
  background: #ffe43b;
  border: #000 solid 2px;
  border-radius: 50%;
  position: absolute;
  bottom: 27px;
  right: 110px;
  z-index: 5;
  overflow: hidden;
}

.bell .line {
  width: 56px;
  height: 50px;
  border-right: #000 solid 2px;
  position: absolute;
  top: 20px;
  left: -24px;
  border-radius: 50%;
}

.bell .linebg {
  width: 86px;
  height: 56px;
  background: #ffe43b;
  position: absolute;
  bottom: 18px;
  left: -30px;
  border-radius: 50%;
}

.bell .center {
  width: 15px;
  height: 7px;
  border-radius: 50%;
  background: #7d6b56;
  border: #000 solid 2px;
  position: absolute;
  top: 33px;
  left: 22px;
  -webkit-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  transform: rotate(-10deg);
}

.bell .top {
  width: 86px;
  height: 56px;
  background: #ffe43b;
  border: #000 solid 2px;
  position: absolute;
  bottom: 28px;
  left: -30px;
  border-radius: 50%;
}

.bell .top2 {
  width: 86px;
  height: 56px;
  background: #ffe43b;
  border: #000 solid 2px;
  position: absolute;
  bottom: 35px;
  left: -30px;
  border-radius: 50%;
}
/*屁股*/

.arse {
  width: 186px;
  height: 186px;
  position: absolute;
  top: 160px;
  left: 106px;
  border-radius: 50%;
  background: #00a0e9;
  border-top: #000 solid 2px;
  border-left: #000 solid 2px;
  border-bottom: #00a0e9 solid 2px;
  -webkit-transform: rotate(40deg);
  -moz-transform: rotate(40deg);
  transform: rotate(40deg);
  z-index: 3;
}
/*肚子*/

.tummy {
  width: 240px;
  height: 186px;
  position: absolute;
  bottom: 33px;
  left: 146px;
  border-radius: 50%;
  background: #00a0e9;
  border-bottom: #000 solid 2px;
  border-right: #000 solid 2px;
  border-left: #00a0e9 solid 2px;
  z-index: 3;
}

@-webkit-keyframes tail {
  0% {
    margin-left: 0;
  }
  25% {
    margin-left: -10px;
  }
  50% {
    margin-left: -20px;
  }
  75% {
    margin-left: 10px;
  }
  100% {
    margin-left: 20px;
  }
}

.tail {
  width: 58px;
  height: 58px;
  position: absolute;
  bottom: 216px;
  left: 92px;
  z-index: 2;
}

.tail .circle {
  width: 50px;
  height: 50px;
  background: #e0002a;
  border: #000 solid 2px;
  border-radius: 50%;
}

.tail .lineBox {
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 0;
  right: 4px;
  overflow: hidden;
}

.tail .lineBox .line {
  width: 50px;
  height: 50px;
  border: #000 solid 2px;
  position: absolute;
  bottom: -30px;
  left: -36px;
  border-radius: 50%;
}
/*腿*/

.leg {
  width: 120px;
  height: 120px;
  position: absolute;
  bottom: 37px;
  left: 82px;
  border-radius: 50%;
  background: #00a0e9;
  border: #000 solid 2px;
  z-index: 2;
}

.legbottomBox {
  width: 169px;
  height: 120px;
  background: #333333;
  overflow: hidden;
  position: absolute;
  bottom: 30px;
  left: 90px;
  border-radius: 40%;
  z-index: 3;
}

.legbottomBox .legbottom {
  width: 240px;
  height: 120px;
  position: relative;
  bottom: 4px;
  left: -40px;
  border-radius: 50%;
  background: #00a0e9;
  border: #000 solid 2px;
  border-bottom: #000 solid 2px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  transform: rotate(0deg);
}
/*脚*/

.foot {
  width: 120px;
  height: 100px;
  position: absolute;
  bottom: 38px;
  left: 22px;
  border-radius: 50%;
  background: #fff;
  border: #000 solid 2px;
  -webkit-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  transform: rotate(-20deg);
  z-index: 1;
}

.foottop {
  width: 97px;
  height: 100px;
  position: absolute;
  bottom: 20px;
  left: -16px;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
  background: #fff;
  border: #000 solid 2px;
  border-right: none;
  -webkit-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  transform: rotate(-20deg);
  z-index: 1;
}

.handr {
  width: 130px;
  height: 90px;
  position: absolute;
  bottom: 46px;
  right: 0px;
  border-radius: 50%;
  background: #00a0e9;
  border: #000 solid 2px;
  z-index: 3;
}

.handr .palm {
  width: 78px;
  height: 60px;
  position: absolute;
  top: -30px;
  right: -10px;
  border-radius: 50%;
  background: #fff;
  border: #000 solid 2px;
  z-index: 3;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.handr .line {
  width: 80px;
  height: 80px;
  position: absolute;
  border-left: #000 solid 2px;
  border-bottom: transparent solid 2px;
  top: 8px;
  right: -6px;
  border-radius: 50%;
  -webkit-transform: rotate(50deg);
  -moz-transform: rotate(50deg);
  transform: rotate(50deg);
}

.handtop {
  width: 74px;
  height: 40px;
  background: #00a0e9;
  border-top: #000 solid 2px;
  border-left: #00a0e9 solid 2px;
  position: absolute;
  bottom: 58px;
  right: 240px;
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  transform: rotate(20deg);
  z-index: 5;
}

.handlBox {
  width: 180px;
  height: 70px;
  position: absolute;
  bottom: 6px;
  right: 152px;
  overflow: hidden;
  z-index: 5;
}

.handlBox .handl {
  width: 260px;
  height: 110px;
  border: #000 solid 2px;
  background: #00a0e9;
  border-left: transparent solid 2px;
  position: absolute;
  bottom: 26px;
  right: -3px;
  border-radius: 50%;
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  transform: rotate(30deg);
}

.handlBox .handl .line {
  width: 40px;
  height: 80px;
  position: absolute;
  background: none;
  border-left: #000 solid 2px;
  top: 0px;
  right: 48px;
}

.palml {
  width: 86px;
  height: 70px;
  position: absolute;
  bottom: 32px;
  right: 168px;
  border-radius: 50%;
  background: #fff;
  border: #000 solid 2px;
  z-index: 3;
  -webkit-transform: rotate(20deg);
  -moz-transform: rotate(20deg);
  transform: rotate(20deg);
  z-index: 7;
}
/* 哆啦A梦画好啦！！ */
`

export default code
