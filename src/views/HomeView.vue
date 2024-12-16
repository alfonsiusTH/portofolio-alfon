<template>
  <div class="home" id="home">
    <NavigationBar />
    <div class="hero-container">
      <div class="image-container" ref="imageContainer">
        <img src="../assets/images/hero.png" alt="Alfonsius Tolan Hera" class="hero-image" />
        <span></span>
      </div>
      <div class="hero-text">
        <h4>Hello! I'm Alfonsius Tolan Hera</h4>
        <span id="typewriter">
          <span>I'm a </span><span id="typed-text"></span><span class="typed-cursor"></span>
        </span>
        <p>
          Hello! My Name is Alfonsius Tolan Hera. I'm a software engineer student and frontend
          developer. I have a passion for programming and I'm always looking for new challenges to
          improve my skills.
        </p>
      </div>
    </div>
    <section
      id="about"
      class="about-container container d-flex flex-column justify-content-center align-items-center"
    >
      <div class="section-header">
        <h2>About Me</h2>
      </div>
      <div class="section-container d-flex flex-column w-100">
        <div class="description-wrapper d-flex w-100">
          <div class="section-description-1">
            <p>
              I'm from Tangerang, Indonesia. I'm currently studying at SMKN 4 Tangerang. During the
              3 years of schooling, i have learned a lot about programming and web development.
              Based on that period of time, I felt that I liked web development. And during my
              internship from school, I got quite a lot of tasks related to web development. That's
              when I realized that web development is my passion. I want to be a web developer in
              the future, especially in the field of frontend developers.
            </p>
          </div>
          <div class="section-description-2">
            <ul>
              <li>
                SMKN 4 Tangerang
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate similique
                  velit quia earum accusamus quo eaque illum cum quasi quidem quam consequuntur,
                  eligendi ab suscipit. Id cupiditate nam suscipit beatae! Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Vitae quis beatae exercitationem obcaecati
                  cupiditate officia veniam esse unde soluta. Neque pariatur cum deleniti, sequi sit
                  velit nemo dolore ipsa quas. Lorem ipsum dolor sit amet consectetur
                </p>
              </li>
              <li>
                SMP Santa Maria 2
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate, error
                  deserunt ipsam soluta maxime. Voluptas placeat, ipsa totam suscipit corrupti
                  obcaecati animi enim ipsam debitis ex incidunt quam accusamus. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Ipsa aperiam quisquam deserunt ab possimus
                  explicabo numquam quae temporibus culpa maiores? Porro doloribus beatae dolorem
                  sequi inventore laudantium cum voluptatem nesciunt.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Import
import NavigationBar from '@/components/NavigationBar.vue'
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const imageContainer = ref(null)

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

  gsap.from('.hero-text h4', {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
      trigger: '.hero-container',
      start: 'top 80%',
    },
  })

  gsap.from('.hero-text p', {
    opacity: 0,
    x: -50,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.hero-container',
      start: 'top 80%',
    },
  })

  gsap.from('.section-header', {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-header',
      start: 'top 90%',
    },
  })

  gsap.from('.section-container', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-container',
      start: 'top 90%',
    },
  })

  const mouseMoveHandler = (e) => {
    const { clientX, clientY } = e
    const container = imageContainer.value
    const bounds = container.getBoundingClientRect()
    const centerX = bounds.left + bounds.width / 2
    const centerY = bounds.top + bounds.height / 2

    const offsetX = (clientX - centerX) / 10
    const offsetY = (clientY - centerY) / 10

    const distance = Math.sqrt(Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2))

    if (distance > 450) {
      document.removeEventListener('mousemove', mouseMoveHandler)
      gsap.to(container, {
        x: 0,
        y: 0,
        ease: 'power3.out',
        duration: 0.5,
      })
      document.addEventListener('mousemove', mouseMoveHandler)
    } else {
      gsap.to(container, {
        x: offsetX,
        y: offsetY,
        ease: 'power3.out',
        duration: 0.3,
      })
    }
  }

  document.addEventListener('mousemove', mouseMoveHandler)

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
  padding: 1.8rem;
  margin-top: 1.5rem;
  gap: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid black;
  overflow: hidden;
  margin: 1.2rem 5%;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  height: 300px;
  position: relative;
  will-change: transform;
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
  width: 85%;
  word-wrap: break-word;
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

.section-description-1 {
  text-align: justify;
  font-size: 15px;
  border-right: 1px solid black;
  padding-right: 1rem;
}

.section-description-2 {
  text-align: justify;
  font-size: 15px;
  padding-left: 1rem;
}

.section-header {
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
}

@media (max-width: 768px) {
  .home {
    padding-top: 10px;
    min-height: 100vh;
  }

  .hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid black;
    padding: 1rem 2%;
    gap: 3rem;
    word-break: break-all;
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
    padding-bottom: 1rem;
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

  .section-header {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .section-container {
    padding: 1rem;
  }

  .description-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .section-description-1 {
    border-right: none;
    border-bottom: 2px solid black;
    padding-right: 0;
    padding-bottom: 1rem;
    margin-right: 10px;
    margin-left: 10px;
  }

  .section-description-2 {
    padding-left: 0;
    padding-top: 2rem;
  }
}
</style>
