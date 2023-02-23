"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6028],{2818:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return p}});var n=a(87462),i=a(63366),r=(a(15007),a(64983)),d=a(91515),o=["components"],l={},s={_frontmatter:l},m=d.Z;function p(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.mdx)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"release-notes"},"Release Notes"),(0,r.mdx)("h2",{id:"february-9-2023"},"February 9, 2023"),(0,r.mdx)("h3",{id:"android-target-200"},"Android Target 2.0.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Major version update for ",(0,r.mdx)("a",{parentName:"li",href:"./index.md"},"Adobe Target")," for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-target-android"},"open source project on GitHub"),".")),(0,r.mdx)("p",null,"Please note that the following improvements have been made in the current release:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"The below APIs have been renamed for alignment with the Adobe Target Mobile SDK for iOS:")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"locationsDisplayed")," is now ",(0,r.mdx)("inlineCode",{parentName:"li"},"displayedLocations")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"locationClicked")," is now ",(0,r.mdx)("inlineCode",{parentName:"li"},"clickedLocation"))),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"The public classes ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetRequest"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetPrefetch"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetOrder"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetProduct")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetParameters")," are consolidated under the ",(0,r.mdx)("inlineCode",{parentName:"li"},"target")," subpackage and require updating the import statements as shown below:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.target.TargetRequest;\nimport com.adobe.marketing.mobile.target.TargetPrefetch;\nimport com.adobe.marketing.mobile.target.TargetOrder;\nimport com.adobe.marketing.mobile.target.TargetProduct;\nimport com.adobe.marketing.mobile.target.TargetParameters;\n")),(0,r.mdx)("h2",{id:"august-2-2022"},"August 2, 2022"),(0,r.mdx)("h3",{id:"android-target-130"},"Android Target 1.3.0"),(0,r.mdx)("p",null,"Added getter and setter APIs for Target tnt IDs and session IDs to enable cross-channel sessions."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"setSessionId")," API should be invoked prior to any Target request to prevent the Mobile SDK from generating a session ID locally. The set session ID will follow the session expiry as governed by the ",(0,r.mdx)("inlineCode",{parentName:"li"},"target.sessionTimeout")," configuration setting. You can use this API in conjunction with ",(0,r.mdx)("inlineCode",{parentName:"li"},"setTntId")," API to set both of the value in the SDK."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"setTntId")," API, when invoked, also sets the Target edge host value in the SDK by deriving it from the profile location hint supplied in the tnt ID."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"getSessionId")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"getTntId")," APIs can be used to retrieve the current Target session ID and tnt ID values respectively.")),(0,r.mdx)("h2",{id:"july-29-2022"},"July 29, 2022"),(0,r.mdx)("h3",{id:"ios-aeptarget-320"},"iOS AEPTarget 3.2.0"),(0,r.mdx)("p",null,"Added getter and setter APIs for Target tnt IDs and session IDs to enable cross-channel sessions."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"setSessionId")," API should be invoked prior to any Target request to prevent the Mobile SDK from generating a session ID locally. The set session ID will follow the session expiry as governed by the ",(0,r.mdx)("inlineCode",{parentName:"li"},"target.sessionTimeout")," configuration setting.You can use this API in conjunction with ",(0,r.mdx)("inlineCode",{parentName:"li"},"setTntId")," API to set both of the value in the SDK."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"setTntId")," API, when invoked, also sets the Target edge host value in the SDK by deriving it from the profile location hint supplied in the tnt ID."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"getSessionId")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"getTntId")," APIs can be used to retrieve the current Target session ID and tnt ID values respectively.")),(0,r.mdx)("h2",{id:"may-26-2022"},"May 26, 2022"),(0,r.mdx)("h3",{id:"ios-aeptarget-313"},"iOS AEPTarget 3.1.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where the Target display notification was not being sent to the server, upon invoking ",(0,r.mdx)("inlineCode",{parentName:"li"},"displayedLocations")," API, if a prior prefetch call did not return profile state token for the mbox.")),(0,r.mdx)("h2",{id:"november-19-2021"},"November 19, 2021"),(0,r.mdx)("h3",{id:"ios-aeptarget-312"},"iOS AEPTarget 3.1.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where the Target qaMode parameters were not being attached to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"retrieveLocationContent")," API requests, once the Target preview selections were confirmed.")),(0,r.mdx)("h2",{id:"october-22-2021"},"October 22, 2021"),(0,r.mdx)("h3",{id:"ios-aeptarget-311"},"iOS AEPTarget 3.1.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where the Target session ID was not being persisted in the local storage if the app was closed before session expiry.")),(0,r.mdx)("h2",{id:"august-23-2021"},"August 23, 2021"),(0,r.mdx)("h3",{id:"android-target-128"},"Android Target 1.2.8"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added support for sending the click conversion A4T payload to Adobe Analytics for A4T-enabled Target activities when the ",(0,r.mdx)("inlineCode",{parentName:"li"},"locationClicked")," API is called.")),(0,r.mdx)("h2",{id:"august-5-2021"},"August 5, 2021"),(0,r.mdx)("h3",{id:"android-target-127"},"Android Target 1.2.7"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"TargetRequest")," class now provides a constructor with a new callback interface named ",(0,r.mdx)("inlineCode",{parentName:"li"},"AdobeTargetDetailedCallback"),". When implemented, the callback method provides:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Target content; AND"),(0,r.mdx)("li",{parentName:"ul"},"Data payload map containing one or more of response tokens, Analytics payload, click metric Analytics payload (if available in the Target retrieve location content response with/ without a prior prefetch call)")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note"),": This SDK extension, per previous behavior, will make requests to Adobe Analytics (if the Adobe Analytics extension is also implemented) with appropriate Target payloads for A4T functionality."),(0,r.mdx)("h3",{id:"ios-aeptarget-310"},"iOS AEPTarget 3.1.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"TargetRequest")," class now provides a constructor with a new callback function named ",(0,r.mdx)("inlineCode",{parentName:"li"},"contentWithDataCallback"),". When implemented, this callback provides:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Target content; AND"),(0,r.mdx)("li",{parentName:"ul"},"Data payload dictionary containing one or more of response tokens, Analytics payload, click metric Analytics payload (if available in the Target retrieve location content response with/ without a prior prefetch call)")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note"),": This SDK extension, per previous behavior, will make requests to Adobe Analytics (if the Adobe Analytics extension is also implemented) with appropriate Target payloads for A4T functionality."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where the click notification was not being sent to Adobe Target for a retrieved mbox location upon the ",(0,r.mdx)("inlineCode",{parentName:"li"},"clickedLocation")," API call."),(0,r.mdx)("li",{parentName:"ul"},"Added support for sending the click conversion A4T payload to Adobe Analytics for A4T-enabled Target activities when the ",(0,r.mdx)("inlineCode",{parentName:"li"},"clickedLocation")," API is called.")),(0,r.mdx)("h2",{id:"june-15-2021"},"June 15, 2021"),(0,r.mdx)("h3",{id:"android-target-117"},"Android Target 1.1.7"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added the changes to move away from bintray and start using Sonatype to push the SDK to Maven Central.")),(0,r.mdx)("h2",{id:"aug-31-2020"},"Aug 31, 2020"),(0,r.mdx)("h3",{id:"android-target-116"},"Android Target 1.1.6"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added support for configuration option ",(0,r.mdx)("inlineCode",{parentName:"li"},"target.server")," which enables a custom host to be used for Target requests. This configuration option is available in the Adobe Target Launch extension starting with version 2.4.0."),(0,r.mdx)("li",{parentName:"ul"},"Public APIs now support error handling via passing ",(0,r.mdx)("inlineCode",{parentName:"li"},"AdobeCallbackWithError"),".")),(0,r.mdx)("h2",{id:"march-11-2020"},"March 11, 2020"),(0,r.mdx)("p",null,"The following updates were made in this release:"),(0,r.mdx)("h3",{id:"android-target-115"},"Android Target 1.1.5"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Report extension details to Mobile Core for improved logging and Griffon support."),(0,r.mdx)("li",{parentName:"ul"},"Target Session Id will now be added as a context data parameter ",(0,r.mdx)("inlineCode",{parentName:"li"},"a.target.sessionId")," in the internal Analytics for Target hit sent to Adobe Analytics."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue, where on app close and relaunch, previously persisted tntId was not being sent in Target requests.")),(0,r.mdx)("h2",{id:"january-29-2020"},"January 29, 2020"),(0,r.mdx)("p",null,"The following updates were made in this release:"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Android Target 1.1.4")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Improved existing log messages and added additional logging to assist with debugging.")),(0,r.mdx)("h2",{id:"october-2-2019"},"October 2, 2019"),(0,r.mdx)("p",null,"The following updates were made in this release:"),(0,r.mdx)("h3",{id:"android-target-113"},"Android Target 1.1.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The Target session ID and Edge Host will now be persisted in Shared Preferences. If there is no activity for the configured ",(0,r.mdx)("inlineCode",{parentName:"li"},"target.sessionTimeout"),", these variables will be reset. The default session timeout value is 30 minutes.    "),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where the null ",(0,r.mdx)("inlineCode",{parentName:"li"},"at_property")," key, which was passed in mbox parameters, was being sent in Target requests.")),(0,r.mdx)("h2",{id:"august-6-2019"},"August 6, 2019"),(0,r.mdx)("p",null,"The following updates were made in this release:"),(0,r.mdx)("h3",{id:"android-target-112"},"Android Target 1.1.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"target.previewEnabled"),", a new configuration Boolean key, has been added. This key is used to enable/disable Target Preview."),(0,r.mdx)("p",{parentName:"li"},"If key is not provided, preview is enabled by default.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Fixed an issue in Android where Target Preview links were decoded twice, which lead to an error preview page."))),(0,r.mdx)("h2",{id:"june-27-2019"},"June 27, 2019"),(0,r.mdx)("p",null,"The following updates were made in this release:"),(0,r.mdx)("h3",{id:"android-target-111"},"Android Target 1.1.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Use the ",(0,r.mdx)("inlineCode",{parentName:"li"},"target.propertyToken")," configuration setting to configure the ",(0,r.mdx)("inlineCode",{parentName:"li"},"at_property_token")," that is generated from the Target UI, instead of passing the token as an mbox parameter."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where JSON offers were not being returned as content but instead default content was served.")),(0,r.mdx)("h2",{id:"may-15-2019"},"May 15, 2019"),(0,r.mdx)("h3",{id:"android-target-110"},"Android Target 1.1.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Upgraded the Target Delivery APIs to latest v1 delivery endpoint.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Introduced ",(0,r.mdx)("inlineCode",{parentName:"p"},"retrieveLocationContent"),", a new API that retrieves content for multiple Target mbox locations simultaneously without increasing the reporting count for prefetch cases.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Introduced ",(0,r.mdx)("inlineCode",{parentName:"p"},"locationsDisplayed"),", a new API that helps Target record location to display events."),(0,r.mdx)("p",{parentName:"li"},"This API should only be used for prefetch scenarios.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Provided support for ",(0,r.mdx)("inlineCode",{parentName:"p"},"TargetParameters")," which is a helper class that combines parameters such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"mboxParameters"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"profileParameters"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"orderParameters"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"productParameters"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"New ",(0,r.mdx)("inlineCode",{parentName:"p"},"prefetchContent")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"locationClicked")," APIs which accept ",(0,r.mdx)("inlineCode",{parentName:"p"},"TargetParameters"),"."))),(0,r.mdx)("h2",{id:"february-28-2019"},"February 28, 2019"),(0,r.mdx)("p",null,"The following updates were made to the Adobe Target extension:"),(0,r.mdx)("p",null,"The Target Client Code is now automatically added based on your Experience Cloud organization."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"If no code is found, you can type it in."),(0,r.mdx)("li",{parentName:"ul"},"If multiple codes are found, you can select the code from the drop-down list.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-target-release-notes-md-f6263c6e99053423c0b4.js.map