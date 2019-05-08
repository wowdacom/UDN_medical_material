<template>
  <div class="page2">
    <div class="container">
      <div class="section1 theme1">
        <div class="content-wrapper">
          <div class="title">
            <span class="subtitle">黑心醫院 醫材違規重複用10次</span>
          </div>
          <p>委託秀傳醫療體系經營的台南市立醫院創下全台「雙極電外科器械」最低價紀錄，病人僅需自費3,000元，秀傳醫療體系副總裁牟聯瑞坦承，基於良善的立場，想為病人省錢，平均使用8至10次，價格才能壓到如此之低，讓每個病友都用得起。</p>
          <br>
          <p>牟聯瑞說，「重複使用一次性耗材，這是無可奈何的事」，站在醫院及醫師的立場，當然希望讓病人使用全新的手術耗材，但並非每個病家都能夠負擔得起，因此才會消毒後重複使用。</p>
          <br>
        </div>
        <div class="image-wrapper">
          <img src="../../public/images/article-images/index_page2_article_img1.jpg" alt="">
          <div class="discribe">
            委託秀傳醫療體系經營的台南市立醫院重複使用一次性手術耗材，次數高達10次。
          </div>
        </div>
      </div>
      <hr>
      <div class="theme-default">
        <div class="title">
            台大訂消毒SOP 重複使用5次
        </div>
        <br>
        <p>台大醫院「雙極電外科器械」自費價格僅需近7,000元，對此，記者親訪台大醫院大腸直腸科主任梁金銅，他不諱言地表示，</p>
        <br>
        <div class="content">
          <span class="mark">
              “台大醫院確實重複使用「雙極電外科器械」，像是超音波刀、腹腔鏡閉合器等，出發點是為了幫患者省錢，依照院內手術管理委員會所討論出來的消毒SOP規範，徹底消毒後，使用次數最高5次。”
          </span>
        </div>
        <br>
        <p>梁金銅更驚爆，就他所了解，台大醫院在使用一次性手術耗材時，重複使用機率僅約1成，但有些醫院則超過3成以上。 </p>
      </div>
      <hr>
      <div class="theme1">
        <div class="content-wrapper">
          <div class="title">
            手術前不知情 病人如待宰羔羊
          </div>
          <p>在北部某區域醫院手術室任職多年的陳姓護理師透露，除了骨釘、骨板、骨水泥等無法回收的醫材，以及凝血劑、止血用品等醫材，不會重複使用之外，其餘原本僅限一次使用的手術醫材，大都在消毒後多次使用。</p>
          <br>
          <p>令人毛骨悚然的是，絕大部分患者不知道自己使用「二手醫材」。在北部某區域醫院任職多年的陳姓護理師說，患者術前接受麻醉，披上手術被單，推至手術檯，術後醒來怎會知道自己用過了哪些器械，而這也是部分醫院肆無忌憚地重複使用一次性手術耗材的主因。</p>
          <br>
        </div>
        <div class="image-wrapper">
          <img src="../../public/images/article-images/index_page2_article_img2.jpg" alt="">
          <div class="discribe">
            病患在不知情的情況下，被迫使用二手醫材。
          </div>
        </div>
      </div>
      <hr>
      <div class="theme-default">
        <div class="title">
            健保署早知情 卻未處理究責
        </div>
        <br>
        據了解，健保署年初審閱「醫材比價網」資料，就發現部分醫院價格低得離譜，曾派人致電這些醫院，瞭解低價原因，原因就是重複使用。不過，這並非健保署業務，並未進一步督導究責，而只是打電話「瞭解瞭解」。
        <br>
        <br>
        <div class="content">
          <span class="mark">
              “健保署相關官員雖然瞭解比價網上部分自費醫材價格高低不一，手術縫合閉合器價差竟可高達一二十倍，卻只是打電話至醫療院所聊一聊，未能細究原因，積極處理規範，等於自廢武功。”
          </span>
        </div>
        <br>
        台灣醫療改革基金會副執行長朱顯光重批，健保署、食藥署嚴重失職，未能嚴格把關。尤其健保署明知這項陋習，卻睜一隻眼、閉一隻眼，比價網形同虛設，將自費醫材當成一般商品，只是揭露價格，未善盡把關之責。
      </div>
    </div>
    <div class="container">
      <div class="button-wrapper">
        <div class="last-button" @click="changePage('/1', '/3', 'last')">
          <i class="nav-arrow nav-arrow-left i-arrow4-left"></i>
        </div>
        <div class="next-button" @click="changePage('/1', '/3', 'next')">
          病患恐感染血液疾病<i class="nav-arrow nav-arrow-right i-arrow4-right"></i>
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
  name: 'page2',
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
.page2 {
  background-color: #333333;
  padding-top: 120px;
  @media screen and (max-width: 374px) {
        
  }
  @media screen and (min-width: 768px) {
    padding-top: 170px;
  }
  @media screen and (min-width: 1024px) {

  }
  .section1 {

  }
  .content-wrapper {
    @media screen and (max-width: 374px) {
        
    }
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 2;
    }
    @media screen and (min-width: 1024px) {

    }
    .title {

    }
  }
  .content {
    line-height: 2;
  }
}
</style>
