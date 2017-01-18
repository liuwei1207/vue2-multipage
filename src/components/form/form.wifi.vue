<template>
    <div id="formLan">
        <div class="el-row">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="SSID">
                    <el-input placeholder="SSID" v-model="data.SSID"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" placeholder="密码" v-model="data.Passwd"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="el-row">
            <div class="el-col el-col-12 el-left">
                <el-form label-width="100px" class="formLan_auto">
                    <el-card class="box-card">
                        <el-radio class="radio" v-model="radio" label="auto">自动获取IP地址</el-radio>
                        <el-form-item label="IP地址">
                            <p>{{data.DHCP.IP}}</p>
                        </el-form-item>
                        <el-form-item label="子网掩码">
                            <p>{{data.DHCP.NetMask}}</p>
                        </el-form-item>
                        <el-form-item label="默认网关">
                            <p>{{data.DHCP.Gateway}}</p>
                        </el-form-item>
                        <el-form-item label="Mac地址">
                            <p :disabled="true">{{data.DHCP.MAC}}</p>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" :disabled="radio!='auto'">刷新</el-button>
                        </el-form-item>
                    </el-card>
                </el-form>
            </div>
            <div class="el-col el-col-12 el-right">
                <el-form label-width="100px" class="formLan_manual">
                    <el-card class="box-card">
                        <el-radio class="radio" v-model="radio" label="manual">手动设置IP地址</el-radio>
                        <el-form-item label="IP地址">
                            <el-input v-model="data.Static.IP" :disabled="radio!='manual'"></el-input>
                        </el-form-item>
                        <el-form-item label="子网掩码">
                            <el-input v-model="data.Static.NetMask" :disabled="radio!='manual'"></el-input>
                        </el-form-item>
                        <el-form-item label="默认网关">
                            <el-input v-model="data.Static.Gateway" :disabled="radio!='manual'"></el-input>
                        </el-form-item>
                        <el-form-item label="Mac地址">
                            <p :disabled="true">{{data.Static.MAC}}</p>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" :disabled="radio!='manual'">设置</el-button>
                            <el-button :disabled="radio!='manual'">重置</el-button>
                        </el-form-item>
                    </el-card>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                radio: 'auto'
            };
        },
        props: {
            data: {}
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }

}
</script>
<style>
.el-left {
    padding-right: 15px;
}

.el-right {
    padding-left: 15px;
}

.radio {
    margin-bottom: 15px;
}
</style>
