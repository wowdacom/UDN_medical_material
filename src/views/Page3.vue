<template>
  <div class="page3">
    <div class="container">
      <div class="theme1">
        <div class="content-wrapper">
          <div class="title">
            <span class="subtitle">醫材重複使用<br>病患恐染血液疾病</span>
          </div>
          <p>國內包括台大等多家醫學中心爆發違規重複使用一次性耗材，但台北榮總安然度過風暴，甚至被喻為醫院感控模範生，原因在於民國84年「瘧疾事件」及91年「心導管事件」，前者甚至造成4人死亡，慘痛教訓宛如北榮之恥，從此以最高規格檢視醫材。</p>
          <br><br>
        </div>
        <div class="image-wrapper">
          <img src="../../public/images/article-images/index_page3_article_img1.jpg" alt="">
          <div class="discribe">
            手術器材若消毒不完全，可能引發病人交叉感染血液疾病。
          </div>
        </div>
      </div>
      <div class="theme1">
        <div class="content-wrapper">
          <div class="title">
            <span class="subtitle">北榮曾爆瘧疾院感 釀4死</span>
          </div>
          <p>民國84年，北榮爆發瘧疾疫情，6人罹患瘧疾，調查發現，屬於院內感染，感染者均在同一天下午接受電腦斷層掃描檢查，最後其中4人不幸死亡。</p>                             
          <br>                                 
          <p>疫情調查顯示，負責檢查的羅姓醫師當天一早先幫一名從非洲返國、不慎染上瘧疾的患者施打顯影劑，隨著接手的醫師一時不查，繼續使用原本應該拋棄的注射針筒，以致後面6人均感染瘧疾。</p>                                       
          <br>                                
          <p>「這是非常慘痛的教訓」北榮外科 部部主任馬旭說，瘧疾事件那年，他才剛進入醫界不久，記憶深刻。為此，北榮採取高規模院內感控，對於所有拋棄式（手術刀片）、一次性使用的醫材耗材（能量器械），均嚴格執行清點，確實拋棄。</p>   
          <br>
          <p>馬旭強調，重複使用一次性醫材，暗藏許多感染的風險，</p>
          <br><br>
        </div>
        <div class="image-wrapper">
          <img src="../../public/images/article-images/index_page3_article_img2.png" alt="">
          <div class="discribe">
            能量器械有長管腔設計，結構精細複雜，很難完全消毒殺菌。圖／取自柯惠醫療官網
          </div>
        </div>
      </div>
      <div class="content">
          <span class="mark">
              “以能量器械產品來說，因有長管腔設計，結構複雜，很難完全消毒殺菌，其中最怕的就是「狂牛症」，即使透過高溫，也無法殺死普里昂蛋白，恐讓患者暴露在染病風險之中。” 
          </span>
      </div>
      <div class="theme-default">
        <div class="title">
            醫材效能打折扣 增加手術風險
        </div>
        <p>「所有醫材都該一次性使用才對！」秀傳亞洲遠距微創手術中心副院長林忠葦表示，醫院重複使用一次性耗材，部分原因為健保對於手術基本給付費率太低，有些醫院無法打平，才會從病人自費市場下手。</p>   
        <br>
        <p>林忠葦也以超音波刀為例，假設重複消毒使用5次，儘管安全無虞，但這類儀器原理為能量輸出，用到第5次時，功率越差，就代表手術的風險與失敗率也越高。</p>
        <br>
        <p>再者，患者無法得知前位動刀者的背景，如果前一位為愛滋感染者，即使經充分消毒，但還是會產生疑慮，覺得怪怪的。</p>
        <br>
      </div>
    </div>
    <div class="container">
      <div class="button-wrapper">
        <div class="last-button"  @click="changePage('/2', '/end', 'last')">
          <i class="nav-arrow nav-arrow-left i-arrow4-left"></i>
        </div>
        <div class="next-button"  @click="changePage('/2', '/end', 'next')">
          術前你該如何自保<i class="nav-arrow nav-arrow-right i-arrow4-right"></i>
        </div>
      </div>
      <div class="page-share">
        <i @click="LineShare(href, 1)" class="line i-line"></i><i @click="FacebookShare(href, 1)" class="facebook i-facebook-1"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
import paging from '../mixin/paging.js'
import sharing from '../mixin/sharing.js'

export default {
  name: 'page3',
  mixins: [paging, sharing],
  data () {
    return {
      href: 'https://udn.com/upf/newmedia/2019_data/medical_material/'
    }
  },
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
@import '../assets/baseSCSS/theme.scss';
.page3 {
  background-color: #333333;
  padding-top: 120px;
  .content {
    line-height: 2;
    .mark {
        color: #333333;
        background-color: white;
    }
  }
}
</style>
