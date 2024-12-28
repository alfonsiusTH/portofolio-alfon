<template>
  <div class="home" id="home">
    <NavigationBar />
    <div class="hero-container">
      <div class="hero-outter">
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
    </div>
    <div id="about" class="">
      <section class="about-container container">
        <div class="section-header">
          <h2>About Me</h2>
        </div>
        <div class="section-container">
          <div class="description-wrapper-1">
            <div class="section-description-1">
              <p>
                I'm from Tangerang, Indonesia. I'm currently studying at SMKN 4 Tangerang. During
                the 3 years of schooling, i have learned a lot about programming and web
                development. Based on that period of time, I felt that I liked web development. And
                during my internship from school, I got quite a lot of tasks related to web
                development. That's when I realized that web development is my passion. I want to be
                a web developer in the future, especially in the field of frontend developers.
              </p>
            </div>
          </div>
          <div class="description-wrapper">
            <div class="section-description-2" ref="description2">
              <strong>PT. Wellmagic Media Digital</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem ipsam
                distinctio quod dolorem, voluptatibus officia ut provident earum facilis iure
                voluptatem tempore dolores vitae quos doloribus. Laboriosam, accusamus atque.
              </p>
              <strong>SMKN 4 Tangerang</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate similique velit
                quia earum accusamus quo eaque illum cum quasi quidem quam consequuntur, eligendi ab
                suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum soluta
                impedit nostrum quisquam accusantium similique ea autem, vero repudiandae,
                consequuntur dolor! Modi tempora eos assumenda, perferendis porro placeat laborum
                aperiam!
              </p>
            </div>
          </div>
          <button class="btn btn-mobile d-md-none" @click="toggleDescription">
            <span v-if="!loadMore">See More About Me!</span>
            <span v-else> Close</span>
          </button>
          <transition @enter="enterAnimation" @leave="leaveAnimation">
            <div v-show="loadMore" class="section-description-2-mobile">
              <ul>
                <li>
                  <strong>PT. Wellmagic Media Digital</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quo
                    accusamus consequatur quasi inventore porro, eaque deserunt a. Voluptatibus
                    veritatis eaque debitis distinctio inventore similique repellat molestiae
                    temporibus asperiores pariatur!
                  </p>
                </li>
                <li>
                  <strong>SMKN 4 Kota Tangerang</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error accusantium
                    rerum aliquid tempora atque illum delectus? Quia blanditiis veniam tempora
                    molestias minus ut, id magnam quasi perferendis itaque aliquam?
                  </p>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </section>
    </div>
    <div id="skill" class="">
      <section class="outer-skill-container container">
        <div class="skill-container">
          <div class="skill-header">
            <h2>My Skills</h2>
          </div>
          <div class="skill-item-container">
            <div class="skill-item">
              <img src="../assets/images/html.png" alt="html" />
              <p>HTML</p>
            </div>
            <div class="skill-item">
              <img src="../assets/images/css.jpg" alt="css" />
              <p>CSS</p>
            </div>
            <div class="skill-item">
              <img src="../assets/images/javascript.jpg" alt="javascript" />
              <p>JavaScript</p>
            </div>
            <div class="skill-item">
              <img src="../assets/images/github.png" alt="git" />
              <p>Github</p>
            </div>
            <div class="skill-item">
              <img src="../assets/images/vuejs.png" alt="git" />
              <p>Vue Js</p>
            </div>
            <div class="skill-item">
              <img src="../assets/images/bootstrap.png" alt="git" />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
      </section>
    </div>
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
const loadMore = ref(false)

function toggleDescription() {
  loadMore.value = !loadMore.value
}

function enterAnimation(el, done) {
  gsap.fromTo(
    el,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', onComplete: done },
  )
}

function leaveAnimation(el, done) {
  gsap.fromTo(
    el,
    { opacity: 1, y: 0 },
    { opacity: 0, y: -20, duration: 0.5, ease: 'power3.in', onComplete: done },
  )
}

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

  gsap.from('.skill-header', {
    opacity: 0,
    smoothOrigin: true,
    y: -50,
    duration: 1,
    scrollTrigger: {
      trigger: '.skill-header',
      start: 'top 95%',
    },
  })

  gsap.from('.skill-item-container', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    smoothOrigin: true,
    scrollTrigger: {
      trigger: '.skill-item-container',
      start: 'top 95%',
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
  overflow: hidden;
  padding: 1rem 6%;
  margin-top: 1.5rem;
}

.hero-outter {
  padding: 3.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  gap: 5rem;
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
  background-image: conic-gradient(from 180deg, transparent, transparent);
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

.about-container {
  border-bottom: 1px solid black;
  padding: 1rem 2% 5rem 2%;
}

.section-container {
  display: flex;
  width: 100%;
}

.description-wrapper {
  display: flex;
  width: 100%;
}

.description-wrapper-1 {
  display: flex;
  width: 100%;
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

.section-description-2-mobile {
  padding-top: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  text-align: justify;
  font-size: 15px;
}

.section-description-2-mobile ul {
  list-style-image: linear-gradient(to left bottom, red, blue);
}

.btn-mobile {
  width: 100%;
  max-width: 190px;
  height: 100%;
  border-radius: 15px;
  max-height: 200px;
  padding: 1rem;
  margin: 10px auto;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  background: linear-gradient(135deg, #1a237e, #2390e3, #0d47a1, #146ef6);
}

.btn-mobile::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  background-image: conic-gradient(
    from 180deg,
    transparent,
    transparent,
    #1a237e,
    #2390e3,
    #0d47a1,
    #ffffff
  );
  animation: rotate 4s linear infinite;
  animation-delay: -2s;
}

.btn-mobile::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  background-image: conic-gradient(
    from 180deg,
    transparent,
    transparent,
    #1a237e,
    #2390e3,
    #0d47a1,
    #ffffff
  );
  animation: rotate 4s linear infinite;
}

.btn-mobile span {
  position: absolute;
  inset: 5px;
  background: white;
  color: #00589b;
  border-radius: 10px;
  z-index: 1;
  transition: all 0.4s ease-in-out;
}

.btn-mobile span:hover {
  background: linear-gradient(135deg, #1a237e, #2390e3, #0d47a1);
  color: white;
}

.section-header {
  margin-top: 3rem;
  margin-bottom: 3em;
  text-align: center;
}

.skill-header {
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
}

.outer-skill-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-bottom: 2rem;
  border-bottom: 1px solid black;
}

.skill-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 950px;
  justify-content: center;
  overflow: hidden;
}

.skill-item-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  gap: 1.5rem;
  font-weight: bold;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;
  gap: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.skill-item:nth-child(odd):hover {
  transform: perspective(500px) rotateY(20deg) rotateX(10deg);
  cursor: pointer;
}

.skill-item:nth-child(even):hover {
  transform: perspective(500px) rotateY(-20deg) rotateX(10deg);
  cursor: pointer;
}

.skill-item img {
  width: 136px;
  height: 136px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .home {
    padding-top: 10px;
    min-height: 100vh;
  }

  .hero-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 4%;
    width: 400px;
    gap: 2rem;
  }

  .hero-outter {
    display: flex;
    flex-direction: column;
    padding: 0.7rem;
    border-bottom: 2px solid black;
    width: 100%;
    align-items: center;
    gap: 3rem;
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

  #about {
    padding: 0.5rem 4%;
  }

  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid black;
    padding: 1rem 2%;
  }

  .section-header {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .section-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .description-wrapper {
    display: none;
    width: 100%;
  }

  .section-description-1 {
    border-right: none;
    padding-right: 0;
    margin-right: 10px;
    margin-left: 10px;
  }

  .section-description-2 {
    padding-left: 0;
  }

  #skill {
    display: flex;
    padding: 0.5rem 4%;
  }

  .skill-header {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .outer-skill-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 1rem 2%;
    border-bottom: 2px solid black;
  }

  .skill-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .skill-item-container {
    text-align: center;
    width: 400px;
    padding: 2rem;
    gap: 1.5rem;
    font-weight: bold;
    font-size: 0.8rem;
  }

  .skill-item {
    width: 90px;
    padding: 1rem;
    height: 105px;
  }

  .skill-item img {
    width: 40px;
    height: 40px;
  }
}
</style>
