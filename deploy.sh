
# 当发生错误时中止脚本
set -e

# 删除旧的构建输出
rm -rf dist

# 构建
npm run build-only

# cd 到构建输出的目录下 
cd dist

echo '创建CNAME'
echo 'playground.starnight.top' > CNAME

echo '开始部署...'
git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/DuranceX/Playground.git main:gh-pages
