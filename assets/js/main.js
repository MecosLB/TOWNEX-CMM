gsap.registerPlugin(ScrollTrigger);

(() => {

    document.addEventListener('DOMContentLoaded', () => {
        // MAIN LOGO ANIMATION
        gsap.from(document.querySelector('#main .logo img'), {
            scrollTrigger: {
                trigger: '#main',
                toggleActions: 'play none none none',
            },
            right: '100%',
            duration: 1.2,
            ease: 'easeInOut',
        });
        // END MAIN LOGO ANIMATION

        // SLOGAN ANIMATION
        gsap.from(document.querySelector('#slogan h1'), {
            scrollTrigger: {
                trigger: '#slogan h1',
                toggleActions: 'play none none reset',
            },
            duration: 1,
            clipPath: 'inset(0% 50%)',
            ease: 'easeInOut',
        });
        // END SLOGAN ANIMATION

        // BUILDING ANIMATION
        const bgImg = document.querySelector('#building .bg-img');

        gsap.from('#building .content > *', {
            scrollTrigger: {
                trigger: '#building .content',
                toggleActions: 'play none none reset',
            },
            y: '100%',
            opacity: 0,
            stagger: 0.2,
            ease: 'easeInOut',
        });

        bgImg.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / (window.innerWidth / 2),
                mouseY = e.clientY / (window.innerHeight / 2);

            e.target.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
        });

        bgImg.addEventListener('touchmove', (e) => {
            const touches = e.changedTouches;

            for (let touch of touches) {
                const mouseX = touch.clientX / (window.innerWidth / 2),
                    mouseY = touch.clientY / (window.innerHeight / 2);

                bgImg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
            }
        });

        document.querySelector('#building .content').addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / (window.innerWidth / 2),
                mouseY = e.clientY / (window.innerHeight / 2);

            bgImg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
        });

        document.querySelector('#building .content').addEventListener('touchmove', (e) => {
            const touches = e.changedTouches;

            for (let touch of touches) {
                const mouseX = touch.clientX / (window.innerWidth / 2),
                    mouseY = touch.clientY / (window.innerHeight / 2);

                bgImg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
            }
        });
        // END BUILDING ANIMATION

        // VIDEO ANIMATION
        const videoComp = document.querySelector('#video video'),
            matchMedia = gsap.matchMedia();
        let haveEntered = 0;

        gsap.to('#video video', {
            scrollTrigger: {
                trigger: '#video',
                onEnter: () => {
                    if (!haveEntered)
                        return haveEntered = 1;

                    matchMedia.add('(min-width: 768px)', () => {
                        gsap.fromTo(videoComp, {
                            y: '-100%',
                        },
                            {
                                y: 0,
                                position: 'relative',
                                width: '100vw',
                                height: '100vh',
                                ease: 'easeInOut',
                            });
                    });
                },
                onLeaveBack: () => {
                    matchMedia.add('(min-width: 768px)', () => {
                        gsap.fromTo(videoComp, {
                            y: '100%',
                        },
                            {
                                y: 0,
                                position: 'fixed',
                                bottom: 0,
                                left: 0,
                                width: 460,
                                height: 240,
                                ease: 'easeInOut',
                            });
                    });
                },
            }
        });
        // END VIDEO ANIMATION
    });
})();