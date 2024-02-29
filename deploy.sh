
cd /home/majku/BanzaiRanger

ng build --configuration=production --base-href=/BanzaiRanger/

cp -r dist/browser/* docs/

git add .
git commit -m "Deploy to GitHub Pages"
git push origin data_update