class Roof {
    constructor(x, y, widht, height) {
        var options = {
            isStatic: true
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options)
        World.add(world, this.body)
    }
    display(){
        var roofPos = this.body.position;

        push()
        translate(roofPos.x, roofPos.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill("white")
        rect(400,0,600,100)
        pop()
    }
}