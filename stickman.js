h=a.height;w=a.width;pi=Math.PI;ms=mc=0;c.b=c.beginPath;c.s=c.stroke;c.lineWidth=5;
bg=0;m=w/2;
l=h/6;
s=15;

var sM = {
	t:1
};

dS=function(th,y,v){	
	c.moveTo(m-ms,y);
	c.lineTo(m,y-mc);
	if(v){c.s();c.b();c.rect(m,y+l,l/2,l);c.fill();}
	c.moveTo(m+ms,y);
	c.lineTo(m,y-mc);
	c.lineTo(m,y-mc-l);	
}
g=[1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1];
q=function(){
	c.clearRect(0,0,w,h);
	c.fillStyle="red";
	c.b();
	for(i in g){z=g[i]?l:l/2;c.rect(i*l-bg,h-z,l,z);c.fill();}
	sM.t++;
	th=pi*Math.sin(sM.t/s)/6;
	bg+=2*Math.abs(Math.cos(th));
	ms=l*Math.sin(th);mc=l*Math.cos(th);
	c.b();
	dS(th,h);
	dS(th,h-l,1);
	c.s();
	c.b();
	c.arc(m,h-2*l-mc,l/2,0,2*pi);
	c.s();
	c.fill();
	setTimeout(q,20);
};q()
