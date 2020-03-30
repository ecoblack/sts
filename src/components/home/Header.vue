<template>
    <div class="header" >
<!--        <img id="main-header" alt="header" src="../../assets/group-13@2x.png">-->

        <div class="header-text">
            <h1>Are you still trimming your weed by hand?</h1>
            <h4>Call us now and get professional and sanitary trimming!</h4>
            <button>
                <a><router-link to="/">Get professional trimming</router-link></a>
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

    .header {
        background-image: url(../../assets/group-13@2x.png);
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        text-align: center;
        /*width: 100%;*/
        /*display: flex;*/
        /*flex-direction: row;*/
        /*flex-wrap: wrap;*/
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        max-width: 100%;
        /*max-width: 1100px;*/
        min-height: 600px;
        background-color: #ccc;
        border-radius: 3px;
        position: relative;
    }
    button {
        max-width: 360px;
        height: 60px;
        border-radius: 32.5px;
        background-color: #ffffff;
    }
    button > a > a {
        margin: -10px 20px -10px 20px;
        color: black;
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal
    }
    .header-text {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%,-50%);
        /*flex: 0 0 120px;*/
        /*width: 50%;*/
        /*height: 190px;*/
        color:white;
        width: 100%;
        /*height: 100%;*/
        /*top: 0;*/
        /*left: 0;*/

    }
    #main-header {
        width: 100%;
        height: auto;
        max-width: 1900px;
        max-height: 700px;
    }
    button:hover {
        background-color: #47c549;
        border: none;
    }

    a:hover {
        color: white;
    }
</style>
