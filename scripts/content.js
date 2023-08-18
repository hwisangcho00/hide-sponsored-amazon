removeSponsor = (async () => {

  // regular search results
  var searchResults = document.querySelectorAll('div[data-component-type="s-search-result"]')

  if (searchResults) {
    searchResults.forEach((searchResult) => {
      smallText = searchResult.querySelector('span.a-color-secondary')
      if (smallText && smallText.innerHTML === 'Sponsored') {
        searchResult.setAttribute("style", "display:none")
      }
    })
  }

  // after page change
  var impressionResults = document.querySelectorAll('div[data-component-type="s-impression-counter"]')
  
  if (impressionResults) {
    impressionResults.forEach((impressionResult) => {
      smallText = impressionResult.querySelector('span.a-color-secondary')
      if (smallText && smallText.innerHTML === 'Sponsored') {
        impressionResult.setAttribute("style", "display:none")
      }
    })
  }

  // listed search results
  var listResults = document.querySelectorAll('li.a-carousel-card[role="listitem"]')

  if (listResults) {
    listResults.forEach((listResult) => {
      smallText = listResult.querySelector('span.a-color-secondary')
      if (smallText && smallText.innerHTML === 'Sponsored') {
        listResult.remove()
      }
    })
  }

  // 
  var videoResults = document.querySelectorAll('span[data-component-type="sbv-video-single-product"]')

  if (videoResults) {
    videoResults.forEach((videoResult) => {
      smallText = videoResult.querySelector('span.a-color-secondary')
      if (smallText && smallText.innerHTML === 'Sponsored') {
        videoResult.setAttribute("style", "display:none")
      }
    })
  }
  
  // image/video sponsored results (x grid format)
  var videoResults = document.querySelectorAll('div.sbv-ad-content-container')
  if (videoResults) {
    videoResults.forEach((videoResult) => {
    
      videoResult.setAttribute("style", "display:none")
    
    })
  }

  // highly recommended product
  var highlyRecommendedResults = document.querySelectorAll('div.s-include-content-margin.s-border-bottom.s-border-top-overlap.s-widget-padding-bottom')
  if (highlyRecommendedResults) {
    highlyRecommendedResults.forEach((highlyRecommendedResult) => {
      highlyRecommendedResult.setAttribute("style", "display:none")
    })
  }
});

removeSponsor()