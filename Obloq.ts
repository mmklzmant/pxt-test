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
    //% block="set tempo mmkl [VALUE]" blockType="hat"
    //% VALUE.shadow="range" VALUE.params.min=0 VALUE.params.max=100
    //% VALUE.defl=60
    export function turn2(parameter: any) {

    }
    //% block="is [Flag]" blockType="boolean"
    //% Flag.shadow="boolean"
    export function turn3(parameter: any) {
        
    }
    //% block="say hello [STR]" blockType="command"
    //% STR.shadow="string" STR.defl="bar bar."
    export function turn4(parameter: any) {
        
    }
    //% block="turn on [choice]" blockType="reporter"
    //% choice.shadow="number" choice.defl=120
    export function turn5(parameter: any) {
        
    }
	//% block="set name [tt]" blockType="hat"
    //% tt.shadow="number" tt.defl=190
    export function turn6(parameter: any) {
        console.log("xxxxxxxmmmm")
    }
}
