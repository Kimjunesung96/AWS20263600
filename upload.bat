@echo off
chcp 65001 > nul
echo 🚀 GitHub 자동 업로드를 시작합니다...

git init
git add .
git commit -m "과제1: 미니 도서관 시스템 및 CI/CD 구축 완료"
git branch -M main
git remote add origin https://github.com/Kimjunesung96/AWS20263600.git
git push -u origin main -f

echo.
echo ✅ 업로드가 완료되었습니다!
pause