<template>
  <div class="enter">
    <div class="cover">
      <div class="container">
        <div class="intro">手術室裡不能說的祕密—「你的開刀醫材是二手貨？」經過長期追蹤，《聯合報》挖掘到國內自費醫療的大黑洞，眾多醫院竟不顧法令與病患感染風險，私下重複使用一次性手術耗材。
          <br><br>
          採訪多位醫師、醫院均認為是醫院一片好意，「為了幫病人省錢」。更讓人驚訝的是政府官員早就發現手術室裡的黑幕，卻遲未開罰處置。長期以來讓躺在手術檯上的病患，不知情下用了第二手、第三手，甚至重複用過十次的醫材！這樁白色巨塔的謊言黑幕，讓醫病關係遭受重大挑戰。
        </div>
        <div class="share">
          <i @click="LineShare(href)" class="line i-line"></i><i @click="FacebookShare(href)" class="facebook i-facebook-1"></i>
        </div>`
      </div>
    </div>
    <div class="container">
        <div class="section1 theme1">
          <div class="content-wrapper">
            <div class="title">
              全新包裝 仍有可能是二手貨
            </div>
            為了切除外痣的50幾歲李姓婦人，術前趴在手術檯上，醫護人員當場拆掉「雙極電外科器械」塑膠封套，意味著這是全新的，為此，她自費2、3萬元支付此醫材費用，但果真如此嗎？眼前看到的，就一定是事實嗎？
            <br>
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
            一套「雙極電外科器械」費用近3萬元，但在77家提供該項自費醫材的醫療院所中，卻有31家售價低於2萬5,000元。
            <br><br>
            其中11家醫院低於8,000元，<span class="mark">台大醫院</span>僅需6,875元，位居低價排行榜的第9名。
            <br><br>
            最便宜的是委託彰化秀傳醫療體系所經營的   
            <span class="mark">台南市立醫院</span>，患者僅需自費3,000元；而價格最高的是<span class="mark">桃園敏盛綜合醫院</span>，自費價格高達47,500元，價格幾乎為台南市立醫院的16倍。
            <br><br>
            先不探究同樣醫材在不同醫院自費售價差距如此懸殊，低於出廠售價的醫院幾可認定重複使用「雙極電外科器械」此一次性手術耗材，只是各醫院重複使用的次數不一，有些5次，有些則可能高達10次。
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
        <div class="last-button">
          <i class="nav-arrow nav-arrow-left i-arrow4-left" @click="scrollXContral('left')"></i>
        </div>
        <div class="next-button">
          黑心醫院重複使用10次<i class="nav-arrow nav-arrow-right i-arrow4-right" @click="scrollXContral('right')"></i>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>

export default {
  name: 'enter',
  components: {

  },
  mounted () {
    this.$emit('changeRoute', this.$route);
  },
  methods: {
    LineShare (href) {
        let page = this.currentpage === 0 ? 1 : this.currentpage

          ga("newmedia.send", {
            "hitType": "event",
            "eventCategory": "Line Share",
            "eventAction": "click",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [第" + page + "頁 line share]"
          })
          if (Utils.detectMob()) {
            // 手機
            window.open("//line.me/R/msg/text/?" + document.querySelector('title').innerHTML + "%0D%0A%0D%0A" + document.querySelector('meta[property="og:description"]').content + "%0D%0A%0D%0A" + href)
          } else {
            window.open("https://lineit.line.me/share/ui?url=" + href)
          }
    },
    FacebookShare (href) {
      let page = this.currentpage === 0 ? 1 : this.currentpage
      ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "Facebook Share",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [第" + page + "頁 facebook share]"
      })
      FB.ui(
        {
          method: 'share_open_graph',
          action_type: 'og.shares',
          action_properties: JSON.stringify({
            object: {
              'og:url': href,
              'og:title': '白色巨塔的謊言─黑心二手醫材濫用 病患自費成冤大頭',
              'og:description': '你能想像花大錢使用的自費手術醫材，竟是「二手貨」？《聯合報》調查發現，不少外科手術器械為一次性耗材，但許多醫院會私下消毒後重複使用，使用次數高達5到10次，而且躺在手術檯上的病人根本不知情。',
              'og:image': 'https://nmdap.udn.com.tw/upf/newmedia/2019_data/medical_material/meta/index_Facebook.jpg'
            }
          })
        },
        // callback
        function(response) {
          if (response && !response.error_message) {
            console.log(response);
          } else {
            console.log(response.error_message);
          }
        }
      );
    },
  }
}
</script>
<style scoped lang="scss">
@import '../assets/baseSCSS/theme.scss';

.enter {
  padding-top: 175px;
  @media screen and (max-width: 374px) {
        
  }
  @media screen and (min-width: 768px) {
    padding-top: 170px;
  }
  @media screen and (min-width: 1024px) {

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
  .section1 {
    @media screen and (max-width: 374px) {
      
    }
    @media screen and (min-width: 768px) {
      
    }
    @media screen and (min-width: 1024px) {
      margin-top: 104px;
    }
  }
  .share {
    text-align: right;
    font-size: 26px;
  }
  .last-button {
    visibility: hidden;;
  }
}
</style>
