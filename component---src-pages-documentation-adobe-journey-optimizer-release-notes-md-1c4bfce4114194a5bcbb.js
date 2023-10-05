"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5002],{97037:function(e,i,n){n.r(i),n.d(i,{_frontmatter:function(){return r},default:function(){return p}});var a=n(87462),s=n(63366),d=(n(15007),n(64983)),o=n(91515),t=["components"],r={},m={_frontmatter:r},l=o.Z;function p(e){var i=e.components,n=(0,s.Z)(e,t);return(0,d.mdx)(l,(0,a.Z)({},m,n,{components:i,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"release-notes"},"Release Notes"),(0,d.mdx)("h2",{id:"september-28-2023"},"September 28, 2023"),(0,d.mdx)("h3",{id:"ios-messaging-410"},"iOS Messaging 4.1.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added new notification tracking API ",(0,d.mdx)("inlineCode",{parentName:"li"},"handleNotificationResponse")," with parameters ",(0,d.mdx)("inlineCode",{parentName:"li"},"UNNotificationResponse")," and an optional callback the returns ",(0,d.mdx)("inlineCode",{parentName:"li"},"PushTrackingStatus")," enum.",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"This API will automatically handle the click behaviour (OPENAPP, WEBURL, DEEPLINK) defined for the notification."))),(0,d.mdx)("li",{parentName:"ul"},"Deprecated the notification tracking API ",(0,d.mdx)("inlineCode",{parentName:"li"},"handleNotificationResponse")," with parameters ",(0,d.mdx)("inlineCode",{parentName:"li"},"UNNotificationResponse"),", ",(0,d.mdx)("inlineCode",{parentName:"li"},"applicationOpened"),", and ",(0,d.mdx)("inlineCode",{parentName:"li"},"customActionId"),"."),(0,d.mdx)("li",{parentName:"ul"},"Fixed a bug on notification tracking API ",(0,d.mdx)("inlineCode",{parentName:"li"},"handleNotificationResponse")," to stop sending tracking hits to edge servers when the notification does not contain tracking information.")),(0,d.mdx)("h3",{id:"android-messaging-220"},"Android Messaging 2.2.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Introduced ",(0,d.mdx)("inlineCode",{parentName:"li"},"MessagingServices")," class to automatically build, display, track, and handle defined click behaviour on notifications from Adobe Journey Optimizer."),(0,d.mdx)("li",{parentName:"ul"},"Fixed a bug on notification tracking API ",(0,d.mdx)("inlineCode",{parentName:"li"},"handleNotificationResponse")," to stop sending tracking hits to edge servers when the notification does not contain tracking information.")),(0,d.mdx)("h2",{id:"june-2-2023"},"June 2, 2023"),(0,d.mdx)("h3",{id:"ios-messaging-400"},"iOS Messaging 4.0.0"),(0,d.mdx)("p",null,"Major version update for ",(0,d.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Journey Optimizer")," for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 11.0."),(0,d.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 14.1 with the GitHub release.")),(0,d.mdx)("h2",{id:"may-23-2023"},"May 23, 2023"),(0,d.mdx)("h3",{id:"android-messaging-214"},"Android Messaging 2.1.4"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Handle in-app interaction tracking for back button presses.")),(0,d.mdx)("h2",{id:"april-28-2023"},"April 28, 2023"),(0,d.mdx)("h3",{id:"android-messaging-213"},"Android Messaging 2.1.3"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed a bug causing in-app message display Experience Events to be sent even when MessagingDelegate suppressed their display.")),(0,d.mdx)("h3",{id:"ios-messaging-114"},"iOS Messaging 1.1.4"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed a bug causing in-app message display Experience Events to be sent even when MessagingDelegate suppressed their display.")),(0,d.mdx)("h2",{id:"april-24-2023"},"April 24, 2023"),(0,d.mdx)("h3",{id:"android-messaging-212"},"Android Messaging 2.1.2"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed a bug causing a crash when incorrectly formatted URLs were used in custom HTML messages.")),(0,d.mdx)("h2",{id:"march-20-2023"},"March 20, 2023"),(0,d.mdx)("h3",{id:"ios-messaging-113"},"iOS Messaging 1.1.3"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Drop minimum supported version of iOS to 10.0 to align with minimum supported version in AEPCore.")),(0,d.mdx)("h2",{id:"march-16-2023"},"March 16, 2023"),(0,d.mdx)("h3",{id:"android-messaging-211"},"Android Messaging 2.1.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Messaging extension now processes in-app message responses from multiple upstream services.")),(0,d.mdx)("h2",{id:"march-15-2023"},"March 15, 2023"),(0,d.mdx)("h3",{id:"ios-messaging-112"},"iOS Messaging 1.1.2"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Messaging extension now processes in-app message responses from multiple upstream services.")),(0,d.mdx)("h2",{id:"march-6-2023"},"March 6, 2023"),(0,d.mdx)("h3",{id:"android-messaging-210"},"Android Messaging 2.1.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed in-app message deeplink processing."),(0,d.mdx)("li",{parentName:"ul"},"Added a default implementation for ",(0,d.mdx)("inlineCode",{parentName:"li"},"Message.getAutoTrack")," to resolve an issue with the Message interface not matching the previous Message class.")),(0,d.mdx)("h2",{id:"february-27-2023"},"February 27, 2023"),(0,d.mdx)("h3",{id:"ios-messaging-111"},"iOS Messaging 1.1.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixes an issue where loaded in-app message rules were not cleared when an empty in-app message payload is received from Adobe Journey Optimizer.")),(0,d.mdx)("h3",{id:"android-messaging-202"},"Android Messaging 2.0.2"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixes an issue where loaded in-app message rules were not cleared when an empty in-app message payload is received from Adobe Journey Optimizer."),(0,d.mdx)("li",{parentName:"ul"},"Fixes an issue where only the first in-app message present in a payload was being loaded into the rules engine.")),(0,d.mdx)("h2",{id:"february-9-2023"},"February 9, 2023"),(0,d.mdx)("h3",{id:"ios-messaging-110"},"iOS Messaging 1.1.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Adds support for Adobe Journey Optimizer powered in-app messages.")),(0,d.mdx)("h3",{id:"android-messaging-201"},"Android Messaging 2.0.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Updates the Core dependency to 2.0.1, which resolves inconsistencies between the Android and iOS MessagingDelegate classes.")),(0,d.mdx)("h2",{id:"february-3-2023"},"February 3, 2023"),(0,d.mdx)("h3",{id:"android-messaging-200"},"Android Messaging 2.0.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Major version update for ",(0,d.mdx)("a",{parentName:"li",href:"./index.md"},"Adobe Journey Optimizer")," for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an ",(0,d.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-messaging-android"},"open source project on GitHub"),"."),(0,d.mdx)("li",{parentName:"ul"},"Adds support for Adobe Journey Optimizer powered in-app messages.")),(0,d.mdx)("h2",{id:"june-17-2021"},"June 17, 2021"),(0,d.mdx)("h3",{id:"ios-messaging-100"},"iOS Messaging 1.0.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"The Adobe Experience Platform Messaging (AEPMessaging) mobile extension is now available on iOS! This extension enables push notifications and measurement for Adobe Journey Optimizer.")),(0,d.mdx)("h3",{id:"adobe-journey-optimizer-launch-extension"},"Adobe Journey Optimizer Launch Extension"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"You can now find the ",(0,d.mdx)("inlineCode",{parentName:"li"},"Adobe Journey Optimizer")," extension in the Launch extensions catalog for mobile properties.")),(0,d.mdx)("h2",{id:"june-16-2021"},"June 16, 2021"),(0,d.mdx)("h3",{id:"android-messaging-100"},"Android Messaging 1.0.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"The Adobe Experience Platform Messaging (AEPMessaging) mobile extension is now available on Android! This extension enables push notifications and measurement for Adobe Journey Optimizer.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-journey-optimizer-release-notes-md-1c4bfce4114194a5bcbb.js.map