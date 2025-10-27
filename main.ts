namespace SpriteKind {
    export const Boomerrang = SpriteKind.create()
    export const A_Bomb = SpriteKind.create()
    export const Lightning = SpriteKind.create()
    export const FireBall = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
    export const Fireball2 = SpriteKind.create()
    export const Lightning2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Character += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    A_Button()
})
function A_Button () {
    if (Level == 1) {
        Level += 1
        tiles.setCurrentTilemap(tilemap`level4`)
        scene.setBackgroundColor(1)
        myCharacter.ay = 200
        scene.cameraFollowSprite(myCharacter)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Character += -1
})
let myCharacter: Sprite = null
let Level = 0
Level = 0
game.splash("Choose Your Character")
scene.setBackgroundColor(15)
Level = 1
let Character = 1
myCharacter = sprites.create(assets.image`Opponent Link`, SpriteKind.Player)
game.onUpdate(function () {
    if (Level == 1) {
        if (Character == 1) {
            myCharacter.setImage(assets.image`Opponent Link`)
        } else if (Character == 2) {
            myCharacter.setImage(assets.image`Opponent Mario`)
        } else if (Character == 3) {
            myCharacter.setImage(assets.image`Opponent Pikachu`)
        } else if (Character == 4) {
            Character = 1
        } else if (Character == 0) {
            Character = 3
        }
    }
})
