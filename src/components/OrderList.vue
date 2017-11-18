<template>
  <div class="page-navbar">
    <mt-header title="订单列表">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">挂起</mt-tab-item>
      <mt-tab-item id="2">已结账</mt-tab-item>
      <mt-tab-item id="3">全部</mt-tab-item>
    </mt-navbar>

    <ul class="sequencing">
      <li>订单号<img src="../assets/down1.png" alt="" width="10"></li>
      <li>时间<img src="../assets/down.png" alt="" width="10"></li>
      <li>金额<img src="../assets/down.png" alt="" width="10"></li>
    </ul>

    <mt-tab-container v-model="selected" style="clear:left;">
      <mt-tab-container-item id="1">
        <ul>
          <li v-for="val in infoList" class="info_one" @click="detail">
            <span class="name">{{val.name}}</span>
            <span class="identity">{{val.identity}}</span><br>
            <span class="orderNumber">{{val.orderNumber}}</span>
            <span class="status">{{val.status}}</span>
            <img src="../assets/right.png" alt="" width="20" class="right">
            <span class="money">{{val.money}}</span><br>
            <span class="date">{{val.date}}</span>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul>
          <li v-for="val in infoList1" class="info_one" @click="detail">
            <span class="name">{{val.name}}</span>
            <span class="identity">{{val.identity}}</span><br>
            <span class="orderNumber">{{val.orderNumber}}</span>
            <span class="status">{{val.status}}</span>
            <img src="../assets/right.png" alt="" width="20" class="right">
            <span class="money">{{val.money}}</span><br>
            <span class="date">{{val.date}}</span>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <ul>
          <li v-for="val in infoList2" class="info_one" @click="detail">
            <span class="name">{{val.name}}</span>
            <span class="identity">{{val.identity}}</span><br>
            <span class="orderNumber">{{val.orderNumber}}</span>
            <span class="status">{{val.status}}</span>
            <img src="../assets/right.png" alt="" width="20" class="right">
            <span class="money">{{val.money}}</span><br>
            <span class="date">{{val.date}}</span>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>


    <mt-tabbar fixed>
      <mt-tab-item id="店面">
        <router-link to="/apply">
          <p><img src="../assets/yingyong.png" style="width:30px;"></p>
          店面应用
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="水牌"> 
        <router-link to="pai">
          <p><img src="../assets/未使用.png" style="width:30px;"></p>
          工作水牌
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="对讲">
        <router-link to="pai">
          <p><img src="../assets/duijiang.png" style="width:30px;"></p>
          对讲
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="预约">
        <router-link to="/yuyue">
          <p><img src="../assets/yuyue.png" style="width:30px;"></p>
          预约管理
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="个人">
        <router-link to="/geren">
          <p><img src="../assets/geren.png" style="width:30px;"></p>
          个人中心
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'page-navbar',
    data() {
      return {
        selected: '1',
        infoList:[
            {name:'章子怡',identity:'会员',orderNumber:'36498264385',date:'2017-5-14 19:15:30',status:'挂起',money:'200.00'},
            {name:'章子怡',identity:'会员',orderNumber:'36498264385',date:'2017-5-14 19:15:30',status:'挂起',money:'200.00'},
        ],
        infoList1:[
            {name:'111111',identity:'非会员',orderNumber:'3649826411385',date:'2017-5-14 19:15:30',status:'挂起',money:'200.00'},
            {name:'222222',identity:'非会员',orderNumber:'3649826114385',date:'2017-5-14 19:15:30',status:'挂起',money:'200.00'},
        ],
        infoList2:[
            {name:'333333',identity:'会员',orderNumber:'364982221364385',date:'2017-5-14 19:15:30',status:'挂起',money:'200.00'},
            {name:'444444',identity:'会员',orderNumber:'36498221312364385',date:'2017-5-14 19:15:30',status:'挂起',money:'200.00'},
        ]
      };
    },
    methods:{
      detail () {
        alert("详细");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    * {
      padding: 0;
      margin: 0;
      list-style: none;
      border: none;
    }
    #app {
      width: 100%;
    }
    .mint-navbar {
        background:#fff;
        color:#000;
    }
    .mint-tab-container-item {
      color: #999;
      font-size: 14px;
    }
    .mint-navbar .mint-tab-item.is-selected {
        color:#525d9b;
        margin-bottom:0;
        font-weight:900;
        border-bottom:2px solid #525d9b;
    }
    .name {
      color: #000;
      font-size: 16px;
      margin-right: 2svw;
    }
    .identity {
      color: #999;
      
    }
    .orderNumber {
      color: #999;
      display: block;
      float: left;
      width: 50vw;
    }
    .date {
      color: #999;
      margin-top: 5px;
    }
    .status {
      color: #FF5722;
    }
    .money {
      color: #999;
      float: right;
      margin-right: 2vw;
    }
    .info_one {
      border-bottom: 1px solid #e8e8e8;
      padding: 10px;
      margin: 0 5px;
      cursor: pointer;
    }
    .right {
      float: right;
    }
    .sequencing {
      width: 100vw;
      height: 4.6vh;
      li {
        float: left;
        width: 33.3vw;
        text-align: center;
        font-size: 12px;
        margin: 1vh 0;
        color: #999;
        img {
          margin-left: 4px;
        }
      }
    }
    .mint-navbar[data-v-fd0e3da8] {
      border-bottom: 1px solid #ccc;
    }
   .mint-tabbar {
     background-color: #525d9b;
     color: #ffffff;
   }
   .mint-header {
      background-color: #525d9b;
   }

</style>
