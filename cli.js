#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var alflogo = require('./');

require('taketalk')({
  init: function (input, options) {
    console.log(alflogo(input, options));
  },
  help: function () {
    console.log([
      '',
      '  ' + pkg.description,
      '',
      '  Usage',
      '    alflogo <string>',
      '    alflogo <string> --left-pad "    "',
      '    echo <string> | alflogo',
      '    printf "<string>\\n<string>" | alflogo --left-pad ">>> "',
      '',
      '  Example',
      '    alflogo "Content, Meta & Index"',
      alflogo('Content, Meta & Index'),
    ].join('\n'));
  },
  version: pkg.version,
});

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
