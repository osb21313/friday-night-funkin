function generateLeftArrow (length: number) {
    if (length >= 1) {
        LeftArrow_Length = sprites.create(img`
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . c 1 b b b b 1 c . . . . 
            . . . . b c c c c c c b . . . . 
            . . . . . b c c c c b . . . . . 
            `, SpriteKind.Projectile)
        LeftArrow.x = 93
        LeftArrow.y = 240
        for (let index = 0; index < 240; index++) {
            pause(.25)
            LeftArrow.y += -1
        }
    } else {
        LeftArrow.x = 93
        LeftArrow.y = 240
        for (let index = 0; index < 240; index++) {
            pause(.70)
            LeftArrow.y += -1
        }
        if (LeftArrow.y == 0) {
            LeftArrow.destroy()
        }
    }
}
function playSong (song: string) {
    if (song == "Tutorial") {
    	
    }
}
function Huh_Pretty_good_Tankman () {
    animation.runImageAnimation(
    Tankman,
    assets.animation`Huh Pretty Good - Tankman`,
    150,
    false
    )
}
function generateRightArrow (length: number) {
    if (length >= 1) {
        RightArrow_Length = sprites.create(img`
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . e 1 4 4 4 4 1 e . . . . 
            . . . . 4 e e e e e e 4 . . . . 
            . . . . . 4 e e e e 4 . . . . . 
            `, SpriteKind.Projectile)
        RightArrow.x = 140
        RightArrow.y = 240
        for (let index = 0; index < 240; index++) {
            pause(.25)
            LeftArrow.y += -1
        }
    } else {
        RightArrow.x = 140
        RightArrow.y = 240
        for (let index = 0; index < 240; index++) {
            pause(.70)
            RightArrow.y += -1
        }
        if (RightArrow.y == 0) {
            RightArrow.destroy()
        }
    }
}
function Ugh_Tankman () {
    animation.runImageAnimation(
    Tankman,
    assets.animation`Ugh - Tankman`,
    150,
    true
    )
}
function generateUpArrow (length: number) {
    if (length >= 1) {
        UpArrow_Length = sprites.create(img`
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 6 1 7 7 7 7 1 6 . . . . 
            . . . . 7 6 6 6 6 6 6 7 . . . . 
            . . . . . 7 6 6 6 6 7 . . . . . 
            `, SpriteKind.Projectile)
        UpArrow.x = 125
        UpArrow.y = 240
        for (let index = 0; index < 240; index++) {
            pause(.25)
            UpArrow.y += -1
        }
    } else {
        UpArrow.x = 125
        UpArrow.y = 240
        for (let index = 0; index < 240; index++) {
            pause(.70)
            UpArrow.y += -1
        }
        if (UpArrow.y == 0) {
            UpArrow.destroy()
        }
    }
}
function generateDownArrow (length: number) {
    if (length >= 1) {
        DownArrow_Length = sprites.create(assets.image`DownLength`, SpriteKind.Projectile)
        DownArrow.x = 110
        DownArrow.y = 240
        for (let index = 0; index < 240; index++) {
            pause(.25)
            DownArrow.y += -1
        }
    } else {
        DownArrow.x = 110
        DownArrow.y = 240
        for (let index = 0; index < 240; index++) {
            pause(.25)
            DownArrow.y += -1
        }
        if (DownArrow.y == 0) {
            DownArrow.destroy()
        }
    }
}
let DownArrow_Length: Sprite = null
let UpArrow_Length: Sprite = null
let RightArrow_Length: Sprite = null
let LeftArrow_Length: Sprite = null
let RightArrow: Sprite = null
let UpArrow: Sprite = null
let DownArrow: Sprite = null
let LeftArrow: Sprite = null
let Tankman: Sprite = null
scene.setBackgroundImage(assets.image`Restricted Military Zone - Tankman`)
let Boyfriend = sprites.create(img`
    ....................eeeeeeeeeeeeeeeeee.............
    ..................eee22222222222222222ee...........
    .................ee22222222222222222eeeef..........
    .................e22222222282222222eeeeeef.........
    ................e22222222289222222eeeeeeef.........
    ................e22222222289822222eeeeeeeef........
    ................88882222289982222eeeeeeeeef........
    ...............889998222289982222eeeeeeeeeef.......
    ..............889999988889968222eeeeeeeeeeef.......
    .............8899999998889668222eeeeeeeeeeeef......
    ............88999999999989666822eeeeeeeeeeeef......
    ............899966f669999966682eeeeeeeeeeeeeef.....
    ...........8999666f666669966668eeeffeeeeeeeeef.....
    ...........89966666f666666666668effeeeeeeeeef......
    ..........899666666ff666666669998feeeeeeeeeeffee...
    ..........8966666666ff6666669888feeeeeeeeeefedde...
    ..........88888866666ff99999844ffffffffeeefeddde...
    ..............89666666ff8888444fff89966ffffdddde...
    .............8996666888ff44444ffff89966688edeede...
    ............869666888444ff444fffff489986644e444e...
    ............8996888f4444fffe44ffff488988664e444....
    ............89688..f4444eeddddeeeee488dd884eeee....
    ....ffffff..8988...f4444eeddddeeedeeddddd4eee......
    ..fffc11cff.898..eedddddddddddddde1edddcff.........
    .fbb11bbbbff88..eddddddddddddddde11edddc1bc........
    .fbbbbbb1bbf....edddddddedddddde11edddc111c........
    ffbbb11bb1bf....eddddddddeeeeeeeeeddccb111c........
    fcffbbbccbcf....edddddddddddddddddccbbb111c........
    fffbbbbbcbcf....eedddcccccccccccccbbbbb111c........
    fccbfbbbf11fee..eeeeeeeeeeeeebbbbbbbbbb1111c.......
    fccffc111fdedde.......eeebbbfbbbbbbbbbb11111c......
    fccccc1ffffdddde.....ebbbbbfebbb222bbbc11111c......
    .ffccffffff4d4de.....ebbbeeebb2221121bffbb11c......
    ..ffffffffffffde.....ebee11111212b1211f4bcccc......
    ....bbdddddddfdeeeeeedee11111211121211e44ee........
    ..bbddddddeddf44eeedddef11111211122111edddde.......
    .bddddddededdfe4eed66666f1111b2222b11ffdddde.......
    .bdddddedddedddeedd666666ff11111111ff688dddd8......
    .b4ddd44ddddeeddddd66666666ffffffff666688888888....
    .b4dd44ddddeeeddd8866666666666666666666668868888...
    ..b44444dd4eedddd8666666666666666666886666666888...
    ...bbb44444dddddd8666666866666666668ee8666666688...
    ......bb444dddddeeeeee8888888866668e2dd88666688e...
    .......bb444444eddddddef888fff8888eedd2228888e2e...
    .........bbbbbe2222ddddef8fdd2f888eedd2222222e2e...
    .............be2222222ddffdd22e.22e22222222222e....
    ............eeeec11c2222edd222e222e222b111111be....
    ..........beecc11cc1122e222222cc22222b111111b22e...
    .........eb1111c11cc1cee222222ccc222b1b111111122e..
    ........ee22bb11cc222ee2222222ccccb21111bcccb1122cc
    ........e22222c1122ee222222222ccccbb211222222211222
    ........e222222c1eeee222222222ccccbb11eeeeeeee22222
    .......ce2222222ee22222bbbbbbbcc...f1eeeeeeeeeeee22
    .......c122222222222222bbbbcbb.....f111eeeeeeeeee11
    .......c11b1111111111bbcffff.......ff11111111111111
    ........cc11b11b11bbbbff.............ffe1111111111c
    `, SpriteKind.Player)
Boyfriend.setPosition(125, 83)
Tankman = sprites.create(assets.image`Tankman`, SpriteKind.Enemy)
Tankman.setPosition(35, 83)
LeftArrow = sprites.create(img`
    . . . . . a a a a a a . . . . . 
    . . . . a b b b b b b a . . . . 
    . . . a b b 1 1 1 1 b a . . . . 
    . . a b b 1 1 b b 1 b a a a . . 
    . a b b 1 1 b b b 1 b b b b a . 
    a b b 1 1 b b b b 1 1 1 1 b b a 
    a b 1 1 b b b b b b b b b 1 b a 
    a b 1 b b b b b b b b b b 1 b a 
    a b 1 b b b b b b b b b b 1 b a 
    a b 1 1 b b b b b b b b b 1 b a 
    a b b 1 1 b b b b 1 1 1 1 b b a 
    . a b b 1 1 b b b 1 b b b b a . 
    . . a b b 1 1 b b 1 b a a a . . 
    . . . a b b 1 1 1 1 b a . . . . 
    . . . . a b b b b b b a . . . . 
    . . . . . a a a a a a . . . . . 
    `, SpriteKind.Projectile)
let GrayLeftArrow = sprites.create(assets.image`GreyLeftArrow`, SpriteKind.Projectile)
GrayLeftArrow.setPosition(95, 19)
let GrayDownArrow = sprites.create(assets.image`GreyDownArrow`, SpriteKind.Projectile)
DownArrow = sprites.create(img`
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . 8 8 9 9 9 9 8 8 . . . . 
    . . . 8 8 9 1 1 1 1 9 8 8 . . . 
    . . . 8 9 1 9 9 9 9 1 9 8 . . . 
    . 8 8 8 9 1 9 9 9 9 1 9 8 8 8 . 
    8 8 9 9 9 1 9 9 9 9 1 9 9 9 8 8 
    8 9 1 1 1 1 9 9 9 9 1 1 1 1 9 8 
    8 9 1 9 9 9 9 9 9 9 9 9 9 1 9 8 
    8 9 1 9 9 9 9 9 9 9 9 9 9 1 9 8 
    8 9 1 1 9 9 9 9 9 9 9 9 1 1 9 8 
    8 8 9 1 1 9 9 9 9 9 9 1 1 9 8 8 
    . 8 8 9 1 1 9 9 9 9 1 1 9 8 8 . 
    . . 8 8 9 1 1 9 9 1 1 9 8 8 . . 
    . . . 8 8 9 1 1 1 1 9 8 8 . . . 
    . . . . 8 8 9 9 9 9 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    `, SpriteKind.Projectile)
GrayDownArrow.setPosition(110, 19)
let GrayUpArrow = sprites.create(assets.image`GreyUpArrow`, SpriteKind.Projectile)
UpArrow = sprites.create(assets.image`UpArrow`, SpriteKind.Projectile)
GrayUpArrow.setPosition(125, 19)
let GrayRightArrow = sprites.create(img`
    . . . . . c c c c c c . . . . . 
    . . . . c c b b b b c c . . . . 
    . . . . c b 1 1 1 1 b c c . . . 
    . . . c c b 1 b b 1 1 b c c . . 
    . c c b b b 1 b b b 1 1 b c c . 
    c c b 1 1 1 1 b b b b 1 1 b c c 
    c b 1 b b b b b b b b b 1 1 b c 
    c b 1 b b b b b b b b b b 1 b c 
    c b 1 b b b b b b b b b b 1 b c 
    c b 1 b b b b b b b b b 1 1 b c 
    c c b 1 1 1 1 b b b b 1 1 b c c 
    . c c b b b 1 b b b 1 1 b c c . 
    . . . c c b 1 b b 1 1 b c c . . 
    . . . . c b 1 1 1 1 b c c . . . 
    . . . . c c b b b b c c . . . . 
    . . . . . c c c c c c . . . . . 
    `, SpriteKind.Projectile)
RightArrow = sprites.create(img`
    . . . . . e e e e e e . . . . . 
    . . . . e e 4 4 4 4 e e . . . . 
    . . . . e 4 1 1 1 1 4 e e . . . 
    . . . e e 4 1 4 4 1 1 4 e e . . 
    . e e 4 4 4 1 4 4 4 1 1 4 e e . 
    e e 4 1 1 1 1 4 4 4 4 1 1 4 e e 
    e 4 1 4 4 4 4 4 4 4 4 4 1 1 4 e 
    e 4 1 4 4 4 4 4 4 4 4 4 4 1 4 e 
    e 4 1 4 4 4 4 4 4 4 4 4 4 1 4 e 
    e 4 1 4 4 4 4 4 4 4 4 4 1 1 4 e 
    e e 4 1 1 1 1 4 4 4 4 1 1 4 e e 
    . e e 4 4 4 1 4 4 4 1 1 4 e e . 
    . . . e e 4 1 4 4 1 1 4 e e . . 
    . . . . e 4 1 1 1 1 4 e e . . . 
    . . . . e e 4 4 4 4 e e . . . . 
    . . . . . e e e e e e . . . . . 
    `, SpriteKind.Projectile)
GrayRightArrow.setPosition(140, 19)
generateLeftArrow(0)
generateDownArrow(0)
generateUpArrow(0)
generateRightArrow(0)
forever(function () {
    Ugh_Tankman()
})
