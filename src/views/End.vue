<template>
  <div class="end">
    <div class="container">

        <h3 class="main-title">
            <span class="subtitle">不想用二手醫材<br>民眾如何自保？</span>
        </h3>
        <div class="process-wrapper">
          <p>民眾該怎麼避免使用到「二手醫材」呢？《聯合報》諮詢專家，提供以下建議：</p>
          <ul class="process">
            <li class="step step1">
              <h5 class="table-title">手術/住院前</h5>
              <p>手術或住院前，問清楚手術治療中，有哪些自費項目、費用多少。</p>
            </li>
            <li class="step step-transition">
              <img class="arrow" src="@/../public/images/arrows/index_arrow-down-solid.svg" alt="">
            </li>
            <li class="step step2">
              <ul>
                <li>
                  <h5 class="process-subtitle">洽詢健保專線：</h5>
                  <p>問清自費醫材型號品名，打電話至健保諮詢服務專線：0800-030-598，詢問健保是否給付</p>
                </li>
                <li>
                  <h5 class="process-subtitle">詢問第二建議：</h5>
                  <p>如果不是緊急手術，而自費醫材昂貴，可詢問第二建議，貨比三家</p>
                </li>
              </ul>
            </li>
            <li class="step step-transition">
              <img class="arrow" src="@/../public/images/arrows/index_arrow-down-solid.svg" alt="">
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
        <hr>

    </div>
    <div class="container">

        <div class="unbalance">
           <div class="title">三大解方 改善醫病關係不對等</div>
            <p>醫改會副執行長朱顯光指出，對於醫界重複使用一次性手術耗材，健保署不能置身事外，一旦造成患者感染、住院，相關醫療費用仍須健保買單。該如何改善現況？他提出三點建議：</p>
            <br>
            <ul>
              <li>
                <p>1. 補強比價網，讓民眾更易操作
                朱顯光指出，健保署自費醫材比價網過於繁複，一般病家根本看不懂，更不知如何操作，在規畫上應該更簡易親民，而不是成為健保署卸責的工具。
                </p>
                <br>
              </li>
              <li>
                <p>2.明訂使用次數上限及消毒SOP
                如果有些一次性耗材必須重複使用，應透過相關醫學會向食藥署、健保署提出建議，允許重複使用，擬定次數上限，以及消毒SOP，做好感控措施。
                </p>
                <br>
              </li>
              <li>
                <p>3.手術同意書詳列自費項目
                朱顯光建議，衛福部應該修改手術同意書格式，詳列手術所有自費的項目資料，包括品項、型號、價格。此外，應該比照定型化契約，病家拿到後，應有一段審閱期，可以詢問第二意見。
                </p>
                <br>
              </li>
            </ul>
            <img src="@/../public/images/article-images/index_page4_article_img1.jpg" alt="">
            <div class="discribe">
              醫改會建議，衛福部應該修改手術同意書格式，詳列手術所有自費項目、型號、價格。
            </div>
        </div>
        <hr>
        <div class="compare">
          <div class="title">健保署：將清查比價網上醫材自費價格</div>
          <p>對於部分醫院重複使用一次性手術耗材，執醫2、30年的李伯璋說，這在醫界確實是不能說的秘密。雖然自費特材屬於經濟自由市場，不在健保署業務範圍，但為了確保民眾就醫權益，健保署將仔細清查比價網上醫療特材的自費價格，先計算出平均值，如果價格差距過大，就會行文醫療院所，要求醫院提出解釋，說明價格昂貴的理由。</p>
          <br>
          <p>至於外界批評自費醫材比價網介面操作不便，李伯璋相當直率地說，「他不曾點進去網站，也沒查詢過，不知是否真如外界所批評的難用。」但該網站成立迄今，確實沒人管理，健保署將虛心檢討，管理必須找出重點。 </p>                                                                                                                                                                                                   
          <br>
          <p>衛福部醫事司司長石崇良強調，如果醫材耗材仿單上寫著「single use」，就只能做單一使用，不得重消再用，若醫師未依照仿單操作，等同違反醫師法可開罰10萬元以上、50萬元以下罰鍰，嚴重者可要求停業處分。</p>
          <br>
        </div>

    </div>
    <div class="container">
      <div class="button-wrapper">
        <div class="last-button" @click="changePage('/3', '/', 'last')">
          <i class="nav-arrow nav-arrow-left i-arrow4-left"></i>
        </div>
        <div class="next-button" @click="changePage('/3', '/', 'next')">
          <i class="nav-arrow nav-arrow-right i-arrow4-right"></i>
        </div>
      </div>
    </div>  
    <div class="other-info-wrapper">
      <div class="container">
        <div class="other-info">
          <div class="left">

              <editor>
                <div>製作人：蔡佩蓉</div>
                <div>視覺設計：張心慈</div>
                <div>插畫：黃微庭</div>
                <div>網頁製作：胡凈悟</div>
                <div>監製：林秀姿、潘如瑩、董谷音</div>
                <div>2019.05.13</div>
              </editor>
              <logo></logo>
              <Share href="https://udn.com/upf/newmedia/2019_data/medical_material/"></Share>
  
          </div>
          <div class="right">

              <Relate title="你可能想知道"
                href1="https://udn.com/news/story/6656/3455275?from=udn-referralnews_ch2artbottom" :img1="require('@/../public/images/related/index_pageEND_read_img1.jpg')" text1="醫療器材重新消毒再用 你用的手術醫材安全嗎？" 
                href2="https://udn.com/news/story/6656/3527582" :img2="require('@/../public/images/related/index_pageEND_read_img2.jpg')" text2="自費醫療三不管 醫改會：上傳健保防弊端" >
            </Relate>

          </div>
        </div>
        <fb-comment  href="https://udn.com/upf/newmedia/2019_data/medical_material/"></fb-comment>
      </div>
    </div>
     <div class="end-page-footer">
        <div class="container">
          
        </div>
        <foot></foot>
      </div>  
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
import paging from '../mixin/paging.js'
import sharing from '../mixin/sharing.js'

export default {
  name: 'end',
  mixins: [paging, sharing],
  props: {
    msg: String
  },
  mounted () {
    this.$emit('changeRoute', this.$route);
    FB.XFBML.parse()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/baseSCSS/theme.scss';

.end {
  background-color: #333333;
  padding-top: 150px;
  color: white;
   @media screen and (max-width: 374px) {
          
  }
  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1024px) {
    padding: 160px 0 0;
  }
  .main-title {
    line-height: 2;
    font-size: 21px;
    font-weight: bolder;
    .subtitle {
      
    }
  }
  .process-wrapper {
    padding: 45px 0 70px;
    @media screen and (max-width: 374px) {
            
    }
    @media screen and (min-width: 768px) {
      padding: 81px 0px 198px;
    }
    @media screen and (min-width: 1024px) {
      padding: 34px 0px 111px;
    }
    .process-title {
      width: 100%;
      font-weight: bolder;
      height: 100%;
      padding: 10px 15px;
      font-size: 14px;
      border-radius: 50px;
      line-height: 1.5;

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
        max-width: 127px;
        font-weight: bolder;
        text-align: center;
        border: solid 1px white;
        font-size: 15px;
        padding: 9px 23px;
        p {
          line-height: 1.5;
        }
        @media screen and (max-width: 374px) {
          font-size: 14px;
        }
        @media screen and (min-width: 768px) {
          max-width: 130px;
        }
        @media screen and (min-width: 1024px) {
          padding: 11px 23px;
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
            width: 37px;
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
          display: flex;
          flex-direction: column;
          justify-content: center;
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
            display: flex;
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
              padding: 0;
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
      .step2 {
        @media screen and (min-width: 1024px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
      }
      .step3 {
        ul {
          li {
            @media screen and (min-width: 1024px) {
              padding: 30px 0 0 0;
            }
          }
        }
      }
    }
    .warning {
      font-size: 15px;
    }
  }
  .unbalance {
    padding-bottom: 98px;
    @media screen and (max-width: 374px) {
          
    }
    @media screen and (min-width: 768px) {
      
    }
    @media screen and (min-width: 1024px) {
      padding-top: 87px 0 122px;
    }
    img {
      width: 100%;
    }
  }
  .compare {
    @media screen and (max-width: 374px) {
          
    }
    @media screen and (min-width: 768px) {
      
    }
    @media screen and (min-width: 1024px) {
      padding: 98px 0 173px;
    }
  }
  .other-info-wrapper {
    background-color: white;
    padding-top: 41px;
    @media screen and (max-width: 374px) {
            
      }
      @media screen and (min-width: 768px) {
        
      }
      @media screen and (min-width: 1024px) {
        padding-top: 86px;
      }
    .other-info {
      
      @media screen and (max-width: 374px) {
            
      }
      @media screen and (min-width: 768px) {
        
      }
      @media screen and (min-width: 1024px) {
        display: flex;
      }
      .left, .right {
        @media screen and (max-width: 374px) {
              
        }
        @media screen and (min-width: 768px) {
          
        }
        @media screen and (min-width: 1024px) {
          width: 50%;

        }
      }
      .left {
        padding: 0 0 55px 0;
      }
      .right {
        position: relative;
        padding: 55px 0 0 0;
        &::after {
            content: '';
            width: 100%;
            height: 0.5px;
            display: inline-block;
            background-color: #e3e3e3;
            position: absolute;
            left: 0;
            top: 0;
          }
        @media screen and (min-width: 1024px) {
          padding: 0 53px;
          border-left: solid 1px black;
          &::after {
            content: '';
            height: 100%;
            width: 0.5px;
            display: inline-block;
            background-color: #e3e3e3;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }
  
  .next-button {
    visibility: hidden;;
  }
  .button-wrapper {
    padding-bottom: 30px;
  }
}
</style>
