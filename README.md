# Dev setup for the Media Group at RISD

- [Resetting Permissions](#resetting-permissions)
- [Oh My Zsh](#oh-my-zsh)
- [xCode](#xcode-and-xcode-command-line-tools)
- [Homebrew](#homebrew)
- [Node](#nodejs)
- [Node Version Manager](#node-version-manager)
- [Sass](#sass)
- [Prototype Deployment](#rm-deploy)
- [Webhook CMS](#webhook)
- [Git Flow](#git-flow)
- [Git Aliases](#git-aliases)
- [Text Editors](#text-editors)

## Resetting permissions
The permission settings are probably going to give you problems when installing things to follow, so to reset them:
```
cd ~
sudo chown -R username .
```
Replace `username` with your computer's username. This will prompt you to enter your password for the computer.
If there are still permission errors when installing things below, the terminal window should give you an `EACCESS` error with a folder path. In this case, you can use `sudo chown -R username folderPath` to reset the permissions for that folder.

## oh my zsh
Extends terminal functionality, including git syntax highlighting and autocompletes  
http://ohmyz.sh/  

`$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`  

The colors would need to be changed in the Terminal preferences because the defaults aren't great.

## xCode and xCode command line tools
http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/  
https://idmsa.apple.com/IDMSWebAuth/login?appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&baseURL=https://developer.apple.com/&path=%2Fdownload%2F&rv=1  

`xcode-select --install`

## Homebrew
This is a global package manager that's pretty useful for the rest of the installs.  
http://brew.sh/  

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`  

## Node.js
A package manager used in all our Webhook sites
Use **Homebrew** to install **Node**  
https://nodejs.org/en/  

`brew install node`

## Node Version Manager
A lot of our sites are built using packages from older versions of Node.js. nvm allows you to change what version of Node you are currently using.  
https://github.com/creationix/nvm/blob/master/README.markdown  

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash`

## Sass
Allows for better organization of CSS code.  

`gem install sass`

## rm-deploy
This would allow you to deploy prototype sites to a shareable link  
```
cd
mkdir .risdmedia
touch .risdmedia/aws.json
```
Edit this aws.json file to include  
```
{
  "key":"",
  "secret":""
}
```
The values for the key and secret at in the RISD Media 1password

## Webhook
The static site generator we currently use for most of our sites  
http://www.webhook.com/docs/  

`npm install -g grunt-cli wh`

## Git flow
This allows for easy Git branching  
https://github.com/nvie/gitflow  
https://github.com/nvie/gitflow/wiki/Mac-OS-X  

`brew install git-flow`

## Git Aliases
These are short code snippets to easily type longer git commands. For example, instead of typeing `git commit -m "commit message"`, I now just type `git co "commit message". It doesn't seem like much, but these commands are used so much that the time saved adds up.
To create a new alias:  

`git config --global alias.aliasName "expanded git command"`

Here's the list of the ones I've set up.  
```
git config --global alias.ch "checkout"
git config --global alias.br "branch"
git config --global alias.st "status"
git config --global alias.co "commit -m"
git config --global alias.ad "add -A"

git config --global alias.graph "log --graph --decorate --oneline"

git config --global alias.startfeature "flow feature start"
git config --global alias.endfeature "flow feature finish -F"

git config --global alias.listalias "config --get-regexp alias"
```

The last one lists your current aliases  

To remove an alias:

`git config --global --unset alias.aliasName`

## Text editors
### Atom
https://atom.io/  

### Sublime Text
https://www.sublimetext.com/  

### Snippets
The folders in this repo contain snippets and settings for the 2 text editors we use.
