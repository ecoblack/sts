<template>
    <div class="header">
        <img id="main-header" alt="header" src="../../assets/img-5.png">
        <div class="header-text">
            <h1>Save yourself from headaches, lost time, messes, and waste!</h1>
            <h4>Call us to request a quote and enjoy the results
                without work!</h4> <br> <h4>(902) 452-SEED or (902) 452-7333</h4>
            <button>
                <a>
                    <router-link to="/">Call us</router-link>
                </a>
            </button>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Header',
    }
</script>

<style scoped lang="scss">


    h4 {
        font-size: 28px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
    }

    .header {
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
    }

    button {
        width: 360px;
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
        /*flex: 0 0 120px;*/
        width: 80%;
        /*height: 190px;*/
        margin: 10px;
        padding: 5px;
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

</style>
