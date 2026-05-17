
document.addEventListener("click", e => {
    
    if (e.target.id === "start") {
        if (isStart) return;
        startCont.style.display = "none"
        isStart = true


        document.addEventListener("mousemove", e => {
            aud.play()
            aud.loop = true
        })
      
       async  function awaitImg(image, variable) {
        
             variable.src = image
             
                variable.addEventListener("load", e => {
                   return
                })
            }

            function shootProj() {
                  const newAud3 = new Audio()
        newAud3.src = "shooting_sound.mp3"
        newAud3.volume = 0.7
        newAud3.play()
               const canvasRect = canvas.getBoundingClientRect()            
            ctxList.push({
            x: ctxList.find(c => c.main).x + 25,
            y: ctxList.find(c => c.main).y + 25,
            height: 10,
            width: 15,
            type: "projectile",
            movable: true,
            colour: "blue",
            dist: { x: canvas.width, y: ctxList.find(c => c.main).y + 25},
died: false,
        projEnemy: false
        })
            }
            document.addEventListener("click", (e) => {
                startCont.style.display = "none"
                if (e.target.id === "retry") {
                
             ctxList.push({
        x: 50,
        y: 50, 
        height: 70,
        width: 70,
        uniID: "1", 
        image: img,
        main: true,
        type: "Image",
        died: false
       })
       amount = 0
           ctxList = ctxList.filter(c => c.type === "Image")
       wave = 0
       point = 0
       randomise()
       lostMessage.style.display = "none"
       mcDied = false
       speed = 5000
       points.innerText = "Points: " + point
       waveId.innerText = "Wave: " + wave
        hs.innerText = "High Score: " + highScore
                }
                if (!mcDied) {
                if (e.target.id === "up" && ctxList.find(c => c.main).y - 25 > 0) {
                    ctxList.find(c => c.main).y -= 25
                }
                if (e.target.id === "shoot") {
                 shootProj()
                }
                if (e.target.id === "down" && ctxList.find(c => c.main).y + 25 < canvas.height) {
                 ctxList.find(c => c.main === true).y += 25
                }
            }
    })
   hs.innerText = "High Score: " + highScore
  



     
            awaitImg("Plane.png", img)
             ctxList.push({
        x: 50,
        y: 50,
        height: 70,
        width: 70,
        uniID: "1", 
        image: img,
        main: true,
        type: "Image",
        died: false
       })
       
       document.addEventListener("keydown", e => {
       if (!mcDied) {
        if (e.key === "w" && ctxList.find(c => c.main).y - 25 > -20) {
          
            ctxList.find(c => c.main).y -= 25
        }
      
        if (e.key === "s" && ctxList.find(c => c.main).y + 25 < canvas.height) {
          
            ctxList.find(c => c.main === true).y += 25
        }
    }
       
      
        if (e.key === " " && !mcDied) {
            e.preventDefault()
           shootProj()
            
        }
       
    
       

       console.log(e.key)
        
       
        



       })

          

awaitImg("enemy.png", enemyImg)
       function randomise() {

   wave++
   if (speed >= 800) {
   speed -= 200
   }
                              waveId.innerText = "Wave: " + wave
		
	
        
        ctx.fillStyle = "blue"

          amount = 20
            
         for (let row = 0; row < 5; row++) {
               	
            for (let col = 0; col < 4; col++) {
             
        ctxList.push({
            x: 320 + col * 60,
            y: 20 + row * 80,
            height: 40,
            width: 40,
            type: "enemy",
            movable: true,
           image: img,
				died: false
        })
            }
}

        console.log("deploying")
        
}

       

randomise()


      awaitImg("NightBG.png", bgImg)
      awaitImg("Enemy_Missile.png", projEImg)
      awaitImg("Player_Missile.png", projPImg)
    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height)
        ctxList.forEach(async item => {
             if (item.type === "enemy") {
                ctx.drawImage(enemyImg, item.x, item.y,item.width, item.height)
             }
             else if (item.type === "projectile") {
                if (!item.projEnemy) {
                ctx.drawImage(projPImg, item.x, item.y,item.width, item.height)
                }
                else {
                    ctx.drawImage(projEImg, item.x, item.y ,item.height, item.width)
                }
             }
            else if (item.type !== "Image" && item.type !== "character") {
            ctx.fillStyle = item.colour
            ctx.fillRect(item.x, item.y, item.height, item.width, item.uniID)
            }
            else {
                
               
                    const imgVar = item.image
                    ctx.drawImage(imgVar, item.x, item.y,item.width, item.height)
       
            }
             if (item.type === "projectile" && item.x >= 0 && item.movable && item.projEnemy && !mcDied) {
                 const dx = item.x - item.dist.x
              const dy = item.y - item.dist.y
              
              const distance = Math.sqrt(dx * dx + dy * dy)
                  
              const dirX = dx / distance
              const dirY = dy / distance
                
              item.y -= dirY * 3
              item.x -= dirX * 3
                
                   if (distance < 30) {
                    
                    item.movable = false

                   }

                   
                   const ctMC = ctxList.find(en => en.main)
                    if (item.x > ctMC.x && item.x < ctMC.x + ctMC.width && item.y > ctMC.y && item.y < ctMC.y + ctMC.height) {
                        item.movable = false
           
          const expSPL2 = new Audio()
        expSPL2.src = "lost.mp3"
        expSPL2.volume = 1
        expSPL2.play()
                              ctxList = ctxList.filter(c => !c.died)
                      mcDied = true

                     lostMessage.style.display = "block"
                        
                        ctMC.died = true
                        if (point > highScore) {
                         highScore = point

                        localStorage.setItem("hs", highScore)
                        }
                        hs.innerText = "High Score: " + highScore
                        ctxList = ctxList.filter(c => !c.died)
                    }
                 
             }

            
                else if (item.type === "projectile" && item.x <= 625 && item.movable && !item.projEnemy) {
                    
              const dx = item.x - item.dist.x
              const dy = item.y - item.dist.y

              const distance = Math.sqrt(dx * dx + dy * dy)
                  
              const dirX = dx / distance
              const dirY = dy / distance
                
              item.y -= dirY * 3
              item.x -= dirX * 3
                
                   if (distance < 30) {
                    
                    item.movable = false
                   }
                   ctxList.filter(en => en.type === "enemy").forEach(ct => {
                    if (item.x > ct.x && item.x < ct.x + ct.width && item.y > ct.y && item.y < ct.y + ct.height) {
                        item.movable = false
                        point++
                        points.innerText = "Points: " + point
                        amount--
                           const expSEN = new Audio()
        expSEN.src = "explosion.mp3"
                        expSEN.volume = 0.7
        expSEN.play()
                        if (amount === 0) {
                           
                            setTimeout(() => {
                                randomise()
                            }, 1000)
                        
                            
                        }
                        ct.died = true

                        console.log(point)
                        ctxList = ctxList.filter(c => !c.died)
                    }
                   })
                }
                else {
                    ctxList = ctxList.filter(c => c.movable || c.type !== "projectile")
                    item.movable = false
                   
                }
            
        })
        requestAnimationFrame(draw)
    }
       draw()


       setInterval(() => {
        if (ctxList.filter(c => c.type === "enemy").length > 0 && !mcDied) {
        let theEn = ctxList.filter(c => c.type === "enemy")[Math.floor(Math.random() * ctxList.filter(c => c.type === "enemy").length)]
        const newAud = new Audio()
        newAud.src = "shooting_sound.mp3"
        newAud.volume = 0.4
        newAud.play()
                 ctxList.push({
            x: theEn.x + 15,
            y: theEn.y + 15,
            height: 10,
            width: 15,
            type: "projectile",
            movable: true,
            colour: "green",
         dist: {x: 0, y: theEn.y + 25},
    died: false,
        projEnemy: true
        })
    }
       }, speed)
       
       let lean = 0
       setInterval(() => {
 if (lean === 0) {
    lean++
        ctxList.filter(c => c.type === "enemy").forEach(item => {
                item.y += 40
        })
          }
     else if (lean === 1) {
              lean--
                ctxList.filter(c => c.type === "enemy").forEach(item => {
           
              
                item.y -= 40
        })
            }
     
            console.log(lean)
       }, 1050)
    }
})