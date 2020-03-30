<template>
    <div id="navigation">
        <div id="nav">
            <div class="nav-left">
                <router-link to="/">Skip the Seed</router-link>
            </div>
            <div>

            </div>
            <div class="nav-right">
                <router-link to="/">Benefits</router-link>
                <router-link to="/">Contact Us</router-link>
                <router-link to="/about">About</router-link>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
    @media all and (max-width: 500px) {
        .nav-right {
            display: none;
        }
    }

    /* General style  */
    body {
        margin: 0;
        min-height: 325px;
    }

    h1 {
        font-size: 48px;
    }

    a {
        font-size: 16px;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
    }

    a:link {
        text-decoration: none;
        border-radius: 0;
        color: #333;
        font-weight: 400;
        letter-spacing: 0em;
        line-height: 1.4;
        opacity: 1;
    }

    a:hover {
        color: #006a15;
    }

    .nav-left {
        float: left;
        a {
            font-weight: bold;
        }
    }

    .nav-right {
        float: right;
        a {
            font-weight: normal;
        }
    }

    #navigation {
        max-width: 100%;
        font-family: Lato, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/

    }

    #nav {

        height: 30px;
        padding: 35px;
        a {
            margin-top: 25px;
            /*color: #2c3e50;*/
            font-size: 20px;
            /*&.router-link-exact-active {*/
            /*  color: #42b983;*/
            /*}*/
        }
    }
</style>
