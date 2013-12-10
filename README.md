# phonegap-sysinfo

> Sysinfo plugin for android (iOS and WP in progress) allow you to get information about memory (avail, total...) and cpu (count cores, frequency)

## Installation:

### local

Add the following feature tag in your config.xml

	<feature name="Sysinfo" >
		< param name="android-package" value="com.ankamagames.plugins.sysinfo.Sysinfo"/>
	</feature>

This plugin is based on [plugman](https://github.com/apache/cordova-plugman). to install it to your app,
simply execute plugman as follows;

	plugman install --platform [PLATFORM] --project [TARGET-PATH] --plugin [PLUGIN-PATH]

	where
		[PLATFORM] = android
		[TARGET-PATH] = path to folder containing your project
		[PLUGIN-PATH] = path to folder containing this plugin
		
For additional info, take a look at the [Plugman Documentation](https://github.com/apache/cordova-plugman/blob/master/README.md)

### PhoneGap Build

To use this plugin with PhoneGap Build, add the following plugin reference to your config.xml

	<gap:plugin name="com.ankamagames.plugins.sysinfo" />

## Usage
The plugin creates the object `window.Sysinfo

After onDeviceReady, you can access to Sysinfo global variable

	function onDeviceReady() {
		console.log(Sysinfo);
	}

## License ##

The MIT License

Copyright (c) 2012 Bob Easterday, Adobe Systems

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.