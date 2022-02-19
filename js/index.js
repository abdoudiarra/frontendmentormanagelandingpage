function onLoad(){
    let navList = document.querySelector('#navigbar');
    let toggleButton = document.querySelector(".mobile-nav-toggle");
    // console.log(toggleButton);
    toggleButton.addEventListener('click', () => {
        const visibility = navList.getAttribute('data-visible');
        if(visibility === "false"){
            navList.setAttribute("data-visible", true);
            toggleButton.setAttribute("aria-expanded", true);
        } else if(visibility === "true"){
            navList.setAttribute("data-visible", false);
            toggleButton.setAttribute("aria-expanded", false);

        }
        console.log(visibility);
    });
}



