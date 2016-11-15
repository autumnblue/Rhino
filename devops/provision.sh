#!/bin/bash

#requires git,npm; assumes SSH key and sudo

#for installation on remote
git clone git@bitbucket.org:xander-sereda/skiff.git
cd skiff
npm run setup
mv dist/* /var/www

#recommended to build on host machine and deploy contents of dist/*


