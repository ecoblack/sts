<template>
    <div class="main">
        <main>
            <article>
                <img alt="header" src="../../assets/img-1.png">
                <h1>You call us</h1>
                <p>We come to you with our equipment, set up, and will even harvest for you if you like.</p>
            </article>
            <article>
                <img alt="header" src="../../assets/img-2.png">
                <h1>We do all the work</h1>
                <p>We take every precaution to make sure that your buds are handled with expert care, and gloved hands.
                    We send them all through our machine which quickly clips all the undesired debris from your product.
                    Within minutes, out comes it comes, clean and without outside impurities."</p>
            </article>
            <article>
                <img alt="header" src="../../assets/img-3.png">
                <h1>You keep ALL the clippings and results</h1>
                <p>Then we will give you back all your trimmings, and we will clean and sanitize our equipment to make
                    sure we didn't miss anything. We pack our equipment and leave.</p>
            </article>
        </main>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Main',
    }
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    main {
        max-width: 1100px;
        margin: 30px auto;
        padding: 0 20px;
        width: 100%;
        display: grid;
        /* Define Auto Row size */
        /*grid-auto-rows: 800px;*/
        /*Define our columns */
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 1em;

        p {
            color: black;

        }
    }

    article {
        overflow: auto;
        max-width: 540px;
        border-radius: 10px;
        padding: 20px;
        color: #fff;

        h1 {
            color: #000
        }
    }
</style>
