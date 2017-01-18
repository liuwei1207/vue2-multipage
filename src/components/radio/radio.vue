<template>
    <div class="source">
        <el-radio class="radio" v-model="radio" label="1">LAN</el-radio>
        <el-radio class="radio" v-model="radio" label="2">WIFI</el-radio>
        <el-radio class="radio" v-model="radio" label="3">3G/4G</el-radio>
    </div>
</template>
<script>
export default {
    data() {
        return {
            radio: '1'
        };
    }
}
</script>
<style lang="less">
</style>
