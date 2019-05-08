<template>
  <div class="enter">
    <div class="cover">
      <div class="container">
        <div class="intro">手術室裡不能說的祕密—「你的開刀醫材是二手貨？」經過長期追蹤，《聯合報》挖掘到國內自費醫療的大黑洞，眾多醫院竟不顧法令與病患感染風險，私下重複使用一次性手術耗材。
          <br><br>
          採訪多位醫師、醫院均認為是醫院一片好意，「為了幫病人省錢」。更讓人驚訝的是政府官員早就發現手術室裡的黑幕，卻遲未開罰處置。長期以來讓躺在手術檯上的病患，不知情下用了第二手、第三手，甚至重複用過十次的醫材！這樁白色巨塔的謊言黑幕，讓醫病關係遭受重大挑戰。
        </div>
        <div class="intro-share">
          <i @click="LineShare(href, 1)" class="line i-line"></i><i @click="FacebookShare(href, 1)" class="facebook i-facebook-1"></i>
        </div>
      </div>
    </div>
    <div class="container">
        <div class="section1 theme1">
          <div class="content-wrapper">
            <div class="title">
              全新包裝 仍有可能是二手貨
            </div>
            <p>為了切除外痣的50幾歲李姓婦人，術前趴在手術檯上，醫護人員當場拆掉「<span class="subline">雙極電外科器械</span><span class="dictionary"><i @click="handleDictionary" class="i-qa"></i></span>」
              <span v-if="isExtend" class="dictionary-expend">
                <p class="dictionary-title">小辭典：雙極電外科器械</p>
                <br>
                <p>用途：</p>
                <p>「雙極電外科器械」屬於一種能量器械，為外科腹腔鏡手術常用耗材，醫師切除器官、周邊血管或軟組織時，瞬間釋放熱能，以能量燒灼方式達到止血、截斷血管等效果。</p> 
                <br>
                <p>一般來說，能量器械適用範圍相當廣泛，小至切除痔瘡，大至消化道、胸腔外科等手術，甚至肺部、乳房、泌尿道等腫瘤切除，都可派上用場，目前均需為自費。 </p>
                <br>
                <p>使用限制： </p>
                <p>依照食藥署資料，所有核准在台上市的能量器械均屬一次性手術耗材，以拋棄式使用為設計原理，僅限用一次，但部分醫療院所為了節省成本，常是重複使用，直到器械能量衰耗，功能變差為止。</p>
              </span>

            塑膠封套，意味著這是全新的，為此，她自費2、3萬元支付此醫材費用，但果真如此嗎？眼前看到的，就一定是事實嗎？</p>
            <br>
            <p>廣泛用於痔瘡切除、外科腹腔鏡手術的「雙極電外科器械」屬於一次性手術耗材，在食藥署藥證中，清楚寫著「單次使用器械」，廠商在外包裝也有標示「single patient use」，但許多醫療院所卻在消毒殺菌後重複使用。記者深入追查，在健保署「<a href="https://www1.nhi.gov.tw/SpecialMaterial/SpecialMaterial.aspx">自費醫材比價網</a>」嗅出端倪。</p>
            <br>
          </div>
          <div class="image-wrapper">
            <img src="../../public/images/article-images/index_page1_article_img1.jpg" alt="">
            <div class="discribe">
              雙極電外科器械是外科腹腔鏡手術中常用的一次性手術耗材，但許多醫院私下消毒重複使用。
            </div>
            <img src="../../public/images/article-images/index_page1_article_img2.jpg" alt="">
            <div class="discribe">
              一次性手術耗材包裝上有註明只能供一位病人使用。
            </div>
          </div>
        </div>
        <hr />
        <div class="theme2">
          <div class="left">
            <div class="title">
              同款醫材 自費價差高達16倍
            </div>
            <p>一套「雙極電外科器械」費用近3萬元，但在77家提供該項自費醫材的醫療院所中，卻有31家售價低於2萬5,000元。</p>
            <br>
            <p>其中11家醫院低於8,000元，<span class="mark">台大醫院</span>僅需6,875元，位居低價排行榜的第9名。</p>
            <br>
            <p>最便宜的是委託彰化秀傳醫療體系所經營的
              <span class="mark">台南市立醫院</span>，患者僅需自費3,000元；而價格最高的是<span class="mark">桃園敏盛綜合醫院</span>
              ，自費價格高達47,500元，價格幾乎為台南市立醫院的16倍。
            </p>
            <br>
            <p>先不探究同樣醫材在不同醫院自費售價差距如此懸殊，低於出廠售價的醫院幾可認定重複使用「雙極電外科器械」此一次性手術耗材，只是各醫院重複使用的次數不一，有些5次，有些則可能高達10次。</p>
          </div>  
          <div class="right">
            <div class="row">
              <div class="img-wrapper">
                <h4 class="img-title">77家醫院自費價格</h4>
                <img src="../../public/images/chart/index_page1_article_chart.svg" alt="">
              </div>
            </div>
          </div>
        </div>
    </div>
    <br>
    <div class="container">
      <div class="button-wrapper">
        <div class="last-button" @click="changePage('', '/2', 'last')">
          <i class="nav-arrow nav-arrow-left i-arrow4-left"></i>
        </div>
        <div class="next-button"  @click="changePage('', '/2', 'next')" >
          黑心醫院重複使用10次<i class="nav-arrow nav-arrow-right i-arrow4-right"></i>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
import paging from '../mixin/paging.js'
import sharing from '../mixin/sharing.js'

export default {
  name: 'enter',
  mixins: [paging, sharing],
  data () {
    return {
      href: 'https://udn.com/upf/newmedia/2019_data/medical_material/',
      isExtend: false
    }
  },
  components: {

  },
  mounted () {
    this.$emit('changeRoute', this.$route);
    console.log(this.$refs)
  },
  methods: {
    handleDictionary () {
      this.isExtend = !this.isExtend
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/baseSCSS/theme.scss';

.enter {
  padding-top: 165px;
  padding-bottom: 88px;
  @media screen and (max-width: 374px) {
        
  }
  @media screen and (min-width: 768px) {
    padding-top: 165px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 220px;
    padding-bottom: 173px;
  }
  .cover {
    padding: 25px 15px;
    height: 450px;
    background-size: cover;
    background-image: url("../../public/images/cover/index_cover_mob.jpg");
    background-repeat: no-repeat;
    @media screen and (max-width: 374px) {
        
    }
    @media screen and (min-width: 768px) {
      background-image: url("../../public/images/cover/index_cover_mob.jpg");
      background-position: bottom;
      height: 462px;
    }
    @media screen and (min-width: 1024px) {
      background-position: center;
      background-image: url("../../public/images/cover/index_cover_web.jpg");
    }
  }
  .intro {
    font-size: 15px;
    font-weight: bolder;
    color: #333333;
    line-height: 1.5;
    padding-bottom: 11px;
    @media screen and (max-width: 374px) {
      
    }
    @media screen and (min-width: 768px) {
      padding-top: 10%;
      padding-left: 40%;
    }
    @media screen and (min-width: 1024px) {

    }
  }
  .intro-share {
      text-align: right;
      font-size: 26px;
      @media screen and (max-width: 374px) {
        
      }
      @media screen and (min-width: 768px) {
        
      }
      @media screen and (min-width: 1024px) {
        padding-left: 40%;
        text-align: left;
      }
      i {
        cursor: pointer;
      }
    }
  .section1 {
    @media screen and (max-width: 374px) {
      
    }
    @media screen and (min-width: 768px) {
      
    }
    @media screen and (min-width: 1024px) {
      margin-top: 104px;
    }
    .subline {
      text-decoration:underline;
    }
    .image-wrapper {
      .discribe {
        margin-top: 9px;
      }
    }
  }
  .last-button {
    visibility: hidden;;
  }
  .dictionary {
    color: #d84c4c;
  }
  .dictionary-expend {
    display: block;
    border: solid 1px white;
    padding: 33px 34px 45px;
    margin: 17px 0 37px;
  }
}
</style>
