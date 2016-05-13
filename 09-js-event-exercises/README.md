This is just a "sandbox" site with a single, static view. You can use
this to experiment with JavaScript, listening to events, and sending
XHR requests.

1. Add some kind of "click" event handler to the "square" div on the
   page just to make sure you can do it.

2. Let's say we want to add click-and-drag support to this square. For
   example, let's add a thing that changes the square's width as you
   drag left or right.

    1. What events do we have to listen to?

    2. What information is available in those events?

    3. How can we alter the width of the square?

    4. How can we figure out how much to adjust the width by?

3. Add some kind of AJAX request to the "update" endpoint on the
   server. Send some fake data and log the response you get from the
   server. You'll probably need to use a GET request to avoid problems
   with the CSRF protection.

4. Try changing your view to return a "current status" -- maybe
   something like number of requests received, current color of the
   square, or whatever else you can manipulate so far. When you get a
   response, display that information somehow.

Extra credit:

- It would be nice to use POST requests here. There are a couple of
  ways you can get a CSRF token in JavaScript. The Django
  documentation recommends extracting it from the cookie. You can also
  put a call to {% csrf_token %} in your template and somehow find it
  using jQuery.
