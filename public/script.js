document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const TAU = Math.PI * 2

const cnv = document.getElementById('cnv_id')

cnv.width  = innerWidth
cnv.height = innerHeight

const ctx = cnv.getContext('2d')

const sqwares = [] // create an array for e values to persist inside of, in global scope

const mouse_pos = new Vector (0, 0)

cnv.onpointermove = e => { // e stands for event
   mouse_pos.x = e.x
   mouse_pos.y = e.y
}

cnv.onpointerdown = e => {
   sqwares.push (new Vector (e.x, e.y))
}

requestAnimationFrame(draw_frame)
function draw_frame () {
   ctx.fillStyle = 'black'
   ctx.fillRect(0, 0, cnv.width, cnv.height)

   sqwares.forEach (s => {
      
      const movement = new Vector (mouse_pos.x, mouse_pos.y)
      movement.subtract (s)
      movement.setMag (.8)

      // s.x += Math.random () * 6 - 3
      // s.y += Math.random () * 6 - 3
      s.add (movement)
      
      ctx.fillStyle = 'deeppink'
      ctx.fillRect(s.x - 10 , s.y - 10, 20, 20)
   })

   if (sqwares.length > 20) {
      sqwares.shift()
   }

requestAnimationFrame(draw_frame)
}