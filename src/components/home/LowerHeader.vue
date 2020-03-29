<template>
    <div class="lower-header">
        <img id="lower-header-image" alt="header" src="../../assets/group-2@3x.png">
<!--        <div class="header-text">-->
<!--            <h1>Are you still trimming your weed by hand?</h1>-->
<!--            <h4>Call us now and get professional and sanitary trimming!</h4>-->
<!--            <button>-->
<!--                <a><router-link to="/">Get professional trimming</router-link></a>-->
<!--            </button>-->
<!--        </div>-->
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
        margin-top: 115px;
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
            width: 100%;
            max-width: 1100px;
            /*padding-left: 400px;*/
            /*padding-right: 400px;*/
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
        padding:5px;
        background:lightblue;
        color:white;
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

</style>
