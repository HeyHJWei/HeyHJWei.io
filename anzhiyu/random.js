var posts=["posts/4126800539/","posts/1999163753/","posts/1455897523/","posts/2607722179/","posts/2304588875/","posts/1406167115/","posts/3276277813/","posts/2587301464/","posts/2344074049/","posts/1876369856/","posts/2808981175/","posts/3000552397/","posts/1145624611/","posts/3150507853/","posts/508713684/","posts/154257042/","posts/67440817/","posts/1685515616/","posts/4105956505/","posts/831263057/","posts/416548136/","posts/2255213327/","posts/3320244556/","posts/1041826382/","posts/1946610579/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };