<template>
    <div id="benefits">
        <div class="outer-div">
            <!--&lt;!&ndash;            <div class="inner-div">&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;                <h1>&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;                    We will do all the work for you&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;                </h1>&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;                <p>&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;                    Let us get rid of your messy, time consuming, and unsanitary hand trimming! Our new professional&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;                    equipment will trim everything you've got faster and cleaner!&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;                </p>&ndash;&gt;&ndash;&gt;-->

            <!--&lt;!&ndash;&lt;!&ndash;                <h1>&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;                    We will do all the work for you&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;                </h1>&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;            </div>&ndash;&gt;-->
            <h1 class="benefits-header"> Benefits of professional trimming</h1>
        </div>
        <!--        <div class="benefits-header">-->
        <!--            <h1>-->
        <!--                We will do all the work for you-->
        <!--            </h1>-->
        <!--            <p>-->
        <!--                Let us get rid of your messy, time consuming, and unsanitary hand trimming! Our new professional equipment will trim everything you've got faster and cleaner!-->
        <!--            </p>-->
        <!--        </div>-->
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
    // @ is an alias to /src

    export default {
        name: 'Benefits',
        methods: {
            toBenefits() {

                console.log(document.querySelector("#benefits"));
                document.querySelector("#benefits").scrollIntoView();
            }
        }
    }
</script>


<style lang="scss" scoped>

    h1 {
        text-align: center;
    }

    * {
        box-sizing: border-box;
    }

    .outer-div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .inner-div {
        margin: 0 auto;
        max-width: 1100px;
        height: 80px;
    }

    img {
        transition: transform .2s;
    }

    img {
        transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
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
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 1em;

        p {
            color: black;

        }
    }

    article {
        overflow: auto;
        border-radius: 10px;
        color: #fff;
        justify-content: center;
        align-items: center;
        text-align: center;

        h1 {
            color: #000;
            font-size: 24px;

        }
    }

    img {
        max-width: 33%;
    }

    .inner-div {
        text-align: center;
        justify-content: center;
        align-items: center;
    }


    @media all and (min-width: 558px) {
        main {
            grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        }
        article {
            max-width: 100%;
        }

    }

    @media all and (max-width: 768px) {
        article {
            max-width: 100%;
        }
        img {
            width: 50%;
            max-width: 350px;
            margin: 55px 20px 55px 20px;
        }
    }

    @media all and (min-width: 769px) {
        article {
            max-width: 100%;
            width: 100%;
        }
    }
</style>
