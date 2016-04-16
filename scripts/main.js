function YouTubeEmbeder(options, callback){
  var that = this;
  document.addEventListener("DOMContentLoaded", function(){
    that._setOptions(options);
    that.render();
    if (typeof callback === 'function') {
      callback();
    }
  });
}

YouTubeEmbeder.prototype = {

  _setOptions: function(o){
    if (o === undefined) {
      return;
    }
    this._selector = o.selector || 'body';
    this._videoId  = o.videoId || '';
    this._height   = o.height || '100px';
    this._width    = o.width || '100px';
    this.element = document.querySelector(this._selector);
  },

  template: function(){
    return '<iframe width="'+this._width+'" height="'+this._height+'" src="https://www.youtube.com/embed/'+this._videoId+'" frameborder="0" allowfullscreen></iframe>';
  },

  render: function(){
    this.element.innerHTML = this.template();
  }
};

