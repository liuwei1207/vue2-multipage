<template>
    <div id="form3g">
        <div class="el-row">
            <el-form :model="formWifi_auto" :rules="rules_auto" ref="formWifi_auto" label-width="100px" class="formWifi_auto">
                <el-card class="box-card">
                    <el-form-item label="网络状态">
                        <div id="light" date-level="4">
                            <i class="first"></i>
                            <i class="second"></i>
                            <i class="third"></i>
                            <i class="fouth"></i>
                        </div>
                        <span>{{data.Union}}</span>
                    </el-form-item>
                    <el-form-item label="本机号码" prop="subnetMask_wifi_auto">
                        <p>{{data.PhoneNum}}</p>
                    </el-form-item>
                    <el-form-item label="本机地址" prop="defaultGateway_wifi_auto">
                        <p>{{data.IP}}</p>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">刷新</el-button>
                    </el-form-item>
                </el-card>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                signalIntensity: 1
            };
        },
        props: {
            data: {}
        }
}
</script>
<style>
/* 信号强度灯 */

#light i {
    display: inline-block;
    width: 16px;
    height: 16px;
    -moz-border-radius: 16px;
    -webkit-border-radius: 16px;
    border-radius: 50px;
}

#light[date-level='0'] i {
    border: 1px solid #197ed9;
}

#light[date-level='1'] .first {
    border: 1px solid #ff4949;
    background: #ff4949;
}

#light[date-level='2'] .first,
#light[date-level='2'] .second {
    border: 1px solid #dc6730;
    background: #dc6730;
}

#light[date-level='3'] .first,
#light[date-level='3'] .second,
#light[date-level='3'] .third {
    border: 1px solid #f7ba2a;
    background: #f7ba2a;
}

#light[date-level='4'] .first,
#light[date-level='4'] .second,
#light[date-level='4'] .third,
#light[date-level='4'] .fouth {
    border: 1px solid #13ce66;
    background: #13ce66;
}


/* /信号强度灯 */
</style>
