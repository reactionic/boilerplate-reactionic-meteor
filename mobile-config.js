/* globals App */
/* eslint-disable quote-props */

App.info({
  name: 'React-Ionic Meteor Boilerplate',
  description: 'A boilerplate app for Meteor ^1.3 and React-Ionic (^15.0.0 and ^1.0.0 respectively)', // eslint-disable-line max-len
  author: 'John Slemmer',
  email: 'example@email.com',
  website: 'https://github.com/johnslemmer',
  version: '0.0.1',
});

App.icons({
  'iphone_2x': 'public/icons/iphone_2x.png', // 120x120
  'iphone_3x': 'public/icons/iphone_3x.png', // 180x180
  'ipad': 'public/icons/ipad.png', // 76x76
  'ipad_2x': 'public/icons/ipad_2x.png', // 152x152
  'ipad_pro': 'public/icons/ipad_pro.png', // 167x167
  'ios_settings': 'public/icons/ios_settings.png', // 29x29
  'ios_settings_2x': 'public/icons/ios_settings_2x.png', // 58x58
  'ios_settings_3x': 'public/icons/ios_settings_3x.png', // 87x87
  'ios_spotlight': 'public/icons/ios_spotlight.png', // 40x40
  'ios_spotlight_2x': 'public/icons/ios_spotlight_2x.png', // 80x80
  'android_mdpi': 'public/icons/android_mdpi.png', // 48x48
  'android_hdpi': 'public/icons/android_hdpi.png', // 72x72
  'android_xhdpi': 'public/icons/android_xhdpi.png', // 96x96
  'android_xxhdpi': 'public/icons/android_xxhdpi.png', // 144x144
  'android_xxxhdpi': 'public/icons/android_xxxhdpi.png', // 192x192
});

App.launchScreens({
  'iphone_2x': 'public/splashes/iphone_2x.png', // 640x490
  'iphone5': 'public/splashes/iphone5.png', // 640x1136
  'iphone6': 'public/splashes/iphone6.png', // 750x1334
  'iphone6p_portrait': 'public/splashes/iphone6p_portrait.png', // 2208x1242
  'iphone6p_landscape': 'public/splashes/iphone6p_landscape.png', // 2208x1242
  'ipad_portrait': 'public/splashes/ipad_portrait.png', // 768x1024
  'ipad_portrait_2x': 'public/splashes/ipad_portrait_2x.png', // 1536x2048
  'ipad_landscape': 'public/splashes/ipad_landscape.png', // 1024x768
  'ipad_landscape_2x': 'public/splashes/ipad_landscape_2x.png', // 2048x1536
  'android_mdpi_portrait': 'public/splashes/android_mdpi_portrait.png', // 320x480
  'android_mdpi_landscape': 'public/splashes/android_mdpi_landscape.png', // 480x320
  'android_hdpi_portrait': 'public/splashes/android_hdpi_portrait.png', // 480x800
  'android_hdpi_landscape': 'public/splashes/android_hdpi_landscape.png', // 800x480
  'android_xhdpi_portrait': 'public/splashes/android_xhdpi_portrait.png', // 720x1280
  'android_xhdpi_landscape': 'public/splashes/android_xhdpi_landscape.png', // 1280x720
  'android_xxhdpi_portrait': 'public/splashes/android_xxhdpi_portrait.png', // 1080x1440
  'android_xxhdpi_landscape': 'public/splashes/android_xxhdpi_landscape.png', // 1440x1080
});

App.setPreference('StatusBarOverlaysWebView', 'true');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('Orientation', 'portrait');
