# 
0. mkdir poc
1. cd poc
2. git clone https://github.com/n0m/vite-test .
3. setup Internet Information Services (IIS) App 
  a)Right click 'Sites'
  b)Add Website 
  c)Site name 'cokowiek', Physical path: xxx/poc, Port 768
  d)http://localhost:768/A/Api.asp shoud return {"test":"cokolwiek"}
4. setup vite
  a)cd C
  b)npm install 

dev:
npm run dev 

build:
npm run build
