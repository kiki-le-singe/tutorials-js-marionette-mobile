/* jshint expr: true*/
define([
  'models/movie',
  'views/movielistitem'
],

function (Movie, MovieListItemView) {
  'use strict';

  describe('movie list item view', function () {

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
      this.view = new MovieListItemView({model:this.model});
    });

    afterEach(function () {
      this.view.destroy();
      this.view = null;
      this.model.clear();
    });

    it('should implement some tests', function () {
      true.should.be.true;
    });

    // tests on serializeData()
    describe('serializeData()', function () {
      it('should return the serialized data', function () {
        // console.log('this.model ----- ', this.model);
        // console.log('this.view.model -------- ', this.view.model);

        var serializeData = this.view.serializeData();
        serializeData.should.have.property('image');
        serializeData.should.not.have.property('i');
      });
    });

  });
});
