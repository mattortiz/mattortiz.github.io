(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(292),o=n(4),l=n.n(o),c=n(143),u=n(163),d=n.n(u),s=n(147),m=c.a.div.withConfig({displayName:"docsLayout__LayoutWrapper",componentId:"sc-1dlifbc-0"})(["display:grid;height:100vh;grid-template-areas:'header header header' 'nav content content-aside' 'footer footer footer';grid-template-columns:200px 1fr 200px;grid-template-rows:auto 1fr auto;font-family:arial;@media (max-width:768px){grid-template-areas:'header' 'nav' 'content' 'content-aside' 'footer';grid-template-columns:1fr;grid-template-rows:auto  minmax(75px,auto)  1fr  minmax(75px,auto)  auto;}nav,content-aside{margin:0;}"]),p=function(e){var t=e.children;e.location;return r.a.createElement(s.StaticQuery,{query:"859818296",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(m,null,t))},data:i})};p.propTypes={children:l.a.node.isRequired},p.defaultProps={location:{}};var g=p,f=n(155),h=c.a.div.withConfig({displayName:"navBar",componentId:"v05aj1-0"})(["grid-area:nav;padding:20px;"]),v=n(157),y=c.a.div.withConfig({displayName:"contentAside",componentId:"rizj53-0"})(["grid-area:content-aside;padding:20px;"]),b=n(158),w=n(191);t.default=function(e){var t=e.location;return r.a.createElement(g,{location:t},r.a.createElement(f.a,null,"Header!"),r.a.createElement(h,null,"Navigation!"),r.a.createElement(v.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Main!"),r.a.createElement("p",null,"Vestibulum consectetur sit amet nisi ut consectetur. Praesent efficitur, nibh vitae fringilla scelerisque, est neque faucibus quam, in iaculis purus libero eget mauris. Curabitur et luctus sapien, ac gravida orci. Aliquam erat volutpat. In hac habitasse platea dictumst. Aenean commodo, arcu a commodo efficitur, libero dolor mollis turpis, non posuere orci leo eget enim. Curabitur sit amet elementum orci, pulvinar dignissim urna. Morbi id ex eu ex congue laoreet. Aenean tincidunt dolor justo, semper pretium libero luctus nec. Ut vulputate metus accumsan leo imperdiet tincidunt. Phasellus nec rutrum dolor. Cras imperdiet sollicitudin arcu, id interdum nibh fermentum in."))),r.a.createElement(y,null,r.a.createElement(w.a,null)),r.a.createElement(b.a,null,"Footer!"))}},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(140),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(148),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var s=n(28);n.d(t,"parsePath",function(){return s.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},154:function(e,t,n){"use strict";n.r(t);n(30);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(48),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},155:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(143),o=n(147),l=n(156),c=n.n(l),u=i.a.div.withConfig({displayName:"header__HeaderWrapper",componentId:"pstg0h-0"})(["grid-area:header;padding:1rem 0 0.75rem 2rem;font-size:1.4em;background:rgb(0,97,158);color:white;img{margin-bottom:0;}"]);t.a=function(){return r.a.createElement(u,null,r.a.createElement(o.Link,{to:"/",style:{color:"white",textDecoration:"none"}},r.a.createElement("img",{style:{height:"40px"},src:c.a,alt:"Matt Ortiz Logo"})))}},156:function(e,t,n){e.exports=n.p+"static/Envy-Forge-Text-Logo-9902db9cb0de9d4e14edbc30dc6dde61.png"},157:function(e,t,n){"use strict";var a=n(143).a.div.withConfig({displayName:"content__Content",componentId:"wpao24-0"})(["grid-area:content;flex:1;padding:20px;"]);t.a=a},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(143),o=i.a.div.withConfig({displayName:"footer__FooterWrapper",componentId:"nlgcpp-0"})(["grid-area:footer;padding:0.5rem;text-align:center;font-size:1em;"]),l=i.a.div.withConfig({displayName:"footer__FooterContainer",componentId:"nlgcpp-1"})(["display:flex;flex-wrap:wrap;justify-content:space-between;"]),c=i.a.div.withConfig({displayName:"footer__FooterLeft",componentId:"nlgcpp-2"})(["grid-column:1 / 1;"]),u=i.a.div.withConfig({displayName:"footer__FooterCenter",componentId:"nlgcpp-3"})(["grid-column:2 / 2;"]),d=i.a.div.withConfig({displayName:"footer__FooterRight",componentId:"nlgcpp-4"})(["grid-column:3 / 3;"]);t.a=function(){return r.a.createElement(o,null,r.a.createElement(l,null,r.a.createElement(c,null,"Mollit proident aute nostrud velit cupidatat esse officia."),r.a.createElement(u,null,"Excepteur occaecat ex veniam dolor exercitation aute non."),r.a.createElement(d,null,"Nostrud consequat Lorem veniam cillum commodo quis culpa tempor.")))}},191:function(e,t,n){"use strict";var a=n(192),r=n(0),i=n.n(r),o=n(143),l=n(147),c=o.a.ul.withConfig({displayName:"archive__ArchiveWrapper",componentId:"sc-1jd92u6-0"})(["padding:0;margin:0;list-style:none;a{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:0.8rem;text-decoration:underline;color:#524763;}"]);t.a=function(){return i.a.createElement(l.StaticQuery,{query:"3352683756",render:function(e){var t=e.allMarkdownRemark;return i.a.createElement(i.a.Fragment,null,i.a.createElement("aside",null,i.a.createElement("h3",null,"Archive"),i.a.createElement(c,null,t.edges.map(function(e){return i.a.createElement("li",{key:e.node.frontmatter.slug},i.a.createElement(l.Link,{to:"./posts"+e.node.frontmatter.slug},e.node.frontmatter.title))}))))},data:a})}},192:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Testing 1 2019-01-04",slug:"/testing-1-2019-01-04"}}},{node:{frontmatter:{title:"Testing 2",slug:"testing2"}}},{node:{frontmatter:{title:"Testing 1",slug:"testing-1"}}},{node:{frontmatter:{title:"16-bit Retro Gaming",slug:"/16-bit-retro-gaming"}}},{node:{frontmatter:{title:"8-bit retro",slug:"8-bit-retro"}}}]}}}},292:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt Ortiz - Envy Forge",description:"Equal parts creative, technical and entrepreneurial, with a proven record of bridging business, technology, and desire. Defined by a creative energy and informed by deep practitioner experience. Driven to continuously improve.",keywords:"Product Management, Product Development, Cloud Native"}}}}}}]);
//# sourceMappingURL=component---src-pages-docs-js-911a7dbaaf17306e60e5.js.map