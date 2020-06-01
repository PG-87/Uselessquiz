<template>
    <footer class="site-footer">

        <div class="copyright">
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by U-Quiz
            </p>
        </div>

        <div class="socialMedia">
            <ul class="social-icons">
                <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a class="github" href="#"><i class="fab fa-github"></i></a></li>
                <li><a class="discord" href="#"><i class="fab fa-discord"></i></a></li>
            </ul>
        </div>

    </footer>
</template>

<script>
    export default {}

</script>

<style scoped>
    .site-footer {
        bottom: 0;
        /*margin-top: 50px;*/
        margin-bottom: 0;
        background-color: #2c3e50;
        padding: 25px 0 10px;
        font-size: 12px;
        line-height: 5px;
        color: white;

        width: 100%;

    }

    .site-footer .social-icons {
        text-align: right
    }

    .site-footer .social-icons a {
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin-left: 6px;
        margin-right: 0;
        border-radius: 100%;
        background-color: #33353d
    }

    .copyright-text {
        margin: 0
    }

    .social-icons {
        padding-left: 0;
        margin-bottom: 0;
        list-style: none
    }

    .social-icons li {
        display: inline-block;
        margin-bottom: 2px
    }

    .social-icons a {
        background-color: #eceeef;
        color: #818a91;
        font-size: 16px;
        display: inline-block;
        line-height: 34px;
        width: 34px;
        height: 34px;
        text-align: center;
        margin-right: 8px;
        border-radius: 100%;
        -webkit-transition: all .2s linear;
        -o-transition: all .2s linear;
        transition: all .2s linear
    }


    .social-icons a.discord:hover {
        background-color: darkorange;
    }

    .social-icons a.twitter:hover {
        background-color: #00aced
    }

    .social-icons a.github:hover {
        background-color: #ea4c89
    }

    @media (max-width: 767px) {
        .social-icons li.title {
            display: block;
            margin-right: 0;
            font-weight: 600
        }
    }

</style>