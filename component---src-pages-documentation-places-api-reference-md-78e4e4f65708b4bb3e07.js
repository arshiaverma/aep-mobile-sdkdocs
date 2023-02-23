"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9362],{44659:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return f}});var n=a(87462),r=a(63366),d=(a(15007),a(64983)),o=a(91515),i=a(80777),l=["components"],m={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",t)}},p=s("InlineAlert"),x=s("TabsBlock"),c={_frontmatter:m},u=o.Z;function f(e){var t=e.components,a=(0,r.Z)(e,l);return(0,d.mdx)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"places-api-reference"},"Places API reference"),(0,d.mdx)("p",null,"This document contains usage information for the public functions, classes, and enums in AEPPlaces."),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"This page only contains information about the 3.x ",(0,d.mdx)("inlineCode",{parentName:"p"},"AEPPlaces")," extension.",(0,d.mdx)("br",null),(0,d.mdx)("br",null),"A full API reference for the 2.x ",(0,d.mdx)("inlineCode",{parentName:"p"},"ACPPlaces")," extension for iOS can be found ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-extension/places-api-reference.html?lang=en"},"here"),"."),(0,d.mdx)("h2",{id:"static-functions"},"Static functions"),(0,d.mdx)("h3",{id:"clear"},"clear"),(0,d.mdx)("p",null,"Clears out the client-side data for Places in shared state, local storage, and in-memory."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(i.default,{query:"platform=android&api=clear",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(i.default,{query:"platform=ios&api=clear",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"extensionversion"},"extensionVersion"),(0,d.mdx)("p",null,"Returns the running version of the AEPPlaces extension."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(i.default,{query:"platform=android&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(i.default,{query:"platform=ios&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"getcurrentpointsofinterest"},"getCurrentPointsOfInterest"),(0,d.mdx)("p",null,"Returns all points of interest (POI) of which the device is currently known to be within."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(i.default,{query:"platform=android&api=get-current-points-of-interest",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(i.default,{query:"platform=ios&api=get-current-points-of-interest",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"getlastknownlocation"},"getLastKnownLocation"),(0,d.mdx)("p",null,"Returns the last latitude and longitude provided to the AEPPlaces Extension."),(0,d.mdx)("p",null,"If the Places Extension does not have a valid last known location for the user, the parameter passed in the closure will be ",(0,d.mdx)("inlineCode",{parentName:"p"},"nil"),". The ",(0,d.mdx)("inlineCode",{parentName:"p"},"CLLocation")," object returned by this method will only contain a valid coordinate. Other properties on the ",(0,d.mdx)("inlineCode",{parentName:"p"},"CLLocation")," object should not be considered valid."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(i.default,{query:"platform=android&api=get-last-known-location",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(i.default,{query:"platform=ios&api=get-last-known-location",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"getnearbypointsofinterest"},"getNearbyPointsOfInterest"),(0,d.mdx)("p",null,"Requests a list of nearby Points of Interest (POI) and returns them in a closure."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(i.default,{query:"platform=android&api=get-nearby-points-of-interest",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(i.default,{query:"platform=ios&api=get-nearby-points-of-interest",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"processgeofence"},"processGeofence"),(0,d.mdx)("p",null,"When a device crosses one of your app’s pre-defined Places Service region boundaries, the region and event type are passed to the SDK for processing."),(0,d.mdx)("p",null,"Process a Geofence region event for the provided transitionType."),(0,d.mdx)("p",null,"You can pass the transitionType from ",(0,d.mdx)("inlineCode",{parentName:"p"},"GeofencingEvent.getGeofenceTransition()"),". Currently ",(0,d.mdx)("inlineCode",{parentName:"p"},"Geofence.GEOFENCE_TRANSITION_ENTER")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"Geofence.GEOFENCE_TRANSITION_EXIT")," are supported."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(i.default,{query:"platform=android&api=process-geofence",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"processgeofenceevent"},"processGeofenceEvent"),(0,d.mdx)("p",null,"Process all Geofences in the GeofencingEvent at the same time."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(i.default,{query:"platform=android&api=process-geofence-event",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"processregionevent"},"processRegionEvent"),(0,d.mdx)("p",null,"Passes a ",(0,d.mdx)("inlineCode",{parentName:"p"},"CLRegion")," and a ",(0,d.mdx)("inlineCode",{parentName:"p"},"PlacesRegionEvent")," to be processed by the Places extension."),(0,d.mdx)("p",null,"Calling this method will result in an ",(0,d.mdx)("inlineCode",{parentName:"p"},"Event")," being dispatched to the SDK's ",(0,d.mdx)("inlineCode",{parentName:"p"},"EventHub"),". This enables rule processing based on the triggering region event."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(i.default,{query:"platform=ios&api=process-region-event",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"registerextension"},"registerExtension"),(0,d.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Deprecated as of 2.0.0. Please use the ",(0,d.mdx)("a",{parentName:"p",href:"../mobile-core/api-reference.md#registerextensions"},"MobileCore.registerExtensions")," API instead."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(i.default,{query:"platform=android&api=register-extension",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(i.default,{query:"platform=ios&api=register-extension",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"setaccuracyauthorization"},"setAccuracyAuthorization"),(0,d.mdx)("p",null,"Sets the accuracy authorization status in the Places extension."),(0,d.mdx)("p",null,"The value provided is stored in the Places shared state, and is for reference only. Calling this method does not impact the actual location accuracy authorization for this device."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(i.default,{query:"platform=ios&api=set-accuracy-authorization",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"setauthorizationstatus"},"setAuthorizationStatus"),(0,d.mdx)("p",null,"Sets the authorization status in the Places extension."),(0,d.mdx)("p",null,"The status provided is stored in the Places shared state, and is for reference only. Calling this method does not impact the actual location authorization status for this device."),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"This method should only be called from the ",(0,d.mdx)("inlineCode",{parentName:"p"},"CLLocationManagerDelegate")," protocol method ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/3563956-locationmanagerdidchangeauthoriz"},"locationManagerDidChangeAuthorization(","_",":)"),"."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(i.default,{query:"platform=android&api=set-authorization-status",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(i.default,{query:"platform=ios&api=set-authorization-status",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"additional-classes-and-enums"},"Additional classes and enums"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Swift"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Objective-C"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"class"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"PointOfInterest")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"AEPPlacesPoi"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"enum"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"PlacesQueryResponseCode")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"AEPlacesQueryResponseCode"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"enum"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"PlacesRegionEvent")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"AEPPlacesRegionEvent"))))),(0,d.mdx)("h4",{id:"pointofinterest"},"PointOfInterest"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Data Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"identifier"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"latitude"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Double")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"libraryId"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"longitude"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Double")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"metaData"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"[","String: String","]")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"name"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"radius"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Int")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"userIsWithin"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Bool")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"weight"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Int")))),(0,d.mdx)("h4",{id:"placesqueryresponsecode"},"PlacesQueryResponseCode"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Case"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Raw Value"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"ok"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"0")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"connectivityError"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"1")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"serverResponseError"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"2")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"invalidLatLongError"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"3")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"configurationError"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"4")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"queryServiceUnavailable"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"privacyOptedOut"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"6")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"unknownError"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"7")))),(0,d.mdx)("h4",{id:"placesregionevent"},"PlacesRegionEvent"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Case"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Raw Value"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"entry"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"0")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"exit"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"1")))))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-places-api-reference-md-78e4e4f65708b4bb3e07.js.map