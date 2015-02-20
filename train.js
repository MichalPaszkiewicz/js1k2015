h=a.height;w=a.width;m=w/2;pi=Math.PI;ms=mc=0;c.b=c.beginPath;c.s=c.stroke;c.lineWidth=5;
d="0001200";p="02222";d+=p+p+p+p+p;e=[];z=h-300;t=[];u=0;
f={get f(){return Math.random()},set s(x){c.fillStyle=x;c.fill()}}
co=0;l=99+f.f*99;
s=6;trees=[];
for(i=0;i<300;i++){
	t.push([f.f*w,f.f*z]);
	if(i%10==0)trees.push([f.f*w*2,10+f.f*100]);
}

k=function(){
	if(co%3==0)o="hsl("+~~(f.f*360)+",100%,60%)";
	p=f.f*2;
	co++;
	c.rect(0,0,w,h);
	f.s=j="black";
	for(i in t){
		c.b();
		c.rect(((~~t[i][0]-u+w)%w),(~~t[i][1]),2,2);
		f.s="snow";
	}
	u=(u+s/3)%w;
	i=5;while(i--)e.push([m,z,0.6*f.f,f.f*8,f.f,10+f.f*30]);
	c.b();c.arc(w*2-co*s/3,z/2,50,2,2*pi);f.s="snow";
	for(i in e){
		_=e[i];		
		if(_[2]<0){e.splice(i ,1);i--}
		_[0]-=s;
		_[1]-=2*_[4]+p;
		c.b();
		c.arc(_[0],_[1],_[3],0,2*pi);
		q="hsla(0,0%,"+_[5]+"%,"+_[2]+")";
		f.s=q;
		_[2]-=0.005;_[3]+=f.f*3|0;
	};
	for(i in d){if(~~d[i]){c.rect(m-i*20, z+20, d[i]*7, 15);f.s=o}}	
	for(i in trees){
		_=trees[i];
		c.b();
		c.rect(((_[0]-3*u+2*w)%(2*w))*_[1]/2,0,10+3*_[1],z+100+_[1]);
		f.s=j;
	}	
	setTimeout(k,100);
}
k();
