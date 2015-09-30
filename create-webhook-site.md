**If a repo doens't exist**

Start by creating a repo on GitHub under the *Media Account*


**Else, if a repo is already created**
```
git clone wh-repo
```


**If a webhook instance *is* initiated in the repo**
```
cd wh-repo
npm install
wh init name-of-wh-repo
wh serve
```


**Else, if a webhook instance *isn't* initiated in the repo**
```
cd wh-repo
wh create
wh serve
```
