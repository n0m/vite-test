1.  mkdir poc
2.  cd poc
3.  git clone https://github.com/n0m/vite-test .
4.  setup Internet Information Services (IIS) App (Start IIS)
    -  Right click 'Sites'
    -  Add Website 
    -  Site name 'cokowiek', Physical path: xxx/poc, Port 768
    -  http://localhost:768/A/Api.asp should return {"test":"cokolwiek"}
5.  setup vite
    - cd C
    - npm install 

dev:
npm run dev 

build:
npm run build
