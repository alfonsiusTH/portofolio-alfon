<template>
  <div class="home">
    <NavigationBar />
    <div class="hero-container container">
      <div class="image-container">
        <img src="../assets/images/hero.png" alt="Alfonsius Tolan Hera" class="hero-image" />
        <span></span>
      </div>
      <div class="hero-text">
        <h4>Hello! I'm Alfonsius Tolan Hera</h4>
        <span id="typewriter">
          <span>I'm a </span><span id="typed-text"></span><span class="typed-cursor"></span>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos illo deleniti fugit
          temporibus harum quo corrupti voluptates consequatur! Corporis illo accusamus expedita
          delectus ducimus ab molestias odio ipsa tempore nobis.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import
import NavigationBar from '@/components/NavigationBar.vue'
import { onMounted } from 'vue'
import Typed from 'typed.js'

const home = 'home'

onMounted(() => {
  const role = {
    strings: ['Software Engineer Student', 'Frontend Developer'],
    typedSpeed: 60,
    backSpeed: 30,
    loop: true,
    cursorChar: '|',
    onComplete: (self) => {
      const cursor = document.querySelector('.typed-cursor')
      if (cursor) {
        cursor.style.display = 'inline-block'
      }
    },
  }
  const typed = new Typed('#typed-text', role)

  return () => {
    typed.destroy()
  }
})
</script>

<style scoped>
.home {
  padding-top: calc(var(--navbar-height, 60px) + 1rem);
  min-height: 100vh;
  padding-bottom: 4rem;
}

.hero-container {
  display: flex;
  align-items: center;
  padding: 2rem;
  margin-top: 1.5rem;
  gap: 5rem;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  width: 500px;
  height: 300px;
  position: relative;
}

.image-container::after {
  content: '';
  position: absolute;
  width: 500px;
  height: 500px;
  background-image: conic-gradient(from 180deg, transparent, transparent, #000000);
  animation: rotate 4s linear infinite;
  animation-delay: -2s;
}

.image-container::before {
  content: '';
  position: absolute;
  width: 500px;
  height: 500px;
  background-image: conic-gradient(from 180deg, transparent, transparent, #222222);
  animation: rotate 4s linear infinite;
}

.image-container span {
  position: absolute;
  inset: 5px;
  background: white;
  border-radius: 10px;
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 10;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.hero-text h4 {
  font-size: 1.5rem;
  font-weight: bold;
}

#typewriter {
  color: rgb(7, 121, 208);
  font-weight: bold;
  font-size: 1.3rem;
}

.hero-text p {
  font-size: 1rem;
  text-align: justify;
}

@media (max-width: 768px) {
  .home {
    margin: 0;
    padding: 0;
  }
  .hero-container {
    margin-top: 0;
    flex-direction: column;
  }

  .image-container {
    width: 60%;
    height: 230px;
  }

  .image-container::after {
    width: 400px;
    height: 400px;
  }

  .image-container::before {
    width: 400px;
    height: 400px;
  }

  .hero-text {
    text-align: center;
    gap: 1;
  }

  .hero-text h4 {
    font-size: 1.2rem;
  }

  #typewriter {
    font-size: 1.1rem;
  }

  .hero-text p {
    font-size: 0.9rem;
  }
}
</style>
