<template>
  <div class="page15">
    <h2 class="title">民眾該怎麼避免使用到「二手醫材」呢？《聯合報》諮詢專家，提供以下建議：</h2>
    <ul class="process">
      <li class="step step1">
        <h5 class="table-title">手術/住院前</h5>
        <p>手術或住院前，問清楚手術治療中，有哪些自費項目、費用多少。</p>
      </li>
      <li class="step step-transition">
        <img class="arrow" src="@/../public/images/index_arrow-down-solid.svg" alt="">
      </li>
      <li class="step step2">
        <ul>
          <li>
            <h5 class="subtitle">洽詢健保專線：</h5>
            <p>問清自費醫材型號品名，打電話至健保諮詢服務專線：0800-030-598，詢問健保是否給付</p>
          </li>
          <li>
            <h5 class="subtitle">詢問第二建議：</h5>
            <p>如果不是緊急手術，而自費醫材昂貴，可詢問第二建議，貨比三家</p>
          </li>
        </ul>
      </li>
      <li class="step step-transition">
        <img class="arrow" src="@/../public/images/index_arrow-down-solid.svg" alt="">
      </li>
      <li class="step step3">
        <ul>
          <li>
            <h5 class="table-title">確定自費</h5>
            <p>至<a href="">健保署自費醫材比價網</a>鍵入字號，搜尋各家醫院收費狀況</p>
          </li>
          <li>
            <h5 class="table-title">健保給付</h5>
            <p>如果健保給付此醫材，但須事前審查，病人可以自行至<a href="">健保署網站</a>，登錄查閱，瞭解醫師是否提出申請</p>
          </li>
        </ul>
      </li>
    </ul>
    <p class="warning">如果醫師主動告知醫材可以打折，患者應提高警覺，可能醫院批掛系統並無此品項，醫師私下使用。</p>
  </div>
</template>

<script>
export default {
  name: 'page15',
  props: {
    msg: String
  },
  mounted () {
    this.$emit('changeRoute', this.$route);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page15 {
  padding-top: 45px;
  .title {
    font-size: 12px;
    color: #333333;
    background: #e0dfd5;
    border-radius: 50px;
    padding: 15px;
    line-height: 1.5;
    
  }
  .process {
    margin-top: 50px;
    @media screen and (max-width: 374px) {
      
    }
    @media screen and (min-width: 768px) {
      
    }
    @media screen and (min-width: 1024px) {
      display: flex;
    }
    .table-title {
      width: 107px;
      line-height: 28px;
      color: black;
      background: white;
      font-weight: bolder;
      text-align: center;
      border-radius: 50px;
      font-size: 14px;
    }
    .step-transition {
      text-align: center;
        @media screen and (max-width: 374px) {
          
        }
        @media screen and (min-width: 768px) {
          
        }
        @media screen and (min-width: 1024px) {
          display: flex;
          vertical-align: center;
        }
      .arrow {
        padding: 22px 0 26px;
        width: 27px;
        @media screen and (max-width: 374px) {
          
        }
        @media screen and (min-width: 768px) {
          
        }
        @media screen and (min-width: 1024px) {
          transform: rotate(-90deg);
        }
      }
    }  
    .step1 {
      @media screen and (max-width: 374px) {
          
      }
      @media screen and (min-width: 768px) {
        
      }
      @media screen and (min-width: 1024px) {
        width: 50%;
      }
      .table-title {
        margin: 0 auto;
        
      }
      p {
        padding-top: 17px;
        font-size: 15px;
        margin: 0 auto;
        @media screen and (max-width: 374px) {
            
        }
        @media screen and (min-width: 768px) {
          
        }
        @media screen and (min-width: 1024px) {
          width: 50%;
        }
      }
      
    }
    .step2, .step3 {
      ul {
        display: flex;
        @media screen and (max-width: 374px) {
          
        }
        @media screen and (min-width: 768px) {
          
        }
        @media screen and (min-width: 1024px) {
          flex-direction: column;
          align-items: center;
        }
        li {
          width: 50%;
          .table-title {
            margin: 0 auto;
          }
          p {
            font-size: 15px;
            margin-top: 17px;
          }
        }
      }
    }
    .step3 {
      p {
        
      }
    }
  }
  .warning {
    color: #f02d3a;
  }
}
</style>
