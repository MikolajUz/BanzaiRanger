
cd /home/majku/BanzaiRanger

ng build --configuration=production --base-href=/BanzaiRanger/

cp -r dist/BanzaiRanger/browser/* docs/

git add .
git commit -m "Deploy to GitHub Pages"
git push origin master