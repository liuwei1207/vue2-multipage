<template>
    <div id="bd">
        <el-tabs v-model="tabName" @tab-click="handleClick">
            <el-tab-pane label="LAN" name="LAN">
                <formLan v-bind:data="networkOptionsData.NODE.LAN"></formLan>
            </el-tab-pane>
            <el-tab-pane label="WIFI" name="WIFI">
                <formWifi v-bind:data="networkOptionsData.NODE.WIFI"></formWifi>
            </el-tab-pane>
            <el-tab-pane label="LTE" name="LTE">
                <formLte v-bind:data="networkOptionsData.NODE.LTE"></formLte>
            </el-tab-pane>
            <el-tab-pane label="数据通信配置" name="fourth">数据通信配置</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script type="text/javascript">
import formLan from "../form/form.lan.vue";
import formWifi from "../form/form.wifi.vue";
import formLte from "../form/form.lte.vue";


var networkOptionsDefaultData = {
    NODE: {
        FrameType: '00',
        'Net-Select': 'LAN',
        LAN: {
            Mode: 'dhcp',
            DHCP: [Object],
            Static: [Object],
            IP: '192.168.1.221',
            NetMask: '255.255.255.0',
            Gateway: '192.168.1.1',
            MAC: 'DC:07:C1:00:DB:01'
        },
        WIFI: {
            Mode: 'dhcp',
            SSID: 'ZHIHEANJIE',
            Passwd: '66806088',
            DHCP: [Object],
            Static: [Object]
        },
        LTE: {
            LTEStr: '3',
            LTESta: '0',
            IP: '10.17.76.87',
            Union: 'LTE-FDD',
            PhoneNum: '18611702344'
        }
    }
}

export default {
    data() {
            return {
                tabName: 'LAN',
                networkOptionsData: networkOptionsDefaultData
            };
        },
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            }
        },
        components: {
            formLan,
            formWifi,
            formLte
        },
        sockets: {
            connect: function() {
                console.log('websocket is now connected');
            },
            networkOptions: function(data) {
                console.log(data);
                if (data) {
                    this.networkOptionsData = data;
                } else {
                    this.networkOptionsData = networkOptionsDefaultData;
                }

            }
        }
}
</script>
<style lang="less">
@import '../../less/global.less'; //引入自定义变量；
#bd {
    width: @container-width;
    padding: 0 60px 60px;
    margin: auto;
    background: #fff;
    border-radius: 10px
}
</style>
