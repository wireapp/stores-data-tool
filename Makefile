run/all: run/fetch-android run/fetch-ios

run/fetch-android:
	node wire-reviews-android.js > response/response-android.json

run/fetch-ios:
	node wire-reviews-ios.js > response/response-ios.json
