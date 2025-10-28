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
    if (Level == 1) {
        Character += 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Level == 2) {
        if (Character == 1) {
            myBoomerrang = sprites.create(img`
                . . d d e 
                . d d e . 
                d d e . . 
                d d e . . 
                d d e . . 
                d 7 e . . 
                . 7 7 e . 
                . . 7 d e 
                `, SpriteKind.Player)
        } else if (Character == 2) {
        	
        } else if (Character == 3) {
        	
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    A_Button()
})
function A_Button () {
    if (Level == 1) {
        Level += 1
        tiles.setCurrentTilemap(tilemap`level4`)
        scene.setBackgroundColor(9)
        effects.clouds.startScreenEffect()
        myCharacter.ay = 300
        scene.cameraFollowSprite(myCharacter)
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    } else if (Level == 2) {
        if (myCharacter.isHittingTile(CollisionDirection.Bottom)) {
            myCharacter.vy += -200
        }
    } else {
    	
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Level == 2) {
        if (Character == 1) {
            myCharacter.setImage(img`
                . . . . . . 7 7 7 7 . . . . . 
                . . . e e e e 7 7 7 7 7 . . . 
                . . e e e e e e 7 7 d 7 7 7 . 
                . . . e e e e e e d d 7 7 7 7 
                e . . d 7 d d e d d d 7 7 . 7 
                e d d d e d d e d d e e 7 . . 
                e . . d d d d d d e e e . . . 
                e . . d d d d 7 7 7 7 . . . . 
                e d e e e 7 7 7 7 7 7 7 e . . 
                e d e e 7 7 7 d d d 7 e e e . 
                e . e e 7 7 7 d d d e e e e . 
                e . . . e 7 7 7 d d e e e e . 
                e . . . e e e e 7 7 e e 7 . . 
                . . . . 7 7 7 7 7 7 7 7 7 7 . 
                . . . . . . . e e e e . . . . 
                . . . . . . e e e e e . . . . 
                `)
        } else if (Character == 2) {
            myCharacter.setImage(img`
                . . . . 2 2 2 2 2 . . . 
                . 2 2 2 2 2 2 2 2 2 . . 
                . . . . f d d e e e . . 
                . d d d f d d d e d e . 
                d d d f d d d e e d e . 
                . f f f f d d d d e . . 
                . . . d d d d d d . . . 
                . . 2 2 8 2 2 8 2 2 . . 
                . 2 2 2 8 2 2 8 2 2 2 . 
                2 2 2 2 8 8 8 8 2 2 2 2 
                d d 2 8 5 8 8 5 8 2 d d 
                d d d 8 8 8 8 8 8 d d d 
                d d 8 8 8 8 8 8 8 8 d d 
                . . 8 8 8 . . 8 8 8 . . 
                . e e e . . . . e e e . 
                e e e e . . . . e e e e 
                `)
        } else if (Character == 3) {
            myCharacter.setImage(img`
                . . . . . . . f . . . . . 
                . . . . . . . f . . . . . 
                f f f . . . f 5 f . f f f 
                f f 5 f . . f 5 5 f 5 f f 
                . f 5 5 f f f f f 5 5 f . 
                . . f 5 5 5 5 5 5 5 f . . 
                . . f 5 f 5 5 5 f 5 f . . 
                . . f 5 5 5 f 5 5 5 f . . 
                . f 5 5 5 f f f 5 5 5 f . 
                . f 5 2 5 5 5 5 5 2 5 f . 
                . f 5 5 5 5 5 5 5 5 5 f . 
                . f 5 5 f 5 5 5 f 5 5 f . 
                . f 5 f f 5 5 5 f f 5 f . 
                . f 5 5 5 5 5 5 5 5 5 f . 
                . . f 5 5 f f f 5 5 f . . 
                . . . f f . . . f f . . . 
                `)
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Level == 2) {
        if (Character == 1) {
            myCharacter.setImage(assets.image`Opponent Link`)
        } else if (Character == 2) {
            myCharacter.setImage(assets.image`Opponent Mario`)
        } else if (Character == 3) {
            myCharacter.setImage(assets.image`Opponent Pikachu`)
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Level == 1) {
        Character += -1
    }
})
let statusbar: StatusBarSprite = null
let myBoomerrang: Sprite = null
let myCharacter: Sprite = null
let Character = 0
let Level = 0
Level = 0
game.splash("Choose Your Character")
scene.setBackgroundColor(15)
Level = 1
Character = 1
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
    } else if (Level == 2) {
        if (controller.right.isPressed()) {
            myCharacter.x += 2
        } else if (controller.left.isPressed()) {
            myCharacter.x += -2
        }
    }
})
