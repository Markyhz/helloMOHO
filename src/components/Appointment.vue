<template>
    <div id="appointmentBox">
        <div id="appointmentHeader">
            <mt-header title="店面工作">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div id="appointmentContent" class="page-datetime-wrapper">
            <ul>
                <li @click="openPicker('picker')" id="appointmentData">
                    <p>预约日期</p>
                    <input type="text" readonly placeholder="点击选择日期" v-model="appointmentData"/>
                </li>
                <li @click="openPicker('picker1')" id="appointmentTime">
                    <p>预约时间</p>
                    <input type="text" readonly placeholder="点击选择时间" v-model="appointmentTime"/>
                </li>
                <li id="appointmentProject">
                    <div class="page-picker-wrapper">
                        <mt-picker :slots="proSlot" @click="onProChange" :visible-item-count="3"></mt-picker>
                    </div>
                    <p>预约项目</p>
                    <input type="text" readonly  placeholder="点击选择项目" v-model="appointmentProject"/>
                </li>
                <li @click="openPicker('picker3')" id="appointmentStylist">
                    <p>设计师</p>
                    <input type="text" readonly  placeholder="点击选择设计师" v-model="appointmentStylist"/>
                </li>
                <li>
                    <p>联系手机号码</p>
                    <input type="text" id="appointmentTel" placeholder="请输入手机号码"/>
                </li>
            </ul>
            <textarea name="appointmentRemark" id="appointmentRemark" cols="30" rows="10" placeholder="请输入您的特殊要求"></textarea>
            <button>确定预约</button>
        </div>
        <mt-datetime-picker 
            ref="picker" 
            type="date" 
            format="{value}" 
            :startDate="startDate"
            :endDate="endDate"
            v-on:confirm="handleChange">
        </mt-datetime-picker>
        <mt-datetime-picker
            ref="picker1"
            type="time"
            hour-format="{value}"
            minute-format="{value}"
            :startHour="startHour"
            :endHour="endHour"
            @confirm="handleChange1">
        </mt-datetime-picker>
    </div>
</template>


<style lang="less" scoped>
    *{
        list-style : none;
        padding : 0;
        margin : 0;
    }
    #appointmentBox {
        background : #fff;
        height:100vh;
        #appointmentHeader {
            .mint-header {
                background : #525d9b;
            }
        }
        #appointmentContent{
            margin : 4vh 8vw;
            li {
                clear : both;
                height : 8vh;
                line-height : 8vh;
                border-bottom : 1px solid #eee;
                p {
                    color : #000;
                    float : left;
                    width : 20vw;
                }
                input {
                    float : right;
                    width : 30vw;
                    height : 4vh;
                    margin-top : 2vh;
                    text-align : center;
                    border : none;
                }
            }
            li:last-child {
                border-bottom : none;
            }
            #appointmentTel {
                border: 1px solid #eee!important;
            }
            #appointmentRemark {
                height : 20vh;
            }
            button {
                width : 100%;
                height : 5vh;
                margin-top: 2vh;
                background: #74a8d6;
                color: #fff;
            }
        }
    }
</style>

<script>
    export default {
        data(){
            return{
                // pickerValue:new Date("January 12,2006 22:19:35"),
                startDate:new Date(),
                endDate:new Date('2050-12-31'),
                // startHour:'00:00',
                // endHour:'24:00',
                appointmentData:"",
                appointmentTime:"",
                appointmentProject:"",
                appointmentStylist:"",
                slots:["a","s","d"]
            }
        },
        methods: {
            openPicker(picker) {
                this.$refs[picker].open();
            },
            handleChange(data){
                var str = String(data).split(" ");
                var arr = ['01','02','03','04','05','06','07','08','09','10','11','12'];
                var arrMonth = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                for(var i=0;i < 12;i++){
                    if(str[1] == arrMonth[i]){
                        var month = arr[i];
                    }
                }
                var year = str[3];
                var day = str[2];
                this.appointmentData=year+'-'+month+'-'+day;
            },
            handleChange1(){

            },
            onProChange(picker, values) {
                //this.year = values[0];
            },
            handleChange3(){

            }
        }
    };
</script>