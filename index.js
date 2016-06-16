'use strict';
var chalk = require('chalk');
var strip = require('strip-ansi');

var ALF_BLUE = chalk.bold.blue;
var ALF_BLUE2 = chalk.dim.blue;
var ALF_ORANGE = chalk.dim.yellow;
var ALF_ORANGE2 = chalk.bold.yellow;
var ALF_GREEN = chalk.bold.green;
var ALF_GREEN2 = chalk.dim.green;
var RESET = chalk.reset;
var PAD = '            ';

function center (str) {
  var s = strip(str);
  var l = s.length;
  var m = ~~(l / 2);
  if (m < 13) {
    return PAD.substring(0, 12 - m) + str;
  } else {
    return str;
  }
}

module.exports = function (message, options) {
  message = (message === undefined ? '' : message);
  var LEFT_PAD = (options && options.hasOwnProperty('left-pad') ? options['left-pad'] : '');

  module.fancyLogoText = function () {
    var banner = [
      LEFT_PAD + ALF_BLUE('         ,****.          ') + RESET(''),
      LEFT_PAD + ALF_BLUE('    ,.**') + ALF_BLUE2('. ') + ALF_BLUE('`*****  ') + ALF_ORANGE('<-_    ') + RESET(''),
      LEFT_PAD + ALF_BLUE('   *****') + ALF_BLUE2('*** ') + ALF_BLUE('**') + ALF_BLUE2('*** ') + ALF_ORANGE('####   ') + RESET(''),
      LEFT_PAD + ALF_BLUE('  $*****') + ALF_BLUE2('***:') + ALF_BLUE(':') + ALF_BLUE2('**** ') + ALF_ORANGE('####;  ') + RESET(''),
      LEFT_PAD + ALF_BLUE2('  _.-._`*') + ALF_BLUE2('**:') + ALF_BLUE(':') + ALF_BLUE2('*** ') + ALF_ORANGE('##') + ALF_ORANGE2('##') + ALF_ORANGE('##  ') + RESET(''),
      LEFT_PAD + ALF_BLUE(',**') + ALF_BLUE2('*****, *') + ALF_BLUE2('::') + ALF_BLUE2('* ') + ALF_ORANGE('.;') + ALF_ORANGE2('##### ') + ALF_GREEN('@ ') + RESET(''),
      LEFT_PAD + ALF_BLUE('****') + ALF_BLUE2('******,') + ALF_BLUE('\' ') + ALF_ORANGE('-=') + ALF_ORANGE2('#####\'') + ALF_GREEN(',@@@') + RESET(''),
      LEFT_PAD + ALF_BLUE('***\' ') + ALF_GREEN2('.,---') + ALF_GREEN(', ,.') + ALF_GREEN2('-==@@') + ALF_GREEN('@@@@@@') + RESET(''),
      LEFT_PAD + ALF_BLUE(' * ') + ALF_GREEN2('/@@@@@') + ALF_GREEN('\'') + ALF_GREEN2(',@ @') + ALF_GREEN('\\ ') + ALF_GREEN2('\'@@@@@') + ALF_GREEN('@@ ') + RESET(''),
      LEFT_PAD + ALF_GREEN2('  \'@@@@') + ALF_GREEN('/ ') + ALF_GREEN2('@@@ @@@') + ALF_GREEN('\\ ') + ALF_GREEN2('\':#\'   ') + RESET(''),
      LEFT_PAD + ALF_GREEN('  !@@@@ ') + ALF_GREEN2('@@@@ @@@@') + ALF_GREEN('@@@@@^  ') + RESET(''),
      LEFT_PAD + ALF_GREEN('   @@@@ ') + ALF_GREEN2('@@@') + ALF_GREEN('@@ ') + ALF_GREEN2('@@@') + ALF_GREEN('@@@@\'   ') + RESET(''),
      LEFT_PAD + ALF_GREEN('    `"$ ') + ALF_GREEN2('\'') + ALF_GREEN('@@@@@. ') + ALF_GREEN2('\'') + ALF_GREEN('##\'     ') + RESET(''),
      LEFT_PAD + ALF_GREEN('         \'@@@@;\'         ') + RESET(''),
    ];

    if (message) {
      banner.push(LEFT_PAD + '');
      banner = banner.concat(
        message
          .split('\n')
          .map(function (line) {
            return LEFT_PAD + center(line);
          })
      );
    }
    return banner.join('\n');
  };

  return module.fancyLogoText();
};

/**
 *  Copyright 2016 Bindu Wavell <bindu@ziaconsulting.com>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
