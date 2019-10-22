/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const yaml = require("js-yaml");
const fs = require("fs");

const docs = yaml.safeLoad(fs.readFileSync("docs/sidebars.yml", "utf8"));

module.exports = {
  docs: docs
};
