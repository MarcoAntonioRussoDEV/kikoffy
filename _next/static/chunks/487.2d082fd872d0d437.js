"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{487:function(e,t,n){n.r(t),n.d(t,{DotLottieAudio:function(){return i}});var o=n(7493);n(5031);var r=(0,o.a)(e=>{var t,n,o,r,a,i,u,s,_,d,l,c,p,f;(t=function(){this.init()}).prototype={init:function(){var e=this||n;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="u">typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var t=this||n;if(e=parseFloat(e),t.ctx||d(),"u">typeof e&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,n.ctx.currentTime);for(var o=0;o<t._howls.length;o++)if(!t._howls[o]._webAudio)for(var r=t._howls[o]._getSoundIds(),a=0;a<r.length;a++){var i=t._howls[o]._soundById(r[a]);i&&i._node&&(i._node.volume=i._volume*e)}return t}return t._volume},mute:function(e){var t=this||n;t.ctx||d(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,n.ctx.currentTime);for(var o=0;o<t._howls.length;o++)if(!t._howls[o]._webAudio)for(var r=t._howls[o]._getSoundIds(),a=0;a<r.length;a++){var i=t._howls[o]._soundById(r[a]);i&&i._node&&(i._node.muted=!!e||i._muted)}return t},stop:function(){for(var e=this||n,t=0;t<e._howls.length;t++)e._howls[t].stop();return e},unload:function(){for(var e=this||n,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&"u">typeof e.ctx.close&&(e.ctx.close(),e.ctx=null,d()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio){if("u">typeof Audio)try{var t=new Audio;typeof t.oncanplaythrough>"u"&&(e._canPlayEvent="canplay")}catch{e.noAudio=!0}else e.noAudio=!0}try{var t=new Audio;t.muted&&(e.noAudio=!0)}catch{}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,t=null;try{t="u">typeof Audio?new Audio:null}catch{return e}if(!t||"function"!=typeof t.canPlayType)return e;var o=t.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator?e._navigator.userAgent:"",a=r.match(/OPR\/([0-6].)/g),i=a&&33>parseInt(a[0].split("/")[1],10),u=-1!==r.indexOf("Safari")&&-1===r.indexOf("Chrome"),s=r.match(/Version\/(.*?) /),_=u&&s&&15>parseInt(s[1],10);return e._codecs={mp3:!!(!i&&(o||t.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!o,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(t.canPlayType('audio/wav; codecs="1"')||t.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(t.canPlayType("audio/x-m4b;")||t.canPlayType("audio/m4b;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!_&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!_&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||n;if(!(e._audioUnlocked||!e.ctx)){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(n){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var o=new Audio;o._unlocked=!0,e._releaseHtml5Audio(o)}catch{e.noAudio=!0;break}for(var r=0;r<e._howls.length;r++)if(!e._howls[r]._webAudio)for(var a=e._howls[r]._getSoundIds(),i=0;i<a.length;i++){var u=e._howls[r]._soundById(a[i]);u&&u._node&&!u._node._unlocked&&(u._node._unlocked=!0,u._node.load())}e._autoResume();var s=e.ctx.createBufferSource();s.buffer=e._scratchBuffer,s.connect(e.ctx.destination),typeof s.start>"u"?s.noteOn(0):s.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),s.onended=function(){s.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0),document.removeEventListener("keydown",t,!0);for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),document.addEventListener("keydown",t,!0),e}},_obtainHtml5Audio:function(){var e=this||n;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var t=new Audio().play();return t&&"u">typeof Promise&&(t instanceof Promise||"function"==typeof t.then)&&t.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var t=this||n;return e._unlocked&&t._html5AudioPool.push(e),t},_autoSuspend:function(){var e=this;if(!(!e.autoSuspend||!e.ctx||typeof e.ctx.suspend>"u"||!n.usingWebAudio)){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio){for(var o=0;o<e._howls[t]._sounds.length;o++)if(!e._howls[t]._sounds[o]._paused)return e}return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var t=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(t,t)}},3e4),e}},_autoResume:function(){var e=this;if(!(!e.ctx||typeof e.ctx.resume>"u"||!n.usingWebAudio))return"running"===e.state&&"interrupted"!==e.ctx.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state||"running"===e.state&&"interrupted"===e.ctx.state?(e.ctx.resume().then(function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}},n=new t,(o=function(e){if(!e.src||0===e.src.length){console.error("An array of source files must be passed with any new Howl.");return}this.init(e)}).prototype={init:function(e){var t=this;return n.ctx||d(),t._autoplay=e.autoplay||!1,t._format="string"!=typeof e.format?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload="boolean"!=typeof e.preload&&"metadata"!==e.preload||e.preload,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src="string"!=typeof e.src?e.src:[e.src],t._volume=void 0!==e.volume?e.volume:1,t._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:!!e.xhr&&!!e.xhr.withCredentials&&e.xhr.withCredentials},t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onunlock=e.onunlock?[{fn:e.onunlock}]:[],t._onresume=[],t._webAudio=n.usingWebAudio&&!t._html5,"u">typeof n.ctx&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&"none"!==t._preload&&t.load(),t},load:function(){var e,t,o=this,a=null;if(n.noAudio){o._emit("loaderror",null,"No audio support.");return}"string"==typeof o._src&&(o._src=[o._src]);for(var u=0;u<o._src.length;u++){if(o._format&&o._format[u])e=o._format[u];else{if("string"!=typeof(t=o._src[u])){o._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}(e=/^data:audio\/([^;,]+);/i.exec(t))||(e=/\.([^.]+)$/.exec(t.split("?",1)[0])),e&&(e=e[1].toLowerCase())}if(e||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),e&&n.codecs(e)){a=o._src[u];break}}if(!a){o._emit("loaderror",null,"No codec support for selected audio sources.");return}return o._src=a,o._state="loading","https:"===window.location.protocol&&"http:"===a.slice(0,5)&&(o._html5=!0,o._webAudio=!1),new r(o),o._webAudio&&i(o),o},play:function(e,t){var o=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===o._state&&!o._sprite[e])return null;if(typeof e>"u"&&(e="__default",!o._playLock)){for(var a=0,i=0;i<o._sounds.length;i++)o._sounds[i]._paused&&!o._sounds[i]._ended&&(a++,r=o._sounds[i]._id);1===a?e=null:r=null}}var u=r?o._soundById(r):o._inactiveSound();if(!u)return null;if(r&&!e&&(e=u._sprite||"__default"),"loaded"!==o._state){u._sprite=e,u._ended=!1;var s=u._id;return o._queue.push({event:"play",action:function(){o.play(s)}}),s}if(r&&!u._paused)return t||o._loadQueue("play"),u._id;o._webAudio&&n._autoResume();var _=Math.max(0,u._seek>0?u._seek:o._sprite[e][0]/1e3),d=Math.max(0,(o._sprite[e][0]+o._sprite[e][1])/1e3-_),l=1e3*d/Math.abs(u._rate),c=o._sprite[e][0]/1e3,p=(o._sprite[e][0]+o._sprite[e][1])/1e3;u._sprite=e,u._ended=!1;var f=function(){u._paused=!1,u._seek=_,u._start=c,u._stop=p,u._loop=!!(u._loop||o._sprite[e][2])};if(_>=p){o._ended(u);return}var m=u._node;if(o._webAudio){var h=function(){o._playLock=!1,f(),o._refreshBuffer(u);var e=u._muted||o._muted?0:u._volume;m.gain.setValueAtTime(e,n.ctx.currentTime),u._playStart=n.ctx.currentTime,typeof m.bufferSource.start>"u"?u._loop?m.bufferSource.noteGrainOn(0,_,86400):m.bufferSource.noteGrainOn(0,_,d):u._loop?m.bufferSource.start(0,_,86400):m.bufferSource.start(0,_,d),l!==1/0&&(o._endTimers[u._id]=setTimeout(o._ended.bind(o,u),l)),t||setTimeout(function(){o._emit("play",u._id),o._loadQueue()},0)};"running"===n.state&&"interrupted"!==n.ctx.state?h():(o._playLock=!0,o.once("resume",h),o._clearTimer(u._id))}else{var y=function(){m.currentTime=_,m.muted=u._muted||o._muted||n._muted||m.muted,m.volume=u._volume*n.volume(),m.playbackRate=u._rate;try{var r=m.play();if(r&&"u">typeof Promise&&(r instanceof Promise||"function"==typeof r.then)?(o._playLock=!0,f(),r.then(function(){o._playLock=!1,m._unlocked=!0,t?o._loadQueue():o._emit("play",u._id)}).catch(function(){o._playLock=!1,o._emit("playerror",u._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),u._ended=!0,u._paused=!0})):t||(o._playLock=!1,f(),o._emit("play",u._id)),m.playbackRate=u._rate,m.paused){o._emit("playerror",u._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}"__default"!==e||u._loop?o._endTimers[u._id]=setTimeout(o._ended.bind(o,u),l):(o._endTimers[u._id]=function(){o._ended(u),m.removeEventListener("ended",o._endTimers[u._id],!1)},m.addEventListener("ended",o._endTimers[u._id],!1))}catch(e){o._emit("playerror",u._id,e)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===m.src&&(m.src=o._src,m.load());var v=window&&window.ejecta||!m.readyState&&n._navigator.isCocoonJS;if(m.readyState>=3||v)y();else{o._playLock=!0,o._state="loading";var A=function(){o._state="loaded",y(),m.removeEventListener(n._canPlayEvent,A,!1)};m.addEventListener(n._canPlayEvent,A,!1),o._clearTimer(u._id)}}return u._id},pause:function(e){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var n=t._getSoundIds(e),o=0;o<n.length;o++){t._clearTimer(n[o]);var r=t._soundById(n[o]);if(r&&!r._paused&&(r._seek=t.seek(n[o]),r._rateSeek=0,r._paused=!0,t._stopFade(n[o]),r._node)){if(t._webAudio){if(!r._node.bufferSource)continue;typeof r._node.bufferSource.stop>"u"?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),t._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause()}arguments[1]||t._emit("pause",r?r._id:null)}return t},stop:function(e,t){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var o=n._getSoundIds(e),r=0;r<o.length;r++){n._clearTimer(o[r]);var a=n._soundById(o[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,n._stopFade(o[r]),a._node&&(n._webAudio?a._node.bufferSource&&(typeof a._node.bufferSource.stop>"u"?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),n._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause(),a._node.duration===1/0&&n._clearSound(a._node))),t||n._emit("stop",a._id))}return n},mute:function(e,t){var o=this;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"mute",action:function(){o.mute(e,t)}}),o;if(typeof t>"u"){if("boolean"!=typeof e)return o._muted;o._muted=e}for(var r=o._getSoundIds(t),a=0;a<r.length;a++){var i=o._soundById(r[a]);i&&(i._muted=e,i._interval&&o._stopFade(i._id),o._webAudio&&i._node?i._node.gain.setValueAtTime(e?0:i._volume,n.ctx.currentTime):i._node&&(i._node.muted=!!n._muted||e),o._emit("mute",i._id))}return o},volume:function(){var e,t,o,r=this,a=arguments;if(0===a.length)return r._volume;if(1===a.length||2===a.length&&typeof a[1]>"u"?r._getSoundIds().indexOf(a[0])>=0?o=parseInt(a[0],10):t=parseFloat(a[0]):a.length>=2&&(t=parseFloat(a[0]),o=parseInt(a[1],10)),!("u">typeof t)||!(t>=0)||!(t<=1))return(e=o?r._soundById(o):r._sounds[0])?e._volume:0;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"volume",action:function(){r.volume.apply(r,a)}}),r;typeof o>"u"&&(r._volume=t),o=r._getSoundIds(o);for(var i=0;i<o.length;i++)(e=r._soundById(o[i]))&&(e._volume=t,a[2]||r._stopFade(o[i]),r._webAudio&&e._node&&!e._muted?e._node.gain.setValueAtTime(t,n.ctx.currentTime):e._node&&!e._muted&&(e._node.volume=t*n.volume()),r._emit("volume",e._id));return r},fade:function(e,t,o,r){var a=this;if("loaded"!==a._state||a._playLock)return a._queue.push({event:"fade",action:function(){a.fade(e,t,o,r)}}),a;e=Math.min(Math.max(0,parseFloat(e)),1),t=Math.min(Math.max(0,parseFloat(t)),1),o=parseFloat(o),a.volume(e,r);for(var i=a._getSoundIds(r),u=0;u<i.length;u++){var s=a._soundById(i[u]);if(s){if(r||a._stopFade(i[u]),a._webAudio&&!s._muted){var _=n.ctx.currentTime,d=_+o/1e3;s._volume=e,s._node.gain.setValueAtTime(e,_),s._node.gain.linearRampToValueAtTime(t,d)}a._startFadeInterval(s,e,t,o,i[u],typeof r>"u")}}return a},_startFadeInterval:function(e,t,n,o,r,a){var i=this,u=t,s=n-t,_=Math.abs(s/.01),d=Date.now();e._fadeTo=n,e._interval=setInterval(function(){var r=(Date.now()-d)/o;d=Date.now(),u+=s*r,u=Math.round(100*u)/100,u=s<0?Math.max(n,u):Math.min(n,u),i._webAudio?e._volume=u:i.volume(u,e._id,!0),a&&(i._volume=u),(n<t&&u<=n||n>t&&u>=n)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,i.volume(n,e._id),i._emit("fade",e._id))},Math.max(4,_>0?o/_:o))},_stopFade:function(e){var t=this._soundById(e);return t&&t._interval&&(this._webAudio&&t._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(t._interval),t._interval=null,this.volume(t._fadeTo,e),t._fadeTo=null,this._emit("fade",e)),this},loop:function(){var e,t,n,o=this,r=arguments;if(0===r.length)return o._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(n=o._soundById(parseInt(r[0],10)))&&n._loop;e=r[0],o._loop=e}else 2===r.length&&(e=r[0],t=parseInt(r[1],10));for(var a=o._getSoundIds(t),i=0;i<a.length;i++)(n=o._soundById(a[i]))&&(n._loop=e,o._webAudio&&n._node&&n._node.bufferSource&&(n._node.bufferSource.loop=e,e&&(n._node.bufferSource.loopStart=n._start||0,n._node.bufferSource.loopEnd=n._stop,o.playing(a[i])&&(o.pause(a[i],!0),o.play(a[i],!0)))));return o},rate:function(){var e,t,o,r=this,a=arguments;if(0===a.length?o=r._sounds[0]._id:1===a.length?r._getSoundIds().indexOf(a[0])>=0?o=parseInt(a[0],10):t=parseFloat(a[0]):2===a.length&&(t=parseFloat(a[0]),o=parseInt(a[1],10)),"number"!=typeof t)return(e=r._soundById(o))?e._rate:r._rate;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"rate",action:function(){r.rate.apply(r,a)}}),r;typeof o>"u"&&(r._rate=t),o=r._getSoundIds(o);for(var i=0;i<o.length;i++)if(e=r._soundById(o[i])){r.playing(o[i])&&(e._rateSeek=r.seek(o[i]),e._playStart=r._webAudio?n.ctx.currentTime:e._playStart),e._rate=t,r._webAudio&&e._node&&e._node.bufferSource?e._node.bufferSource.playbackRate.setValueAtTime(t,n.ctx.currentTime):e._node&&(e._node.playbackRate=t);var u=r.seek(o[i]),s=1e3*((r._sprite[e._sprite][0]+r._sprite[e._sprite][1])/1e3-u)/Math.abs(e._rate);(r._endTimers[o[i]]||!e._paused)&&(r._clearTimer(o[i]),r._endTimers[o[i]]=setTimeout(r._ended.bind(r,e),s)),r._emit("rate",e._id)}return r},seek:function(){var e,t,o=this,r=arguments;if(0===r.length?o._sounds.length&&(t=o._sounds[0]._id):1===r.length?o._getSoundIds().indexOf(r[0])>=0?t=parseInt(r[0],10):o._sounds.length&&(t=o._sounds[0]._id,e=parseFloat(r[0])):2===r.length&&(e=parseFloat(r[0]),t=parseInt(r[1],10)),typeof t>"u")return 0;if("number"==typeof e&&("loaded"!==o._state||o._playLock))return o._queue.push({event:"seek",action:function(){o.seek.apply(o,r)}}),o;var a=o._soundById(t);if(a){if("number"==typeof e&&e>=0){var i=o.playing(t);i&&o.pause(t,!0),a._seek=e,a._ended=!1,o._clearTimer(t),o._webAudio||!a._node||isNaN(a._node.duration)||(a._node.currentTime=e);var u=function(){i&&o.play(t,!0),o._emit("seek",t)};if(i&&!o._webAudio){var s=function(){o._playLock?setTimeout(s,0):u()};setTimeout(s,0)}else u()}else{if(!o._webAudio)return a._node.currentTime;var _=o.playing(t)?n.ctx.currentTime-a._playStart:0,d=a._rateSeek?a._rateSeek-a._seek:0;return a._seek+(d+_*Math.abs(a._rate))}}return o},playing:function(e){if("number"==typeof e){var t=this._soundById(e);return!!t&&!t._paused}for(var n=0;n<this._sounds.length;n++)if(!this._sounds[n]._paused)return!0;return!1},duration:function(e){var t=this._duration,n=this._soundById(e);return n&&(t=this._sprite[n._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,o=0;o<t.length;o++)t[o]._paused||e.stop(t[o]._id),e._webAudio||(e._clearSound(t[o]._node),t[o]._node.removeEventListener("error",t[o]._errorFn,!1),t[o]._node.removeEventListener(n._canPlayEvent,t[o]._loadFn,!1),t[o]._node.removeEventListener("ended",t[o]._endFn,!1),n._releaseHtml5Audio(t[o]._node)),delete t[o]._node,e._clearTimer(t[o]._id);var r=n._howls.indexOf(e);r>=0&&n._howls.splice(r,1);var i=!0;for(o=0;o<n._howls.length;o++)if(n._howls[o]._src===e._src||e._src.indexOf(n._howls[o]._src)>=0){i=!1;break}return a&&i&&delete a[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,n,o){var r=this["_on"+e];return"function"==typeof t&&r.push(o?{id:n,fn:t,once:o}:{id:n,fn:t}),this},off:function(e,t,n){var o=this,r=o["_on"+e],a=0;if("number"==typeof t&&(n=t,t=null),t||n)for(a=0;a<r.length;a++){var i=n===r[a].id;if(t===r[a].fn&&i||!t&&i){r.splice(a,1);break}}else if(e)o["_on"+e]=[];else{var u=Object.keys(o);for(a=0;a<u.length;a++)0===u[a].indexOf("_on")&&Array.isArray(o[u[a]])&&(o[u[a]]=[])}return o},once:function(e,t,n){return this.on(e,t,n,1),this},_emit:function(e,t,n){for(var o=this["_on"+e],r=o.length-1;r>=0;r--)(!o[r].id||o[r].id===t||"load"===e)&&(setTimeout((function(e){e.call(this,t,n)}).bind(this,o[r].fn),0),o[r].once&&this.off(e,o[r].fn,o[r].id));return this._loadQueue(e),this},_loadQueue:function(e){if(this._queue.length>0){var t=this._queue[0];t.event===e&&(this._queue.shift(),this._loadQueue()),e||t.action()}return this},_ended:function(e){var t=this,o=e._sprite;if(!t._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(t._ended.bind(t,e),100),t;var r=!!(e._loop||t._sprite[o][2]);if(t._emit("end",e._id),!t._webAudio&&r&&t.stop(e._id,!0).play(e._id),t._webAudio&&r){t._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=(e._stop-e._start)*1e3/Math.abs(e._rate);t._endTimers[e._id]=setTimeout(t._ended.bind(t,e),a)}return t._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,t._clearTimer(e._id),t._cleanBuffer(e._node),n._autoSuspend()),t._webAudio||r||t.stop(e._id,!0),t},_clearTimer:function(e){if(this._endTimers[e]){if("function"!=typeof this._endTimers[e])clearTimeout(this._endTimers[e]);else{var t=this._soundById(e);t&&t._node&&t._node.removeEventListener("ended",this._endTimers[e],!1)}delete this._endTimers[e]}return this},_soundById:function(e){for(var t=0;t<this._sounds.length;t++)if(e===this._sounds[t]._id)return this._sounds[t];return null},_inactiveSound:function(){this._drain();for(var e=0;e<this._sounds.length;e++)if(this._sounds[e]._ended)return this._sounds[e].reset();return new r(this)},_drain:function(){var e=this._pool,t=0,n=0;if(!(this._sounds.length<e)){for(n=0;n<this._sounds.length;n++)this._sounds[n]._ended&&t++;for(n=this._sounds.length-1;n>=0;n--){if(t<=e)return;this._sounds[n]._ended&&(this._webAudio&&this._sounds[n]._node&&this._sounds[n]._node.disconnect(0),this._sounds.splice(n,1),t--)}}},_getSoundIds:function(e){if(!(typeof e>"u"))return[e];for(var t=[],n=0;n<this._sounds.length;n++)t.push(this._sounds[n]._id);return t},_refreshBuffer:function(e){return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=a[this._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,n.ctx.currentTime),this},_cleanBuffer:function(e){var t=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(n._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),t))try{e.bufferSource.buffer=n._scratchBuffer}catch{}return e.bufferSource=null,this},_clearSound:function(e){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}},(r=function(e){this._parent=e,this.init()}).prototype={init:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,t._sounds.push(e),e.create(),e},create:function(){var e=this,t=e._parent,o=n._muted||e._muted||e._parent._muted?0:e._volume;return t._webAudio?(e._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(o,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):n.noAudio||(e._node=n._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._endFn=e._endListener.bind(e),e._node.addEventListener("ended",e._endFn,!1),e._node.src=t._src,e._node.preload=!0===t._preload?"auto":t._preload,e._node.volume=o*n.volume(),e._node.load()),e},reset:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_errorListener:function(){this._parent._emit("loaderror",this._id,this._node.error?this._node.error.code:0),this._node.removeEventListener("error",this._errorFn,!1)},_loadListener:function(){var e=this._parent;e._duration=Math.ceil(10*this._node.duration)/10,0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue()),this._node.removeEventListener(n._canPlayEvent,this._loadFn,!1)},_endListener:function(){var e=this._parent;e._duration===1/0&&(e._duration=Math.ceil(10*this._node.duration)/10,e._sprite.__default[1]===1/0&&(e._sprite.__default[1]=1e3*e._duration),e._ended(this)),this._node.removeEventListener("ended",this._endFn,!1)}},a={},i=function(e){var t=e._src;if(a[t]){e._duration=a[t].duration,_(e);return}if(/^data:[^;]+;base64,/.test(t)){for(var n=atob(t.split(",")[1]),o=new Uint8Array(n.length),r=0;r<n.length;++r)o[r]=n.charCodeAt(r);s(o.buffer,e)}else{var i=new XMLHttpRequest;i.open(e._xhr.method,t,!0),i.withCredentials=e._xhr.withCredentials,i.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach(function(t){i.setRequestHeader(t,e._xhr.headers[t])}),i.onload=function(){var t=(i.status+"")[0];if("0"!==t&&"2"!==t&&"3"!==t){e._emit("loaderror",null,"Failed loading audio file with status: "+i.status+".");return}s(i.response,e)},i.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete a[t],e.load())},u(i)}},u=function(e){try{e.send()}catch{e.onerror()}},s=function(e,t){var o=function(){t._emit("loaderror",null,"Decoding audio data failed.")},r=function(e){e&&t._sounds.length>0?(a[t._src]=e,_(t,e)):o()};"u">typeof Promise&&1===n.ctx.decodeAudioData.length?n.ctx.decodeAudioData(e).then(r).catch(o):n.ctx.decodeAudioData(e,r,o)},_=function(e,t){t&&!e._duration&&(e._duration=t.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},d=function(){if(n.usingWebAudio){try{"u">typeof AudioContext?n.ctx=new AudioContext:"u">typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),t=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),o=t?parseInt(t[1],10):null;if(e&&o&&o<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!r&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}},"function"==typeof define&&define.amd&&define([],function(){return{Howler:n,Howl:o}}),"u">typeof e&&(e.Howler=n,e.Howl=o),"u">typeof global?(global.HowlerGlobal=t,global.Howler=n,global.Howl=o,global.Sound=r):"u">typeof window&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=o,window.Sound=r),HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){if(!this.ctx||!this.ctx.listener)return this;for(var t=this._howls.length-1;t>=0;t--)this._howls[t].stereo(e);return this},HowlerGlobal.prototype.pos=function(e,t,n){var o=this;return o.ctx&&o.ctx.listener?(t="number"!=typeof t?o._pos[1]:t,n="number"!=typeof n?o._pos[2]:n,"number"!=typeof e)?o._pos:(o._pos=[e,t,n],"u">typeof o.ctx.listener.positionX?(o.ctx.listener.positionX.setTargetAtTime(o._pos[0],Howler.ctx.currentTime,.1),o.ctx.listener.positionY.setTargetAtTime(o._pos[1],Howler.ctx.currentTime,.1),o.ctx.listener.positionZ.setTargetAtTime(o._pos[2],Howler.ctx.currentTime,.1)):o.ctx.listener.setPosition(o._pos[0],o._pos[1],o._pos[2]),o):o},HowlerGlobal.prototype.orientation=function(e,t,n,o,r,a){var i=this;if(!i.ctx||!i.ctx.listener)return i;var u=i._orientation;return(t="number"!=typeof t?u[1]:t,n="number"!=typeof n?u[2]:n,o="number"!=typeof o?u[3]:o,r="number"!=typeof r?u[4]:r,a="number"!=typeof a?u[5]:a,"number"!=typeof e)?u:(i._orientation=[e,t,n,o,r,a],"u">typeof i.ctx.listener.forwardX?(i.ctx.listener.forwardX.setTargetAtTime(e,Howler.ctx.currentTime,.1),i.ctx.listener.forwardY.setTargetAtTime(t,Howler.ctx.currentTime,.1),i.ctx.listener.forwardZ.setTargetAtTime(n,Howler.ctx.currentTime,.1),i.ctx.listener.upX.setTargetAtTime(o,Howler.ctx.currentTime,.1),i.ctx.listener.upY.setTargetAtTime(r,Howler.ctx.currentTime,.1),i.ctx.listener.upZ.setTargetAtTime(a,Howler.ctx.currentTime,.1)):i.ctx.listener.setOrientation(e,t,n,o,r,a),i)},Howl.prototype.init=(l=Howl.prototype.init,function(e){var t=this;return t._orientation=e.orientation||[1,0,0],t._stereo=e.stereo||null,t._pos=e.pos||null,t._pannerAttr={coneInnerAngle:"u">typeof e.coneInnerAngle?e.coneInnerAngle:360,coneOuterAngle:"u">typeof e.coneOuterAngle?e.coneOuterAngle:360,coneOuterGain:"u">typeof e.coneOuterGain?e.coneOuterGain:0,distanceModel:"u">typeof e.distanceModel?e.distanceModel:"inverse",maxDistance:"u">typeof e.maxDistance?e.maxDistance:1e4,panningModel:"u">typeof e.panningModel?e.panningModel:"HRTF",refDistance:"u">typeof e.refDistance?e.refDistance:1,rolloffFactor:"u">typeof e.rolloffFactor?e.rolloffFactor:1},t._onstereo=e.onstereo?[{fn:e.onstereo}]:[],t._onpos=e.onpos?[{fn:e.onpos}]:[],t._onorientation=e.onorientation?[{fn:e.onorientation}]:[],l.call(this,e)}),Howl.prototype.stereo=function(e,t){var n=this;if(!n._webAudio)return n;if("loaded"!==n._state)return n._queue.push({event:"stereo",action:function(){n.stereo(e,t)}}),n;var o=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof t>"u"){if("number"!=typeof e)return n._stereo;n._stereo=e,n._pos=[e,0,0]}for(var r=n._getSoundIds(t),a=0;a<r.length;a++){var i=n._soundById(r[a]);if(i){if("number"!=typeof e)return i._stereo;i._stereo=e,i._pos=[e,0,0],i._node&&(i._pannerAttr.panningModel="equalpower",i._panner&&i._panner.pan||f(i,o),"spatial"===o?"u">typeof i._panner.positionX?(i._panner.positionX.setValueAtTime(e,Howler.ctx.currentTime),i._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),i._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):i._panner.setPosition(e,0,0):i._panner.pan.setValueAtTime(e,Howler.ctx.currentTime)),n._emit("stereo",i._id)}}return n},Howl.prototype.pos=function(e,t,n,o){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"pos",action:function(){r.pos(e,t,n,o)}}),r;if(t="number"!=typeof t?0:t,n="number"!=typeof n?-.5:n,typeof o>"u"){if("number"!=typeof e)return r._pos;r._pos=[e,t,n]}for(var a=r._getSoundIds(o),i=0;i<a.length;i++){var u=r._soundById(a[i]);if(u){if("number"!=typeof e)return u._pos;u._pos=[e,t,n],u._node&&((!u._panner||u._panner.pan)&&f(u,"spatial"),"u">typeof u._panner.positionX?(u._panner.positionX.setValueAtTime(e,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(n,Howler.ctx.currentTime)):u._panner.setPosition(e,t,n)),r._emit("pos",u._id)}}return r},Howl.prototype.orientation=function(e,t,n,o){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"orientation",action:function(){r.orientation(e,t,n,o)}}),r;if(t="number"!=typeof t?r._orientation[1]:t,n="number"!=typeof n?r._orientation[2]:n,typeof o>"u"){if("number"!=typeof e)return r._orientation;r._orientation=[e,t,n]}for(var a=r._getSoundIds(o),i=0;i<a.length;i++){var u=r._soundById(a[i]);if(u){if("number"!=typeof e)return u._orientation;u._orientation=[e,t,n],u._node&&(u._panner||(u._pos||(u._pos=r._pos||[0,0,-.5]),f(u,"spatial")),"u">typeof u._panner.orientationX?(u._panner.orientationX.setValueAtTime(e,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(n,Howler.ctx.currentTime)):u._panner.setOrientation(e,t,n)),r._emit("orientation",u._id)}}return r},Howl.prototype.pannerAttr=function(){var e,t,n,o=this,r=arguments;if(!o._webAudio)return o;if(0===r.length)return o._pannerAttr;if(1===r.length){if("object"!=typeof r[0])return(n=o._soundById(parseInt(r[0],10)))?n._pannerAttr:o._pannerAttr;e=r[0],typeof t>"u"&&(e.pannerAttr||(e.pannerAttr={coneInnerAngle:e.coneInnerAngle,coneOuterAngle:e.coneOuterAngle,coneOuterGain:e.coneOuterGain,distanceModel:e.distanceModel,maxDistance:e.maxDistance,refDistance:e.refDistance,rolloffFactor:e.rolloffFactor,panningModel:e.panningModel}),o._pannerAttr={coneInnerAngle:"u">typeof e.pannerAttr.coneInnerAngle?e.pannerAttr.coneInnerAngle:o._coneInnerAngle,coneOuterAngle:"u">typeof e.pannerAttr.coneOuterAngle?e.pannerAttr.coneOuterAngle:o._coneOuterAngle,coneOuterGain:"u">typeof e.pannerAttr.coneOuterGain?e.pannerAttr.coneOuterGain:o._coneOuterGain,distanceModel:"u">typeof e.pannerAttr.distanceModel?e.pannerAttr.distanceModel:o._distanceModel,maxDistance:"u">typeof e.pannerAttr.maxDistance?e.pannerAttr.maxDistance:o._maxDistance,refDistance:"u">typeof e.pannerAttr.refDistance?e.pannerAttr.refDistance:o._refDistance,rolloffFactor:"u">typeof e.pannerAttr.rolloffFactor?e.pannerAttr.rolloffFactor:o._rolloffFactor,panningModel:"u">typeof e.pannerAttr.panningModel?e.pannerAttr.panningModel:o._panningModel})}else 2===r.length&&(e=r[0],t=parseInt(r[1],10));for(var a=o._getSoundIds(t),i=0;i<a.length;i++)if(n=o._soundById(a[i])){var u=n._pannerAttr;u={coneInnerAngle:"u">typeof e.coneInnerAngle?e.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:"u">typeof e.coneOuterAngle?e.coneOuterAngle:u.coneOuterAngle,coneOuterGain:"u">typeof e.coneOuterGain?e.coneOuterGain:u.coneOuterGain,distanceModel:"u">typeof e.distanceModel?e.distanceModel:u.distanceModel,maxDistance:"u">typeof e.maxDistance?e.maxDistance:u.maxDistance,refDistance:"u">typeof e.refDistance?e.refDistance:u.refDistance,rolloffFactor:"u">typeof e.rolloffFactor?e.rolloffFactor:u.rolloffFactor,panningModel:"u">typeof e.panningModel?e.panningModel:u.panningModel};var s=n._panner;s?(s.coneInnerAngle=u.coneInnerAngle,s.coneOuterAngle=u.coneOuterAngle,s.coneOuterGain=u.coneOuterGain,s.distanceModel=u.distanceModel,s.maxDistance=u.maxDistance,s.refDistance=u.refDistance,s.rolloffFactor=u.rolloffFactor,s.panningModel=u.panningModel):(n._pos||(n._pos=o._pos||[0,0,-.5]),f(n,"spatial"))}return o},Sound.prototype.init=(c=Sound.prototype.init,function(){var e=this,t=e._parent;e._orientation=t._orientation,e._stereo=t._stereo,e._pos=t._pos,e._pannerAttr=t._pannerAttr,c.call(this),e._stereo?t.stereo(e._stereo):e._pos&&t.pos(e._pos[0],e._pos[1],e._pos[2],e._id)}),Sound.prototype.reset=(p=Sound.prototype.reset,function(){var e=this,t=e._parent;return e._orientation=t._orientation,e._stereo=t._stereo,e._pos=t._pos,e._pannerAttr=t._pannerAttr,e._stereo?t.stereo(e._stereo):e._pos?t.pos(e._pos[0],e._pos[1],e._pos[2],e._id):e._panner&&(e._panner.disconnect(0),e._panner=void 0,t._refreshBuffer(e)),p.call(this)}),f=function(e,t){"spatial"===(t=t||"spatial")?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,"u">typeof e._panner.positionX?(e._panner.positionX.setValueAtTime(e._pos[0],Howler.ctx.currentTime),e._panner.positionY.setValueAtTime(e._pos[1],Howler.ctx.currentTime),e._panner.positionZ.setValueAtTime(e._pos[2],Howler.ctx.currentTime)):e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),"u">typeof e._panner.orientationX?(e._panner.orientationX.setValueAtTime(e._orientation[0],Howler.ctx.currentTime),e._panner.orientationY.setValueAtTime(e._orientation[1],Howler.ctx.currentTime),e._panner.orientationZ.setValueAtTime(e._orientation[2],Howler.ctx.currentTime)):e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}}),a=(0,o.b)(r(),1),i=class{_howl;constructor({src:e}){this._howl=new a.Howl({src:e})}play(){return this._howl.play()}pause(){return this._howl.pause()}playing(){return this._howl.playing()}rate(){return this._howl.rate()}seek(){return this._howl.seek()}setVolume(){return this._howl.volume()}unload(){this._howl.unload()}};/*! Bundled license information:

howler/dist/howler.js:
  (*!
   *  howler.js v2.2.3
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   *)
  (*!
   *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
   *  
   *  howler.js v2.2.3
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   *)
*/}}]);