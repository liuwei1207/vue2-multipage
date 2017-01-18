<template>
    <div class="innerTitile">
        <h3>{{titleText}}</h3>
    </div>
</template>
<script type="text/javascript">
export default {
    props: ["titleText"]
}
</script>
<style lang="less">
.innerTitile {
    border-bottom: 1px solid #d7d7d7;
    height: 60px;
    line-height: 60px;
    margin-bottom: 25px;
    padding-top: 25px;
    zoom: 1;
}

.innerTitile h3 {
    float: left;
    width: 160px;
    color: #2673bf;
    font-size: 18px;
    font-weight: normal;
}
</style>
