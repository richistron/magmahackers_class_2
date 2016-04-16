describe('YouTubeEmbeder smoke test', function() {
  it('should exits', function(){
    expect(YouTubeEmbeder).toBeDefined();
  });
});

describe('BDD tests', function() {
  var proto = YouTubeEmbeder.prototype,
  instance = new YouTubeEmbeder({
    selector: '#video',
    videoId: 'NJqXV_MW4aY',
    width: '100px',
    height: '100px'
  }, function(){
      console.log('all done');
  });

  it('it should embed a video', function(done){
    $(function(){
      var iframe = $('#video').find('iframe');
      expect(iframe.length).toBe(1);
      expect(iframe.attr('src')).toBe('https://www.youtube.com/embed/NJqXV_MW4aY');
      expect(iframe.attr('width')).toBe('100px');
      expect(iframe.attr('height')).toBe('100px');
      done();
    });
  });
});
