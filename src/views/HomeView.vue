<template>
  <div class="home" id="home">
    <NavigationBar />
    <div class="hero-container">
      <div class="hero-outter">
        <div class="image-container" ref="imageContainer">
          <img
            src="../assets/images/hero.png"
            loading="lazy"
            alt="Alfonsius Tolan Hera"
            class="hero-image"
          />
          <span></span>
        </div>
        <div class="hero-text">
          <h4>Hello! I'm Alfonsius Tolan Hera</h4>
          <span id="typewriter">
            <span>I'm a </span><span id="typed-text"></span><span class="typed-cursor"></span>
          </span>
          <p>
            I'm a software engineer student and frontend developer. I have a passion for programming
            and I'm always looking for new challenges to improve my skills.
          </p>
        </div>
      </div>
    </div>
    <div id="about" class="">
      <section class="about-container container">
        <div class="section-header">
          <h2><i class="bi bi-dash"></i> About Me</h2>
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
                PT. Wellmagic Media Digital is a company in the field of technology, especially in
                the fields of <i>Software & Web Development</i>, <i>SaaS Product Solution</i>,
                <i>AI & Data Solution</i>, <i>Multimedia & AR/VR Development</i>. I have experience
                here as an intern in the <i>Web Development</i> section, in this section I am a
                <i>Frontend Developer</i>.
              </p>
              <strong>SMKN 4 Tangerang</strong>
              <p>
                SMK Negeri 4 Kota Tangerang is a vocational high school specializing in engineering.
                I have been studying here since 3 years ago, now I am in grade 12, and I am majoring
                in Software Engineering. During my time here, I have gained a lot of experience,
                especially during the vocational practice activities and internship period, thanks
                to which I began to find my direction and purpose of what I want to do.
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
                    PT. Wellmagic Media Digital is a company in the field of technology, especially
                    in the fields of <i>Software & Web Development</i>,
                    <i>SaaS Product Solution</i>, <i>AI & Data Solution</i>,
                    <i>Multimedia & AR/VR Development</i>. I have experience here as an intern in
                    the <i>Web Development</i> section, in this section I am a
                    <i>Frontend Developer</i>.
                  </p>
                </li>
                <li>
                  <strong>SMKN 4 Kota Tangerang</strong>
                  <p>
                    SMK Negeri 4 Kota Tangerang is a vocational high school specializing in
                    engineering. I have been studying here since 3 years ago, now I am in grade 12,
                    and I am majoring in Software Engineering. During my time here, I have gained a
                    lot of experience, especially during the vocational practice activities and
                    internship period, thanks to which I began to find my direction and purpose of
                    what I want to do.
                  </p>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </section>
    </div>
    <div id="skill" class="">
      <section class="outer-skill-container container w-100">
        <div class="skill-container">
          <div class="section-header">
            <h2><i class="bi bi-dash"></i> Skills</h2>
          </div>
          <div class="skill-item-container">
            <div class="skill-item" ref="skillItem">
              <img src="../assets/images/html.png" loading="lazy" alt="html" />
              <p>HTML</p>
            </div>
            <div class="skill-item" ref="skillItem1">
              <img src="../assets/images/css.jpg" loading="lazy" alt="css" />
              <p>CSS</p>
            </div>
            <div class="skill-item" ref="skillItem2">
              <img src="../assets/images/javascript.jpg" loading="lazy" alt="javascript" />
              <p>JavaScript</p>
            </div>
            <div class="skill-item" ref="skillItem3">
              <img src="../assets/images/github.png" loading="lazy" alt="git" />
              <p>Github</p>
            </div>
            <div class="skill-item" ref="skillItem4">
              <img src="../assets/images/vuejs.png" loading="lazy" alt="git" />
              <p>Vue Js</p>
            </div>
            <div class="skill-item" ref="skillItem5">
              <img src="../assets/images/bootstrap.png" loading="lazy" alt="git" />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="project">
      <section class="outer-project-container container w-100">
        <div class="project-container">
          <div class="section-header">
            <h2><i class="bi bi-dash"></i> Projects</h2>
          </div>
          <div class="project-item-container">
            <div class="card" ref="card1">
              <div class="card-image">
                <img src="../assets/images/Monitoring Apps.png" alt="Monitoring Apps" />
                <div class="overlay">
                  <span class="mb-2">Monitoring Apps - Frontend</span>
                  <div class="tech-logo d-flex gap-2">
                    <img src="../assets/images/vuejs-black-white.png" loading="lazy" alt="" />
                    <img src="../assets/images/bootstrap-black-white.png" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card" ref="card2">
              <div class="card-image">
                <img src="../assets/images/Article.png" alt="Article Apps" />
                <div class="overlay">
                  <span class="mb-2">Article Apps</span>
                  <div class="tech-logo d-flex">
                    <img src="../assets/images/vuejs-black-white.png" loading="lazy" alt="" />
                    <img src="../assets/images/bootstrap-black-white.png" loading="lazy" alt="" />
                    <img src="../assets/images/laravel.png" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card" ref="card3">
              <div class="card-image">
                <img src="../assets/images/Material.png" loading="lazy" alt="Material Apps" />
                <div class="overlay">
                  <span class="mb-2">Material Apps</span>
                  <div class="tech-logo d-flex">
                    <img src="../assets/images/php.png" loading="lazy" alt="" />
                    <img src="../assets/images/javascript-black-white.png" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="end-page">
      <section>
        <div class="end-container container">
          <div class="end-content">
            <p>Got a question?</p>
            <span>Let's Talk</span>
            <div class="contact-container">
              <a href="mailto:alfontolan4@gmail.com">alfontolan4@gmail.com</a>
              <div class="contact-image">
                <a href="https://github.com/alfonsiusTH" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-github"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    ></path>
                  </svg>
                </a>
                <a href="https://instagram.com/alfonssth_/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-instagram"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    ></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/alfonsius-tolan-hera-230345313/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-linkedin"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup async>
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
      start: 'top 75%',
      end: 'top 25%',
      toggleActions: 'play reverse play reverse',
      // scrub: true,
    },
  })

  gsap.from('.hero-text p', {
    opacity: 0,
    x: -50,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.hero-container',
      start: 'top 75%',
      end: 'top 25%',
      toggleActions: 'play none none reverse',
      // scrub: true,
    },
  })

  gsap.from('#typewriter', {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: '.hero-container',
      start: 'top 75%',
      end: 'top 25%',
      toggleActions: 'play none none reverse',
      // scrub: true,
    },
  })

  gsap.from('.section-header', {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-header',
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none reverse',
      // scrub: true,
    },
  })

  gsap.from('.section-description-1', {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-description-1',
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none reverse',
      // scrub: true,
    },
  })

  gsap.from('.section-description-2', {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-description-2',
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none reverse',
      // scrub: true,
    },
  })

  gsap.utils.toArray('.skill-item').forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      scale: 0.5,
      duration: 0.8,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: item,
        start: 'top 95%',
        end: 'top 75%',
        toggleActions: 'play none play reverse',
        // scrub: true,
      },
      onComplete: () => {
        document.querySelector('.skill-item').style.pointerEvents = 'auto'
      },
    })
  })

  gsap.utils.toArray('.card').forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        end: 'top 25%',
        toggleActions: 'play none none reverse',
        // scrub: true,
      },
    })
  })

  gsap.from('.end-container', {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
      trigger: '.end-container',
      start: 'top 90%',
      end: 'top 50%',
      toggleActions: 'play none none reverse',
      // scrub: true,
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
  padding-top: calc(var(--navbar-height, 30px) + 1rem);
  min-height: 100vh;
  padding-bottom: 4rem;
}

.hero-container {
  overflow: hidden;
  width: 100%;
  padding: 1rem 6.6%;
  margin-top: 1.5rem;
}

.hero-outter {
  padding: 2rem 5% 5rem 5%;
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
  border-right: 0.1px solid black;
  padding-right: 1rem;
}

.section-description-2 {
  text-align: justify;
  border-left: 0.1px solid black;
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
  padding-bottom: 5rem;
  transition: all 0.3s ease;
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
  padding: 2rem;
  gap: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.skill-item:nth-child(odd):hover {
  transform: perspective(500px) rotateY(20deg) rotateX(10deg) !important;
  cursor: pointer;
}

.skill-item:nth-child(even):hover {
  transform: perspective(500px) rotateY(-20deg) rotateX(10deg) !important;
  cursor: pointer;
}

.skill-item img {
  width: 136px;
  height: 136px;
  object-fit: contain;
}

.outer-project-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0.8rem 5% 5rem 5%;
}

.project-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.project-item-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  font-weight: bold;
  margin-top: 12px;
}

.card {
  border-radius: 1rem;
}

.card-image {
  width: 510px;
  height: 378px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 1rem;
}

.card-image .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: all 0.3s ease;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
}

.card:hover .overlay {
  opacity: 0;
  cursor: pointer;
}

.card:hover .card-image img,
.card:hover .card-material-image img {
  transform: scale(1.05);
}

.card-image img {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  object-fit: cover;
  border-radius: 1rem;
}

.tech-logo img {
  max-width: 60px;
  padding: 0.6rem;
}

#end-page {
  padding: 5rem 5%;
}

.end-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.end-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.end-content p {
  font-size: 1.3em;
  font-family: 'Insonolata', monospace;
  color: rgb(107, 107, 107);
  margin: 0;
}

.end-content span {
  font-size: 3.5em;
  color: rgb(55, 55, 55);
  font-weight: bold;
  font-family: 'Insonolata', monospace;
}

.contact-container {
  display: flex;
  width: 100%;
  gap: 1.5rem;
  margin-top: 0.8rem;
  align-items: center;
}

.contact-container a {
  font-size: 1em;
  color: rgb(94, 93, 93);
  text-decoration: none;

}

.contact-image {
  display: flex;
  gap: 1.3rem;
}

@media (max-width: 768px) {
  .home {
    padding: 10px 0 10px 0;
    min-height: 100vh;
  }

  .hero-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 4%;
    width: 100%;
    gap: 1rem;
  }

  .hero-outter {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0 auto;
    border-bottom: 2px solid black;
    width: 100%;
    align-items: center;
    gap: 1rem;
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
    padding: 0.5rem 2% 5rem 2%;
  }

  .skill-item-container {
    text-align: center;
    width: 105vw;
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

  .skill-item:nth-child(odd):hover {
    transform: perspective(500px) rotateY(20deg) rotateX(10deg) !important;
    cursor: pointer;
  }

  .skill-item:nth-child(even):hover {
    transform: perspective(500px) rotateY(-20deg) rotateX(10deg) !important;
    cursor: pointer;
  }

  .skill-item img {
    width: 40px;
    height: 40px;
  }

  #project {
    padding: 0.5rem 4%;
  }

  .outer-project-container {
    padding: 2rem 5%;
  }

  .project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 2% 0rem 2%;
  }

  .project-item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1rem;
  }

  .card {
    border-radius: 1rem;
  }

  .card-image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 1rem;
  }

  .tech-logo img {
    max-width: 50px;
    padding: 7px;
    margin: 0;
  }

  #end-page {
    padding: 0 5% 6rem 5%;
    margin: 1rem;
  }

  .end-content p {
    font-size: 1em;
  }

  .end-content span {
    font-size: 2em;
  }

  .contact-container {
    display: flex;
    width: 100%;
    gap: 1.2rem;
    margin: 0.4rem 0 0 0;
    align-items: center;
  }
}
</style>
