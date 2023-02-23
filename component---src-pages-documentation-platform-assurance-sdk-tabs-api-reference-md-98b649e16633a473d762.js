"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4379],{41749:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return c}});var t=a(87462),r=a(63366),s=(a(15007),a(64983)),o=a(91515),p=["components"],l={},i=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",n)}},m=i("Variant"),d=i("InlineNestedAlert"),x={_frontmatter:l},u=o.Z;function c(e){var n=e.components,a=(0,r.Z)(e,p);return(0,s.mdx)(u,(0,t.Z)({},x,a,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)(m,{platform:"android",api:"extension-version",repeat:"8",mdxType:"Variant"}),(0,s.mdx)("h4",{id:"java"},"Java"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"@NonNull\npublic static String extensionVersion()\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"final String extensionVersion = Assurance.extensionVersion();\n")),(0,s.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"val extensionVersion: String = Assurance.extensionVersion()\n")),(0,s.mdx)(m,{platform:"ios",api:"extension-version",repeat:"8",mdxType:"Variant"}),(0,s.mdx)("h4",{id:"swift"},"Swift"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-swift"},"AEPAssurance.extensionVersion()\n")),(0,s.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (nonnull NSString*) extensionVersion;\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-objectivec"},"[AEPAssurance extensionVersion];\n")),(0,s.mdx)(m,{platform:"android",api:"start-session",repeat:"9",mdxType:"Variant"}),(0,s.mdx)(d,{variant:"info",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,s.mdx)("p",null,"This API is optional for Android. Deep linking is the best way to connect to an Assurance session when using the Android SDK. Assurance SDK on Android is already setup to handle incoming intents to your app. You can ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.android.com/training/app-links/deep-linking"},"add an intent filter for incoming links in your app")," to complete the deep link configuration.")),(0,s.mdx)("h4",{id:"java-1"},"Java"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"public static void startSession(@NonNull final String url)\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},'final String url = "<assurance_session_url>";\nAssurance.startSession(url);\n')),(0,s.mdx)("h4",{id:"kotlin-1"},"Kotlin"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},'val url: String = "<assurance_session_url>"\nAssurance.startSession(url)\n')),(0,s.mdx)(m,{platform:"ios",api:"start-session",repeat:"10",mdxType:"Variant"}),(0,s.mdx)("h4",{id:"swift-1"},"Swift"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-swift"},"func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {\n    do {\n        AEPAssurance.startSession(url)\n        return false\n    }\n}\n")),(0,s.mdx)("p",null,"For SceneDelegate based applications"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-swift"},"    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {\n        AEPAssurance.startSession(URLContexts.first!.url)\n    }\n")),(0,s.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (void) startSession: (NSURL* _Nonnull) url;\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)app openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {\n    [AEPAssurance startSession:url];\n    return false;\n}\n")),(0,s.mdx)(m,{platform:"android",api:"register-extension",repeat:"5",mdxType:"Variant"}),(0,s.mdx)("h4",{id:"java-2"},"Java"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"public static void registerExtension()\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"Assurance.registerExtension();\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-platform-assurance-sdk-tabs-api-reference-md-98b649e16633a473d762.js.map