<!-- It's worth adding that, in addition to the QR codes library posted by @abaumg, Google provides a QR Codes API QR Codes APImany thanks to @Toukakoukan for the link update.

To use this , basically:

https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=http%3A%2F%2Fwww.google.com%2F&choe=UTF-8
300x300 is the size of the QR image you want to generate,
the chl is the url-encoded string you want to change into a QR code, and
the choe is the (optional) encoding.
The link, above, gives more detail, but to use it just have the src of an image point to the manipulated value, like so: -->

<img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=http%3A%2F%2Fwww.google.com%2F&choe=UTF-8" title="Link to Google.com" />