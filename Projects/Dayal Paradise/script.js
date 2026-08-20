const carousel = document.querySelector("#indicators-carousel");

if (carousel) {

    const restartAnimation = (slide) => {

        const heading = slide.querySelector(".animate-slide-down");
        const paragraph = slide.querySelector(".animate-slide-up");

        if (heading) {
            heading.style.animation = "none";
            heading.offsetHeight;
            heading.style.animation = "";
        }

        if (paragraph) {
            paragraph.style.animation = "none";
            paragraph.offsetHeight;
            paragraph.style.animation = "";
        }
    };


    const observer = new MutationObserver((mutations) => {

        mutations.forEach((mutation) => {

            if (mutation.type === "attributes" &&
                mutation.attributeName === "class") {

                const slide = mutation.target;

                if (
                    slide.matches("[data-carousel-item]") &&
                    !slide.classList.contains("hidden")
                ) {
                    restartAnimation(slide);
                }

            }

        });

    });


    observer.observe(carousel, {
        attributes: true,
        subtree: true,
        attributeFilter: ["class"]
    });

}