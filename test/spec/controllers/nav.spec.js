/* jshint expr: true*/
define([
  'marionette',
  'controllers/nav',
  'models/movies',
  'views/movielistitem'
], function (Marionette, NavController, Movies, MovieListItemView) {
  'use strict';

  // unit test suite on nav controller
  describe('nav controller', function () {
    var element = document.createElement('div');
    element.className = 'content';

    // hook running before each test
    beforeEach(function () {
      var moviesMock = [
        {
          "__id": "nm0666739",
          "i": [
            "http://ia.media-imdb.com/images/M/MV5BMTY1OTY5NjI5NV5BMl5BanBnXkFtZTcwODA4MjM0OA@@._V1_.jpg",
            681,
            1024
          ],
          "l": "Aaron Taylor-Johnson",
          "s": "Actor, Kick-Ass (2010)"
        },
        {
          "__id": "nm1093951",
          "i": [
            "http://ia.media-imdb.com/images/M/MV5BMzE5MzI0MzY2OF5BMl5BanBnXkFtZTgwODE3MTk4MTE@._V1_.jpg",
            1375,
            1805
          ],
          "l": "Aaron Taylor-Johnson",
          "s": "Actor, Kick-Ass (2010)"
        },
        {
          "__id": "nm5025209",
          "i": [
            "http://ia.media-imdb.com/images/M/MV5BMTgwNzM0NDAxOV5BMl5BanBnXkFtZTcwMDYzMTc3Nw@@._V1_.jpg",
            600,
            850
          ],
          "l": "Aaron Taylor-Johnson",
          "s": "Actor, Kick-Ass (2010)"
        }
      ];

      document.body.appendChild(element);

      var region = new Marionette.Region({
        el: '.content'
      });

      this.controller = new NavController({
        region: region,
        movies: new Movies(moviesMock)
      });
    });

    // hook running after each test
    afterEach(function () {
      this.controller.destroy();
      this.controller = null;
      element.innerHTML = '';

      document.body.removeChild(element);
    });

    // tests on list()
    describe('list()', function () {
      it('should render the movie list view', function () {
        // query the after
        var view = this.controller.list().currentView;
        // console.log('this.controller.region', this.controller.region.$el.find('ul.table-view').length);

        // view.$el.should.have.class('table-view');
      });

      it('should render the same number of items', function () {
      });

      it('should have three items', function () {
        var view = this.controller.list().currentView;
        view.collection.should.have.length(3);
      });
    });

    // tests on showMovie()
    describe('showMovie()', function () {
      it('should render the movie details view', function () {

      });

      it('should render the expected movie', function () {

      });
    });
  });

});
