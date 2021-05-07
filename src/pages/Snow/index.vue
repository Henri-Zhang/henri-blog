<template>
  <div>
    <h1 class="title">张大恒</h1>
    <canvas ref="snow" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.run();
  },
  methods: {
    run() {
      (function() {
        var requestAnimationFrame =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };
        window.requestAnimationFrame = requestAnimationFrame;
      })();

      const flakes = [];
      const canvas = this.$refs.snow;
      const ctx = canvas.getContext('2d');
      const flakeCount = 400;
      let mX = -100;
      let mY = -100;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      function snow() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < flakeCount; i++) {
          const flake = flakes[i];
          const x = mX;
          const y = mY;
          const minDist = 150;
          const x2 = flake.x;
          const y2 = flake.y;

          const dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));

          if (dist < minDist) {
            const force = minDist / (dist * dist);
            const xcomp = (x - x2) / dist;
            const ycomp = (y - y2) / dist;
            const deltaV = force / 2;

            flake.velX -= deltaV * xcomp;
            flake.velY -= deltaV * ycomp;
          } else {
            flake.velX *= 0.98;
            if (flake.velY <= flake.speed) {
              flake.velY = flake.speed;
            }
            flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
          }

          ctx.fillStyle = 'rgba(255,255,255,' + flake.opacity + ')';
          flake.y += flake.velY;
          flake.x += flake.velX;

          if (flake.y >= canvas.height || flake.y <= 0) {
            reset(flake);
          }

          if (flake.x >= canvas.width || flake.x <= 0) {
            reset(flake);
          }

          ctx.beginPath();
          ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
          ctx.fill();
        }
        requestAnimationFrame(snow);
      }

      function reset(flake) {
        flake.x = Math.floor(Math.random() * canvas.width);
        flake.y = 0;
        flake.size = Math.random() * 3 + 2;
        flake.speed = Math.random() * 1 + 0.5;
        flake.velY = flake.speed;
        flake.velX = 0;
        flake.opacity = Math.random() * 0.5 + 0.3;
      }

      function init() {
        for (var i = 0; i < flakeCount; i++) {
          var x = Math.floor(Math.random() * canvas.width),
            y = Math.floor(Math.random() * canvas.height),
            size = Math.random() * 3 + 2,
            speed = Math.random() * 1 + 0.5,
            opacity = Math.random() * 0.5 + 0.3;

          flakes.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: Math.random() / 30,
            step: 0,
            opacity: opacity,
          });
        }

        snow();
      }

      canvas.addEventListener('mousemove', function(e) {
        (mX = e.clientX), (mY = e.clientY);
      });

      window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      init();
    },
  },
};
</script>

<style lang="css" scoped>
body {
  margin: 0;
  height: 100%;
}

.title {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: linear-gradient(bottom, rgb(105, 173, 212) 0%, rgb(23, 82, 145) 84%);
  background-image: -o-linear-gradient(bottom, rgb(105, 173, 212) 0%, rgb(23, 82, 145) 84%);
  background-image: -moz-linear-gradient(bottom, rgb(105, 173, 212) 0%, rgb(23, 82, 145) 84%);
  background-image: -webkit-linear-gradient(bottom, rgb(105, 173, 212) 0%, rgb(23, 82, 145) 84%);
  background-image: -ms-linear-gradient(bottom, rgb(105, 173, 212) 0%, rgb(23, 82, 145) 84%);

  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0, rgb(105, 173, 212)),
    color-stop(0.84, rgb(23, 82, 145))
  );
}
</style>
