<template>
  <nav class="navbar w-100">
    <div class="navbar-container" ref="navbarContainer">
      <a href="#" class="logo navbar-brand" ref="navbarBrand">Alfonsius Tolan Hera</a>
      <div class="desktop-menu">
        <ul class="navbar-menu">
          <li v-for="item in menu" class="nav-item" :key="item.name">
            <a
              class="text-decoration-none nav-link"
              :ref="item.ref"
              :href="item.href"
              @click="scrollToSection(item.href)"
              >{{ item.name }}</a
            >
          </li>
          <a class="btn contact-btn" ref="buttonContact" href="https://wa.me/6289630417337"
            >Contact</a
          >
        </ul>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->

  <div class="d-block d-md-none">
    <div class="mobile-outter">
      <div class="mobile-conatiner">
        <a
          v-for="item in menu"
          class="text-decoration-none item-button"
          :key="item.name"
          :href="item.href"
          @click="scrollToSection(item.href)"
        >
        <i v-html="item.i"></i>
      </a>

        <a href="https://wa.me/6289630417337" class="text-decoration-none item-button"
          ><i class="bi bi-whatsapp"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup async>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

const navbar = 'NavigationBar'

const navbarContainer = ref(null)
const navbarBrand = ref(null)
const navbarItem1 = ref(null)
const navbarItem2 = ref(null)
const navbarItem3 = ref(null)
const navbarItem4 = ref(null)
const buttonContact = ref(null)

const menu = ref([
  { name: 'Home', href: '#home', ref: 'navbarItem1', i: '<i class="bi bi-house-door-fill"></i>' },
  { name: 'About', href: '#about', ref: 'navbarItem2', i: '<i class="bi bi-person-fill"></i>' },
  { name: 'Skill', href: '#skill', ref: 'navbarItem3', i: '<i class="bi bi-code-slash"></i>' },
  { name: 'Project', href: '#project', ref: 'navbarItem4', i: '<i class="bi bi-collection"></i>' },
])

const scrollToSection = (href) => {
  const section = document.querySelector(href)
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  gsap.from(navbarContainer.value, {
    opacity: 0,
    duration: 1,
    x: -30,
    delay: 0.4,
    ease: 'power4.out',
    onComplete: () => {
      gsap.to(buttonContact.value, {
        opacity: 1,
        duration: 0.3,
        x: 0,
        delay: 1,
        ease: 'power3.out',
      })
    },
  })

  gsap.from(navbarBrand.value, {
    opacity: 0,
    duration: 1,
    x: -30,
    delay: 0.5,
    ease: 'power3.out',
  })

  gsap.from(navbarItem1.value, {
    opacity: 0,
    duration: 1,
    x: -30,
    delay: 0.7,
    ease: 'power3.out',
  })

  gsap.from(navbarItem2.value, {
    opacity: 0,
    duration: 1,
    x: -30,
    delay: 0.8,
    ease: 'power3.out',
  })

  gsap.from(navbarItem3.value, {
    opacity: 0,
    duration: 1,
    x: -30,
    delay: 0.9,
    ease: 'power3.out',
  })

  gsap.from(navbarItem4.value, {
    opacity: 0,
    duration: 1,
    x: -30,
    delay: 1,
    ease: 'power3.out',
  })
})
</script>

<style scoped>
.navbar {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(3px);
  padding: 1rem 2%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-size: 1rem;
  color: black;
  position: relative;
  transition: color 0.3s ease;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: black;
  transition:
    width 0.3s ease,
    left 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
  left: 0;
}

.nav-item .nav-link:active {
  font-weight: 700;
}

.contact-btn {
  margin-left: 1rem;
  border: 2px solid black;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.contact-btn:hover {
  background-color: black;
  color: white;
}

.mobile-outter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.4rem 3%;
  position: fixed;
  bottom: 0;
  z-index: 1000;
}

.mobile-conatiner {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 1rem;
  padding: 0.86rem;
  font-size: 5vw;
  background-color: #1c1c1c;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.item-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;
  color: white;
  background-color: transparent;
  position: relative;
  font-size: 1.5rem;
}

.item-button::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  transition:
    width 0.3s ease,
    left 0.3s ease;
}

.item-button:hover:after {
  content: '';
  position: absolute;
  bottom: -7px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1rem;
  width: 20px;
  height: 2px;
  background-color: #fff;
  animation: glow 1s infinite alternate;
}

.item-button:hover {
  background-color: white;
  color: #1c1c1c;
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.3);
}

.item-button:active {
  transform: scale(1);
  font-weight: bold;
}

.item-button:focus-visible {
  outline: none;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}

.item-button i {
  transition: transform 0.3s ease;
}

.item-button:hover i {
  transform: rotate(15deg);
}

@keyframes glow {
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
}

@media (max-width: 768px) {
  .navbar {
    display: none;
  }
  .mobile-conatiner {
    display: flex;
  }
}

@media (min-width: 769px) {
  .mobile-conatiner {
    display: none;
  }
}
</style>
