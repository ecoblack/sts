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
        background-attachment: fixed;
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
        height: 500px;
        background-color: #ccc;
        border-radius: 3px;
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
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        /*flex: 0 0 120px;*/
        /*width: 50%;*/
        /*height: 190px;*/
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
