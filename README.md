# micro-frontends-sample

with [Custom Elements](https://developer.mozilla.org/ja/docs/Web/Web_Components/Using_custom_elements)

## Getting Started

```console
yarn
yarn start
```

## Summary

```
$ find . -name main.js | grep -v node_modules | xargs ls -l
-rw-r--r-- 1 januswel staff 131278  5 27 22:54 ./modules/search/dist/main.js
-rw-r--r-- 1 januswel staff 100800  5 27 22:54 ./modules/top/dist/main.js
```

I think it is difficult to adopt micro frontends for any team.

For small product, the team can handle all of the project.
Even if for large product, loading a lot of modules takes some time and that cause closing the tab to users.

refer: https://zendev.com/2019/06/17/microfrontends-good-bad-ugly.html
