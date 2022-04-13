y = 0

def posunuti():
    global y
    for i in range(5):
        led.unplot(i, y)
    y = (y+1)%5
    for i in range(5):
        led.plot(i, y)


    pause(3000)

def on_button_pressed_a():
    basic.forever(posunuti)
input.on_button_pressed(Button.A, on_button_pressed_a)