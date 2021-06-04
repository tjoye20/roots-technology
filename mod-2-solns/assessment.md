# Module 2 Assessment

## What is command line used for?
The command line is a text interface for you to pass commands to your computer.

## What is Git used for?
Git tracks the changes you make to files and folders, so you have a record of what has been done and you can revert back to specific versions should you ever need to.

## What does "git init" do?
"git init" creates a new repository or it can be used to convert an existing, unversioned project to a repository.

## What is a directory?
A directory is another name for a folder.

## What does the command "ls" do?
ls lists the files and folders in the directory.

## What does "cd .." do?
"cd .." is used to exit the current folder and move back into the parent folder. The ".." means to go backwards.

## What are 3 basic command-line commands, and what do they do?
1. ls: list the files and folders in a directory. init- This command turns a directory into an empty Git repository. 
2. cd: is used to change directories/folders.
3. cp: is used to copy files

## What are 3 Git commands, and what do they do?
1. git status- This command returns the current state of the repository. git status will return the current working branch. If a file is in the staging area, but not committed, it shows with git status. Or, if there are no changes it’ll return nothing to commit, working directory clean. 
2. git add - Adds files in the to the staging area for Git. Before a file is available to commit to a repository, the file needs to be added to the Git index (staging area). 
3. git commit- Record the changes made to the files to a local repository. For easy reference, each commit has a unique ID. 
4. git status- This command returns the current state of the repository. git status will return the current working branch. If a file is in the staging area, but not committed, it shows with git status. Or, if there are no changes it’ll return nothing to commit, working directory clean. 
5. git branch - To determine what branch the local repository is on, add a new branch, or delete a branch. 
6. git checkout- To start working in a different branch, use git checkout to switch branches. 
7. git merge - Integrate branches together. git merge combines the changes from one branch to another branch. 
8. git remote- To connect a local repository with a remote repository. 
9. git pull - To get the latest version of a repository run git pull, which is a combination of "git fetch" followed by "git merge". This merges the changes from the remote repository to the local computer. 
10. git push - Sends local commits to the remote repository. git push requires two parameters: the remote repository and the branch that the push is for.

## What does "remote" mean in "git remote"?
The "remote" is the repository on Github.

## What does "git remote -v" do?
By default, listing remote repositories only shows you their short names (e.g. "origin"). Using the "-v" option, you will also see the remote's URLs in listings.

## What does "git add" do?
It adds all modified and new (untracked) files in the current directory and all subdirectories to the staging area (a.k.a. the index), thus preparing them to be included in the next git commit.
