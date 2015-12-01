**If a repo doens't exist**

Start by creating a repo on GitHub under the *Media Account*  
Initialize the repo with a `README` through the Github prompt  


**Once the repo is created, or if a repo already exists**
```
git clone repo-url
```


**If a webhook instance *is* initiated in the repo**
```
cd repo-name
npm install
wh init repo-name
wh serve
```


**Else, if a webhook instance *isn't* initiated in the repo**
```
cd repo-name
wh create risd-repo-name
```
Use the mgdevelopers@risd.edu account  
```
wh serve
```
