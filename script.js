                  <!-- Related Post Mulai -->
                      var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>
                                        &quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if>
                    </b:loop></b:if>];
                                        var relatedPostConfig = {
                                        homePage: &quot;<data:blog.homepageUrl/>&quot;,
                                        widgetTitle: &quot;&lt;h4&gt;Baca Juga:&lt;/h4&gt;&quot;,
                                        numPosts: 10,
                                        containerId: &quot;related-post&quot;,
                                        newTabLink: false,
                                        widgetStyle: 1,
                                        callBack: function() {}
                                        };

                      //<![CDATA[
                      /*! Creator JS Related Post Widget for Blogger by Taufik Nurrohman => http://gplus.to/tovic */
                      /*! Telah dimodifikasi oleh you w4hyou => http://info-kmu.blogspot.com/ */
                      var randomRelatedIndex,showRelatedPost;(function(e,t,n){var r={widgetTitle:"<h4>Artikel Terkait:</h4>",homePage:"//endapos.com",numPosts:10,titleLength:"auto",callBack:function(){}};for(var i in relatedPostConfig){r[i]=relatedPostConfig[i]=="undefined"?r[i]:relatedPostConfig[i]}var s=function(e){var r=t.createElement("script");r.type="text/javascript";r.src=e;n.appendChild(r)},o=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},u=function(e){var t=e.length,n,r;if(t===0){return false}while(--t){n=Math.floor(Math.random()*(t+1));r=e[t];e[t]=e[n];e[n]=r}return e},a=typeof labelArray=="object"&&labelArray.length>0?"/-/"+u(labelArray)[0]:"",f=function(e){var t=e.feed.openSearch$totalResults.$t-r.numPosts,n=o(1,t>0?t:1);s(r.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+a+"?alt=json-in-script&orderby=updated&start-index="+n+"&max-results="+r.numPosts+"&callback=showRelatedPost")},l=function(e){var t=document.getElementById(r.containerId),n=u(e.feed.entry),i=r.widgetStyle,s=r.widgetTitle+"<ul>",o=r.newTabLink?' target="_blank"':"",a='<span style="display:block;clear:both;"></span>',f,l,c,h,p;if(!t){return}for(var v=0;v<r.numPosts;v++){if(v==n.length){break}l=n[v].title.$t;c=r.titleLength!=="auto"&&r.titleLength<l.length?l.substring(0,r.titleLength)+"&hellip;":l;for(var m=0,g=n[v].link.length;m<g;m++){f=n[v].link[m].rel=="alternate"?n[v].link[m].href:"#"}s+='<li><a title="'+l+'" href="'+f+'"'+o+">"+c+"</a></li>"}t.innerHTML=s+="</ul>"+a;r.callBack()};randomRelatedIndex=f;showRelatedPost=l;s(r.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+a+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0])
                      //]]>
                    <!-- Related Post Akhir -->

<!-- Blog Pager Mulai -->
                        $(document).ready(function(){
                          var olderLink = $(&quot;a.blog-pager-older-link&quot;).attr(&quot;href&quot;);
                          $(&quot;a.blog-pager-older-link&quot;).load(olderLink+&quot; .post-title:first&quot;, function() {
                            var olderLinkTitle = $(&quot;a.blog-pager-older-link&quot;).text();
                            $(&quot;a.blog-pager-older-link&quot;).text(olderLinkTitle);//rgt
                          });
                          var newerLink = $(&quot;a.blog-pager-newer-link&quot;).attr(&quot;href&quot;);
                          $(&quot;a.blog-pager-newer-link&quot;).load(newerLink+&quot; .post-title:first&quot;, function() {
                            var newerLinkTitle = $(&quot;a.blog-pager-newer-link:first&quot;).text();
                            $(&quot;a.blog-pager-newer-link&quot;).text(newerLinkTitle);
                          });
                        });
<!-- Blog Pager Akhir -->

<!-- Auto Lightbox Mulai -->
// tambahan code Javascript agar Auto Lightbox pada area .entry-content
      $(&quot;.entry-content img&quot;).parents(&quot;a&quot;).on(&quot;click&quot;,function(a){a.preventDefault();a.stopPropagation();return $(this).lighter()});
      // jQuery Lighter Plugin
      (function(){var g,h,e,f=function(b,a){return function(){return b.apply(a,arguments)}};g=jQuery;h=(function(){function a(){}a.transitions={webkitTransition:&quot;webkitTransitionEnd&quot;,mozTransition:&quot;mozTransitionEnd&quot;,oTransition:&quot;oTransitionEnd&quot;,transition:&quot;transitionend&quot;};a.transition=function(k){var c,l,d,b;c=k[0];b=this.transitions;for(d in b){l=b[d];if(c.style[d]!=null){return l}}};a.execute=function(d,b){var c;c=this.transition(d);if(c!=null){return d.one(c,b)}else{return b()}};return a})();e=(function(){a.settings={padding:40,dimensions:{width:700,height:350},template:&quot;<div class='lighter fade'>\n  <div class='lighter-container'>\n    <span class='lighter-content'/>\n    <a class='lighter-close'>&#215;</a>\n    <a class='lighter-prev'>&#8249;</a>\n    <a class='lighter-next'>&#8250;</a>\n  </div>\n  <div class='lighter-overlay'/>\n</div>&quot;};a.lighter=function(c,d){var b;if(d==null){d={}}b=c.data(&quot;_lighter&quot;);if(!b){b=new a(c,d);c.data(&quot;_lighter&quot;,b)}return b};a.prototype.$=function(b){return this.$lighter.find(b)};function a(c,b){if(b==null){b={}}this.show=f(this.show,this);this.hide=f(this.hide,this);this.toggle=f(this.toggle,this);this.keyup=f(this.keyup,this);this.align=f(this.align,this);this.resize=f(this.resize,this);this.process=f(this.process,this);this.href=f(this.href,this);this.type=f(this.type,this);this.image=f(this.image,this);this.prev=f(this.prev,this);this.next=f(this.next,this);this.close=f(this.close,this);this.$=f(this.$,this);this.$el=c;if((this.$el.data(&quot;width&quot;)!=null)&amp;&amp;(this.$el.data(&quot;height&quot;)!=null)){if(b.dimensions==null){b.dimensions={width:this.$el.data(&quot;width&quot;),height:this.$el.data(&quot;height&quot;)}}}this.settings=g.extend({},a.settings,b);this.$lighter=g(this.settings.template);this.$overlay=this.$(&quot;.lighter-overlay&quot;);this.$content=this.$(&quot;.lighter-content&quot;);this.$container=this.$(&quot;.lighter-container&quot;);this.$close=this.$(&quot;.lighter-close&quot;);this.$prev=this.$(&quot;.lighter-prev&quot;);this.$next=this.$(&quot;.lighter-next&quot;);this.$body=this.$(&quot;.lighter-body&quot;);this.width=this.settings.dimensions.width;this.height=this.settings.dimensions.height;this.align();this.process()}a.prototype.close=function(b){if(b!=null){b.preventDefault()}if(b!=null){b.stopPropagation()}return this.hide()};a.prototype.next=function(b){if(b!=null){b.preventDefault()}return b!=null?b.stopPropagation():void 0};a.prototype.prev=function(){if(typeof event!==&quot;undefined&quot;&amp;&amp;event!==null){event.preventDefault()}return typeof event!==&quot;undefined&quot;&amp;&amp;event!==null?event.stopPropagation():void 0};a.prototype.image=function(b){return b.match(/\.(jpeg|jpg|jpe|gif|png|bmp)$/i)};a.prototype.type=function(b){if(b==null){b=this.href()}return this.settings.type||(this.image(b)?&quot;image&quot;:void 0)};a.prototype.href=function(){return this.$el.attr(&quot;href&quot;)};a.prototype.process=function(){var j,c,d,b=this;d=this.type(j=this.href());this.$content.html((function(){switch(d){case&quot;image&quot;:return g(&quot;<img/>&quot;).attr({src:j});default:return g(j)}})());switch(d){case&quot;image&quot;:c=new Image();c.src=j;return c.onload=function(){return b.resize(c.width,c.height)}}};a.prototype.resize=function(b,c){this.width=b;this.height=c;return this.align()};a.prototype.align=function(){var d,b,c;b=Math.max((d=this.height)/(g(window).height()-this.settings.padding),(c=this.width)/(g(window).width()-this.settings.padding));if(b&gt;1){d=Math.round(d/b)}if(b&gt;1){c=Math.round(c/b)}return this.$container.css({height:d,width:c,margin:&quot;-&quot;+(d/2)+&quot;px -&quot;+(c/2)+&quot;px&quot;})};a.prototype.keyup=function(b){if(b.target.form!=null){return}if(b.which===27){this.close()}if(b.which===37){this.prev()}if(b.which===39){return this.next()}};a.prototype.toggle=function(b){if(b==null){b=&quot;on&quot;}g(window)[b](&quot;resize&quot;,this.align);g(document)[b](&quot;keyup&quot;,this.keyup);this.$overlay[b](&quot;click&quot;,this.close);this.$close[b](&quot;click&quot;,this.close);this.$next[b](&quot;click&quot;,this.next);return this.$prev[b](&quot;click&quot;,this.prev)};a.prototype.hide=function(){var d,b,c=this;d=function(){return c.toggle(&quot;off&quot;)};b=function(){return c.$lighter.remove()};d();this.$lighter.removeClass(&quot;fade&quot;);this.$lighter.position();this.$lighter.addClass(&quot;fade&quot;);return h.execute(this.$container,b)};a.prototype.show=function(){var d,b,c=this;b=function(){return c.toggle(&quot;on&quot;)};d=function(){return g(document.body).append(c.$lighter)};d();this.$lighter.addClass(&quot;fade&quot;);this.$lighter.position();this.$lighter.removeClass(&quot;fade&quot;);return h.execute(this.$container,b)};return a})();g.fn.extend({lighter:function(a){if(a==null){a={}}return this.each(function(){var b,c,d;b=g(this);d=g.extend({},g.fn.lighter.defaults,typeof a===&quot;object&quot;&amp;&amp;a);c=typeof a===&quot;string&quot;?a:a.action;if(c==null){c=&quot;show&quot;}return e.lighter(b,d)[c]()})}})}).call(this);
<!-- Auto Lightbox Akhir -->

<!--  -->
    $( "cp" )
      .contents()
      .filter(function(){
        return this.nodeType !== 1;
      })
      .wrap( "<p></p>" );
<!--  -->

  <!-- Adsense Mulai -->
  //<![CDATA[
  //CSS Ready
  function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
  loadCSS("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")
  //]]>

  //<![CDATA[
  // Lazy Load AdSense
  var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement&&!1===lazyadsense||0!=document.body&&!1===lazyadsense)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyadsense=!0)},!0);
  //]]>
<!-- Adsense Akhir -->

<!-- Disqus Mulai -->
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://endapos.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
<!-- Disqus Akhir -->

<!-- Scroll Mulai -->
        //<![CDATA[
        (function(a){a(window).scroll(function(){if(a(this).scrollTop()>280){a("#top").removeAttr("href");a("#top").fadeIn()}else{a("#top").fadeOut()}});a(function(){a("#top").click(function(){a("html, body").animate({scrollTop:0},"slow");return false})})})(jQuery);
        //]]>
<!-- Scroll Akhir -->

<!-- Debugger Mulai -->
  //<![CDATA[
  !function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}}();
  //]]>
<!-- Debugger Akhir -->
