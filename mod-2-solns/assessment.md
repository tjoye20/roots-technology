
## What is command line used for?
It's a program that takes in commands, which it passes on to the computer's operating system to run. A text interface for you to pass commands to your computer.

## What is Git used for?
Git tracks the changes you make to files, so you have a record of what has been done, and you can revert to specific versions should you ever need to.

## What is a git command?
instructions on what to do with the repository.

## What does git init do?
git init creates a new repository or it can be used to convert an existing, unversioned project to a repository.

## What is a directory?
a folder that contains all the information that is necessary for your project in version control and all the information about commits, remote repository address, etc.

## What does the command "ls" do?
ls shows you the list of files and folders in the directory.

## What does "cd .." do?
cd .. is an abbreviated key that stands for 'change directory' used to change the current working directory.

## What are the 10 basic commands? ask about each one, (short answer)
1. Git init- This command turns a directory into an empty Git repository. 
2. Git add - Adds files in the to the staging area for Git. Before a file is available to commit to a repository, the file needs to be added to the Git index (staging area). 
3. Git commit- Record the changes made to the files to a local repository. For easy reference, each commit has a unique ID. 
4. Git status- This command returns the current state of the repository. git status will return the current working branch. If a file is in the staging area, but not committed, it shows with git status. Or, if there are no changes it’ll return nothing to commit, working directory clean. 
5. Git branch - To determine what branch the local repository is on, add a new branch, or delete a branch. 
6. Git checkout- To start working in a different branch, use git checkout to switch branches. 
7. Git merge - Integrate branches together. git merge combines the changes from one branch to another branch. 
8. Git remote- To connect a local repository with a remote repository. 
9. Git pull - To get the latest version of a repository run git pull. This pulls the changes from the remote repository to the local computer. 
10. Git push - Sends local commits to the remote repository. git push requires two parameters: the remote repository and the branch that the push is for.

## What does "remote" mean in "git remote"?
The "remote" is the repository on Github.

## What does "git remote -v" do?
By default, listing remote repositories only shows you their short names (e.g. "origin"). Using the "-v" option, you will also see the remote's URLs in listings.

## What does "git add" do?
adds all modified and new (untracked) files in the current directory and all subdirectories to the staging area (a.k.a. the index), thus preparing them to be included in the next git commit .