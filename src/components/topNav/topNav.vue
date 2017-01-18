<template>
    <header>
        <div class="inner">
            <div class="mod-head clearfix">
                <h1 class="logo"><a href="#">WINSTAR</a></h1>
                <div id="nav">
                    <ul>
                        <li><a href="#">路由状态</a></li>
                        <li class="active"><a href="#">常用设置</a></li>
                        <li><a href="#">高级设置</a></li>
                    </ul>
                </div>
            </div>
            <div class="mod-set-nav">
                <ul class="clearfix li-5">
                    <li>
                        <a href="#">
                            <i class="ico ico-1"></i>
                            <span>Wi-Fi设置</span>
                        </a>
                    </li>
                    <li class="active">
                        <a href="#">
                            <i class="ico ico-2"></i>
                            <span>网络配置</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="ico ico-3"></i>
                            <span>安全中心</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="ico ico-4"></i>
                            <span>局域网设置</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="ico ico-5"></i>
                            <span>系统状态</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script type="text/javascript">
export default {
    data() {
        return {

        }
    }
}
</script>
<style scope>
header {
    font-family: 'Helvetica Neue', 'Microsoft Yahei', arial, helvetica, sans-serif;
    background-color: #1d79d1;
}

header .inner {
    width: 1160px;
    margin: auto;
}

header a {
    opacity: .5;
    filter: alpha(opacity=50);
    color: #fff;
    text-decoration: none;
}

header .logo {
    position: absolute;
    left: 0;
    bottom: -5px;
}

header .logo a {
    font-weight: 100;
    font-size: 35px;
    background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1));
    /*background-image: -o-linear-gradient(left,rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 1));*/
    /*background-image: -moz-linear-gradient(left,rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 1));*/
    /*background-image: linear-gradient(left,rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 1));*/
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

header .logo a:hover {
    color: #fff;
}

.mod-head {
    position: relative;
    height: 52px;
}

#nav {
    position: absolute;
    left: 210px;
    bottom: -2px;
}

#nav li {
    float: left;
    margin-right: 80px;
}

#nav li:first-child {
    margin-left: 80px;
}

#nav li a {
    float: left;
    text-decoration: none;
    font-size: 18px;
    line-height: 1.2;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

#nav li.active a,
#nav li:hover a,
.mod-set-nav li.active a,
.mod-set-nav li:hover a {
    opacity: 100;
}

.mod-set-nav {
    padding-top: 70px;
}

.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.mod-set-nav .ico {
    display: block;
    width: 70px;
    height: 70px;
    margin: auto;
    margin-bottom: 2px;
}

.mod-set-nav li {
    float: left;
    height: 127px;
    text-align: center;
}

.mod-set-nav .li-5 li {
    width: 20%;
}

.mod-set-nav .ico {
    background-repeat: no-repeat;
}

.mod-set-nav .ico-1 {
    background: url(../../images/ico_nav_1.png);
}

.mod-set-nav .ico-2 {
    background: url(../../images/ico_nav_2.png);
}

.mod-set-nav .ico-3 {
    background: url(../../images/ico_nav_3.png);
}

.mod-set-nav .ico-4 {
    background: url(../../images/ico_nav_4.png);
}

.mod-set-nav .ico-5 {
    background: url(../../images/ico_nav_5.png);
}

.mod-set-nav li.active {
    background: url(../../images/bg_nav_on.png) no-repeat center bottom;
}
</style>
