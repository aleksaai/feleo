/* Visual shader reused from local feleo-app AgentBubble.tsx. No agent/provider activity. */
(()=>{
const vertex = `attribute vec2 position; varying vec2 uv; void main(){uv=position*.5+.5;gl_Position=vec4(position,0.,1.);}`;
const fragment = `
precision highp float;
varying vec2 uv;
uniform float time;
uniform float seed;
float hash(vec3 p){p=fract(p*.3183099+vec3(.17,.31,.47));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
float cloud(vec3 p){float v=0.;float a=.55;for(int i=0;i<4;i++){v+=noise(p)*a;p=p*2.04+vec3(1.7,3.1,2.4);a*=.48;}return v;}
void main(){
 vec2 p=(uv-.5)*2.; float r=length(p); if(r>1.){gl_FragColor=vec4(0.);return;}
 float z=sqrt(max(0.,1.-r*r)); vec3 n=normalize(vec3(p,z)); float t=time*.14;
 float angle=(seed-.5)*1.45; mat2 rot=mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
 vec2 q=rot*p; q+=vec2(sin(q.y*3.+t)*.09,cos(q.x*3.-t)*.08)*z;
 float volume=cloud(vec3(q*3.4,z*1.8+t+seed*12.));
 float drift=cloud(vec3(q*2.7+vec2(t*.3,-t*.17),z+seed*19.));
 float center=.25*sin(q.x*3.1+t+seed*6.)+.10*cos(q.x*6.-t*.6);
 float ribbon=exp(-pow((q.y-center)/(.19+.09*volume),2.))*(1.-smoothstep(.67,1.1,abs(q.x)));
 float lower=exp(-pow((q.y+center*.8+.28)/.26,2.));
 float pigment=smoothstep(.23,.78,volume*.7+ribbon*.62+lower*.15-q.y*.12);
 vec3 ice=vec3(.87,.97,1.); vec3 blue=vec3(.035,.54,.96); vec3 sky=vec3(.12,.714,1.); vec3 water=vec3(.43,.87,.98);
 vec3 ink=mix(blue,sky,clamp(drift*1.4,0.,1.)); ink=mix(ink,water,smoothstep(.45,.9,q.x*.3+drift)*.7);
 vec3 col=mix(ice,ink,pigment*.94);
 float fold=exp(-pow((q.y-center-.12)/.053,2.))*ribbon;
 col=mix(col,vec3(.93,.99,1.),fold*.57);
 float pearl=pow(max(0.,1.-abs(q.y+.23*sin(q.x*4.-t)))*volume,4.);
 col+=pearl*.24;
 float fresnel=pow(1.-z,3.);
 col=mix(col,vec3(.59,.80,.91),fresnel*.4);
 float rim=exp(-pow((r-.971)/.013,2.)); col=mix(col,vec3(.97,.995,1.),rim*.86);
 float highlight=pow(max(dot(n,normalize(vec3(-.46,.64,1.))),0.),38.);
 col=mix(col,vec3(1.),highlight*.88);
 float shine=pow(max(dot(n,normalize(vec3(.78,-.28,.38))),0.),70.);
 col+=vec3(.2,.32,.34)*shine*.7;
 float edgeShade=pow(max(dot(n,normalize(vec3(.48,-.72,.2))),0.),4.);
 col*=1.-edgeShade*.07;
 float alpha=1.-smoothstep(.985,1.,r);
 gl_FragColor=vec4(clamp(col,0.,1.),alpha);
}`;
const media=matchMedia('(prefers-reduced-motion: reduce)');
for(const holder of document.querySelectorAll('.website-agent-bubble')){
 const canvas=holder.querySelector('canvas');const gl=canvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:false,powerPreference:'low-power'});if(!gl)continue;
 let frame=0,visible=false,last=0,lost=false;const shaders=[];let program,buffer;
 try{
 const compile=(type,text)=>{const s=gl.createShader(type);shaders.push(s);gl.shaderSource(s,text);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error('shader');return s;};
 program=gl.createProgram();gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex));gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error('program');gl.useProgram(program);
 buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const position=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
 const clock=gl.getUniformLocation(program,'time');gl.uniform1f(gl.getUniformLocation(program,'seed'),.42);
 const draw=at=>{if(lost)return;gl.viewport(0,0,canvas.width,canvas.height);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.uniform1f(clock,at*.001+33.6);gl.drawArrays(gl.TRIANGLES,0,6);};
 const loop=at=>{if(!visible||document.hidden||media.matches||lost)return;if(at-last>1000/24){draw(at);last=at;}frame=requestAnimationFrame(loop);};
 const schedule=()=>{cancelAnimationFrame(frame);const moving=visible&&!document.hidden&&!media.matches&&!lost;holder.dataset.motion=String(moving);if(moving)frame=requestAnimationFrame(loop);else if(visible&&!lost)draw(0);};
 const resize=()=>{canvas.width=canvas.height=Math.min(420,Math.max(32,Math.round(canvas.getBoundingClientRect().width*Math.min(devicePixelRatio,1.5))));draw(0);};
 const sizes=new ResizeObserver(resize);sizes.observe(canvas);const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();});observer.observe(holder);
 document.addEventListener('visibilitychange',schedule);media.addEventListener('change',schedule);
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;cancelAnimationFrame(frame);holder.classList.remove('has-renderer');holder.dataset.motion='false';});
 window.addEventListener('pageshow',schedule);
 window.addEventListener('pagehide',event=>{if(event.persisted){cancelAnimationFrame(frame);return;}cancelAnimationFrame(frame);observer.disconnect();sizes.disconnect();document.removeEventListener('visibilitychange',schedule);media.removeEventListener('change',schedule);gl.deleteBuffer(buffer);gl.deleteProgram(program);shaders.forEach(s=>gl.deleteShader(s));},{once:true});
 resize();holder.classList.add('has-renderer');
 }catch{if(buffer)gl.deleteBuffer(buffer);if(program)gl.deleteProgram(program);shaders.forEach(s=>gl.deleteShader(s));}
}
})();
