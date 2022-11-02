run/all: run/fetch-android run/fetch-ios

run/fetch-android:
	node lib/wire-reviews-android.js > response/reviews-android.json

run/fetch-ios:
	node lib/wire-reviews-ios.js > response/reviews-ios.json
