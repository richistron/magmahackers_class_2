
function YouTubeEmbeder(options, callback){
  this._setOptions(options);
  // this.done(callback);
}

YouTubeEmbeder.prototype = {

  _setOptions: function(o){
    if (o === undefined) {
      return;
    }
    this._selector = o.selector || 'body';
    this._videoId  = o.videoId || '';
    this._styles   = o.styles || {};
  },

  getVideoId: function(){
    return this._videoId;
  },

  getTemplate: function(){
    return '<iframe width="560" height="315" src="https://www.youtube.com/embed/NJqXV_MW4aY" frameborder="0" allowfullscreen></iframe>';
  },

  getComments: function(){},

  render: function(){}
};


// <iframe width="560" height="315" src="https://www.youtube.com/embed/NJqXV_MW4aY" frameborder="0" allowfullscreen></iframe>

