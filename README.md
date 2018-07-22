# Crashlytics x Titanium (Demo Project)

An example of using the Crashlytics SDK in a real Titanium project.

## Requirements

You need Titanium SDK 7.3.0+ in order to the latest features that are required
to initialize native SDK's internally. In addition, the following places of this
project should be adjusted before running:

- tiapp.xml: 
  - Add your iOS API-key to the `<plist>` section
  - Add your Android API-key to the `io.fabric.ApiKey` section
- iOS: scripts/script-titanium-crashlytics.sh
  - Add your API-key and secret key

Crashes will now be uploaded to the Crashlytics platform automatically

## License

MIT

## Author

Hans Knöchel