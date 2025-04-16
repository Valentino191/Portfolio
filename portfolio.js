 
       
        const themeSwitch = document.querySelector('.theme-switch');
        const htmlElement = document.documentElement;
        const moonIcon = '<i class="fas fa-moon"></i>';
        const sunIcon = '<i class="fas fa-sun"></i>';

   
        const savedTheme = localStorage.getItem('theme') || 'dark';
        htmlElement.setAttribute('data-theme', savedTheme);
        themeSwitch.innerHTML = savedTheme === 'dark' ? moonIcon : sunIcon;

      
        themeSwitch.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            themeSwitch.innerHTML = newTheme === 'dark' ? moonIcon : sunIcon;
            
           
            localStorage.setItem('theme', newTheme);
        });
   
