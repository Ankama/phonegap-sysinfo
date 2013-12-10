/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

function Sysinfo() {
  this.available = false;
  this.cpu = null;
  this.memory = null;

  var self = this;

  channel.onCordovaReady.subscribe(function() {
      self.getInfo(function(info) {
          self.available = true;
          self.cpu = info.cpu;
          self.memory = info.memory;
      },function(e) {
          self.available = false;
          //utils.alert("[ERROR] Error initializing Cordova: " + e);
      });
  });
}

/**
 * Get system info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
Sysinfo.prototype.getInfo = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "Sysinfo", "getInfo", []);
};

module.exports = new Sysinfo();