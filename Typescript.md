Revisit: Don't always use any keyword

Typescript is all about type safety.

##What TypeScript is and isn't

##What TypeScript does

TypeScript's primarily job is static checking i.e the whole job of TypeScript is just to analyse the code. 

Typescript is a development tool.

Typescript has alot of types. Commonly used ones are Number, String, Boolean. 

TypeScript helps you in figuring out what data is about to be processed, or what data is comoing from any source ir what data your function is going to return. i.e in TS, you don't have to explicitly check variable types like numbers or strings.

Writing Production Level TypeScript

1. Created a new file PURETS
2. initialized TypeScript config file with `tsc --init`
3. Initialized `package.json` file with `npm init -y`
4. Created an `index.html` file, src and dist folders
5. Created `index.ts` file in src and created `index.js` file in dist
6. Link `index.js` file in the `script` tag in `index.html`
7. Go to `OutDir`(line 52) in `tsconfig` file and link it to the dist folder
8. To automatically watch the ts file for changes, type the `tsc -w` command on the console
9. To start the `index.html` on the localhost, install the `lite-server` package(optional)