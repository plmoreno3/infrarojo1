IR.IR_callbackUser(function (message) {
    if (message == 9) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
        vel = 40
        basic.showIcon(IconNames.Happy)
    }
    if (message == 24) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, vel)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.CYAN)
        basic.showIcon(IconNames.SmallDiamond)
    }
    if (message == 90) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 30)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 30)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.WHITH)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.YELLOW)
    }
    if (message == 8) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 30)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 30)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.WHITH)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.YELLOW)
    }
    if (message == 82) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, vel)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
        basic.showIcon(IconNames.SmallSquare)
    }
    if (message == 21) {
        if (vel < 70) {
            vel = vel + 5
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
    if (message == 7) {
        vel = vel - 5
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
})
let vel = 0
DFRobotMaqueenPlus.PID(PID.OFF)
vel = 40
basic.forever(function () {
	
})
