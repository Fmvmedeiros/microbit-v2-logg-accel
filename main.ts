datalogger.onLogFull(function () {
    ligado = false
})
input.onButtonPressed(Button.A, function () {
    ligado = true
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Chessboard)
    datalogger.deleteLog()
})
input.onButtonPressed(Button.B, function () {
    ligado = false
})
let ligado = false
ligado = false
basic.forever(function () {
    if (ligado) {
        datalogger.logData([datalogger.createCV("acc", input.acceleration(Dimension.Strength))])
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
    }
})
