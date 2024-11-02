// Check if the user has a theme preference in local storage
const theme = localStorage.getItem('theme');
if (theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    if (theme === 'dark') {
        document.getElementById('themeSwitch').checked = true;
        document.querySelector('.form-check-label').innerHTML = '<i class="bx bx-moon"></i>';
    }
}

// Function to toggle between light and dark modes
function toggleMode() {
    const htmlElement = document.documentElement;
    const themeSwitchLabel = document.querySelector('.form-check-label');
    const isChecked = document.getElementById('themeSwitch').checked;

    if (isChecked) {
        // Switch to dark mode
        htmlElement.setAttribute('data-bs-theme', 'dark');
        themeSwitchLabel.innerHTML = '<i class="bx bx-moon"></i>';
        // Save the theme preference in local storage
        localStorage.setItem('theme', 'dark');
    } else {
        // Switch to light mode
        htmlElement.setAttribute('data-bs-theme', 'light');
        themeSwitchLabel.innerHTML = '<i class="bx bx-sun"></i>';
        // Save the theme preference in local storage
        localStorage.setItem('theme', 'light');
    }
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)