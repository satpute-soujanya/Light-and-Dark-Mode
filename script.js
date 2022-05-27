const toggleChecker = document.querySelector('input[type="checkbox"]')
const toggleIcon = document.getElementById('toggle_icon')
const image1 = document.getElementById('img1')
const image2 = document.getElementById('img2')
const image3 = document.getElementById('img3')
// Changing Images
function imageMode(color) {
  image1.src = `./img/undraw_conceptual_idea_${color}.svg`
  image2.src = `./img/undraw_feeling_proud_${color}.svg`
  image3.src = `./img/undraw_proud_coder_${color}.svg`
}
function darkMode() {
  toggleIcon.children[0].textContent = 'Dark Mode'
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
  imageMode('dark')
}
function lightMode() {
  toggleIcon.children[0].textContent = 'Light Mode'
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
  imageMode('light')
}

function SwitchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    darkMode()
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')

    lightMode()
  }
}

toggleChecker.addEventListener('change', SwitchTheme)

// Check local storage for theme
const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)
  if (currentTheme == 'dark') {
    toggleChecker.checked = true
    darkMode()
  }
}
console.log(currentTheme)
