"use strict";(self.webpackChunk_monodeploy_gatsby=self.webpackChunk_monodeploy_gatsby||[]).push([[809],{4519:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return h}});var o=a(9005),n=(a(3289),a(2967)),r=a(38),i=["components"],s={},p={_frontmatter:s},l=r.Z;function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)(l,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-monodeploy",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#what-is-monodeploy","aria-label":"what is monodeploy permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What is Monodeploy?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/tophat/monodeploy/actions?query=workflow%3A%22Continuous+Integration%22"},(0,n.kt)("img",{parentName:"a",src:"https://github.com/tophat/monodeploy/workflows/Continuous%20Integration/badge.svg?branch=main",alt:"Continuous Integration"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://codecov.io/gh/tophat/monodeploy"},(0,n.kt)("img",{parentName:"a",src:"https://codecov.io/gh/tophat/monodeploy/branch/main/graph/badge.svg",alt:"codecov"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tophat/getting-started/blob/main/scorecard.md"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Maturity-Level%202%20--%20First%20Release-yellowgreen.svg",alt:"Maturity badge - level 2"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tophat/monodeploy/blob/main/LICENSE"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/tophat/monodeploy",alt:"GitHub license"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/YhK3GFcZrk"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/809577721751142410",alt:"Discord"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tophat/monodeploy"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/node/v/monodeploy",alt:"node-current"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/monodeploy"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/monodeploy.svg",alt:"npm"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=monodeploy"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dm/monodeploy.svg",alt:"npm downloads"}))),(0,n.kt)("p",null,"Monodeploy is a powerful tool which aims to simplify the package publishing process for monorepos. It leverages ",(0,n.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/workspaces"},"Yarn Berry workspaces")," to do the heavy lifting, and is a direct replacement for tools such as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"Lerna")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/semantic-release/semantic-release"},"Semantic Release"),"."),(0,n.kt)("p",null,"Monodeploy only supports projects using Yarn Berry with the minimum node version set to Node v14.0.0."),(0,n.kt)("h2",{id:"usage",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#usage","aria-label":"usage permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D monodeploy\nyarn monodeploy --dry-run\n")),(0,n.kt)("p",null,"Although we don't recommend it in production, you can use monodeploy directly from the git repository:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D monodeploy@tophat/monodeploy#workspace=monodeploy\n")),(0,n.kt)("h2",{id:"getting-started",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#getting-started","aria-label":"getting started permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Getting Started"),(0,n.kt)("p",null,"Please see the ",(0,n.kt)("a",{parentName:"p",href:"./getting-started"},"Getting Started Guide"),"."),(0,n.kt)("p",null,"You can also check out the ",(0,n.kt)("a",{parentName:"p",href:"./faq"},"Frequently Asked Questions")," for some information around dealing with various edge cases and more advanced configuration."),(0,n.kt)("h2",{id:"configuration",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#configuration","aria-label":"configuration permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Configuration"),(0,n.kt)("p",null,"For information on how to fine-tune Monodeploy, see ",(0,n.kt)("a",{parentName:"p",href:"./configuration"},"Configuration"),"."),(0,n.kt)("p",null,"For available plugins, as well as plugin development, see ",(0,n.kt)("a",{parentName:"p",href:"./plugins"},"Plugins"),"."),(0,n.kt)("h3",{id:"note-about-monodeploy-package-versioning",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h3",href:"#note-about-monodeploy-package-versioning","aria-label":"note about monodeploy package versioning permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Note About Monodeploy Package Versioning"),(0,n.kt)("p",null,"Only the ",(0,n.kt)("inlineCode",{parentName:"p"},"monodeploy"),' package is "public" and follows strict semantic versioning. The other packages such as ',(0,n.kt)("inlineCode",{parentName:"p"},"@monodeploy/changelog")," are meant for internal use and may change their APIs at any time."),(0,n.kt)("h2",{id:"contributing",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#contributing","aria-label":"contributing permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Contributing"),(0,n.kt)("p",null,"Please give the ",(0,n.kt)("a",{parentName:"p",href:"./architecture"},"Architecture")," page a read and then check out the ",(0,n.kt)("a",{parentName:"p",href:"./contributing"},"Contributing Guide"),"."))}h.isMDXComponent=!0},9005:function(e,t,a){function o(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-pages-index-mdx-5562200d8ab3e38aab02.js.map