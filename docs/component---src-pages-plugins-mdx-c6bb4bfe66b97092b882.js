"use strict";(self.webpackChunk_monodeploy_gatsby=self.webpackChunk_monodeploy_gatsby||[]).push([[733],{9368:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return h}});var n=t(9005),i=(t(3289),t(2967)),l=t(38),o=["components"],r={},s={_frontmatter:r},p=l.Z;function h(e){var a=e.components,t=(0,n.Z)(e,o);return(0,i.kt)(p,Object.assign({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"plugins",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#plugins","aria-label":"plugins permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Plugins"),(0,i.kt)("p",null,"You can add a plugin via a config file or CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-raw"},"plugins: ['@monodeploy/plugin-github']\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn monodeploy --plugins @monodeploy/plugin-github\n")),(0,i.kt)("p",null,"A plugin is a module which exposes a function as the default. This function takes PluginHooks as the first argument and plugin options as the second."),(0,i.kt)("p",null,"Plugin options can only be passed through a config file, and are not supported through the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-raw"},"plugins: ['@monodeploy/plugin-github', { someArbitraryOption: 'value' }]\n")),(0,i.kt)("p",null,'You can then "tap" into the hooks.'),(0,i.kt)("h2",{id:"available-plugins",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#available-plugins","aria-label":"available plugins permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Available Plugins"),(0,i.kt)("h3",{id:"github",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h3",href:"#github","aria-label":"github permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"GitHub"),(0,i.kt)("p",null,"Plugin: ",(0,i.kt)("inlineCode",{parentName:"p"},"@monodeploy/plugin-github"),"."),(0,i.kt)("p",null,"The GitHub plugin creates GitHub releases. It requires a ",(0,i.kt)("inlineCode",{parentName:"p"},"GH_TOKEN")," environment variable which should be set to a Personal Access Token with write access to GitHub releases."),(0,i.kt)("p",null,"By default, implicit version updates do not get a dedicated release. To change this behaviour, set ",(0,i.kt)("inlineCode",{parentName:"p"},"includeImplicitUpdates")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-raw"},"plugins: ['@monodeploy/plugin-github', { includeImplicitUpdates: true }]\n")),(0,i.kt)("h2",{id:"plugin-development",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#plugin-development","aria-label":"plugin development permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Plugin Development"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webpack/tapable"},"tapable")," for an experimental plugin system."),(0,i.kt)("h3",{id:"hooks",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h3",href:"#hooks","aria-label":"hooks permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Hooks"),(0,i.kt)("h4",{id:"onreleaseavailable",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h4",href:"#onreleaseavailable","aria-label":"onreleaseavailable permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"onReleaseAvailable"),(0,i.kt)("p",null,"This hook is triggered once a release is available, after publishing to npm, and after pushing any artifacts such as git tags to the repository (assuming running with autoCommit and push mode)."))}h.isMDXComponent=!0},9005:function(e,a,t){function n(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}t.d(a,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-plugins-mdx-c6bb4bfe66b97092b882.js.map