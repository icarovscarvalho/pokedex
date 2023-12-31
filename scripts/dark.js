const darkMode = document.getElementById('dark-mode-btn')
const darkModeSpan = document.getElementById('dark-light-theme')
const darkModeWord = document.getElementById('dark-mode-word')
const darkModeTitle = document.querySelector('header>h1')
const darkModeContainerImg = document.getElementById('container')
const interfaceLight = document.getElementById('interfaceGroup')
const professorOakLight = document.getElementById('professor-Oak')



let VerifyTrueorFalse = false

darkMode.onclick = darkAndLightMode
function darkAndLightMode() {
  if (VerifyTrueorFalse == false) {
    darkMode.classList.remove('dark-mode-field-OFF');
    darkModeWord.textContent = 'ON';
    darkMode.classList.add('dark-mode-field-ON');
    darkModeTitle.classList.add('darkModeTitle');
    darkModeContainerImg.classList.remove('containerBG');
    darkModeContainerImg.classList.add('containerDarkModeBG');
    darkModeSpan.textContent = 'dark_mode'
    // interfaceLight.classList.remove('interfaceGroupLight');
    // interfaceLight.classList.add('interfaceGroupDark');
    // professorOakLight.classList.remove('professor-OakLight');
    // professorOakLight.classList.add('professor-OakDark');

    document.body.classList.add('bodyDarkModeBG');
    VerifyTrueorFalse = true

  } else {
    darkMode.classList.remove('dark-mode-field-ON');
    darkModeWord.textContent = 'OFF';
    darkMode.classList.add('dark-mode-field-OFF');
    darkModeTitle.classList.remove('darkModeTitle');
    darkModeContainerImg.classList.remove('containerDarkModeBG');
    darkModeContainerImg.classList.add('containerBG');
    darkModeSpan.textContent = 'light_mode'
    // interfaceLight.classList.remove('interfaceGroupDark');
    // interfaceLight.classList.add('interfaceGroupLight');
    // professorOakLight.classList.remove('professor-OakDark');
    // professorOakLight.classList.add('professor-OakLight');

    document.body.classList.remove('bodyDarkModeBG');
    VerifyTrueorFalse = false

    darkMode.style.transition = 'all .5s ease-in-out';
    darkModeWord.style.transition = 'all .5s ease-in-out';
    darkModeTitle.style.transition = 'all .5s ease-in-out';
    darkModeContainerImg.style.transition = 'all .5s ease-in-out';
    document.body.style.transition = 'all .5s ease-in-out';
  }
}