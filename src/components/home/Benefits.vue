<template>
    <div class="benefits">
        <div class="benefits-big-header">
            <div class="outer-div">

                <h1> We will do all the work for you</h1>
            </div>
            <div class="outer-div">
                <p> Let us get rid of your messy, time consuming, and unsanitary hand trimming! Our new professional
                    equipment will trim everything you've got faster and cleaner!</p>
            </div>
        </div>
        <div class="outer-div">
            <h1 class="benefits-header"> Benefits of professional trimming</h1>
        </div>
        <main>
            <article>
                <img alt="header" src="../../assets/ic-flower@2x.png">
                <h1>Clean</h1>
                <p>We clean and sanitize our equipment after every job to ensure that the final trimmings will come out
                    without having touched a person's skin. This will prevent human oils and dirt from getting into the
                    weed. No more sticky hands!</p>
            </article>
            <article>
                <img alt="header" src="../../assets/ic-clock@2x.png">
                <h1>Quick</h1>
                <p>Our equipment will tumble and trim your buds before your eyes through tumbling.</p>
            </article>
            <article>
                <img alt="header" src="../../assets/ic-sanitary@2x.png">
                <h1>Sanitary</h1>
                <p>We clean and sanitize our equipment after every trimming to ensure that the final trimmings will come
                    out without having touched a person's skin, preventing human oils and dirt from getting to the
                    trimming. No more sticky hands!</p>
            </article>
            <article>
                <img alt="header" src="../../assets/ic-save-money@2x.png">
                <h1>Save time & money</h1>
                <p>Gone are the hours and days of hastily and clumsily trimming each bud by hand for hours, and even
                    days. Now you can save all that time and money, by relaxing and letting our equipment do the job in
                    a matter of minutes, instead of hours</p>
            </article>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'Benefits',
        methods: {
            toBenefits() {

                console.log(document.querySelector(".benefits"));
                document.querySelector(".benefits").scrollIntoView();
            }
        }
    }
</script>


<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    .outer-div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .inner-div {
        margin: 0 auto;
        max-width: 1100px;
        height: 80px;
    }

    img {
        transition: transform .4s;
    }

    img:hover {
        transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }

    .benefits-header:hover {
        margin-bottom: 30px;
    }

    /*.benefits {*/
    /*    max-width: 1100px;*/

    /*    !*width: 100%;*!*/
    /*    !*display: flex;*!*/
    /*    !*flex-direction: row;*!*/
    /*    !*flex-wrap: wrap;*!*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    text-align: center;*/
    /*    display: grid;*/
    /*    grid-template-columns: repeat(auto-fill, minmax(1fr));*/
    /*}*/

    /*.benefits-header {*/
    /*    max-width: 1100px;*/
    /*}*/
    main {
        max-width: 1100px;
        margin: 30px auto;
        padding: 0 20px;
        width: 100%;
        display: grid;
        /* Define Auto Row size */
        /*grid-auto-rows: 800px;*/
        /*Define our columns */
        grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
        grid-gap: 1em;

        p {
            color: black;

        }
    }

    article {
        overflow: auto;
        /*border-radius: 10px;*/
        color: #fff;
        justify-content: center;
        align-items: center;
        text-align: center;

        h1 {
            color: #000;
            font-size: 24px;
        }
    }


    .inner-div {
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    @media all and (min-width: 769px) {
        main {
            grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        }
        article {
            max-width: 100%;
        }
        .outer-div > p {
            width: 50%;
            max-width: 50%;
        }


    }


</style>
