/*
录音
https://github.com/xiangyuecn/Recorder
src: engine/beta-webm.js
*/
!function(e){var t="object"==typeof window&&!!window.document,n=(t?window:Object).Recorder,o=n.i18n;!function(l,e,v,R){"use strict";var y="audio/webm",M=R&&window.MediaRecorder&&MediaRecorder.isTypeSupported(y);l.prototype.enc_webm={stable:!1,getTestMsg:function(){return v(M?"tsTW::只有比较新的浏览器支持，压缩率和mp3差不多。由于未找到对已有pcm数据进行快速编码的方法，只能按照类似边播放边收听形式把数据导入到MediaRecorder，有几秒就要等几秒。输出音频虽然可以通过比特率来控制文件大小，但音频文件中的比特率并非设定比特率，采样率由于是我们自己采样的，到这个编码器随他怎么搞":"L49q::此浏览器不支持进行webm编码，未实现MediaRecorder")}},l.prototype.webm=function(e,o,t){if(R)if(M){var n=this.set,r=e.length,a=n.sampleRate,i=l.GetContext(!0),c=function(){l.CloseNewCtx(i)},d=i.createMediaStreamDestination();d.channelCount=1;var s=new MediaRecorder(d.stream,{mimeType:y,bitsPerSecond:1e3*n.bitRate}),u=[];s.ondataavailable=function(e){u.push(e.data)},s.onstop=function(e){var t=new Blob(u,{type:y}),n=new FileReader;n.onloadend=function(){c(),o(n.result,y)},n.readAsArrayBuffer(t)},s.onerror=function(e){c(),t(v("PIX0::转码webm出错：{1}",0,e.message))},s.start();for(var f=i.createBuffer(1,r,a),w=f.getChannelData(0),m=0;m<r;m++){var p=e[m];p=p<0?p/32768:p/32767,w[m]=p}var b=i.createBufferSource();b.channelCount=1,b.buffer=f,b.connect(d),b.start?b.start():b.noteOn(0),b.onended=function(){s.stop()}}else t(v("aG4z::此浏览器不支持把录音转成webm格式"));else t(v.G("NonBrowser-1",["webm encoder"]))}}(n,0,o.$T,t)}();