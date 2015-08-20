JAVASCRIPT TESTING PROJECT
==========================

To run this application:

1.  Open index.html.
2.  Scroll down to see results of Jasmine testing
3.  Green indicates a successful test, and
	red indicates a failed test.
4.  Failed tests will have more information about
	which file and on which line an error occurred in.

To make changes:

1.  Open the project folder in a text editor.
2.  Make modifications and add new tests in
	jasmine/spec/feedreader.js.
3.  Write application code in js/app.js.
4.  Follow the red-green-refactor cycle in order
	to meet Test-driven development standards.
5.  See Jasmine documentation for more information
	about using this testing framework.

__________________________________________________________


Additional features:

- A test suite has been added to feedreader.js
  in order to test for a new feature to be added to
  the application.
- This new feature allows the user
  to star their favorite entries and filter starred
  entries.
- The first specification ensures that there is a visual
  indication when an entry is starred, and that the entry
  is added to the starredEntries array.
- This second test ensures that only starred entries
  show up in the DOM when the filter-starred link is
  clicked.