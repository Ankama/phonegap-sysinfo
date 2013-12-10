package com.ankamagames.plugins.sysinfo;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;

public class Sysinfo extends CordovaPlugin {
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callback) {

		if (action.equals("getInfos")) {
			try {
				callback.success("getInfos");
				return true;
			} catch (final Exception e) {
				callback.error(e.getMessage());
			}
		}
		
		return false;
	}
}

