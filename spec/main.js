describe('YouTubeEmbeder smoke test', function() {
  it('should exits', function(){
    expect(YouTubeEmbeder).toBeDefined();
  });
  it('should return and object', function(){
    expect(new YouTubeEmbeder()).toEqual(jasmine.any(Object));
  });
});

describe('unit tests', function() {
  var proto = YouTubeEmbeder.prototype,
  instance = new YouTubeEmbeder({
    selector: 'body',
    videoId: 'NJqXV_MW4aY',
    styles: {
      width: '100px',
      height: '100px'
    }
  }, function(){
      console.log('all done');
  });


  it('unit getVideoId should return the video id', function(){
    expect(proto.getVideoId).toBeDefined();
    expect(instance.getVideoId()).toBeDefined('NJqXV_MW4aY');
  });
  it('unit getTemplate should return the iframe template', function(){
    expect(proto.getTemplate).toBeDefined();
    expect(instance.getTemplate()).toMatch('iframe');
  }); it('unit getComments should return a list of comments', function(){
    expect(proto.getComments).toBeDefined();
  });
  it('unit render should render the video template into the dom', function(){
    expect(proto.render).toBeDefined();
  });
});

describe('BDD tests', function() {
});
