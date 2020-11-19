let y = 0
let y1 = 0
let y2 = 0
let y3 = 0
let j = 0
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        y += 1
        for (let x = 0; x <= y; x++) {
            led.plot(x, 0)
            basic.pause(35)
        }
    }
    basic.pause(50)
    for (let index = 0; index < 4; index++) {
        y1 += 1
        for (let x1 = 0; x1 <= y1; x1++) {
            led.plot(4, x1)
            basic.pause(35)
        }
    }
    basic.pause(50)
    for (let index = 0; index < 4; index++) {
        y2 += 1
        for (let x2 = 0; x2 <= y2; x2++) {
            led.plot(0, x2)
            basic.pause(35)
        }
    }
    basic.pause(50)
    for (let index = 0; index < 4; index++) {
        y3 += 1
        for (let x3 = 0; x3 <= y3; x3++) {
            led.plot(x3, 4)
            basic.pause(35)
        }
    }
    for (let i = 0; i <= 2; i++) {
        led.plot(i, 1)
        basic.pause(100)
    }
    for (let v = 0; v <= 2; v++) {
        led.plot(3, v)
        basic.pause(100)
    }
    j = 3
    for (let index = 0; index < 3; index++) {
        led.plot(j, 3)
        basic.pause(100)
        j = j - 1
    }
    for (let h = 0; h <= 3; h++) {
        led.plot(h, 2)
        basic.pause(100)
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . # . #
        . . . . .
        # . . . #
        . . . . .
        # . # . #
        `)
})
