/* jshint expr: true*/
define([
  'models/movie',
  'views/moviedetails'
],

function (Movie, MovieDetailsView) {
  'use strict';

  describe('movie details view', function () {

    beforeEach(function () {
      this.model = new Movie({
        "__id": "nm1093951",
        "i": [
          "http://ia.media-imdb.com/images/M/MV5BMTY1OTY5NjI5NV5BMl5BanBnXkFtZTcwODA4MjM0OA@@._V1_.jpg",
          681,
          1024
        ],
        "l": "Aaron Taylor-Johnson",
        "s": "Actor, Kick-Ass (2010)"
      });
      this.view = new MovieDetailsView({model:this.model});
    });

    afterEach(function () {
      this.view.destroy();
      this.view = null;
      this.model.clear();
    });

    // tests on serializeData()
    describe('serializeData()', function () {
      it('should return the serialized data', function () {
        var serializeData = this.view.serializeData();
        serializeData.should.have.property('image');
        should.not.exist(serializeData.i);
      });
    });

  });
});
