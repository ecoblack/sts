<template>
    <div class="header" >
        <!--        <img id="main-header" alt="header" src="../../assets/group-13@2x.png">-->

        <div class="header-text">
            <h1>Save yourself from headaches, lost time, messes, and waste!</h1>
            <h2>Call us to request a quote and enjoy the results without the work!</h2>
            <h2>(902) 452-SEED or (902) 452-7333</h2>
            <button>
                <a :href="`tel:${phone}`">Call us</a>
            </button>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Header',
        data: function() {
            return {
                phone: '(902) 452-7333'
            };
        }
    }
</script>

<style scoped lang="scss">

    .header {
        background-image: url(../../assets/img-5.png);
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
        /*h1 {*/
        /*    max-width: 1100px;*/
        /*}*/
    }

    button {
        margin: 0 20px 20px 0;
        max-width: 360px;
        width: 360px;
        height: 60px;
        border-radius: 32.5px;
        background-color: #ffffff;
        text-align: center;
        margin: auto;
    }

    button:hover {
        background-color: #47c549;
        border: none;
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

    a:hover {
        color: white;
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

    @media all and (max-width: 768px) {
        button {
            width: 100%

        }
    }

    @media all and (max-width: 767px) {
        button {
            width: 180px;
        }

        h1 {
            font-size: 28px;
        }

    }


</style>
