let y = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.forever(function posunuti() {
        let i: number;
        
        for (i = 0; i < 5; i++) {
            led.unplot(i, y)
        }
        y = (y + 1) % 5
        for (i = 0; i < 5; i++) {
            led.plot(i, y)
        }
        pause(3000)
    })
})
