(()=>{var t,e={};e.p="",(()=>{"use strict";e.p=document.getElementById("webpack-public-path").innerText+"Js/"})(),StackExchange=window.StackExchange=window.StackExchange||{},StackOverflow=window.StackOverflow=window.StackOverflow||{},t=!1,StackExchange.beginEditEvent={init:function(){if(!t){t=!0;var e=!1,n=!1,o=$("form#edit-tags-form");0===o.length?0===(o=$("form.inline-post")).length&&(o=$("form.post-form")):n=!0,o?(a("#title",StackExchange.options.events.postEditionSection.title),a("textarea[name='post-text']",StackExchange.options.events.postEditionSection.body),StackExchange.using("tagEditor",(function(){a(".tag-editor input[type='text']",StackExchange.options.events.postEditionSection.tags)}))):StackExchange.options.user.isDeveloper&&console.error("No form found! No post.edit_begin events will be recorded")}function i(t){if(!e){var i,a;if(e=!0,n)i=o.find("input#post-params").val().split("|"),a={PostId:parseInt(i[1]),owner:parseInt(i[0]),post_type:StackExchange.options.events.postType.question,is_suggested_edit:!1,section:StackExchange.options.events.postEditionSection.tags};else{if(!(i=o.attr("data-post-params")))return;(a=JSON.parse(i)).PostId=parseInt(o.find("input#post-id").val()),a.section=t}StackExchange.options.user.isDeveloper&&(console.log("post.edit_begin event being recorded with params:"),console.log(a)),StackExchange.using("gps",(function(){StackExchange.gps.track("post.edit_begin",a)}))}}function a(t,e){var n=o.find(t);n.on("keypress",(function(t){0===t.which||t.ctrlKey||t.metaKey||t.altKey||i(e)})),n.on("change",(function(){i(e)}))}},cancel:function(){t=!1}}})();