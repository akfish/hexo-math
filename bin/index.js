// Generated by CoffeeScript 1.6.3
var Command, async, colors, extend, file, fs, htmlTag, mathOptions, packageInfo, util;

extend = hexo.extend;

util = hexo.util;

file = hexo.file;

htmlTag = hexo.util.html_tag;

async = require('async');

colors = require('colors');

fs = require('fs');

packageInfo = require('../package.json');

Command = require('./Command');

mathOptions = {
  desc: packageInfo.description,
  usage: '<argument>',
  "arguments": [
    {
      name: 'install',
      desc: 'Install MathJax dependencies.'
    }, {
      name: 'uninstall',
      desc: 'Uninstall MathJax dependencies.'
    }
  ]
};

hexo.extend.console.register("math", packageInfo.description, mathOptions, function(args, callback) {
  var cmd;
  cmd = new Command(callback);
  return cmd.execute(args._[0]);
});

hexo.extend.tag.register("math", function(args, content) {
  var eq, result;
  eq = args.join(" ");
  result = "<span>$" + (eval('"' + eq + '"')) + "$</span>";
  return result;
});

hexo.extend.tag.register("math-block", (function(args, content) {
  var result;
  console.log(args);
  console.log(content);
  result = "<span>$$" + content + "$$</span>";
  return result;
}), true);
