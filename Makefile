run/all: android/fetch-reviews ios/fetch-reviews android/fetch-ratings ios/fetch-ratings

android/fetch-reviews:
	node lib/android-reviews.js > response/reviews-android.json

ios/fetch-reviews:
	node lib/ios-reviews.js > response/reviews-ios.json

android/fetch-ratings:
	node lib/android-ratings.js > response/ratings-android.json

ios/fetch-ratings:
	node lib/ios-ratings.js > response/ratings-ios.json
