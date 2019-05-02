<template>
  <div class="page15">
    <h2 class="title"><span class="mark">民眾該怎麼避免使用到「二手醫材」呢？<br class="wrap">《聯合報》諮詢專家，提供以下建議：</span></h2>
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
  padding: 45px 0 170px;
  @media screen and (max-width: 374px) {
          
  }
  @media screen and (min-width: 768px) {
    padding: 81px 0px 198px;
  }
  @media screen and (min-width: 1024px) {
    padding: 91px 25px 145px;
  }
  .title {
    width: 100%;
    font-weight: bolder;
    height: 100%;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 50px;
    line-height: 1.5;
    background: #e0dfd5;
    color: #333333;
    @media screen and (max-width: 374px) {
      font-size: 12px;
    }
    @media screen and (min-width: 768px) {
      background: transparent;
    }
    @media screen and (min-width: 1024px) {

    }
    text-align: center;
    .wrap {
      @media screen and (max-width: 374px) {
      
      }
      @media screen and (min-width: 768px) {
        display: none;
      }
      @media screen and (min-width: 1024px) {
        
      }
    }
    .mark {
      background-color: transparent;
      @media screen and (max-width: 374px) {
      
      }
      @media screen and (min-width: 768px) {
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 50px;
        line-height: 1.5;
        background: #e0dfd5;
        color: #333333;
      }
      @media screen and (min-width: 1024px) {
        
      }
      
    }
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
      color: black;
      background: white;
      font-weight: bolder;
      text-align: center;
      border-radius: 50px;
      font-size: 15px;
      p {
        line-height: 1.5;
      }
      @media screen and (max-width: 374px) {
        font-size: 14px;
      }
      @media screen and (min-width: 768px) {
        
      }
      @media screen and (min-width: 1024px) {

      }
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
      line-height: 1.5;
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
        line-height: 1.5;
        margin: 0 auto;

        @media screen and (max-width: 374px) {
            
        }
        @media screen and (min-width: 768px) {
          text-align: center;
        }
        @media screen and (min-width: 1024px) {
          text-align: left;
          width: 50%;
        }
      }
      
    }
    .step2, .step3 {
      .subtitle {
        font-size: 15px;
        font-weight: bold;
        @media screen and (max-width: 374px) {
          font-size: 12px;
        }
        @media screen and (min-width: 768px) {
          
        }
        @media screen and (min-width: 1024px) {
          flex-direction: column;
          align-items: center;
        }
      }
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
          padding: 10px;
          @media screen and (max-width: 374px) {

          }
          @media screen and (min-width: 768px) {
            
          }
          @media screen and (min-width: 1024px) {
            padding: 0px;
          }
          .table-title {
            margin: 0 auto;
          }
          p {
            font-size: 15px;
            margin-top: 17px;
            line-height: 1.5;
            @media screen and (max-width: 374px) {
              font-size: 12px;
            }
            @media screen and (min-width: 768px) {
              
            }
            @media screen and (min-width: 1024px) {
              flex-direction: column;
              align-items: center;
            }
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
