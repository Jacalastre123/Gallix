 const canvas = document.getElementById("canvas");
       const ctx = canvas.getContext("2d");
       const points = document.getElementById("point")
       const waveId = document.getElementById("wave")
       const lostMessage = document.querySelector(".lostMessage")
       const hs = document.getElementById("hs")
       const startCont = document.querySelector(".startCont")
        let point = 0
			let amount = 0
        let ctxList = []
        let speed = 5000
        let wave = 0
        let mcDied = false
        let gamerun = false
         const img = new Image()
         const enemyImg = new Image()
         const projPImg = new Image()
         const projEImg = new Image()
         const bgImg = new Image()
         ctx.fillStyle = "green"
        let highScore = localStorage.getItem("hs") || 0
        let mouseX;
        let mouseY;
        let times = 20
        const aud = new Audio()
        aud.src = "SciFiMus.mp3"
        let isStart = false
  