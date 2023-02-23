"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[396,9429],{1287:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return h}});var a=t(87462),i=t(63366),o=(t(15007),t(64983)),r=t(91515),d=t(7970),l=["components"],s={},p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},m=p("Media"),c=p("InlineAlert"),u=p("TabsBlock"),x={_frontmatter:s},g=r.Z;function h(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.mdx)(g,(0,a.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"signal"},"Signal"),(0,o.mdx)("p",null,'The Signal extension allows marketers to send a "signal" to their apps through the Adobe Experience Platform Mobile SDKs. This signal might tell the Mobile SDKs or the apps to complete tasks, such as send PII-labeled data, to trigger a postback to a third-party ad-network and open an app deep link or URL. To ensure that signals are sent or are activated, the marketers need to configure triggers and traits in the Data Collection UI.'),(0,o.mdx)("p",null,"The Signal extension allows you to send postbacks to third-party endpoints and open URLs, such as web URLs or application deep links, when using rules actions in the Data Collection UI."),(0,o.mdx)("p",null,"To send PII data to external destinations, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PII")," action can trigger the Rules Engine when certain triggers and traits match. When setting a rule, you can also set the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PII")," action for a Signal event. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"collectPii")," API can then be used to trigger the rule and send the PII data to a remote server."),(0,o.mdx)("p",null,"To get started with Signal extension, complete the following steps:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Add the ",(0,o.mdx)("strong",{parentName:"li"},"Signal")," extension to your app."),(0,o.mdx)("li",{parentName:"ol"},"Define the necessary rules in the Data Collection UI. "),(0,o.mdx)("li",{parentName:"ol"},"(Optional) When using Send PII actions in the Data Collection UI, implement the APIs to collect PII data and send it to the configured third party destination.")),(0,o.mdx)("p",null,"For more information about creating and configuring a rule in the Data Collection UI, see ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-platform/tags/ui/rules.html"},"Rules"),"."),(0,o.mdx)("h2",{id:"watch-the-video"},"Watch the video"),(0,o.mdx)(m,{slots:"video",mdxType:"Media"}),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=r-z9ivQjzOY"},"https://www.youtube.com/watch?v=r-z9ivQjzOY")),(0,o.mdx)("h2",{id:"add-the-signal-extension-to-your-app"},"Add the Signal extension to your app"),(0,o.mdx)(c,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Using dynamic dependency versions is not recommended for production apps. Refer to this ",(0,o.mdx)("a",{parentName:"p",href:"../../manage-gradle-dependencies.md"},"page")," for managing gradle dependencies."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(d.default,{query:"platform=android&task=add",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(d.default,{query:"platform=ios&task=add",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"register-the-signal-extension"},"Register the Signal extension"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"MobileCore.registerExtensions()")," API can be used to register the Signal extension with the Mobile Core extension. This API allows the extension to send and receive events to and from the Mobile SDK."),(0,o.mdx)("p",null,"To register the Signal extension, use the following code sample:"),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(d.default,{query:"platform=android&task=register",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(d.default,{query:"platform=ios&task=register",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"implement-the-mobile-sdk-to-send-pii-data-to-external-destinations"},"Implement the Mobile SDK to send PII data to external destinations"),(0,o.mdx)("p",null,"To send PII data to external destinations, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PII")," action can trigger the Rules Engine when the configured triggers and traits match. When creating a rule, you can set the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PII")," action for a Signal event, so that ",(0,o.mdx)("inlineCode",{parentName:"p"},"collectPii")," can trigger the rule and send the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PII")," data."),(0,o.mdx)("p",null,"For more information about ",(0,o.mdx)("inlineCode",{parentName:"p"},"collectPii")," and its usage, see ",(0,o.mdx)("a",{parentName:"p",href:"../api-reference.md#collect-pii"},"collectPii"),"."),(0,o.mdx)("p",null,"For more information about how to configure the Signal postbacks in the Data Collection UI, see ",(0,o.mdx)("a",{parentName:"p",href:"../../user-guides/rules-engine-integration"},"Signal extension and Rules Engine integration"),"."))}h.isMDXComponent=!0},7970:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return x}});var a=t(87462),i=t(63366),o=(t(15007),t(64983)),r=t(91515),d=["components"],l={},s=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},p=s("Variant"),m=s("InlineNestedAlert"),c={_frontmatter:l},u=r.Z;function x(e){var n=e.components,t=(0,i.Z)(e,d);return(0,o.mdx)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(p,{platform:"android",task:"add",repeat:"6",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java"},"Java"),(0,o.mdx)("p",null,"Add the Signal extension and its dependency, the ",(0,o.mdx)("a",{parentName:"p",href:"../index.md"},"Mobile Core")," extension to your project using the app's Gradle file."),(0,o.mdx)(m,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,o.mdx)("p",null,"Using dynamic dependency versions is ",(0,o.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,o.mdx)("a",{parentName:"p",href:"../../manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information. ")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"implementation 'com.adobe.marketing.mobile:core:2.+'\nimplementation 'com.adobe.marketing.mobile:signal:2.+'\n")),(0,o.mdx)("p",null,"Import the Signal and MobileCore extensions in your application's main activity."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Signal;\n")),(0,o.mdx)(p,{platform:"ios",task:"add",repeat:"8",mdxType:"Variant"}),(0,o.mdx)("p",null,"​Add the AEPSignal extension and it's dependency, the ",(0,o.mdx)("a",{parentName:"p",href:"../index.md"},"Mobile Core")," extension to your project using Cocoapods."),(0,o.mdx)("p",null,"Add following pods in your ",(0,o.mdx)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-pod"},"pod 'AEPCore','~> 3.0'\npod 'AEPSignal','~> 3.0'\n")),(0,o.mdx)("p",null,"Import the Signal libraries:"),(0,o.mdx)("h4",{id:"swift"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPCore\nimport AEPSignal\n")),(0,o.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPCore;\n@import AEPSignal;\n")),(0,o.mdx)(p,{platform:"android",task:"register",repeat:"3",mdxType:"Variant"}),(0,o.mdx)("p",null,"After calling the ",(0,o.mdx)("inlineCode",{parentName:"p"},"setApplication()")," method in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onCreate()")," method, register the Signal extension."),(0,o.mdx)("h4",{id:"java-1"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"public class MobileApp extends Application {\n\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        MobileCore.setApplication(this);\n\n        List<Class<? extends Extension>> extensions = Arrays.asList(Signal.EXTENSION, ...);\n        MobileCore.registerExtensions(extensions, o -> {\n            // Any other post registration processing\n        });\n    }\n}\n")),(0,o.mdx)(p,{platform:"ios",task:"register",repeat:"5",mdxType:"Variant"}),(0,o.mdx)("p",null,"In your app's ",(0,o.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions"),", register the Signal extension with Mobile Core:"),(0,o.mdx)("h4",{id:"swift-1"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n     MobileCore.registerExtensions([Signal.self, ...]) {\n       MobileCore.configureWith(appId: "yourAppId")\n       // Any other post registration processing\n     }\n     return true;\n}\n')),(0,o.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [AEPMobileCore registerExtensions:@[AEPMobileSignal.class, ...] completion:^{\n        [AEPMobileCore configureWithAppId: @"yourAppId"];\n        // Any other post registration processing\n    }];\n    return YES;\n }\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-mobile-core-signal-index-md-e78c1bbac7927a4f386c.js.map