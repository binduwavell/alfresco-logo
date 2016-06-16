# alfresco-logo
Produce a 25 character wide colored Alfresco logo

## As a library

In order to install this into your project you'll want to:

```bash
npm install --save alfresco-logo
```

Simply require this module and call it with two optional
arguments. The first is the message to display under the
logo. The second is an options object. Currently this 
only supports a single property `left-pad` which will be
printed before each line.

```javascript
var logo = require('alfresco-logo');
console.log(logo('Hello\nWorld', {'left-pad':'     '}));
```

The message will be split into lines and if they can be
centered under the logo, they will be, if not they will
left align with the logo.

You should be able to pass an ansi codes in the message
and they should be honored.

## CLI
If for some crazy reason you want to run this as a
command line tool, you can `npm install -g alfresco-logo`.
This will allow you to run `alflogo` to produce the logo.

If you'd like like for the logo to be "indented" you may
append the `--left-pad` option like so:

```bash
alflogo --left-pad "     "
```

This will indent each line with 5 spaces (resulting in
a total width of 30 characters per line.)

If you want a message to be displayed at the bottom of
the logo you can pass it as the first argument to alflogo,
or you can pass it in via stdin. Like so:

```bash
alflogo 'ng2-generator-app'
printf "Alfresco\nng2-generator-app" | alflogo
```
