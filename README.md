# Network Application - Client Web App

## Software Development Environment

### App build, validate(lint), test, concatenation, minification, distribution
- yeoman(grunt)

### MVC framework
- Backbone.js (Underscore.js)
- LoDash.js

### UI library
- Bootstrap

### Template library
- Handlebars.js

### Stylesheet language
- SASS
- compass

### AMD
- require.js

### Test
- Mocha/Chai/Sinon
- PhantomJS/CasperJS

### Logging
- log4javascript

### Internationalization(i18n)
- jquery i18n plugin

## Execute

### yeoman 실행 환경 확인
```
> curl -L get.yeoman.io | sh
```

### yeoman install(bower)을 통해 필요한 javascript library를 설치
```
> yeoman install jquery # jquery is installed under ./components/
```

### Execute, Build, Test
```
> yeoman server           # to run web app on the browser with auto reload
> yeoman build            # to build the distribution package
> yeoman test
```
