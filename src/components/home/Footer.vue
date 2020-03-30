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
               <a color="black" :href="`mailto:${email}`"><h3>sales@skiptheseed.com</h3></a>
                <a color="black" :href="`tel:${phoneFirst}`"><h3>(902) 452-SEED</h3></a>
                <a color="black" :href="`tel:${phoneSecond}`"><h3>(902) 452-7333</h3></a>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Footer',
        data: function() {
            return {
                email: 'sales@skiptheseed.com',
                phoneFirst: '(902) 452-SEED',
                phoneSecond: '(902) 452-7333',
            };
        }
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
            padding: 25px;
        }
    }

    .column h3 {
        font-size: 28px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        /*text-align: center;*/
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

    .footer .right-nav .social-nav {
        /*margin: 10px 0px;*/
        /*margin-bottom: 20px;*/
    }

    .footer .right-nav .social-nav a {
        padding-right: 5px;
    }

    @media all and (max-width: 750px) {
        .footer .wrapper {
            flex-flow: column wrap;
            /*align-items: center;*/
        }

        .footer .mini-nav {
            display: flex;
        }

        .footer .right-nav .social-nav {
            /*text-align: center;*/
        }
    }

</style>
