https://www.googleapis.com/youtube/v3/search?
part=snippet
&
q=skateboarding+dog <- the query
&
type=video
&
key=AIzaSyBkT0pcDCFaA5uMpsfEX7hOvof_MYmR6wY <- actually my api key
(can be found at https://console.developers.google.com/apis/credentials)

RESULTS

{
"kind": "youtube#searchListResponse",
"etag": "\"\_gJQceDMxJ8gP-8T2HLXUoURK8c/gPCoy7NSNTqfTcU4FvsPkeILpj8\"",
"nextPageToken": "CAUQAA",
"regionCode": "US",
"pageInfo": {
"totalResults": 1000000,
"resultsPerPage": 5
},
"items": [

{
"kind": "youtube#searchResult",
"etag": "\"\_gJQceDMxJ8gP-8T2HLXUoURK8c/2QLUJE_bh59BwvY5rldTk43YOFU\"",
"id": {
"kind": "youtube#video",
"videoId": "R8XAlSp838Y"
},
"snippet": {
"publishedAt": "2009-06-13T05:36:14.000Z",
"channelId": "UCvtfT-xYX4Q-jC2Mbsk3OUA",
"title": "Skateboarding Dog - HD Redux",
"description": "10/27/15 Farewell Tillman RIP \*\* One year old Tillman the skateboarding bulldog from the iphone commercial. All clips are from January 2007 re-edited & upconverted to HD. Tillman was a little...",
"thumbnails": {
"default": {
"url": "https://i.ytimg.com/vi/R8XAlSp838Y/default.jpg",
"width": 120,
"height": 90
},
"medium": {
"url": "https://i.ytimg.com/vi/R8XAlSp838Y/mqdefault.jpg",
"width": 320,
"height": 180
},
"high": {
"url": "https://i.ytimg.com/vi/R8XAlSp838Y/hqdefault.jpg",
"width": 480,
"height": 360
}
},
"channelTitle": "RNickeyMouse",
"liveBroadcastContent": "none"
}
}

]
}

<!-- duration timing stufff -->

You will have to make a call to the Youtube Data API's Video resource after you make the search call. You can put up to 50 video id's in search, so you wont have to call it for each element.

https://developers.google.com/youtube/v3/docs/videos/list

You'll want to set part=contentDetails,

e.g.
https://www.googleapis.com/youtube/v3/videos?id=9bZkp7q19f0&part=contentDetails&key={YOUR_API_KEY}

{
"kind": "youtube#videoListResponse",
"etag": "\"XlbeM5oNbUofJuiuGi6IkumnZR8/ny1S4th-ku477VARrY_U4tIqcTw\"",
"items": [
{

"id": "9bZkp7q19f0",
"kind": "youtube#video",
"etag": "\"XlbeM5oNbUofJuiuGi6IkumnZR8/HN8ILnw-DBXyCcTsc7JG0z51BGg\"",
"contentDetails": {
"duration": "PT4M13S", <--- ISO 8601 string. PT stands for Time Duration, 4M is 4 minutes, and 13S is 13 seconds.
"dimension": "2d",
"definition": "hd",
"caption": "false",
"licensedContent": true,
"regionRestriction": {
"blocked": [
"DE"
]
}
}
}
]
}
