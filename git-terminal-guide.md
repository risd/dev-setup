**To initialize git flow:**  
make sure you've commited and pushed  
```git flow init```

**To create a new feature branch:**  
make sure you're on develop  
```
git flow feature start featureName
git push --set-upstream origin feature/featureName
```

**To make commits**  
check what files you need to commit  
```git status```

add and commit the files  
```
git add -A
git status
git commit -m "summary

description"
git push
git status
```

**To finish feature**  
make sure you, and everyone else working on the branch has committed, and that all the conflicts are resolved  
```git flow feature finish featureName```

To access someone else's feature branch  
```
git pull
git fetch
git branch -a
```

This should give you a list of local branches in black, current branch in green and remote branches in red.
The feature branch you're looking for is most probably red.  
```git checkout feature/featureName```  
This should make the remote feature branch a local branch.

**If you can't see the branch anywhere for some reason, try**  
```
git ls-remote origin
git fetch
```

**If a finished featured branch is still showing up when you do `git branch -a`, try**  
```
git push origin :feature/featureName
git remote prune origin
```
