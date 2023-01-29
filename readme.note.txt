- ketika menambahkan depedency jest, secara otomatis diregistrasi function secara global dengan nama test()

- folder src dan test, bebas namanya digabung juga boleh

- file test wajib berektensi "test.js" 


- jika error Test suite failed to run "Jest encountered an unexpected token" , Synxtac Error : Cannot use import statement outside a module
walaupun sudah "type" : "module" tetap tidak mendeteksi module secara default , 

reference : 

https://jestjs.io/docs/ecmascript-modules
https://jestjs.io/docs/getting-started#using-typescript (untuk pake typescript)

--------------------------------------BABELJS
Jest secara default menggunakan commonjs

di dalam jest ada fitur code-transformation  == bisa mengubah code program sblm di run
fitur ini memanfaatkan depedency library Babel , referensi :  https://jestjs.io/docs/code-transformation

maka harus install babel (https://babeljs.io/) adalah javascript compiler

npm install babel-jest --save-dev  (untuk convert jest javascript module ke commonjs)
npm install @babel/preset-env --save-dev (untuk config babel berdasarkan preset config dari babeljs)
npm install @babel/plugin-transform-runtime --save-dev

gunanya babel untuk translate javascript baru (module) menjadi javascript lama (commonjs) agar code dikenali secara defaultnya

salah satunya manfaat babeljs :
contoh javascript baru (es6 ++) beberapa code tidak dapat di kenalan browser lama (internet explorer , dll) jika menggunakan babeljs maka akan dapat dikenali merubah menjadi commonjs dan membuat semua browser jadi dapat dikenali


cara setupnya https://babeljs.io/setup (pilih Jest)

contoh untuk convert javascript secara manual
https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.20.14&externalPlugins=&assumptions=%7B%7D



npm install babel-jest --save-dev


package.json

 "jest": {
...

    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
...
}




babel.config.json  (tujuannya untuk setup configurasi sesuai preset di babeljs)

{
  "presets": ["@babel/preset-env"]
}


--------------------------------------/BABELJS



- Jest Configuration ada bnyk cara salah 1 namanya
1. cara ke  1,  package.json (dengan key "jest") cth : 
  "jest": {
    ...
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    ...
    }

2. cara ke 2, menggunakan  jest.config.js/ts/mjs atau membuatnya secara otomatis "jest --init" , note jika pake ini pindahin semua config di package.json ke config yg baru

jest --init

mau replace atau ga? no
report? no 
coverage? v8
mock calls? no

untuk liat list key valuenya ada di  :

https://jestjs.io/docs/configuration (di sebelah kanan / reference )



contoh verbose

  "jest": {
    "maxConcurrency": 2,
    "verbose": true, ->   true = di lihat secara detail (setiap nama unit test dalam 1 file test), false = tanpa detail
    ...
    }


- Jest Command Line Interface untuk liat detailnya "jest --help" atau "npx jest --help"

-  Command Line untuk run test spesific file

./node_modules/.bin/jest --runTestsByPath test/_1_sum.test.js
or
npx jest --runTestsByPath test/_1_sum.test.js
or
npx jest test/_1_sum.test.js


-  Command Line untuk run test spesific file by function test name

npx jest --testNamePattern "test sum function 2"
or
npx jest --t "test sum function 2"


kalo di intellij idea  di file testnya ada button play untuk running spesific unit test  atau 
visual studio code , install extention "Jest"  supaya bs test speisifc file test atau kelik kanan function 

(supaya bs running speisifc by function name) , dll "run test at cursor" 
(test 1 file) "run test at current file"


-- Matchers  # https://jestjs.io/docs/using-matchers
untuk request parameter


-- Expect function # https://jestjs.io/docs/expect
ekspetasi result/value


test("test sum function 1", () => {  

    const result = sum(1, 2); // ini macther

    expect(result).toBe(3);  // ini expect


});



  expect(value).toBe(expect) =  value harus sama dengan expected YANG BUKAN OBJECT , cth string , number, boolean
  expect(value).toEqual(expect) = value untuk object / array (di compare setiap datanya)



  keterangan lebih lanjut liat di pdf 



