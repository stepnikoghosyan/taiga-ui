(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{LItl:function(e,t,n){"use strict";n.r(t),n.d(t,"Placeholder",(function(){return r})),n.d(t,"default",(function(){return d}));var o=n("gk5g"),s=n("74l2"),i=n("tEaS"),r=o.Extension.create({name:"placeholder",addOptions:()=>({emptyEditorClass:"is-editor-empty",emptyNodeClass:"is-empty",placeholder:"Write something \u2026",showOnlyWhenEditable:!0,showOnlyCurrent:!0,includeChildren:!1}),addProseMirrorPlugins(){return[new s.c({props:{decorations:({doc:e,selection:t})=>{const n=this.editor.isEditable||!this.options.showOnlyWhenEditable,{anchor:o}=t,s=[];if(!n)return null;const r=e.type.createAndFill(),d=(null==r?void 0:r.sameMarkup(e))&&null===r.content.findDiffStart(e.content);return e.descendants((e,t)=>{const n=o>=t&&o<=t+e.nodeSize;if((n||!this.options.showOnlyCurrent)&&!e.isLeaf&&!e.childCount){const o=[this.options.emptyNodeClass];d&&o.push(this.options.emptyEditorClass);const r=i.a.node(t,t+e.nodeSize,{class:o.join(" "),"data-placeholder":"function"==typeof this.options.placeholder?this.options.placeholder({editor:this.editor,node:e,pos:t,hasAnchor:n}):this.options.placeholder});s.push(r)}return this.options.includeChildren}),i.b.create(e,s)}}})]}}),d=r}}]);