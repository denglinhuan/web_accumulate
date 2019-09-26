!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

echo 'denglh.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:denglinhuan/web_accumulate.git master:gh-pages

cd -

# git add .

# git commit -m 'deploy'

# git push origin master:master