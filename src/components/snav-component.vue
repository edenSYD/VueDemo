<template>
  <ul class="snav-menu" @click="show=false">
    <li v-for="(item,index) in menus" :class="{active:item.fold,hasextend:item.hasExtend}">
      <!--如果没有二级菜单--><!--如果遍历到的标识等于当前的标识，就加上active类名，改变样式-->
      <a  v-if="!item.hasExtend" href="javascript:;" class="tit" @click="switchNav(item.url,item.tag)"
          :class="{active:item.tag==currentTag}">
        <em>{{item.name}}</em>
      </a>
      <!--如果有二级菜单-->
      <a v-else href="javascript:;" class="tit" @click.stop="flod(index)">
        <em>{{item.name}}</em>
      </a>
      <!--如果有二级菜单，遍历子菜单--><!--如果有二级菜单，并且fold属性为true（子菜单展开显示）。就加上active类名，改变样式-->
      <div class="extend-nav level2" v-if="item.hasExtend" :class="{active:item.fold}">
        <p v-for="(extend1,deep1) in item.extend">
          <!--如果遍历到的标识等于当前的标识，就加上active类名，改变样式--><!--点击切换路由（页面的操作）-->
          <a href="javascript:;" :class="{active:extend1.tag==currentTag}"
             @click="switchNav(extend1.url,extend1.tag)">
            <em>{{extend1.name}}</em>
          </a>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
  export default{
    data(){
      return {
        //记录当前的标识
        currentTag: '0',
        menus: [
          {
            name: '首页',
            url: '/index',
            tag: '0',
            hasExtend: false, //是否有二级菜单
          },
          {
            name: '销售消息通知',
            url: '/saleR',
            tag: 'sale',
            hasExtend: true, //是否有二级菜单
            fold: true, //是否展开
            extend: [
              {
                name: '待确认订单',
                url: '/order/list/0?ordConfirmStatus=0',
                tag: '1_1',
              },
              {
                name: '待出库物流',
                url: '/logistics/logisticsList/0',
                tag: '1_2'
              },
              {
                name: '待发货物流',
                url: '/logistics/logisticsList/1',
                tag: '1_3'
              },
              {
                name: '待收货物流',
                url: '/logistics/logisticsList/2',
                tag: '1_4'
              },
              {
                name: '待确认回款',
                url: '/cash/cashList/0',
                tag: '1_5'
              },
              {
                name: '待开票申请',
                url: '/invoice/invoiceWriteList/0',
                tagIndex: '1_6'
              }
            ]
          },
          {
            name: '销售管理',
            url: '/workbench',
            hasExtend: true, //是否有二级菜单
            fold: true,  //是否展开
            extend: [
              {
                name: '创建销售单',
                url: '/order/create',
                tag: '2_1'
              },
              {
                name: '销售单管理',
                url: '/order/list',
                tag: '2_2'
              },
              {
                name: '物流管理',
                url: '/logistics/logisticsList',
                tag: '2_3'
              },
              {
                name: '回款管理',
                url: '/cash/cashList',
                tag: '2_4'
              },
              {
                name: '开票管理',
                url: '/invoice/invoiceWriteList',
                tag: '2_9'
              },
              {
                name: '票据管理',
                url: '/invoice/invoiceManageList',
                tag: '2_5'
              },
              {
                name: '提成管理',
                url: '/commission/commissionList',
                tag: '2_6'
              },
              {
                name: '提成设置',
                url: '/commission/commissionSet',
                tag: '2_7',
              },
              {
                name: '合同管理',
                url: '/contract/contractList',
                tag: '2_8'
              },
            ]
          },
        ],
      }
    },
    methods: {
      //切换组件
      switchNav(url,tag){
        //标识当前导航
        this.currentTag = tag;
        //router导航
        this.$router.push({
          'path': url,
          'query': {
            "tag": tag
          }
        });
      },
      //展开收起导航面板
      flod(index){
        this.menus[index].fold = !this.menus[level1].fold;
      },
    }
  }
</script>

<style lang="scss">
  html,body,.zyl-admin-bd,.zyl-admin-wrap {
    width: 100%;
    height: 100%;
  }
  .zyl-admin-wrap{
    position: fixed;
  }
  .zyl-admin-snav {
    position: fixed;
    z-index: 1;
    width: 210px;
    height: 100%;
    overflow-y: auto;
    background: #2a3542;
    box-shadow: 3px 0 30px rgba(0, 0, 0, .2);
    &::-webkit-scrollbar {
      width: 5px;
      height: 100%;
      border-radius: 2px;
      background: #424448;
    }
    &::-webkit-scrollbar-thumb {
      background: #A2A2A2;
      border-radius: 2px;
    }
    .snav-menu {
      margin-top: 10px;
      > li {
        margin:0 10px 10px 10px;
        &.hasextend {
          .tit {
            background: #35404d;
          }
        }
        &.active {
          background: #35404d;
          border-radius: 4px;
          overflow: hidden;
          .tit {
            background: #475669 !important;
            .icon-options-unfold {
              display: none;
            }
            .icon-options-fold {
              display: inline-block;
            }
          }
          .extend-nav {
            display: block;
          }

        }
        .tit {
          line-height: 22px;
          color: #aeb2b7;
          text-decoration: none;
          display: block;
          padding: 5px 0 5px 10px;
          font-size: 12px;
          outline: none;
          transition: all 0.3s ease;
          &:hover, &.active {
            background: #35404d;
            color: #fff;
            em {
              color: #FF6C60;
            }
          }
          em {
            display: inline-block;
            vertical-align: middle;
            font-style: normal;
          }
        }
        .extend-nav {
          display: none;
          &.active {
            display: block;
          }
          p {
            position: relative;
            a {
              display: block;
              font-size: 12px;
              padding: 6px 0;
              line-height: 25px;
              height: 25px;
              color: #aeb2b7;
              text-decoration: none;
              transition: all 0.3s ease;
              text-indent: 40px;
              &:hover, &.active {
                color: #FF6C60;
                background: #2e3844;
                .icon-arrow {
                  display: inline-block;
                }
              }
            }
          }
        }
      }
    }
  }

  .zyl-admin-content {
    height: 100%;
    margin-left: 210px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 5px;
      height: 100%;
      border-radius: 2px;
      background: #424448;
    }
    &::-webkit-scrollbar-thumb {
      background: #A2A2A2;
      border-radius: 2px;
    }
    .wrapper {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      &::-webkit-scrollbar {
        width: 5px;
        height: 100%;
        border-radius: 2px;
        background: #424448;
      }
      &::-webkit-scrollbar-thumb {
        background: #A2A2A2;
        border-radius: 2px;
      }
    }
  }
</style>
