**If `wh serve` is giving you an `EACCESS` or permissions error**

Delete your `node_modules` folder for the site.

`cd` into the site folder and then `npm cache clean`

Then run `work.command` or `npm install`.
If the `work.command` is set up, it will run `npm install` in its process.


**If that doesn't work**

Try `chown -R username .`


**If THAT doesn't work**

Call out for `Ruben` for a bit.

If he isn't there, try calling out to `Teddy`

If both aren't there or can't figure it out, email support@webhook.com
