<template>
    <div id="app">
        <topNav></topNav>
        <container></container>
    </div>
</template>
<script type="text/javascript">
import topNav from '../../components/topNav/topNav.vue';
import container from '../../components/container/container.networkOptions.vue';

export default {
    data() {
            return {

            }
        },
        components: {
            topNav,
            container
        }
}
</script>
<style lang="less">
@import '../../less/global.less'; //引入自定义变量；
</style>
