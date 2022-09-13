input.onGesture(Gesture.Shake, function () {
    Randomnumber = randint(0, 1)
    if (Randomnumber == 0) {
        basic.showString("Answer Unclear")
    } else if (Randomnumber == 1) {
        basic.showString("No")
    } else {
        basic.showString("Yes")
    }
})
let Randomnumber = 0
basic.showString("")
basic.forever(function () {
	
})
