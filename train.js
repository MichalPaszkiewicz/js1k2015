h=a.height;w=a.width;m=w/2;pi=Math.PI;ms=mc=0;c.b=c.beginPath;c.s=c.stroke;c.lineWidth=5;
d="000120000222202222022220222202222";e=[];z=h-300;t=[];u=0;
f={get f(){return Math.random()}}
co=0;
s=5;
for(i=0;i<300;i++){
	t.push([f.f*w,f.f*z])
}
k=function(){
	p=f.f*2;
	co++;
	c.clearRect(0,0,w,h);
	c.fillStyle="black";
	c.rect(0,0,w,h);
	c.fill();
	for(i in t){
		c.b();
		c.fillStyle="yellow";
		c.fillRect(((~~t[i][0]-u+w)%w),(~~t[i][1]),2,2);
	}
	u+=2;
	for(i=0;i<f.f*9|0;i++)e.push([m+f.f-f.f, z, f.f, 99+f.f*99, f.f*10, f.f]);
	for(i in e){
	_=e[i];
	if(_[2]<0){e.splice(i,1);i--;continue}
	_[0]-=s;
	_[1]-=2*_[5]+p;
	c.b();
	c.arc(_[0],_[1],_[4],0,2*Math.PI);
	q="rgba(2,2,2,3)".replace(/2/g,~~_[3]).replace(/3/g,_[2]);
	c.fillStyle=q;	
	c.fill();
	_[2]-=0.01;_[4]+=f.f*2|0;
	};
	for(i in d){if(~~d[i]){c.fillStyle="yellow";c.rect(m-i*20, z+20, d[i]*7, 15);c.fill()}}		
	setTimeout(k,100);
}
k();

