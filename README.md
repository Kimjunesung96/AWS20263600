# 📚 미니 IT 도서관 대출 시스템

## 1. 시스템 및 기능 소개
본 프로젝트는 생성형 AI의 도움을 받아 React로 구현된 웹 시스템입니다.
- **기능 1**: IT 관련 도서 목록 확인
- **기능 2**: 실시간 도서 대출 및 반납 상태 토글 (대출 시 빨간색, 반납 시 초록색 UI 변경)

## 2. Github Actions 환경 소개 (CI/CD)
GitHub의 `main` 브랜치에 코드가 push되면 자동으로 실행되는 CI/CD 파이프라인을 구축했습니다.
1. `ubuntu-latest` 환경에서 Node.js를 세팅
2. `npm install` 및 `npm run build`를 통해 React 정적 파일 생성
3. GitHub Secrets에 저장된 AWS Academy 자격 증명을 사용하여 AWS S3 버킷으로 빌드된 파일 자동 동기화 (`aws s3 sync`)

## 3. 링크 정보
- **AWS S3 호스팅 URL (과제 1)**: [http://mybucket-20263600.s3-website-us-east-1.amazonaws.com/]
- **Github Actions CI/CD 시연 영상**: [유튜브 링크 삽입]

---

## 4. AWS Amplify 호스팅 (과제 2)
위 과제 1의 GitHub Repository를 AWS Amplify 서비스와 연결하여 자동 빌드 및 호스팅되도록 구성하였습니다.
- **AWS Amplify URL**: [https://main.d2i5x2h47cvqgi.amplifyapp.com/]
- **AWS Amplify 서비스 활용 영상**: [유튜브 링크 삽입]