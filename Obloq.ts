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


//% color="#AA278D"
namespace xxx {

    function getTemp(key: string) {

    }
    //% block="say $word [xxx]" blockType="reporter"
    //% blockId="saySomething"
    //% xxx.shadow="dropdown" xxx.options="ALLPIN" xxx.defl="ALLPIN.Right"
    export function say(parameter: any) {

    }
    //% block="say2 [xxx]" blockType="reporter"
    //% blockId="saySomething2"
    //% xxx.shadow="dropdownRound" xxx.options="ALLPIN" xxx.defl="ALLPIN.Down"
    export function say2(parameter: any) {

    }
    //% block="set tempo mmkl [VALUE]" blockType="hat"
    //% blockId="setTempo"
    //% VALUE.shadow="range" VALUE.params.min=0 VALUE.params.max=100
    //% VALUE.defl=60
    export function turn2(parameter: any) {

    }
    //% block="is [Flag]" blockType="boolean"
    //% blockId="isTrue"
    //% Flag.shadow="boolean"
    export function turn3(parameter: any) {
        
    }
    //% block="say hello [STR]" blockType="command"
    //% blockId="sayHello"
    //% STR.shadow="string" STR.defl="bar bar."
    export function turn4(parameter: any) {
        
    }
    //% block="turn on [choice]" blockType="reporter"
    //% choice.shadow="number" choice.defl=60
    export function turn5(parameter: any) {
        
    }
	//% block="设置名字 [tt]" blockType="hat"
    //% tt.shadow="number" tt.defl=100
    export function turn6(parameter: any) {
        
    }
}
