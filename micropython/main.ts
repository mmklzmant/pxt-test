enum ALLPIN {
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="up"
    Up,
    //% block="down"
    Down
}
let obj = {
	a: "12",
	b: 23
}
let a = 1;
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace xxx {
    //% block="say $word [xxx]" blockType="reporter"
    //% xxx.shadow="dropdown" xxx.options="ALLPIN" xxx.defl="ALLPIN.Right"
    export function say(parameter: any) {

    }
    //% block="say2 [xxx]" blockType="reporter"
    //% xxx.shadow="dropdownRound" xxx.options="ALLPIN" xxx.defl="ALLPIN.Down"
    export function say2(parameter: any) {

    }
}
