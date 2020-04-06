<template>
    <div class="lower-header">
        <div class="ok">
            <img class="baclground" src="../../assets/group-3@2x.png"/>
        </div>
        <!--        <div class="header-image-container">-->
        <!--            <div id="lower-header-image">&nbsp;</div>-->
        <!--&lt;!&ndash;            <img id="lower-header-image" alt="header" src="../../assets/group-2@3x.png">&ndash;&gt;-->
        <!--        </div>-->
        <!--        &lt;!&ndash;        <div class="header-text">&ndash;&gt;-->
        <!--        &lt;!&ndash;            <h1>Are you still trimming your weed by hand?</h1>&ndash;&gt;-->
        <!--        &lt;!&ndash;            <h4>Call us now and get professional and sanitary trimming!</h4>&ndash;&gt;-->
        <!--        &lt;!&ndash;            <button>&ndash;&gt;-->
        <!--        &lt;!&ndash;                <a><router-link to="/">Get professional trimming</router-link></a>&ndash;&gt;-->
        <!--        &lt;!&ndash;            </button>&ndash;&gt;-->
        <!--        &lt;!&ndash;        </div>&ndash;&gt;-->
        <div class="tagline">
            <h1>
                We will do all the work for you
            </h1>
            <p>Let us get rid of your messy, time consuming, and unsanitary hand trimming! Our new professional
                equipment will trim everything you've got faster and cleaner!</p>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'LowerHeader',
    }
</script>

<style scoped lang="scss">

    .lower-header {
        text-align: center;
        margin: 115px 0 50px 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        /*width: 100%;*/
        /*height: 100%;*/
        /*position: absolute;*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        img {
            /*width: 100%;*/
            max-width: 1100px;
            /*padding-left: 400px;*/
            /*padding-right: 400px;*/
            object-fit: cover;

            /*min-width: 1100px;*/
            /*height: 337px;*/
        }

    }

    button {
        max-width: 360px;
        height: 60px;
        border-radius: 32.5px;
        background-color: #ffffff;
    }

    button > a > a {
        color: black;
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal
    }

    .header-text {
        text-align: center;
        /*flex: 0 0 120px;*/
        width: 80%;
        height: 190px;
        margin: 10px;
        padding: 5px;
        background: lightblue;
        color: white;
        /*width: 100%;*/
        /*height: 100%;*/
        position: absolute;
        /*top: 0;*/
        /*left: 0;*/

    }

    #main-header {
        width: 100%;
        height: auto;
        max-width: 1900px;
        max-height: 700px;
    }

    @media all and (min-width: 769px) {
        .ok {
            position: relative;
            height: 370px;
            width: 100%;
            overflow: hidden;
            -webkit-border-radius: 250px;
            -moz-border-radius: 250px;
            border-radius: 250px;
        }

        .baclground {
            position: absolute;
            top: 0;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            height: 370px;
        }
    }

    @media all and (max-width: 768px) {
        .ok {
            position: relative;
            height: 250px;
            width: 100%;
            overflow: hidden;
            -webkit-border-radius: 250px;
            -moz-border-radius: 250px;
            border-radius: 250px;
        }

        .baclground {
            position: absolute;
            top: 0;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            height: 250px;
        }
    }
</style>
