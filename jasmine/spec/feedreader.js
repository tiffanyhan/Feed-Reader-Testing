/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have a URL', function() {
            var url;

            allFeeds.forEach(function(feed) {
                url = feed.url;

                expect(url).toBeDefined();
                expect(url.length).not.toBe(0);
            });
         });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have a name', function() {
            var name;

            allFeeds.forEach(function(feed) {
                name = feed.name;

                expect(name).toBeDefined();
                expect(name.length).not.toBe(0);
            });
         });
    });

    /* Another test suite */
    describe('The menu', function() {
        /* This test ensures that the menu element is
         * hidden by default.
         */
         it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* This test ensures that the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes visibility when clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /* Another test suite */
    describe('Initial entries', function() {
        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous.
         */
         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
         });

         it('are present', function(done) {
            expect($('.feed').children().length).not.toBe(0);

            done();
         });
    });

    /* Another test suite */
    describe('New Feed Selection', function() {
        /* This test ensures that when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */
         var oldURL;

         beforeEach(function() {
            oldURL = $('.feed').children().first().attr('href');
         });

         beforeEach(function(done) {
            loadFeed(1, function() {
                done();
            });
         });

         it('results in new feed content', function(done) {
            var newURL = $('.feed').children().first().attr('href');

            expect(newURL).not.toBe(oldURL);

            done();
         });
    });

    /* Another test suite */
    describe('Feed entries', function() {
        /* This test ensures that there is a visual indication
         * when an entry is starred, and that the entry is added
         * to the starredEntries array.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('can be starred by user', function(done) {
            $('.star').first().trigger('click');
            expect($('.star').hasClass('starred')).toBe(true);
            expect(starredEntries.length).not.toBe(0);

            $('.star').first().trigger('click');
            expect($('.star').hasClass('starred')).toBe(false);
            expect(starredEntries.length).toBe(0);

            done();
        });

        /* This test ensures that only starred entries
         * show up in the DOM when the filter-starred link is clicked.
         */
        it('can be filtered by whether they are starred', function(done) {
            $('.filter-starred').trigger('click');
            expect($('.star').not('.starred').length).toBe(0);

            done();
        });
    });
}());