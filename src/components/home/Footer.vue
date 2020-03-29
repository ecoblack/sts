<template>
    <div class="footer">

        <div class="columns info">
            <div class="column">
                <h3 style="font-weight: bold">Skip the Seed</h3>

            </div>

            <div class="column">
                <h3>Benefits</h3>
                <h3>How we work</h3>
                <h3>Contact us</h3>
            </div>

            <div class="column" style="text-align: right">
                <h3> sales@skiptheseed.com</h3>
                <h3> (902) 452-SEED</h3>
                <h3> (902) 452-7333</h3>
            </div>
        </div>

        <div class="footer">
            <div class="wrapper">
                <!-- ZEIT SVG Logo created using only CSS3 techniques -->
                <a href="https://zeit.co" target="_blank" rel="noopener">
                    <div class="zeit-logo">
                        <div class="triangle"></div>
                        <div class="logo-text">ZEIT</div>
                    </div>
                </a>


            </div>

        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Footer',
    }
</script>

<style scoped lang="scss">
    body {
        background-color: black;
        color: white;

        font-family: monospace, sans-serif;
    }

    body .header {
        font-size: 16px;
        text-align: center;
    }

    .columns {
        padding: 50px;
        display: block;

        margin: 0 auto;

        display: flex;
        flex-flow: row wrap;
    }

    .columns .column {
        flex: 0 1 auto;

        max-width: 340px;
        margin: 10px;

        text-align: left;
        margin: 0 auto;
    }

    .columns .column h3 {
        text-align: center;
    }

    @media all and (max-width: 768px) {
        .columns {
            flex-flow: column wrap;
            margin: 0 0;
        }
    }

    .zeit-logo {
        color: white;
        display: block;

        margin-right: 20px;
    }

    .zeit-logo .triangle {
        display: inline-block;
        vertical-align: baseline;

        width: 0;
        height: 0;

        border-bottom: 23px solid white;
        border-left: 23px solid transparent;
        border-right: 23px solid transparent;
    }

    .zeit-logo .logo-text {
        display: inline-block;
        font-size: 26px;
    }
    .column h3 {
        font-size: 28px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
    }
    .footer {
        font-size: 12px;
    }

    .footer .wrapper {
        margin: 20px auto;
        padding: 10px;

        max-width: 1100px;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }

    .footer a {
        text-decoration: none;
        transition: color 0.2s;
    }

    .footer a:hover {
        color: #fff;
    }

    .footer .mini-nav {
        margin: 0 100px 0 30px;
        list-style: none;
        padding: 0;
    }

    .footer .mini-nav .mini-nav-item {
        height: 25px;
        line-height: 20px;
        vertical-align: middle;
    }

    .nav-link {
        display: inline-block;
        vertical-align: middle;
    }

    .nav-link .icon svg {
        fill: currentColor;
    }

    .footer .right-nav .social-nav {
        text-align: right;
        margin: 10px 0px;
        margin-bottom: 20px;
    }

    .footer .right-nav .social-nav a {
        padding-right: 5px;
    }

    .footer .right-nav .social-nav a:nth-last-of-type(n + 2) {
        border-right: 1px solid #666;
    }

    @media all and (max-width: 750px) {
        .footer .wrapper {
            flex-flow: column wrap;
            align-items: center;
        }

        .footer .mini-nav {
            display: flex;
        }

        .footer .zeit-logo {
            margin: 10px;
        }

        .footer .mini-nav {
            margin: 15px auto;
        }

        .footer .mini-nav .mini-nav-item {
            padding-right: 15px;
        }

        .footer .right-nav .social-nav {
            text-align: center;
        }
    }

</style>
