<template>
    <div id="navigation">
        <div class="outer-div">
            <div class="inner-div">
                <div id="nav">
                    <div class="nav-left">
                        <router-link to="/">Skip the Seed</router-link>
                    </div>
                    <div>

                    </div>
                    <div class="nav-right">
                        <router-link to="/#benefits">Benefits</router-link>
                        <router-link to="/#how">How we work</router-link>
                        <router-link to="/#contacts">Contact us</router-link>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>


<style lang="scss">
    @import "./assets/css/style.css";

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

    a:visited {
        color: black;
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
        color: black;
        font-weight: 400;
        letter-spacing: 0em;
        line-height: 1.4;
        opacity: 1;
    }

    a:hover {
        color: #006a15;
    }

    .outer-div {
    }

    .inner-div {
        margin: 0 auto;
        max-width: 1100px;
        height: 80px;
    }

    .nav-left {
        float: left;
        a {
            font-weight: bold;
        }
    }

    .nav-right {
        float: right;
        font-weight: 400;
        letter-spacing: 0em;
        line-height: 1.4;
        margin: 0px 0px 0px 20px;
        opacity: 1;
        padding: 0 0 0 0;
        text-align: center;
        max-width: calc(100% - 20px);
        a {
            font-weight: normal;
        }
    }

    #navigation {
        max-width: 100%;
        font-family: 'Lato-Regular', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/

    }

    #nav {

        padding: 35px;
        a {
            margin-left: 20px;
            margin-top: 25px;
            /*color: #2c3e50;*/
            font-size: 20px;
            /*&.router-link-exact-active {*/
            /*  color: #42b983;*/
            /*}*/
        }
    }
</style>
