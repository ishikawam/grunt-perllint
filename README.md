# grunt-perllint

> Perl syntax checker, run 'perl -wc <file>'

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-perllint --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-perllint');
```

*This plugin was designed to work with Grunt 0.4.x.*


## perllint task
_Run this task with the `grunt perllint` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options


#### warning
Type: `Boolean`
Default: `true`

output warnings (use -wc option.)

#### debug
Type: `Boolean`
Default: `false`

output log.


### Usage Examples

```js
perllint: {
  build: {
    options: {
      debug: true,
    },
    src: ['**/*.{pl,pm,cgi}'],
  },
}
```


## Release History

 * 2013-09-21   v0.1.0   Init.

---

Task submitted by [Masayuki Ishikawa](https://github.com/ishikawam)

