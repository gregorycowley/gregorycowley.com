import React from "react";

class PhotoSwipe extends React.Component {
  render() {
    return (
      <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        {/* <!-- Background of PhotoSwipe. 
                    It's a separate element as animating opacity is faster than rgba(). --> */}
        <div class="pswp__bg" />

        {/* <!-- Slides wrapper with overflow:hidden. --> */}
        <div class="pswp__scroll-wrap">
          {/* <!-- Container that holds slides. 
                        PhotoSwipe keeps only 3 of them in the DOM to save memory.
                        Don't modify these 3 pswp__item elements, data is added later on. --> */}
          <div class="pswp__container">
            <div class="pswp__item" />
            <div class="pswp__item" />
            <div class="pswp__item" />
          </div>

          {/* <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. --> */}
          <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
              {/* <!--  Controls are self-explanatory. Order can be changed. --> */}

              <div class="pswp__counter" />

              <button
                class="pswp__button pswp__button--close"
                title="Close (Esc)"
              />

              <button class="pswp__button pswp__button--share" title="Share" />

              <button
                class="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              />

              <button
                class="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              />

              {/* <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                            <!-- element will get class pswp__preloader--active when preloader is running --> */}
              <div class="pswp__preloader">
                <div class="pswp__preloader__icn">
                  <div class="pswp__preloader__cut">
                    <div class="pswp__preloader__donut" />
                  </div>
                </div>
              </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div class="pswp__share-tooltip" />
            </div>

            <button
              class="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            />

            <button
              class="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            />

            <div class="pswp__caption">
              <div class="pswp__caption__center" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoSwipe;
