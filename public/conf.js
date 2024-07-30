const {assign} = Object;
Object.defineProperties(self, {
	// INIT_MAP: {value: new Map},
	// COMP_MAP: {value: new Map},

	// DIR: {value: '.'},
	// COMP_DIR: {get(){return `${DIR}/comp`}},
	// IMG_DIR: {get(){return `${DIR}/img`}},
	DB_HOST: {value: 'db.seu.ai'},
	DELAY_LIST: {value: new Map},
})
Object.defineProperty(Date.prototype, 'format', {enumerable : false, value(v, arg2 = ['지금막','분 전','시간 전','일 전']){
  let [W,w,Y,m,d,h,i,s] = [
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][this.getDay()],
      ['일', '월', '화', '수', '목', '금', '토'][this.getDay()],
      this.getFullYear(),
      (this.getMonth() + 1),
      this.getDate(),
      this.getHours(),
      this.getMinutes(),
      this.getSeconds()
  ],
 
  date = {
      W,w,Y,m,d,h,i,s,
      y: Y.toString().substr(-2),
      M: m.toString().padStart(2, 0),
      D: d.toString().padStart(2, 0),
      H: h.toString().padStart(2, 0),  
      I: i.toString().padStart(2, 0),
      S: s.toString().padStart(2, 0)
  }


  v = v.replace(/(W|Y|m|d|h|i|s|M|D|H|I|S)/gi, $1 => (date[$1] || $1));
  
  
  let diff =(new Date().getTime() - this.getTime())/1000,
      day_diff =Math.floor(diff/86400);


  if(arg2){
      return (
          day_diff <= 0 && (
              diff < 60 && arg2[0] ||
              diff < 3600 && Math.floor(diff/60) + arg2[1] ||
              diff < 86400 && Math.floor(diff/3600) + arg2[2]
          )
          || day_diff < 7 && day_diff + arg2[3]
          || day_diff >= 7 && v
      )
  }
  return v;
}});

function delay(_, $){
  const ac = new AbortController;
  const isDebounce = typeof $ == 'string';
  const id = isDebounce ? $ : `await ${await_i++}`;
  ac.signal.onabort = () => {
    cancelDelay[typeof ac._](ac._);
    DELAY_LIST.delete(id);
    ac.rej('delay abort');
  }

  if(isDebounce) DELAY_LIST.get(id)?.abort();
  DELAY_LIST.set(id, ac);
  return new Promise((res, rej) => {
    let __;
    if(_ == null){
      __ = String(raf(res));
    }else if(typeof _ == 'number'){
      __ = setTimeout(() => res(), _);
    }else{
      ($ || self).addEventListener(_, e => {
        DELAY_LIST.delete(id);
        res(e);
      }, {passive: true, once: true});
      __ = () => ($ || self).removeEventListener(_, res);
    }
    assign(ac, {_: __, rej})
  });
};

assign(self, {
  await_i: 1,
  res(i, data){
    dispatchEvent(new CustomEvent(`await ${i}`, {detail: data}));
  },
  cancelDelay: {
    string: _ => cancelAnimationFrame(_),
    number: _ => clearTimeout(_),
    function: _ => _()
  },

  async onready(){
    cookie.my &&= cookie.my;

    await import('https:seu.ai/brotli.js');
    const {
      compress,
      decompress
    } = await brotliwasm.load();
    assign(self, {
      enBrotli(blob){return compress(blob, 4096, 11)},
      deBrotli(blob){return new TextDecoder().decode(decompress(blob))},
      async req(cmd, data){
        if(ws.readyState == ws.CLOSED) await ws.reload();
        ws.send(enBrotli(new TextEncoder().encode(`${cmd}\x1D${JSON.stringify(assign(data || {}, {await_i}))}`)));
        return (await delay(`await ${await_i++}`)).detail;
      },
      logout(){
        ws.close();
        delete cookie.my;
        // DATA.my = {};
      }
    })
    assign(self.ws = {}, {
      url: `wss:${DB_HOST}`,
      async reload(){
        assign(self.ws = new WebSocket(this.url), {
          reload: this.reload,
          onerror: this.onerror,
          onmessage: this.onmessage,
          onclose: this.onclose
        });
        await delay('open', ws);
      },
      async onerror(e){
        await this.reload();
				// DATA.my = await req('login');
      },
      async onmessage({data}){
        const [i, detail] = deBrotli(new Uint8Array(await data.arrayBuffer())).split('\x1D')
        res(i, detail ? JSON.parse(detail) : {});
      },
      async onclose(e){
        await delay(1000);
        if(!ws.state){
          this.reload();
          return;
        }
        /*
        if(
          ws.state.readyState != ws.state.OPEN &&
          e.code == 1000 &&
          e.reason
        ){
          logout()
        }
        */
      }
    })

		if(!cookie.my) return;
    await ws.reload();
		// DATA.my = await req('login');
  },

	cookie: new Proxy({}, {
		get(target, key) {
			return localStorage.getItem(`cookie/${key}`);
		},
		set(target, key, val){
			fetch(`//${DB_HOST}`, {
				method: 'POST',
				credentials: "include",
				body: JSON.stringify({[key]: val}),
			})
			localStorage.setItem(`cookie/${key}`, val);
			return true;
		},
		deleteProperty(target, key){
			fetch(`//${DB_HOST}`, {
				method: 'POST',
				credentials: "include",
				body: JSON.stringify({[key]: null}),
			})
			localStorage.removeItem(`cookie/${key}`);
			return true;
		}
	}),

	async password(text){return [...new Uint8Array(await crypto.subtle.digest('SHA-1',new TextEncoder('utf-8').encode(text)))].map(v => v.toString(16).padStart(2, '0')).join('')},

});
onready();