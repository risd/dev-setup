**If a repo doens't exist**  
Start by creating a repo on GitHub under the *Media Account*  
*Do not* create a README file when prompted by Github  


**If a webhook instance *is* initiated in the repo**
```
cd repo-name
npm install
wh init repo-name
wh serve
```


**Else, if a webhook instance *isn't* initiated in the repo**  
`cd` to the folder where you store your websites and `wh create risd-repo-name`  
*Use the mgdevelopers@risd.edu account credentials*  


**Serve the webhook site**  
`cd` to the folder the `wh create` made for you, and `wh serve`  
Login to the CMS using the mgdevelopers@risd.edu credentials and add yourself as a Team Member


**Initiate git in the folder**  
`cd` to the site folder if you aren't already in it  
```
git init
git add -A
git commit -m "initial commit"
git remote add origin https://github.com/risd/risd-policies.git
git push -u origin master
```
