const darkMode = document.getElementById('dark-mode-btn')
const darkModeWord = document.getElementById('dark-mode-word')
const darkModeTitle = document.querySelector('header>h1')
const darkModeContainerImg = document.getElementById('container')
const interfaceLight = document.getElementById('interfaceGroup')



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
    // interfaceLight.classList.remove('interfaceGroupLight');
    // interfaceLight.classList.add('interfaceGroupDark');
    document.body.classList.add('bodyDarkModeBG');
    VerifyTrueorFalse = true

  } else {
    darkMode.classList.remove('dark-mode-field-ON');
    darkModeWord.textContent = 'OFF';
    darkMode.classList.add('dark-mode-field-OFF');
    darkModeTitle.classList.remove('darkModeTitle');
    darkModeContainerImg.classList.remove('containerDarkModeBG');
    darkModeContainerImg.classList.add('containerBG');
    // interfaceLight.classList.remove('interfaceGroupDark');
    // interfaceLight.classList.add('interfaceGroupLight');
    document.body.classList.remove('bodyDarkModeBG');
    VerifyTrueorFalse = false

    darkMode.style.transition = 'all .5s ease-in-out';
    darkModeWord.style.transition = 'all .5s ease-in-out';
    darkModeTitle.style.transition = 'all .5s ease-in-out';
    darkModeContainerImg.style.transition = 'all .5s ease-in-out';
    document.body.style.transition = 'all .5s ease-in-out';
  }
}