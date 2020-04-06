<template>
    <div id="higher-footer">

        <div class="header">
            <div class="header-text">
                <h1>If you have any other questions, or need help with suggestions, or methods of growing,
                    we gladly offer services where we can arrange to take care of everything from your setup to your
                    harvest day!</h1>
                <h2>If You're happy, Then We're happy!</h2>

            </div>
        </div>

        <div class="tag">
            <div class="question" style="display: inline-block;width: 50%;">

            </div>
            <div class="happy" style="display: inline-block;width: 50%;">
                <h1>If you have any other questions, or need help with suggestions, or methods of growing,
                    we gladly offer services where we can arrange to take care of everything from your setup to your
                    harvest day!</h1>
                <h2>If You're happy, Then We're happy!</h2>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'HigherFooterImage'
    }
</script>

<style scoped lang="scss">
    .header {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../../assets/img-4@3x.png);
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
    .tag {
        text-align: center;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
    }
    #higher-footer {
        margin: auto;
        max-width: 1100px;
    }

    .question {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../../assets/img-4@3x.png);
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 500px;
    }

    .header-text {
        max-width: 1100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /*flex: 0 0 120px;*/
        /*width: 50%;*/
        /*height: 190px;*/
        color: white;
        width: 100%;
        /*height: 100%;*/
        /*top: 0;*/
        /*left: 0;*/

    }

    .happy {
        /*text-align: center;*/
        /*!*width: 100%;*!*/
        /*!*display: flex;*!*/
        /*!*flex-direction: row;*!*/
        /*!*flex-wrap: wrap;*!*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*margin: 0 auto;*/
        /*max-width: 100%;*/
        /*!*max-width: 1100px;*!*/
        /*border-radius: 3px;*/
        /*vertical-align: middle;*/
        margin: 0 auto 120px auto;
        width: 50%;
    }

    /*.seed-skiper {*/
    /*    background-image: url(../../assets/img-4@3x.png);*/
    /*    background-position: center center;*/
    /*    background-size: cover;*/
    /*    background-repeat: no-repeat;*/
    /*    text-align: center;*/
    /*}*/

    @media all and (min-width: 769px) {
        /*#higher-footer {*/
        /*    border-style: solid;*/
        /*    border-color: red;*/
        /*}*/
        .header {
            display: none;
        }
        .seed-skiper {
            float: left;
        }

        h1 {
            font-size: 22px;
            font-weight: 100;
        }

        .higher-footer {
            margin: 0 auto 120px auto;
        }

    }

    @media all and (max-width: 768px) {
        /*#higher-footer {*/
        /*    border-style: solid;*/
        /*    border-color: blueviolet;*/
        /*}*/

        .footer-text {
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            max-width: 100%;
            /*max-width: 1100px;*/
            min-height: 600px;
            border-radius: 3px;
            position: relative;
        }
        .seed-skiper {
            min-height: 550px;
            width: 100%;
            height: 100%;
        }

        h1 {
            font-size: 36px;
        }
        .tag {
            display: none;
        }
    }
</style>
