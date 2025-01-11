/*
Recorder i18n/en-US.js
https://github.com/xiangyuecn/Recorder

Usage: Recorder.i18n.lang="en-US" or "en"

Desc: English, 英语。This translation mainly comes from: google translation + Baidu translation, translated from Chinese to English. 此翻译主要来自：google翻译+百度翻译，由中文翻译成英文。

注意：请勿修改//@@打头的文本行；以下代码结构由/src/package-i18n.js自动生成，只允许在字符串中填写翻译后的文本，请勿改变代码结构；翻译的文本如果需要明确的空值，请填写"=Empty"；文本中的变量用{n}表示（n代表第几个变量），所有变量必须都出现至少一次，如果不要某变量用{n!}表示

Note: Do not modify the text lines starting with //@@; The following code structure is automatically generated by /src/package-i18n.js, only the translated text is allowed to be filled in the string, please do not change the code structure; If the translated text requires an explicit empty value, please fill in "=Empty"; Variables in the text are represented by {n} (n represents the number of variables), all variables must appear at least once, if a variable is not required, it is represented by {n!}
*/
(function(factory){
	var browser=typeof window=="object" && !!window.document;
	var win=browser?window:Object; //非浏览器环境，Recorder挂载在Object下面
	factory(win.Recorder,browser);
}(function(Recorder,isBrowser){
"use strict";
var i18n=Recorder.i18n;

//@@User Code-1 Begin 手写代码放这里 Put the handwritten code here @@

//@@User Code-1 End @@

//@@Exec i18n.lang="en-US";
Recorder.CLog('Import Recorder i18n lang="en-US"');

i18n.alias["en-US"]="en";

var putSet={lang:"en"};

i18n.data["rtl$en"]=false;
i18n.data["desc$en"]="English, 英语。This translation mainly comes from: google translation + Baidu translation, translated from Chinese to English. 此翻译主要来自：google翻译+百度翻译，由中文翻译成英文。";
//@@Exec i18n.GenerateDisplayEnglish=false;



//*************** Begin srcFile=recorder-core.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="重复导入{1}"
//@@Put0
 "K8zP:"+ //args: {1}
       "Duplicate import {1}"

//@@zh="剩{1}个GetContext未close"
,"mSxV:"+ //args: {1}
       "There are {1} GetContext unclosed"

//@@zh="（注意：ctx不是running状态，rec.open和start至少要有一个在用户操作(触摸、点击等)时进行调用，否则将在rec.start时尝试进行ctx.resume，可能会产生兼容性问题(仅iOS)，请参阅文档中runningContext配置）"
,"nMIy:"+ //no args
       " (Note: ctx is not in the running state. At least one of rec.open and start must be called during user operations (touch, click, etc.), otherwise ctx.resume will be attempted during rec.start, which may cause compatibility issues (iOS only), please refer to the runningContext configuration in the documentation) "

//@@zh="Stream的采样率{1}不等于{2}，将进行采样率转换（注意：音质不会变好甚至可能变差），主要在移动端未禁用回声消除时会产生此现象，浏览器有回声消除时可能只会返回16k采样率的音频数据，"
,"eS8i:"+ //args: {1}-{2}
       "The sampleRate of the Stream {1} is not equal to {2}, so the sampleRate conversion will be performed (note: the sound quality will not improve and may even deteriorate). This phenomenon mainly occurs when echoCancellation is not disabled on the mobile terminal. When the browser has echoCancellation, it may only return audio data with a sampleRate of 16k. "

//@@zh="。由于{1}内部1秒375次回调，在移动端可能会有性能问题导致回调丢失录音变短，PC端无影响，暂不建议开启{1}。"
,"ZGlf:"+ //args: {1}
       ". Due to 375 callbacks in 1 second in {1}, there may be performance problems on the mobile side, which may cause the callback to be lost and the recording to be shortened, but it will not affect the PC side. It is not recommended to enable {1} for now."

//@@zh="Connect采用老的{1}，"
,"7TU0:"+ //args: {1}
       "Connect uses the old {1}, "

//@@zh="但已设置{1}尝试启用{2}"
,"JwCL:"+ //args: {1}-{2}
       "But {1} is set trying to enable {2}"

//@@zh="可设置{1}尝试启用{2}"
,"VGjB:"+ //args: {1}-{2}
       "Can set {1} try to enable {2}"

//@@zh="{1}未返回任何音频，恢复使用{2}"
,"MxX1:"+ //args: {1}-{2}
       "{1} did not return any audio, reverting to {2}"

//@@zh="{1}多余回调"
,"XUap:"+ //args: {1}
       "{1} redundant callback"

//@@zh="Connect采用{1}，设置{2}可恢复老式{3}"
,"yOta:"+ //args: {1}-{3}
       "Connect uses {1}, set {2} to restore old-fashioned {3}"

//@@zh="（此浏览器不支持{1}）"
,"VwPd:"+ //args: {1}
       " (This browser does not support {1}) "

//@@zh="{1}未返回任何音频，降级使用{2}"
,"vHnb:"+ //args: {1}-{2}
       "{1} did not return any audio, downgrade to {2}"

//@@zh="{1}多余回调"
,"O9P7:"+ //args: {1}
       "{1} redundant callback"

//@@zh="Connect采用{1}，设置{2}可恢复使用{3}或老式{4}"
,"LMEm:"+ //args: {1}-{4}
       "Connect uses {1}, set {2} to restore to using {3} or old-fashioned {4}"

//@@zh="{1}的filter采样率变了，重设滤波"
,"d48C:"+ //args: {1}
       "The filter sampleRate of {1} has changed, reset the filter"

//@@zh="{1}似乎传入了未重置chunk {2}"
,"tlbC:"+ //args: {1}-{2}
       "{1} seems to have passed in an unreset chunk {2}"

//@@zh="{1}和{2}必须是数值"
,"VtS4:"+ //args: {1}-{2}
       "{1} and {2} must be number"

//@@zh="录音open失败："
,"5tWi:"+ //no args
       "Recording open failed: "

//@@zh="open被取消"
,"dFm8:"+ //no args
       "open cancelled"

//@@zh="open被中断"
,"VtJO:"+ //no args
       "open interrupted"

//@@zh="，可尝试使用RecordApp解决方案"
,"EMJq:"+ //no args
       ", you can try to use the RecordApp solution "

//@@zh="不能录音："
,"A5bm:"+ //no args
       "Cannot record: "

//@@zh="不支持此浏览器从流中获取录音"
,"1iU7:"+ //no args
       "This browser does not support obtaining recordings from stream"

//@@zh="从流中打开录音失败："
,"BTW2:"+ //no args
       "Failed to open recording from stream: "

//@@zh="无权录音(跨域，请尝试给iframe添加麦克风访问策略，如{1})"
,"Nclz:"+ //args: {1}
       "No permission to record (cross domain, please try adding microphone access policy to iframe, such as: {1})"

//@@zh="，无可用麦克风"
,"jBa9:"+ //no args
       ", no microphone available"

//@@zh="用户拒绝了录音权限"
,"gyO5:"+ //no args
       "User denied recording permission"

//@@zh="浏览器禁止不安全页面录音，可开启https解决"
,"oWNo:"+ //no args
       "Browser prohibits recording of unsafe pages, which can be resolved by enabling HTTPS"

//@@zh="此浏览器不支持录音"
,"COxc:"+ //no args
       "This browser does not support recording"

//@@zh="发现同时多次调用open"
,"upb8:"+ //no args
       "It was found that open was called multiple times at the same time"

//@@zh="录音功能无效：无音频流"
,"Q1GA:"+ //no args
       "Invalid recording: no audio stream"

//@@zh="，将尝试禁用回声消除后重试"
,"KxE2:"+ //no args
       ", will try to disable echoCancellation and try again"

//@@zh="请求录音权限错误"
,"xEQR:"+ //no args
       "Error requesting recording permission"

//@@zh="无法录音："
,"bDOG:"+ //no args
       "Unable to record: "

//@@zh="注意：已配置{1}参数，可能会出现浏览器不能正确选用麦克风、移动端无法启用回声消除等现象"
,"IjL3:"+ //args: {1}
       "Note: The {1} parameter has been configured, which may cause the browser to not correctly select the microphone, or the mobile terminal to not enable echoCancellation, etc. "

//@@zh="，未配置 {1} 时浏览器可能会自动启用回声消除，移动端未禁用回声消除时可能会降低系统播放音量（关闭录音后可恢复）和仅提供16k采样率的音频流（不需要回声消除时可明确配置成禁用来获得48k高音质的流），请参阅文档中{2}配置"
,"RiWe:"+ //args: {1}-{2}
       ", when {1} is not configured, the browser may automatically enable echoCancellation. When echoCancellation is not disabled on the mobile terminal, the system playback volume may be reduced (can be restored after closing the recording) and only 16k sampleRate audio stream is provided (when echoCancellation is not required, it can be explicitly configured to disable to obtain 48k high-quality stream). Please refer to the {2} configuration in the document"

//@@zh="close被忽略（因为同时open了多个rec，只有最后一个会真正close）"
,"hWVz:"+ //no args
       "close is ignored (because multiple recs are open at the same time, only the last one will actually close)"

//@@zh="忽略"
,"UHvm:"+ //no args
       "ignore"

//@@zh="不支持{1}架构"
,"Essp:"+ //args: {1}
       "{1} architecture not supported"

//@@zh="{1}类型不支持设置takeoffEncodeChunk"
,"2XBl:"+ //args: {1}
       "{1} type does not support setting takeoffEncodeChunk"

//@@zh="(未加载编码器)"
,"LG7e:"+ //no args
       "(Encoder not loaded)"

//@@zh="{1}环境不支持实时处理"
,"7uMV:"+ //args: {1}
       "{1} environment does not support real-time processing"

//@@zh="补偿{1}ms"
,"4Kfd:"+ //args: {1}
       "Compensation {1}ms"

//@@zh="未补偿{1}ms"
,"bM5i:"+ //args: {1}
       "Uncompensated {1}ms"

//@@zh="回调出错是不允许的，需保证不会抛异常"
,"gFUF:"+ //no args
       "Callback error is not allowed, you need to ensure that no exception will be thrown"

//@@zh="低性能，耗时{1}ms"
,"2ghS:"+ //args: {1}
       "Low performance, took {1}ms"

//@@zh="未进入异步前不能清除buffers"
,"ufqH:"+ //no args
       "Buffers cannot be cleared before entering async"

//@@zh="start失败：未open"
,"6WmN:"+ //no args
       "start failed: not open"

//@@zh="start 开始录音，"
,"kLDN:"+ //no args
       "start recording, "

//@@zh="start被中断"
,"Bp2y:"+ //no args
       "start was interrupted"

//@@zh="，可能无法录音："
,"upkE:"+ //no args
       ", may fail to record: "

//@@zh="stop 和start时差:"
,"Xq4s:"+ //no args
       "Stop and start time difference: "

//@@zh="补偿:"
,"3CQP:"+ //no args
       "compensate: "

//@@zh="结束录音失败："
,"u8JG:"+ //no args
       "Failed to stop recording: "

//@@zh="，请设置{1}"
,"1skY:"+ //args: {1}
       ", please set {1}"

//@@zh="结束录音 编码花{1}ms 音频时长{2}ms 文件大小{3}b"
,"Wv7l:"+ //args: {1}-{3}
       "Stop recording, encoding takes {1}ms, audio duration {2}ms, file size {3}b"

//@@zh="{1}编码器返回的不是{2}"
,"Vkbd:"+ //args: {1}-{2}
       "{1} encoder returned not {2}"

//@@zh="启用takeoffEncodeChunk后stop返回的blob长度为0不提供音频数据"
,"QWnr:"+ //no args
       "After enabling takeoffEncodeChunk, the length of the blob returned by stop is 0 and no audio data is provided"

//@@zh="生成的{1}无效"
,"Sz2H:"+ //args: {1}
       "Invalid generated {1}"

//@@zh="未开始录音"
,"wf9t:"+ //no args
       "Recording not started"

//@@zh="，开始录音前无用户交互导致AudioContext未运行"
,"Dl2c:"+ //no args
       ", No user interaction before starting recording, resulting in AudioContext not running"

//@@zh="未采集到录音"
,"Ltz3:"+ //no args
       "Recording not captured"

//@@zh="未加载{1}编码器，请尝试到{2}的src/engine内找到{1}的编码器并加载"
,"xGuI:"+ //args: {1}-{2}
       "The {1} encoder is not loaded. Please try to find the {1} encoder in the src/engine directory of the {2} and load it"

//@@zh="录音错误："
,"AxOH:"+ //no args
       "Recording error: "

//@@zh="音频buffers被释放"
,"xkKd:"+ //no args
       "Audio buffers are released"

//@@zh="采样:{1} 花:{2}ms"
,"CxeT:"+ //args: {1}-{2}
       "Sampled: {1}, took: {2}ms"

//@@zh="非浏览器环境，不支持{1}"
,"NonBrowser-1:"+ //args: {1}
       "Non-browser environment, does not support {1}"

//@@zh="参数错误：{1}"
,"IllegalArgs-1:"+ //args: {1}
       "Illegal argument: {1}"

//@@zh="调用{1}需要先导入{2}"
,"NeedImport-2:"+ //args: {1}-{2}
       "Calling {1} needs to import {2} first"

//@@zh="不支持：{1}"
,"NotSupport-1:"+ //args: {1}
       "Not support: {1}"

//@@zh="覆盖导入{1}"
,"8HO5:"+ //args: {1}
       "Override import {1}"

]);
//*************** End srcFile=recorder-core.js ***************



//*************** Begin srcFile=engine/beta-amr.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="AMR-NB(NarrowBand)，采样率设置无效（只提供8000hz），比特率范围：{1}（默认12.2kbps），一帧20ms、{2}字节；浏览器一般不支持播放amr格式，可用Recorder.amr2wav()转码成wav播放"
//@@Put0
 "b2mN:"+ //args: {1}-{2}
       "AMR-NB (NarrowBand), sampleRate setting is invalid (only 8000hz is provided), bitRate range: {1} (default 12.2kbps), one frame 20ms, {2} bytes; browsers generally do not support playing amr format, available Recorder.amr2wav() transcoding into wav playback"

//@@zh="AMR Info: 和设置的不匹配{1}，已更新成{2}"
,"tQBv:"+ //args: {1}-{2}
       "AMR Info: does not match the set {1}, has been updated to {2}"

//@@zh="数据采样率低于{1}"
,"q12D:"+ //args: {1}
       "Data sampleRate lower than {1}"

//@@zh="当前浏览器版本太低，无法实时处理"
,"TxjV:"+ //no args
       "The current browser version is too low to process in real time"

//@@zh="takeoffEncodeChunk接管AMR编码器输出的二进制数据，只有首次回调数据（首帧）包含AMR头；在合并成AMR文件时，如果没有把首帧数据包含进去，则必须在文件开头添加上AMR头：Recorder.AMR.AMR_HEADER（转成二进制），否则无法播放"
,"Q7p7:"+ //no args
       "takeoffEncodeChunk takes over the binary data output by the AMR encoder, and only the first callback data (the first frame) contains the AMR header; when merging into an AMR file, if the first frame data is not included, the AMR header must be added at the beginning of the file: Recorder.AMR.AMR_HEADER (converted to binary), otherwise it cannot be played"

//@@zh="当前环境不支持Web Worker，amr实时编码器运行在主线程中"
,"6o9Z:"+ //no args
       "The current environment does not support Web Worker, and the amr real-time encoder runs in the main thread"

//@@zh="amr worker剩{1}个未stop"
,"yYWs:"+ //args: {1}
       "amr worker left {1} unstopped"

//@@zh="amr编码器未start"
,"jOi8:"+ //no args
       "amr encoder not started"

]);
//*************** End srcFile=engine/beta-amr.js ***************



//*************** Begin srcFile=engine/beta-ogg.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="Ogg Vorbis，比特率取值16-100kbps，采样率取值无限制"
//@@Put0
 "O8Gn:"+ //no args
       "Ogg Vorbis, bitRate 16-100kbps, sampleRate unlimited"

//@@zh="当前浏览器版本太低，无法实时处理"
,"5si6:"+ //no args
       "The current browser version is too low to process in real time"

//@@zh="takeoffEncodeChunk接管OggVorbis编码器输出的二进制数据，Ogg由数据页组成，一页包含多帧音频数据（含几秒的音频，一页数据无法单独解码和播放），此编码器每次输出都是完整的一页数据，因此实时性会比较低；在合并成完整ogg文件时，必须将输出的所有数据合并到一起，否则可能无法播放，不支持截取中间一部分单独解码和播放"
,"R8yz:"+ //no args
       "takeoffEncodeChunk takes over the binary data output by the OggVorbis encoder. Ogg is composed of data pages. One page contains multiple frames of audio data (including a few seconds of audio, and one page of data cannot be decoded and played alone). This encoder outputs a complete page of data each time, so the real-time performance will be relatively low; when merging into a complete ogg file, all the output data must be merged together, otherwise it may not be able to play, and it does not support intercepting the middle part to decode and play separately"

//@@zh="当前环境不支持Web Worker，OggVorbis实时编码器运行在主线程中"
,"hB9D:"+ //no args
       "The current environment does not support Web Worker, and the OggVorbis real-time encoder runs in the main thread"

//@@zh="ogg worker剩{1}个未stop"
,"oTiy:"+ //args: {1}
       "There are {1} unstopped ogg workers"

//@@zh="ogg编码器未start"
,"dIpw:"+ //no args
       "ogg encoder not started"

]);
//*************** End srcFile=engine/beta-ogg.js ***************



//*************** Begin srcFile=engine/beta-webm.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="此浏览器不支持进行webm编码，未实现MediaRecorder"
//@@Put0
 "L49q:"+ //no args
       "This browser does not support webm encoding, MediaRecorder is not implemented"

//@@zh="只有比较新的浏览器支持，压缩率和mp3差不多。由于未找到对已有pcm数据进行快速编码的方法，只能按照类似边播放边收听形式把数据导入到MediaRecorder，有几秒就要等几秒。输出音频虽然可以通过比特率来控制文件大小，但音频文件中的比特率并非设定比特率，采样率由于是我们自己采样的，到这个编码器随他怎么搞"
,"tsTW:"+ //no args
       "Only newer browsers support it, and the compression rate is similar to mp3. Since there is no way to quickly encode the existing pcm data, the data can only be imported into MediaRecorder in a similar manner while playing and listening, and it takes a few seconds to wait for a few seconds. Although the output audio can control the file size through the bitRate, the bitRate in the audio file is not the set bitRate. Since the sampleRate is sampled by ourselves, we can do whatever we want with this encoder."

//@@zh="此浏览器不支持把录音转成webm格式"
,"aG4z:"+ //no args
       "This browser does not support converting recordings to webm format"

//@@zh="转码webm出错：{1}"
,"PIX0:"+ //args: {1}
       "Error encoding webm: {1}"

]);
//*************** End srcFile=engine/beta-webm.js ***************



//*************** Begin srcFile=engine/g711x.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="{1}；{2}音频文件无法直接播放，可用Recorder.{2}2wav()转码成wav播放；采样率比特率设置无效，固定为8000hz采样率、16位，每个采样压缩成8位存储，音频文件大小为8000字节/秒；如需任意采样率支持，请使用Recorder.{2}_encode()方法"
//@@Put0
 "d8YX:"+ //args: {1}-{2}
       "{1}; {2} audio files cannot be played directly, and can be transcoded into wav by Recorder.{2}2wav(); the sampleRate bitRate setting is invalid, fixed at 8000hz sampleRate, 16 bits, each sample is compressed into 8 bits for storage, and the audio file size is 8000 bytes/second; if you need any sampleRate support, please use Recorder.{2}_encode() Method"

//@@zh="数据采样率低于{1}"
,"29UK:"+ //args: {1}
       "Data sampleRate lower than {1}"

//@@zh="{1}编码器未start"
,"quVJ:"+ //args: {1}
       "{1} encoder not started"

]);
//*************** End srcFile=engine/g711x.js ***************



//*************** Begin srcFile=engine/mp3.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="采样率范围：{1}；比特率范围：{2}（不同比特率支持的采样率范围不同，小于32kbps时采样率需小于32000）"
//@@Put0
 "Zm7L:"+ //args: {1}-{2}
       "sampleRate range: {1}; bitRate range: {2} (the sampleRate range supported by different bitRate is different, when the bitRate is less than 32kbps, the sampleRate must be less than 32000)"

//@@zh="{1}不在mp3支持的取值范围：{2}"
,"eGB9:"+ //args: {1}-{2}
       "{1} is not in the value range supported by mp3: {2}"

//@@zh="sampleRate已更新为{1}，因为{2}不在mp3支持的取值范围：{3}"
,"zLTa:"+ //args: {1}-{3}
       "sampleRate has been updated to {1}, because {2} is not in the value range supported by mp3: {3}"

//@@zh="当前浏览器版本太低，无法实时处理"
,"yhUs:"+ //no args
       "The current browser version is too low to process in real time"

//@@zh="当前环境不支持Web Worker，mp3实时编码器运行在主线程中"
,"k9PT:"+ //no args
       "The current environment does not support Web Worker, and the mp3 real-time encoder runs in the main thread"

//@@zh="mp3 worker剩{1}个未stop"
,"fT6M:"+ //args: {1}
       "There are {1} unstopped mp3 workers left"

//@@zh="mp3编码器未start"
,"mPxH:"+ //no args
       "mp3 encoder not started"

//@@zh="和设置的不匹配{1}，已更新成{2}"
,"uY9i:"+ //args: {1}-{2}
       "Does not match the set {1}, has been updated to {2}"

//@@zh="Fix移除{1}帧"
,"iMSm:"+ //args: {1}
       "Fix remove {1} frame"

//@@zh="移除帧数过多"
,"b9zm:"+ //no args
       "Remove too many frames"

]);
//*************** End srcFile=engine/mp3.js ***************



//*************** Begin srcFile=engine/pcm.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="pcm为未封装的原始音频数据，pcm音频文件无法直接播放，可用Recorder.pcm2wav()转码成wav播放；支持位数8位、16位（填在比特率里面），采样率取值无限制"
//@@Put0
 "fWsN:"+ //no args
       "pcm is unencapsulated original audio data, pcm audio files cannot be played directly, and can be transcoded into wav by Recorder.pcm2wav(); it supports 8-bit and 16-bit bits (fill in the bitRate), and the sampleRate is unlimited"

//@@zh="PCM Info: 不支持{1}位，已更新成{2}位"
,"uMUJ:"+ //args: {1}-{2}
       "PCM Info: {1} bit is not supported, has been updated to {2} bit"

//@@zh="pcm2wav必须提供sampleRate和bitRate"
,"KmRz:"+ //no args
       "pcm2wav must provide sampleRate and bitRate"

//@@zh="pcm编码器未start"
,"sDkA:"+ //no args
       "pcm encoder not started"

]);
//*************** End srcFile=engine/pcm.js ***************



//*************** Begin srcFile=engine/wav.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="支持位数8位、16位（填在比特率里面），采样率取值无限制；此编码器仅在pcm数据前加了一个44字节的wav头，编码出来的16位wav文件去掉开头的44字节即可得到pcm（注：其他wav编码器可能不是44字节）"
//@@Put0
 "gPSE:"+ //no args
       "Supports 8-bit and 16-bit bits (fill in the bitRate), and the sampleRate is unlimited; this encoder only adds a 44-byte wav header before the pcm data, and the encoded 16-bit wav file removes the beginning 44 bytes to get pcm (note: other wav encoders may not be 44 bytes)"

//@@zh="WAV Info: 不支持{1}位，已更新成{2}位"
,"wyw9:"+ //args: {1}-{2}
       "WAV Info: {1} bit is not supported, has been updated to {2} bit"

]);
//*************** End srcFile=engine/wav.js ***************



//*************** Begin srcFile=extensions/buffer_stream.player.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="getAudioSrc方法已过时：请直接使用getMediaStream然后赋值给audio.srcObject，仅允许在不支持srcObject的浏览器中调用本方法赋值给audio.src以做兼容"
//@@Put0
 "0XYC:"+ //no args
       "The getAudioSrc method is obsolete: please use getMediaStream directly and then assign it to audio.srcObject, it is only allowed to call this method in browsers that do not support srcObject and assign it to audio.src for compatibility"

//@@zh="start被stop终止"
,"6DDt:"+ //no args
       "start is terminated by stop"

//@@zh="{1}多次start"
,"I4h4:"+ //args: {1}
       "{1} repeat start"

//@@zh="浏览器不支持打开{1}"
,"P6Gs:"+ //args: {1}
       "The browser does not support opening {1}"

//@@zh="（注意：ctx不是running状态，start需要在用户操作(触摸、点击等)时进行调用，否则会尝试进行ctx.resume，可能会产生兼容性问题(仅iOS)，请参阅文档中runningContext配置）"
,"JwDm:"+ //no args
       " (Note: ctx is not in the running state, start needs to be called when the user operates (touch, click, etc.), otherwise it will try to perform ctx.resume, which may cause compatibility issues (only iOS), please refer to the runningContext configuration in the document) "

//@@zh="此浏览器的AudioBuffer实现不支持动态特性，采用兼容模式"
,"qx6X:"+ //no args
       "The AudioBuffer implementation of this browser does not support dynamic features, use compatibility mode"

//@@zh="环境检测超时"
,"cdOx:"+ //no args
       "Environment detection timeout"

//@@zh="可能无法播放：{1}"
,"S2Bu:"+ //args: {1}
       "Could not play: {1}"

//@@zh="input调用失败：非pcm[Int16,...]输入时，必须解码或者使用transform转换"
,"ZfGG:"+ //no args
       "input call failed: non-pcm[Int16,...] input must be decoded or converted using transform"

//@@zh="input调用失败：未提供sampleRate"
,"N4ke:"+ //no args
       "input call failed: sampleRate not provided"

//@@zh="input调用失败：data的sampleRate={1}和之前的={2}不同"
,"IHZd:"+ //args: {1}-{2}
       "input call failed: sampleRate={1} of data is different from previous={2}"

//@@zh="延迟过大，已丢弃{1}ms {2}"
,"L8sC:"+ //args: {1}-{2}
       "The delay is too large, {1}ms has been discarded, {2}"

//@@zh="{1}未调用start方法"
,"TZPq:"+ //args: {1}
       "{1} did not call the start method"

//@@zh="浏览器不支持音频解码"
,"iCFC:"+ //no args
       "Browser does not support audio decoding"

//@@zh="音频解码数据必须是ArrayBuffer"
,"wE2k:"+ //no args
       "Audio decoding data must be ArrayBuffer"

//@@zh="音频解码失败：{1}"
,"mOaT:"+ //args: {1}
       "Audio decoding failed: {1}"

]);
//*************** End srcFile=extensions/buffer_stream.player.js ***************



//*************** Begin srcFile=extensions/create-audio.nmn2pcm.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="符号[{1}]无效：{2}"
//@@Put0
 "3RBa:"+ //args: {1}-{2}
       "Invalid symbol [{1}]: {2}"

//@@zh="音符[{1}]无效：{2}"
,"U212:"+ //args: {1}-{2}
       "Invalid note [{1}]: {2}"

//@@zh="多个音时必须对齐，相差{1}ms"
,"7qAD:"+ //args: {1}
       "Multiple tones must be aligned, with a difference of {1}ms"

//@@zh="祝你生日快乐"
,"QGsW:"+ //no args
       "Happy Birthday to You"

//@@zh="致爱丽丝"
,"emJR:"+ //no args
       "For Elise"

//@@zh="卡农-右手简谱"
,"GsYy:"+ //no args
       "Canon - Right Hand Notation"

//@@zh="卡农"
,"bSFZ:"+ //no args
       "Canon"

]);
//*************** End srcFile=extensions/create-audio.nmn2pcm.js ***************



//*************** Begin srcFile=extensions/sonic.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="当前环境不支持Web Worker，不支持调用Sonic.Async"
//@@Put0
 "Ikdz:"+ //no args
       "The current environment does not support Web Worker and does not support calling Sonic.Async"

//@@zh="sonic worker剩{1}个未flush"
,"IC5Y:"+ //args: {1}
       "There are {1} unflushed sonic workers left"

]);
//*************** End srcFile=extensions/sonic.js ***************



//*************** Begin srcFile=app-support/app-native-support.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="{1}中的{2}方法未实现，请在{3}文件中或配置文件中实现此方法"
//@@Put0
 "WWoj:"+ //args: {1}-{3}
       "The {2} method in {1} is not implemented, please implement this method in the {3} file or configuration file"

//@@zh="未开始录音，但收到Native PCM数据"
,"rCAM:"+ //no args
       "Recording does not start, but Native PCM data is received"

//@@zh="检测到跨域iframe，NativeRecordReceivePCM无法注入到顶层，已监听postMessage转发兼容传输数据，请自行实现将top层接收到数据转发到本iframe（不限层），不然无法接收到录音数据"
,"t2OF:"+ //no args
       "A cross-domain iframe is detected. NativeRecordReceivePCM cannot be injected into the top layer. It has listened to postMessage to be compatible with data transmission. Please implement it by yourself to forward the data received by the top layer to this iframe (no limit on layer), otherwise the recording data cannot be received."

//@@zh="未开始录音"
,"Z2y2:"+ //no args
       "Recording not started"

]);
//*************** End srcFile=app-support/app-native-support.js ***************



//*************** Begin srcFile=app-support/app.js ***************
i18n.put(putSet,
[ //@@PutList 

//@@zh="重复导入{1}"
//@@Put0
 "uXtA:"+ //args: {1}
       "Duplicate import {1}"

//@@zh="注意：因为并发调用了其他录音相关方法，当前 {1} 的调用结果已被丢弃且不会有回调"
,"kIBu:"+ //args: {1}
       "Note: Because other recording-related methods are called concurrently, the current call result of {1} has been discarded and there will be no callback"

//@@zh="重复注册{1}"
,"ha2K:"+ //args: {1}
       "Duplicate registration {1}"

//@@zh="仅清理资源"
,"wpTL:"+ //no args
       "Clean resources only"

//@@zh="未开始录音"
,"bpvP:"+ //no args
       "Recording not started"

//@@zh="当前环境不支持实时回调，无法进行{1}"
,"fLJD:"+ //args: {1}
       "The current environment does not support real-time callback and cannot be performed {1}"

//@@zh="录音权限请求失败："
,"YnzX:"+ //no args
       "Recording permission request failed: "

//@@zh="需先调用{1}"
,"nwKR:"+ //args: {1}
       "Need to call {1} first"

//@@zh="当前不是浏览器环境，需引入针对此平台的支持文件（{1}），或调用{2}自行实现接入"
,"citA:"+ //args: {1}-{2}
       "This is not a browser environment. You need to import support files for this platform ({1}), or call {2} to implement the access yourself."

//@@zh="开始录音失败："
,"ecp9:"+ //no args
       "Failed to start recording: "

//@@zh="不能录音："
,"EKmS:"+ //no args
       "Cannot record: "

//@@zh="已开始录音"
,"k7Qo:"+ //no args
       "Recording started"

//@@zh="结束录音失败："
,"Douz:"+ //no args
       "Failed to stop recording: "

//@@zh="和Start时差：{1}ms"
,"wqSH:"+ //args: {1}
       "Time difference from Start: {1}ms"

//@@zh="结束录音 耗时{1}ms 音频时长{2}ms 文件大小{3}b {4}"
,"g3VX:"+ //args: {1}-{4}
       "Stop recording, takes {1}ms, audio duration {2}ms, file size {3}b, {4}"

]);
//*************** End srcFile=app-support/app.js ***************

//@@User Code-2 Begin 手写代码放这里 Put the handwritten code here @@

//@@User Code-2 End @@

}));