if("localStorage"in window&&null!==window.localStorage){var vTurbResultsKey="@vturb::results::v1",vTurbLocalSave=localStorage.getItem(vTurbResultsKey),vTurbComparisonsGroupId="679e7733386cd35071dd8ec6",vTurbComparisonsGroupTimeId="1738440742";function vTurbGenerateNumber(){var e=Math.round(100*Math.random()),r=31536e6,t=(new Date).getTime()+r,a={...JSON.parse(vTurbLocalSave),[vTurbComparisonsGroupId]:{"id":vTurbComparisonsGroupTimeId,"ttl":t,"math":e}};return localStorage.setItem(vTurbResultsKey,JSON.stringify(a)),e}function vTurbGetNumber(){if(!vTurbLocalSave)return vTurbGenerateNumber();var e=JSON.parse(vTurbLocalSave)[vTurbComparisonsGroupId];if(!e)return vTurbGenerateNumber();var r=e.ttl>(new Date).getTime(),t=e.id===vTurbComparisonsGroupTimeId;return e.math&&r&&t?e.math:vTurbGenerateNumber()}var vTurbRandomNumber=vTurbGetNumber()}else vTurbRandomNumber=Math.round(100*Math.random());switch(!0){case vTurbRandomNumber<=100:default:function vTurbChangePlayer(){!vTurbOriginalPlayerIsMobile&&vTurbDeviceIsMobile||vTurbOriginalPlayerIsMobile&&!vTurbDeviceIsMobile?(vTurbPlayer=vTurbAlternativePlayer,vTurbSrcId=vTurbPlayer.id):vTurbPlayer=vTurbOriginalPlayer;var e=document.getElementById(`vid_${vTurbOriginalPlayer.id}`);e&&e.remove();var r=document.getElementById(`scr_${vTurbOriginalPlayer.id}`);r&&r.setAttribute("id",`scr_${vTurbSrcId}`)}function vTurbCreatSmartvdsElements(){var e,r,t;"1.7.9"===vTurbPlayer.version?document.getElementById(`vid_${vTurbPlayer.id}`)||(window,r=(e=document).getElementById(`scr_${vTurbSrcId}`),(t=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,r.parentElement.insertBefore(t,r)):(document.getElementById(`vid_${vTurbPlayer.id}`)||function(e,r,t){r=e.getElementById(`scr_${vTurbSrcId}`),(t=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,t.style.position="relative",t.style.width="100%",t.style.padding=`${vTurbPlayer.video_aspect_ratio}% 0 0`,r.parentElement.insertBefore(t,r)}(document),document.getElementById(`thumb_${vTurbPlayer.id}`)||function(e,r,t){r=e.getElementById(`vid_${vTurbPlayer.id}`),(t=e.createElement("IMG")).id=`thumb_${vTurbPlayer.id}`,t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.objectFit="cover",t.src=`https://images.converteai.net/${vTurbPlayer.thumbnail_key}`,r.appendChild(t)}(document),document.getElementById(`backdrop_${vTurbPlayer.id}`)||function(e,r,t){r=e.getElementById(`vid_${vTurbPlayer.id}`),(t=e.createElement("DIV")).id=`backdrop_${vTurbPlayer.id}`,t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.backdropFilter="blur(5px)",t.style.webkitBackdropFilter="blur(5px)",r.appendChild(t)}(document))}function vTurbLoadSmrtvds(){var e,r,t,a;e=window,r=document,e.smrtvds||(t=e.smrtvds=function(){t.callMethod?t.callMethod.apply(t,arguments):t.queue.push(arguments)},e._smrtvds||(e._smrtvds=t),t.push=t,t.loaded=!0,t.version="1.1",t.queue=[],(a=r.createElement("script")).async=!0,a.src=`https://scripts.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`,r.getElementsByTagName("head")[0].appendChild(a)),window.smrtvds(`vid_${vTurbPlayer.id}`,vTurbPlayer.org_id,vTurbPlayer.video_id,vTurbPlayer.options)}function vTurbSmrtvds(){vTurbCreatSmartvdsElements(),vTurbLoadSmrtvds()}var vTurbOriginalPlayer,vTurbSrcId="679e7733386cd35071dd8ec6",vTurbPlayer=vTurbOriginalPlayer={"id":"679e80017f42910e4f101ac2","org_id":"25977478-e0ed-4f59-abca-dfed294220e6","name":"UPSELL1a","device_type":"desktop","video_aspect_ratio":"56.25","thumbnail_key":"25977478-e0ed-4f59-abca-dfed294220e6/players/679e80017f42910e4f101ac2/thumbnail.jpg","cover_key":"25977478-e0ed-4f59-abca-dfed294220e6/players/679e80017f42910e4f101ac2/cover.jpg","version":"v1","video_id":"65bbe2bc6b27fc0008c4b639","options":{"autoplay":!1,"subtitle_active":!1,"smart_autoplay_template":"","theme":"#404046","foreground_color":"#FFFFFF","video":{"width":1280,"height":720,"pic":"https://cdn.converteai.net/25977478-e0ed-4f59-abca-dfed294220e6/2024/02/01/65bbfaeb54ff6d00010c0796.gif"},"cdn":"cdn.converteai.net","conversion_params":["src"],"displays":{"big_play":!0,"play_pause":!1,"backward":!1,"subtitle_control":!1,"forward":!1,"volume":!1,"volume_bar":!0,"time":!1,"fullscreen":!0,"seekbar":!1,"seekbar_time":!0,"speed_control":!1},"callAction":[{"id":"callaction_679e80017f42910e4f101ac2_0","type":"inner_button","btnText":"Aceitar a oferta","position":"tc","link":"https://pay.kiwify.com.br/5YauyMn","range":{"start":220,"finish":337},"color":"#105908","colors":{"text":"#FFFFFF","background":"#105908","text_hover":"#ffffff","background_hover":"#158A0A"}}],"pixels":[],"thumbs":[],"headlines":[],"smart_autoplays":[],"turbos":[],"smart_autoplay_elements":[],"mini_hooks":!1,"mini_hooks_elements":[],"resume":!1,"fake_bar":!0,"headline":!1,"turbo":!1,"turbo_speed":1,"turbo_auto_test":!1,"fake_bar_options":{"height":6,"alpha":2,"vbar_height":!0,"vbar_end":!0,"vbar_network":!0,"vbar_color":null}}},vTurbDeviceIsMobile=window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),vTurbOriginalPlayerIsMobile="mobile"===vTurbOriginalPlayer.device_type;vTurbDeviceIsMobile=vTurbDeviceIsMobile&&vTurbDeviceIsMobile[0],vTurbSmrtvds()}