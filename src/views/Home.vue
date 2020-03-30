<template>
    <div class="home">
        <Header/>
        <LowerHeader/>
        <Benefits/>
<!--        <Main/>-->
        <FooterImage/>
        <Footer/>
    </div>
</template>

<script>

    var slice = [].slice;
    var navs = slice.call(document.querySelectorAll('.nav a'), 0);
    navs.forEach(function (nav) {
        nav.addEventListener('click', function (e) {
            var href = e.target.getAttribute('href');
            selectNav(href.replace('#', ''));
        });
    });

    function selectNav(className) {
        var el = document.querySelector('.' + className);
        console.log(el, el.className);
        el.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    }

    // @ is an alias to /src
    import Header from '@/components/home/Header.vue'
    import LowerHeader from '@/components/home/LowerHeader.vue'
    import Benefits from '@/components/home/Benefits.vue'
    // import Main from '@/components/home/Main.vue'
    import Footer from '@/components/home/Footer.vue'
    import FooterImage from '@/components/home/FooterImage.vue'

    export default {
        name: 'Home',
        components: {
            Header,
            LowerHeader,
            Benefits,
            // Main,
            FooterImage,
            Footer
        }
    }
</script>
