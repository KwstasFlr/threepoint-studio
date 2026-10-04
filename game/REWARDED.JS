"use strict";

// Set a real Google Ad Manager rewarded ad unit path here before serving ads.
// Example format: /YOUR_NETWORK_CODE/YOUR_REWARDED_AD_UNIT
// Do not use a demo unit in production. An AdSense publisher ID is not an ad unit path.
const GMP_REWARDED_AD_UNIT_PATH = "";

window.GMPRewardedAds = (()=>{
  let loading=null;
  let showing=false;
  function configured(){return !!GMP_REWARDED_AD_UNIT_PATH;}
  function load(){
    if(window.googletag?.apiReady)return Promise.resolve();
    if(loading)return loading;
    loading=new Promise((resolve,reject)=>{
      window.googletag=window.googletag||{cmd:[]};
      const script=document.createElement("script");
      script.async=true;
      script.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      script.crossOrigin="anonymous";
      const timer=setTimeout(()=>{loading=null;script.remove();reject(new Error("Ad service timeout"));},8000);
      script.onload=()=>{clearTimeout(timer);resolve();};
      script.onerror=()=>{clearTimeout(timer);loading=null;script.remove();reject(new Error("Ad service unavailable"));};
      document.head.append(script);
    });
    return loading;
  }
  async function show(){
    if(!configured() || showing)return false;
    showing=true;
    try{
      await load();
      return await new Promise(resolve=>{
        const gpt=window.googletag;
        let finished=false;
        let slot=null;
        let pubads=null;
        let granted=false;
        const listeners=[];
        let timer=setTimeout(()=>finish(false),15000);
        function finish(reward){
          if(finished)return;
          finished=true;
          clearTimeout(timer);
          for(const [type,listener] of listeners)pubads?.removeEventListener(type,listener);
          if(slot)gpt.destroySlots([slot]);
          resolve(reward);
        }
        gpt.cmd.push(()=>{
          if(finished)return;
          try{
            slot=gpt.defineOutOfPageSlot(GMP_REWARDED_AD_UNIT_PATH,gpt.enums.OutOfPageFormat.REWARDED);
            if(!slot){finish(false);return;}
            pubads=gpt.pubads();
            slot.addService(pubads);
            function listen(type,callback){
              const listener=event=>{if(event.slot===slot && !finished)callback(event);};
              listeners.push([type,listener]);
              pubads.addEventListener(type,listener);
            }
            listen("rewardedSlotReady",event=>{
              clearTimeout(timer);
              // The user's Watch ad click explicitly opts into this rewarded ad.
              event.makeRewardedVisible();
            });
            listen("rewardedSlotGranted",()=>{granted=true;});
            listen("rewardedSlotClosed",()=>finish(granted));
            listen("slotRenderEnded",event=>{if(event.isEmpty)finish(false);});
            gpt.enableServices();
            gpt.display(slot);
          }catch{finish(false);}
        });
      });
    }catch{return false;}
    finally{showing=false;}
  }
  return {configured,show};
})();
