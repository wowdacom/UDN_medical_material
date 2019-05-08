import Utils from 'udn-newmedia-utils'

var mixin = {
    methods: {
        LineShare (href, currentpage) {
            let page = currentpage === 0 ? 1 : currentpage
    
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
        FacebookShare (href, currentpage) {
          let page = currentpage === 0 ? 1 : currentpage
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
        }
    }
  }
  
  export default mixin
  