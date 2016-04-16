

describe('YouTubeEmbeder smoke test', function() {


  it('should exits', function(){
    expect(YouTubeEmbeder).toBeDefined();
  });


  it('should return and object', function(){
    expect(new YouTubeEmbeder()).toEqual(jasmine.any(Object));
  });


});

// describe('unit tests', function() {
// });

// describe('BDD tests', function() {
// });
