let deng = 0
basic.forever(function () {
    deng = 0
    while (deng <= 6) {
        neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB).range(0, deng).showRainbow(1, 360)
        basic.pause(1000)
        deng += 1
    }
})
