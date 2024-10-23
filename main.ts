namespace SpriteKind {
    export const Boomerrang = SpriteKind.create()
    export const A_Bomb = SpriteKind.create()
    export const Lightning = SpriteKind.create()
    export const FireBall = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
    export const Fireball2 = SpriteKind.create()
    export const Lightning2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite == projectile) {
        statusbar.value += -0.25
        sprite.destroy()
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Level == 0) {
        Character += 1
        pause(200)
    }
    if (Level == 2) {
        if (myCharacter.isHittingTile(CollisionDirection.Bottom)) {
            myCharacter.vy += -220
        }
    }
})
controller.combos.attachCombo("d-u", function () {
    if (myCharacter.isHittingTile(CollisionDirection.Bottom)) {
        myAttack = 1
        myCharacter.vy += -300
    }
})
sprites.onOverlap(SpriteKind.Fireball2, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.2
    sprites.destroy(sprite)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    On_B_Button_Pressed()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    On_A_Button_Pressed()
    On_A_Button_Pressed()
    On_A_Button_Pressed2()
})
function On_B_Button_Pressed () {
    if (Character == 1) {
        if (TheBoomerrang == 0) {
            if (Level == 2) {
                if (myCharacter.x > mySprite.x) {
                    myArrow = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . . 8 . 8 . 8 
                        . . f f . . . . . . . . . . . . 8 . 8 . 8 . 
                        f f f e e e e e e e e e e e e e e e e e e e 
                        . . f f . . . . . . . . . . . . 8 . 8 . 8 . 
                        . . . . . . . . . . . . . . . . . 8 . 8 . 8 
                        `, myCharacter, -100, 0)
                    myArrow.ax = 7
                    pause(500)
                } else if (myCharacter.x != mySprite.x) {
                    myArrow = sprites.createProjectileFromSprite(img`
                        8 . 8 . 8 . . . . . . . . . . . . . . . . . 
                        . 8 . 8 . 8 . . . . . . . . . . . . f f . . 
                        e e e e e e e e e e e e e e e e e e e f f f 
                        . 8 . 8 . 8 . . . . . . . . . . . . f f . . 
                        8 . 8 . 8 . . . . . . . . . . . . . . . . . 
                        `, myCharacter, 100, 0)
                    myArrow.ax = 7
                    pause(500)
                }
            }
        }
    } else if (Character == 2) {
        if (The_FB == 0) {
            The_FB = 1
            if (myCharacter.x < mySprite.x) {
                myFireBall = sprites.createProjectileFromSprite(img`
                    . . 2 2 . . 
                    . 2 2 4 2 . 
                    2 4 2 2 4 2 
                    2 2 2 2 4 2 
                    . 4 2 4 2 . 
                    . . 2 2 . . 
                    `, myCharacter, 200, 0)
                myFireBall.fx = 220
                myFireBall.setBounceOnWall(true)
                myFireBall.setKind(SpriteKind.FireBall)
                pause(500)
            } else if (myCharacter.x > mySprite.x) {
                myFireBall = sprites.createProjectileFromSprite(img`
                    . . 2 2 . . 
                    . 2 2 4 2 . 
                    2 4 2 2 4 2 
                    2 2 2 2 4 2 
                    . 4 2 4 2 . 
                    . . 2 2 . . 
                    `, myCharacter, -200, 0)
                myFireBall.setBounceOnWall(true)
                myFireBall.setKind(SpriteKind.FireBall)
                myFireBall.fx = 220
                pause(500)
            }
        }
    } else if (Character == 3) {
        if (myCharacter.x < mySprite.x) {
            myLightning = sprites.createProjectileFromSprite(img`
                8 8 8 . . 
                . . 8 8 8 
                `, myCharacter, 300, 0)
            myLightning.setKind(SpriteKind.Lightning)
        } else if (myCharacter.x > mySprite.x) {
            myLightning = sprites.createProjectileFromSprite(img`
                . . 8 8 8 
                8 8 8 . . 
                `, myCharacter, -300, 0)
            myLightning.setKind(SpriteKind.Lightning)
        }
    } else if (Character == 4) {
    	
    }
}
sprites.onOverlap(SpriteKind.FireBall, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar2.value += -0.4
    sprites.destroy(sprite)
})
function Boomerang () {
    if (mySprite.x > myCharacter.x && myBoomerrang.vx < 0 || mySprite.x < myCharacter.x && myBoomerrang.vx > 0) {
        sprites.destroy(myBoomerrang)
        TheBoomerrang = 0
    }
}
controller.combos.attachCombo("lb", function () {
    Combonation_Side_b()
})
function On_A_Button_Pressed2 () {
    if (Level == 2) {
        myAttack = 1
        if (Character == 1) {
            if (myCharacter.x < mySprite.x) {
                myCharacter.setImage(img`
                    ......7777...................
                    ....77777eeee................
                    ....7d77eeeeee...............
                    ...77ddeeeeee................
                    ..777dddedd7d................
                    .777eeddeddeddd7.............
                    .7..eeedddddd..7.............
                    ....77777dddddd7eeeeeeeeeeee.
                    ...77eeeeeedddd7eeeeeeeeeeeee
                    ...7eeeeeeedd7d7eeeeeeeeeeee.
                    ..77eeeeeee7...7.............
                    .7777eee777ee.77.............
                    .e777777eeeee................
                    eee777777777ee...............
                    eeee.......eeee..............
                    `)
            } else if (myCharacter.x > mySprite.x) {
                myCharacter.setImage(img`
                    ...................7777......
                    ................eeee77777....
                    ...............eeeeee77d7....
                    ................eeeeeedd77...
                    ................d7ddeddd777..
                    .............7dddeddeddee777.
                    .............7..ddddddeee..7.
                    .eeeeeeeeeeee7dddddd77777....
                    eeeeeeeeeeeee7ddddeeeeee77...
                    .eeeeeeeeeeee7d7ddeeeeeee7...
                    .............7...7eeeeeee77..
                    .............77.ee777eee7777.
                    ................eeeee777777e.
                    ...............ee777777777eee
                    ..............eeee.......eeee
                    `)
            }
        } else if (Character == 2) {
            if (myCharacter.x < mySprite.x) {
                myCharacter.setImage(img`
                    . . . 2 2 2 2 2 . . . . . . . . 
                    . . 2 2 2 2 2 2 2 2 2 . . . . . 
                    . . e e e d d f . . . . . . . . 
                    . e d e d d d f d d d . . . . . 
                    . e d e e d d d f d d d . . . . 
                    . . e d d d d f f f f . . . . . 
                    . . . d d d d d d . . . . d d d 
                    . . 2 2 8 2 2 8 2 2 2 2 2 d d d 
                    . 2 2 2 8 2 2 8 2 2 2 2 2 d d d 
                    2 2 2 2 8 8 8 8 2 2 . . . . . . 
                    d d 2 8 5 8 8 5 8 . . . . . . . 
                    d d d 8 8 8 8 8 8 . . . . . . . 
                    d d 8 8 8 8 8 8 8 8 . . . . . . 
                    . . 8 8 8 . . 8 8 8 . . . . . . 
                    . e e e . . . . e e e . . . . . 
                    e e e e . . . . e e e e . . . . 
                    `)
            } else if (myCharacter.x > mySprite.x) {
                myCharacter.setImage(img`
                    . . . . . . . . 2 2 2 2 2 . . . 
                    . . . . . 2 2 2 2 2 2 2 2 2 . . 
                    . . . . . . . . f d d e e e . . 
                    . . . . . d d d f d d d e d e . 
                    . . . . d d d f d d d e e d e . 
                    . . . . . f f f f d d d d e . . 
                    d d d . . . . d d d d d d . . . 
                    d d d 2 2 2 2 2 8 2 2 8 2 2 . . 
                    d d d 2 2 2 2 2 8 2 2 8 2 2 2 . 
                    . . . . . . 2 2 8 8 8 8 2 2 2 2 
                    . . . . . . . 8 5 8 8 5 8 2 d d 
                    . . . . . . . 8 8 8 8 8 8 d d d 
                    . . . . . . 8 8 8 8 8 8 8 8 d d 
                    . . . . . . 8 8 8 . . 8 8 8 . . 
                    . . . . . e e e . . . . e e e . 
                    . . . . e e e e . . . . e e e e 
                    `)
            }
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    myCharacter.vx = -75
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    myCharacter.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    myCharacter.vx = 0
})
controller.combos.attachCombo("rb", function () {
    Combonation_Side_b()
})
sprites.onOverlap(SpriteKind.Boomerrang, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == myBoomerrang) {
        statusbar2.value += -0.27
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    mySprite.destroy(effects.disintegrate, 1000)
    game.over(true, effects.confetti)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    myCharacter.vx = 75
})
sprites.onOverlap(SpriteKind.Lightning, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar2.value += -0.05
    sprites.destroy(sprite)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myAttack = 0
})
function OnGameUpdate2 () {
    if (myBoomerrang) {
        if (myCharacter.x > myBoomerrang.x) {
            myBoomerrang.ax = 100
        } else if (myCharacter.x < myBoomerrang.x) {
            myBoomerrang.ax = -100
        }
        if (myCharacter.y > myBoomerrang.y) {
            myBoomerrang.ay = 100
        } else if (myCharacter.y < myBoomerrang.y) {
            myBoomerrang.ay = -100
        }
    }
    if (myFireBall) {
        if (myFireBall.vx == 0) {
            sprites.destroy(myFireBall)
            The_FB = 0
        }
    }
}
sprites.onOverlap(SpriteKind.Lightning2, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.05
    sprites.destroy(sprite)
})
function doSomething () {
    if (myAttack == 0) {
        if (myCharacter.x < mySprite.x) {
            mySprite.x += 2
            myCharacter.x += -2
        } else if (myCharacter.x > mySprite.x) {
            mySprite.x += -2
            myCharacter.x += 2
        }
    } else if (myAttack == 1) {
        statusbar2.value += -0.25
        if (myCharacter.x < mySprite.x) {
            mySprite.x += 2
            myCharacter.x += -2
        } else if (myCharacter.x > mySprite.x) {
            mySprite.x += -2
            myCharacter.x += 2
        }
    }
}
function Combonation_Side_b () {
    if (Character == 1) {
        if (TheBoomerrang == 0) {
            if (Level == 2) {
                TheBoomerrang = 1
                myArrow.destroy()
                myBoomerrang = sprites.create(img`
                    e d 7 . . 
                    . e 7 7 . 
                    . . e 7 d 
                    . . e d d 
                    . . e d d 
                    . . e d d 
                    . e d d . 
                    e d d . . 
                    `, SpriteKind.Boomerrang)
                The_Boomerrang = 1
                myBoomerrang.setPosition(myCharacter.x, myCharacter.y)
                animation.runImageAnimation(
                myBoomerrang,
                [img`
                    . . . e d 7 . . 
                    . . . . e 7 7 . 
                    . . . . . e 7 d 
                    . . . . . e d d 
                    . . . . . e d d 
                    . . . . . e d d 
                    . . . . e d d . 
                    . . . e d d . . 
                    `,img`
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    e . . . . . . e 
                    d e . . . . e d 
                    d d e e e e 7 7 
                    . d d d d 7 7 . 
                    . . d d d d . . 
                    `,img`
                    . . d d e . . . 
                    . d d e . . . . 
                    d d e . . . . . 
                    d d e . . . . . 
                    d d e . . . . . 
                    d 7 e . . . . . 
                    . 7 7 e . . . . 
                    . . 7 d e . . . 
                    `,img`
                    . . d d d d . . 
                    . 7 7 d d d d . 
                    7 7 e e e e d d 
                    d e . . . . e d 
                    e . . . . . . e 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    `],
                90,
                true
                )
                if (myCharacter.x > mySprite.x) {
                    myBoomerrang.vx += -150
                } else if (myCharacter.x < mySprite.x) {
                    myBoomerrang.vx += 150
                }
            }
        }
    } else if (Character == 2) {
        if (myCharacter.overlapsWith(projectile) || (myCharacter.overlapsWith(Fireball2) || (myCharacter.overlapsWith(myLightning2) || (myCharacter.overlapsWith(myLightning2) || false)))) {
        	
        }
    } else {
    	
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Level == 0) {
        Character += -1
        pause(200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    myAttack = 0
})
function OnGameUpdate () {
    if (Character == 1) {
        myCharacter.setImage(img`
            . . . . . 7 7 7 7 . . . . . . 
            . . . 7 7 7 7 7 e e e e . . . 
            . 7 7 7 d 7 7 e e e e e e . . 
            7 7 7 7 d d e e e e e e . . . 
            7 . 7 7 d d d e d d 7 d . . e 
            . . 7 e e d d e d d e d d d e 
            . . . e e e d d d d d d . . e 
            . . . . 7 7 7 7 d d d d . . e 
            . . e 7 7 7 7 7 7 7 e e e d e 
            . e e e 7 d d d 7 7 7 e e d e 
            . e e e e d d d 7 7 7 e e . e 
            . e e e e d d 7 7 7 e . . . e 
            . . 7 e e 7 7 e e e e . . . e 
            . 7 7 7 7 7 7 7 7 7 7 . . . . 
            . . . . e e e e . . . . . . . 
            . . . . e e e e e . . . . . . 
            `)
    } else if (Character == 2) {
        myCharacter.setImage(img`
            . . . 2 2 2 2 2 . . . . 
            . . 2 2 2 2 2 2 2 2 2 . 
            . . e e e d d f . . . . 
            . e d e d d d f d d d . 
            . e d e e d d d f d d d 
            . . e d d d d f f f f . 
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
            . . . . . f . . . . . . . 
            f f f . f 5 f . . . f f f 
            f f 5 f 5 5 f . . f 5 f f 
            . f 5 5 f f f f f 5 5 f . 
            . . f 5 5 5 5 5 5 5 f . . 
            . . f 5 f 5 5 5 f 5 f . . 
            . . f 5 5 5 f 5 5 5 f . . 
            . f 5 2 5 f f f 5 2 5 f . 
            . f 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 f 5 5 5 f 5 5 f . 
            . f 5 f f 5 5 5 f f 5 f . 
            . f 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 f f f 5 5 f . . 
            . . . f f . . . f f . . . 
            `)
    } else if (Character == 4) {
        myCharacter.setImage(img`
            . . . . f f f f . . . . . 
            . . f f 2 2 2 2 f f . . . 
            . f 2 4 4 2 2 4 4 2 f . . 
            f 2 2 2 4 4 4 4 2 2 2 f . 
            f 4 f f f f f f f f 4 f . 
            f 4 f 1 1 f f 1 1 f 4 f . 
            f 2 f f f d d f f f 2 f . 
            f 2 d d d d d d d d 2 f . 
            . f 8 d d d d d d 8 3 f f 
            . f 4 4 5 5 5 5 8 8 1 1 f 
            f d 4 8 8 5 5 5 8 4 d f . 
            f d d 8 4 8 8 5 5 d d f . 
            . f f 8 8 8 8 8 5 f f . . 
            . . f e e 1 1 e e f . . . 
            . . f 8 8 f f 8 8 f . . . 
            . f 4 4 4 f f 4 4 4 f . . 
            . f f f f . . f f f f . . 
            `)
    }
    if (Character < 1) {
        Character = 4
    } else if (Character > 4) {
        Character = 1
    }
    if (Level == 2) {
        if (Opponent < 1) {
            Opponent = 5
        } else if (Opponent > 5) {
            Opponent = 1
        }
    }
    if (Opponent == 1) {
        mySprite.setImage(img`
            . . . . . . 7 7 7 7 . . . . . 
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
            . . . . . 7 7 7 7 7 7 7 7 7 . 
            . . . . . . . e e e e . . . . 
            . . . . . . e e e e e . . . . 
            `)
    } else if (Opponent == 2) {
        mySprite.setImage(img`
            . . . . 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 . . . 
            . 2 2 2 2 2 2 2 2 2 . . 
            . . . . f d d e e e . . 
            . d d d f d d d e d e . 
            d d d f d d d e e d e . 
            . f f f f d d d d e . . 
            . . . d d d d d d . . . 
            . . . 2 8 2 2 8 2 . . . 
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
    } else if (Opponent == 3) {
        mySprite.setImage(img`
            . . . . . . . f . . . . . 
            . . . . . . . f . . . . . 
            . . . . . . . f . . . . . 
            f f f . . . f 5 f . f f f 
            f f 5 f . . f 5 5 f 5 f f 
            . f 5 5 f f f f f 5 5 f . 
            . . f 5 5 5 5 5 5 5 f . . 
            . . f 5 5 5 5 5 5 5 f . . 
            . . f 5 f 5 5 5 f 5 f . . 
            . . f 5 5 5 f 5 5 5 f . . 
            . f 5 2 5 f f f 5 2 5 f . 
            . f 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 f 5 5 5 f 5 5 f . 
            . f 5 5 f 5 5 5 f 5 5 f . 
            . f 5 f f 5 5 5 f f 5 f . 
            . f 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 f f f 5 5 f . . 
            . . . f f . . . f f . . . 
            `)
    } else if (Opponent == 4) {
        mySprite.setImage(img`
            . . . . . f f f f . . . . 
            . . . f f 2 2 2 2 f f . . 
            . . f 2 4 4 2 2 4 4 2 f . 
            . f 2 2 2 4 4 4 4 2 2 2 f 
            . f 4 f f f f f f f f 4 f 
            . f 4 f 1 1 f f 1 1 f 4 f 
            . f 2 f f f d d f f f 2 f 
            . f 2 d d d d d d d d 2 f 
            f f f 8 d d d d d d 8 f . 
            f 1 1 8 8 5 5 5 5 4 4 f . 
            . f d 4 8 5 5 5 8 8 4 d f 
            . f d d 5 5 8 8 4 8 d d f 
            . . f f 5 8 8 8 8 8 f f . 
            . . . f e e 1 1 e e f . . 
            . . . f 8 8 f f 8 8 f . . 
            . . . f 8 8 . . 8 8 f . . 
            . . f 4 4 4 . . 4 4 4 f . 
            . . f f f f . . f f f f . 
            `)
    } else if (Opponent == 5) {
        mySprite.setImage(assets.image`Opponent Captain Falcon`)
    }
    if (Level == 2) {
        if (myCharacter.x > mySprite.x) {
            if (Character == 1) {
                myCharacter.setImage(img`
                    . . . . . . 7 7 7 7 . . . . . 
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
                    . . . . . 7 7 7 7 7 7 7 7 7 . 
                    . . . . . . . e e e e . . . . 
                    . . . . . . e e e e e . . . . 
                    `)
            } else if (Character == 2) {
                myCharacter.setImage(img`
                    . . . . 2 2 2 2 2 . . . 
                    . . . . 2 2 2 2 2 . . . 
                    . 2 2 2 2 2 2 2 2 2 . . 
                    . . . . f d d e e e . . 
                    . d d d f d d d e d e . 
                    d d d f d d d e e d e . 
                    . f f f f d d d d e . . 
                    . . . d d d d d d . . . 
                    . . . 2 8 2 2 8 2 . . . 
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
                    . . . . . . . f . . . . . 
                    f f f . . . f 5 f . f f f 
                    f f 5 f . . f 5 5 f 5 f f 
                    . f 5 5 f f f f f 5 5 f . 
                    . . f 5 5 5 5 5 5 5 f . . 
                    . . f 5 5 5 5 5 5 5 f . . 
                    . . f 5 f 5 5 5 f 5 f . . 
                    . . f 5 5 5 f 5 5 5 f . . 
                    . f 5 2 5 f f f 5 2 5 f . 
                    . f 5 5 5 5 5 5 5 5 5 f . 
                    . f 5 5 f 5 5 5 f 5 5 f . 
                    . f 5 5 f 5 5 5 f 5 5 f . 
                    . f 5 f f 5 5 5 f f 5 f . 
                    . f 5 5 5 5 5 5 5 5 5 f . 
                    . . f 5 5 f f f 5 5 f . . 
                    . . . f f . . . f f . . . 
                    `)
            } else if (Character == 4) {
                myCharacter.setImage(img`
                    . . . . . f f f f . . . . 
                    . . . f f 2 2 2 2 f f . . 
                    . . f 2 4 4 2 2 4 4 2 f . 
                    . f 2 2 2 4 4 4 4 2 2 2 f 
                    . f 4 f f f f f f f f 4 f 
                    . f 4 f 1 1 f f 1 1 f 4 f 
                    . f 2 f f f d d f f f 2 f 
                    . f 2 d d d d d d d d 2 f 
                    f f f 8 d d d d d d 8 f . 
                    f 1 1 8 8 5 5 5 5 4 4 f . 
                    . f d 4 8 5 5 5 8 8 4 d f 
                    . f d d 5 5 8 8 4 8 d d f 
                    . . f f 5 8 8 8 8 8 f f . 
                    . . . f e e 1 1 e e f . . 
                    . . . f 8 8 f f 8 8 f . . 
                    . . . f 8 8 . . 8 8 f . . 
                    . . f 4 4 4 . . 4 4 4 f . 
                    . . f f f f . . f f f f . 
                    `)
            }
        } else if (myCharacter.x < mySprite.x) {
            if (Character == 1) {
                myCharacter.setImage(img`
                    . . . . . 7 7 7 7 . . . . . . 
                    . . . . . 7 7 7 7 . . . . . . 
                    . . . 7 7 7 7 7 e e e e . . . 
                    . 7 7 7 d 7 7 e e e e e e . . 
                    7 7 7 7 d d e e e e e e . . . 
                    7 . 7 7 d d d e d d 7 d . . e 
                    . . 7 e e d d e d d e d d d e 
                    . . . e e e d d d d d d . . e 
                    . . . . 7 7 7 7 d d d d . . e 
                    . . e 7 7 7 7 7 7 7 e e e d e 
                    . e e e 7 d d d 7 7 7 e e d e 
                    . e e e e d d d 7 7 7 e e . e 
                    . e e e e d d 7 7 7 e . . . e 
                    . . 7 e e 7 7 e e e e . . . e 
                    . 7 7 7 7 7 7 7 7 7 7 . . . . 
                    . 7 7 7 7 7 7 7 7 7 . . . . . 
                    . . . . e e e e . . . . . . . 
                    . . . . e e e e e . . . . . . 
                    `)
            } else if (Character == 2) {
                myCharacter.setImage(img`
                    . . . 2 2 2 2 2 . . . . 
                    . . . 2 2 2 2 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 . 
                    . . e e e d d f . . . . 
                    . e d e d d d f d d d . 
                    . e d e e d d d f d d d 
                    . . e d d d d f f f f . 
                    . . . d d d d d d . . . 
                    . . . 2 8 2 2 8 2 . . . 
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
                    . . . . . f . . . . . . . 
                    . . . . . f . . . . . . . 
                    . . . . . f . . . . . . . 
                    f f f . f 5 f . . . f f f 
                    f f 5 f 5 5 f . . f 5 f f 
                    . f 5 5 f f f f f 5 5 f . 
                    . . f 5 5 5 5 5 5 5 f . . 
                    . . f 5 5 5 5 5 5 5 f . . 
                    . . f 5 f 5 5 5 f 5 f . . 
                    . . f 5 5 5 f 5 5 5 f . . 
                    . f 5 2 5 f f f 5 2 5 f . 
                    . f 5 5 5 5 5 5 5 5 5 f . 
                    . f 5 5 f 5 5 5 f 5 5 f . 
                    . f 5 5 f 5 5 5 f 5 5 f . 
                    . f 5 f f 5 5 5 f f 5 f . 
                    . f 5 5 5 5 5 5 5 5 5 f . 
                    . . f 5 5 f f f 5 5 f . . 
                    . . . f f . . . f f . . . 
                    `)
            } else if (Character == 4) {
                myCharacter.setImage(img`
                    . . . . f f f f . . . . . 
                    . . f f 2 2 2 2 f f . . . 
                    . f 2 4 4 2 2 4 4 2 f . . 
                    f 2 2 2 4 4 4 4 2 2 2 f . 
                    f 4 f f f f f f f f 4 f . 
                    f 4 f 1 1 f f 1 1 f 4 f . 
                    f 2 f f f d d f f f 2 f . 
                    f 2 d d d d d d d d 2 f . 
                    . f 8 d d d d d d 8 f f f 
                    . f 4 4 5 5 5 5 8 8 1 1 f 
                    f d 4 8 8 5 5 5 8 4 d f . 
                    f d d 8 4 8 8 5 5 d d f . 
                    . f f 8 8 8 8 8 5 f f . . 
                    . . f e e 1 1 e e f . . . 
                    . . f 8 8 f f 8 8 f . . . 
                    . . f 8 8 . . 8 8 f . . . 
                    . f 4 4 4 . . 4 4 4 f . . 
                    . f f f f . . f f f f . . 
                    `)
            }
        }
    }
    if (Level == 2) {
        if (myCharacter.x < mySprite.x) {
            if (Opponent == 1) {
                mySprite.setImage(img`
                    . . . . . . 7 7 7 7 . . . . . 
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
                    . . . . . 7 7 7 7 7 7 7 7 7 . 
                    . . . . . . . e e e e . . . . 
                    . . . . . . e e e e e . . . . 
                    `)
            } else if (Opponent == 2) {
                mySprite.setImage(img`
                    . . . . 2 2 2 2 2 . . . 
                    . . . . 2 2 2 2 2 . . . 
                    . 2 2 2 2 2 2 2 2 2 . . 
                    . . . . f d d e e e . . 
                    . d d d f d d d e d e . 
                    d d d f d d d e e d e . 
                    . f f f f d d d d e . . 
                    . . . d d d d d d . . . 
                    . . . 2 8 2 2 8 2 . . . 
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
            } else if (Opponent == 3) {
                mySprite.setImage(img`
                    . . . . . . . f . . . . . 
                    . . . . . . . f . . . . . 
                    . . . . . . . f . . . . . 
                    f f f . . . f 5 f . f f f 
                    f f 5 f . . f 5 5 f 5 f f 
                    . f 5 5 f f f f f 5 5 f . 
                    . . f 5 5 5 5 5 5 5 f . . 
                    . . f 5 5 5 5 5 5 5 f . . 
                    . . f 5 f 5 5 5 f 5 f . . 
                    . . f 5 5 5 f 5 5 5 f . . 
                    . f 5 2 5 f f f 5 2 5 f . 
                    . f 5 5 5 5 5 5 5 5 5 f . 
                    . f 5 5 f 5 5 5 f 5 5 f . 
                    . f 5 5 f 5 5 5 f 5 5 f . 
                    . f 5 f f 5 5 5 f f 5 f . 
                    . f 5 5 5 5 5 5 5 5 5 f . 
                    . . f 5 5 f f f 5 5 f . . 
                    . . . f f . . . f f . . . 
                    `)
            } else if (Opponent == 4) {
                mySprite.setImage(img`
                    . . . . . f f f f . . . . 
                    . . . f f 2 2 2 2 f f . . 
                    . . f 2 4 4 2 2 4 4 2 f . 
                    . f 2 2 2 4 4 4 4 2 2 2 f 
                    . f 4 f f f f f f f f 4 f 
                    . f 4 f 1 1 f f 1 1 f 4 f 
                    . f 2 f f f d d f f f 2 f 
                    . f 2 d d d d d d d d 2 f 
                    f f f 8 d d d d d d 8 f . 
                    f 1 1 8 8 5 5 5 5 4 4 f . 
                    . f d 4 8 5 5 5 8 8 4 d f 
                    . f d d 5 5 8 8 4 8 d d f 
                    . . f f 5 8 8 8 8 8 f f . 
                    . . . f e e 1 1 e e f . . 
                    . . . f 8 8 f f 8 8 f . . 
                    . . . f 8 8 . . 8 8 f . . 
                    . . f 4 4 4 . . 4 4 4 f . 
                    . . f f f f . . f f f f . 
                    `)
            } else if (Opponent == 5) {
                mySprite.setImage(assets.image`Opponent Captain Falcon`)
            }
        } else if (myCharacter.x > mySprite.x) {
            if (Opponent == 1) {
                mySprite.setImage(img`
                    . . . . . 7 7 7 7 . . . . . . 
                    . . . . . 7 7 7 7 . . . . . . 
                    . . . 7 7 7 7 7 e e e e . . . 
                    . 7 7 7 d 7 7 e e e e e e . . 
                    7 7 7 7 d d e e e e e e . . . 
                    7 . 7 7 d d d e d d 7 d . . e 
                    . . 7 e e d d e d d e d d d e 
                    . . . e e e d d d d d d . . e 
                    . . . . 7 7 7 7 d d d d . . e 
                    . . e 7 7 7 7 7 7 7 e e e d e 
                    . e e e 7 d d d 7 7 7 e e d e 
                    . e e e e d d d 7 7 7 e e . e 
                    . e e e e d d 7 7 7 e . . . e 
                    . . 7 e e 7 7 e e e e . . . e 
                    . 7 7 7 7 7 7 7 7 7 7 . . . . 
                    . 7 7 7 7 7 7 7 7 7 . . . . . 
                    . . . . e e e e . . . . . . . 
                    . . . . e e e e e . . . . . . 
                    `)
            } else if (Opponent == 2) {
                mySprite.setImage(img`
                    . . . 2 2 2 2 2 . . . . 
                    . . . 2 2 2 2 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 . 
                    . . e e e d d f . . . . 
                    . e d e d d d f d d d . 
                    . e d e e d d d f d d d 
                    . . e d d d d f f f f . 
                    . . . d d d d d d . . . 
                    . . . 2 8 2 2 8 2 . . . 
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
            } else if (Opponent == 3) {
                mySprite.setImage(img`
                    . . . . . f . . . . . . . 
                    . . . . . f . . . . . . . 
                    . . . . . f . . . . . . . 
                    f f f . f 5 f . . . f f f 
                    f f 5 f 5 5 f . . f 5 f f 
                    . f 5 5 f f f f f 5 5 f . 
                    . . f 5 5 5 5 5 5 5 f . . 
                    . . f 5 5 5 5 5 5 5 f . . 
                    . . f 5 f 5 5 5 f 5 f . . 
                    . . f 5 5 5 f 5 5 5 f . . 
                    . f 5 2 5 f f f 5 2 5 f . 
                    . f 5 5 5 5 5 5 5 5 5 f . 
                    . f 5 5 f 5 5 5 f 5 5 f . 
                    . f 5 5 f 5 5 5 f 5 5 f . 
                    . f 5 f f 5 5 5 f f 5 f . 
                    . f 5 5 5 5 5 5 5 5 5 f . 
                    . . f 5 5 f f f 5 5 f . . 
                    . . . f f . . . f f . . . 
                    `)
            } else if (Opponent == 4) {
                mySprite.setImage(img`
                    . . . . f f f f . . . . . 
                    . . f f 2 2 2 2 f f . . . 
                    . f 2 4 4 2 2 4 4 2 f . . 
                    f 2 2 2 4 4 4 4 2 2 2 f . 
                    f 4 f f f f f f f f 4 f . 
                    f 4 f 1 1 f f 1 1 f 4 f . 
                    f 2 f f f d d f f f 2 f . 
                    f 2 d d d d d d d d 2 f . 
                    . f 8 d d d d d d 8 f f f 
                    . f 4 4 5 5 5 5 8 8 1 1 f 
                    f d 4 8 8 5 5 5 8 4 d f . 
                    f d d 8 4 8 8 5 5 d d f . 
                    . f f 8 8 8 8 8 5 f f . . 
                    . . f e e 1 1 e e f . . . 
                    . . f 8 8 f f 8 8 f . . . 
                    . . f 8 8 . . 8 8 f . . . 
                    . f 4 4 4 . . 4 4 4 f . . 
                    . f f f f . . f f f f . . 
                    `)
            } else if (Opponent == 5) {
                mySprite.setImage(assets.image`Opponent Captain Falcon`)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Boomerrang, SpriteKind.Player, function (sprite, otherSprite) {
    Boomerang()
})
sprites.onDestroyed(SpriteKind.Projectile2, function (sprite) {
    Arrow = 0
})
function On_A_Button_Pressed () {
    if (Level == 0) {
        mySprite = sprites.create(assets.image`Opponent Link`, SpriteKind.Enemy)
        myCharacter.setPosition(10, 90)
        Opponent = randint(1, 5)
        Level += 1
    } else if (Level == 1) {
        scene.cameraFollowSprite(myCharacter)
        mySprite.setPosition(150, 120)
        myCharacter.setPosition(10, 120)
        tiles.setTilemap(tilemap`level1`)
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar.value = 100
        statusbar2.value = 100
        statusbar.attachToSprite(myCharacter)
        statusbar2.attachToSprite(mySprite)
        effects.clouds.startScreenEffect()
        myCharacter.ay = 400
        mySprite.ay = 400
        Level += 1
        myCharacter.setStayInScreen(false)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == myArrow) {
        statusbar2.value += -0.25
        sprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    doSomething()
})
let Lightning3 = 0
let Movement = 0
let Arrow = 0
let Opponent = 0
let myLightning2: Sprite = null
let Fireball2: Sprite = null
let The_Boomerrang = 0
let myBoomerrang: Sprite = null
let statusbar2: StatusBarSprite = null
let myLightning: Sprite = null
let myFireBall: Sprite = null
let The_FB = 0
let myArrow: Sprite = null
let mySprite: Sprite = null
let TheBoomerrang = 0
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let myAttack = 0
let Level = 0
let myCharacter: Sprite = null
let Character = 0
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
game.splash("Choose Your Character")
Character = 1
myCharacter = sprites.create(img`
    . . . . . 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 e e e e . . . 
    . 7 7 7 d 7 7 e e e e e e . . 
    7 7 7 7 d d e e e e e e . . . 
    7 . 7 7 d d d e d d 7 d . . e 
    . . 7 e e d d e d d e d d d e 
    . . . e e e d d d d d d . . e 
    . . . . 7 7 7 7 d d d d . . e 
    . . e 7 7 7 7 7 7 7 e e e d e 
    . e e e 7 d d d 7 7 7 e e d e 
    . e e e e d d d 7 7 7 e e . e 
    . e e e e d d 7 7 7 e . . . e 
    . . 7 e e 7 7 e e e e . . . e 
    . 7 7 7 7 7 7 7 7 7 7 . . . . 
    . . . . e e e e . . . . . . . 
    . . . . e e e e e . . . . . . 
    `, SpriteKind.Player)
myCharacter.setStayInScreen(true)
Level = 0
myAttack = 0
game.onUpdate(function () {
    OnGameUpdate()
    OnGameUpdate2()
})
game.onUpdate(function () {
    if (Movement != 0) {
        mySprite.vx = 0
    }
    if (Level == 2) {
        if (myCharacter.isHittingTile(CollisionDirection.Top)) {
            myCharacter.y += -30
        }
        if (mySprite.isHittingTile(CollisionDirection.Top)) {
            mySprite.y += -30
        }
        Arrow = randint(0, 400)
        if (Arrow == 0) {
            mySprite.vy += -200
        }
        if (mySprite.x < myCharacter.x) {
            Movement = randint(0, 3)
            if (Movement == 0) {
                mySprite.vx = 60
            }
        } else if (mySprite.x > myCharacter.x) {
            Movement = randint(0, 7)
            if (Movement == 0) {
                mySprite.vx = -60
            }
        }
        if (mySprite.y > myCharacter.y) {
            if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                Arrow = randint(0, 30)
                if (Arrow == 0) {
                    mySprite.vy += -200
                }
            }
        }
        if (mySprite.y == myCharacter.y) {
            if (Opponent == 1) {
                Arrow = randint(0, 85)
                if (Arrow == 0) {
                    if (myCharacter.x < mySprite.x) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . . 8 . 8 . 8 
                            . . f f . . . . . . . . . . . . 8 . 8 . 8 . 
                            f f f e e e e e e e e e e e e e e e e e e e 
                            . . f f . . . . . . . . . . . . 8 . 8 . 8 . 
                            . . . . . . . . . . . . . . . . . 8 . 8 . 8 
                            `, mySprite, -150, 0)
                        projectile.setKind(SpriteKind.Projectile2)
                    } else if (myCharacter.x > mySprite.x) {
                        projectile = sprites.createProjectileFromSprite(img`
                            8 . 8 . 8 . . . . . . . . . . . . . . . . . 
                            . 8 . 8 . 8 . . . . . . . . . . . . f f . . 
                            e e e e e e e e e e e e e e e e e e e f f f 
                            . 8 . 8 . 8 . . . . . . . . . . . . f f . . 
                            8 . 8 . 8 . . . . . . . . . . . . . . . . . 
                            `, mySprite, 150, 0)
                        projectile.setKind(SpriteKind.Projectile2)
                    }
                }
            } else if (Opponent == 2) {
                Arrow = randint(0, 100)
                if (Arrow == 0) {
                    if (myCharacter.x > mySprite.x) {
                        Fireball2 = sprites.createProjectileFromSprite(img`
                            . . 2 2 . . 
                            . 2 2 4 2 . 
                            2 4 2 2 4 2 
                            2 2 2 2 4 2 
                            . 4 2 4 2 . 
                            . . 2 2 . . 
                            `, mySprite, 200, 0)
                        Fireball2.fx = 220
                        Fireball2.setBounceOnWall(true)
                        Fireball2.setKind(SpriteKind.Fireball2)
                    } else if (myCharacter.x < mySprite.x) {
                        Fireball2 = sprites.createProjectileFromSprite(img`
                            . . 2 2 . . 
                            . 2 2 4 2 . 
                            2 4 2 2 4 2 
                            2 2 2 2 4 2 
                            . 4 2 4 2 . 
                            . . 2 2 . . 
                            `, mySprite, -200, 0)
                        Fireball2.setBounceOnWall(true)
                        Fireball2.setKind(SpriteKind.Fireball2)
                        Fireball2.fx = 220
                    }
                }
            } else if (Opponent == 3) {
                Lightning3 = randint(0, 30)
                if (Lightning3 == 0) {
                    if (myCharacter.x < mySprite.x) {
                        myLightning2 = sprites.createProjectileFromSprite(img`
                            8 8 8 . . 
                            . . 8 8 8 
                            `, mySprite, -300, 0)
                        myLightning2.setKind(SpriteKind.Lightning2)
                    } else if (myCharacter.x > mySprite.x) {
                        myLightning2 = sprites.createProjectileFromSprite(img`
                            . . 8 8 8 
                            8 8 8 . . 
                            `, mySprite, 300, 0)
                        myLightning2.setKind(SpriteKind.Lightning2)
                    }
                }
            } else if (false) {
            	
            }
        }
    }
})
