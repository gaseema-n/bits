// JavaScript Document
                                                                /*
	Bitsoko
    
	Free for personal and commercial use under the CCA 3.0 license (bitsoko/license)
*/

/*********************************************************************************/
/* Settings                                                                      */
/*********************************************************************************/
//get('bitcoin', 'app://bitsoko.co.ke/app/rph?q=%s', 'Bitsoko');


function gotoServ(plug,data){
    
sequence.goTo(3, 1);
 //console.log(viewModel.plugin().length);
    listServices(plug).then(function(e){
        
     viewModel.activeServ(e);
    UpdPlugin(data);
    
    });
   
}
//stay
function procScn(data){
  
   // var data = 'bitcoin:12A1MyfXbW6RhdRAZEqofac5jCQQjwEPBu?amount=1.2&message=bits-1-kitungu';

    if(testKey(data)) {
      data ="bitcoin:"+data;  
    }
    if(bitcore.URI.isValid(data)) {
        
     if (!prscnin) {
    prscnin = true;
    setTimeout(function(){ prscnin = false; }, 1500);
         
      if (navigator.vibrate) {
    // vibration API supported
    navigator.vibrate(300);
}
        localStream.getTracks()[0].stop();
        clearTimeout(qry.timer);
        qrworker.postMessage({'cmd': 'stop'});
var uri = new bitcore.URI(data);
console.log(uri.address.network, uri.amount);

          
//if (addrtype(data)=="btc" || data.substring(0, 8)=="bitcoin:"){
   if (uri.message!=null && uri.message.substring(0, 5)=="bits-"){
       var m2 = uri.message.split("-")[1];
       var message=uri.message.slice(5);
       var service=message.split("-")[0];
       var code=message.split("-")[1];
          //console.log(name);
       var message=uri.message.slice(9);
        var sData = {
    name:code,
    recp:code,
    amt:uri.amount,
    action:'send',
    ref:code
};     
       // gotoServ('merchant',sData);
   gotoServ(uri.message.split("-")[1],sData);
       
       if(m2 == '1'){
           var sd=uri.address.toString();
            doFetch({ action: 'servDet', user: localStorage.getItem('bitsoko-user-name'), data: sd, service: 'contacts', origin: 'service' }).then(function(e){
 
           shadowRootAC.appendChild(document.importNode( shadowRootACcon, true));  
     
                for(var i = 0; i < e.data.length; ++i) {
       f=e.data[i];
        f.ctype='address';
          f.corigin='server';
          if(f.name=='nobody'){
          
          }else{
             console.log('adding:: ',f) 
        // addContact(f,template,document);
               updContServ(f.uid,f.name,f.code,f.img);
              
          }        
          }
	//servDetUser(JSON.stringify(e))
     }); 
       }
      
   }else{
       
            var sData = {
    name:'1',
    recp:'1',
    amt:uri.amount||0,
    action:'send',
    ref:'1'
}; 
   
       gotoServ('1',sData);
       
       
           var sd=uri.address.toString();
            doFetch({ action: 'servDet', user: localStorage.getItem('bitsoko-user-name'), data: sd, service: 'contacts', origin: 'service' }).then(function(e){
 
           shadowRootAC.appendChild(document.importNode( shadowRootACcon, true));  
     for(var i = 0; i < e.data.length; ++i) {
       f=e.data[i];
        f.ctype='address';
          f.corigin='server';
          if(f.name=='nobody'){
          
          }else{
             console.log('adding:: ',f) 
        // addContact(f,template,document);
               updContServ(f.uid,f.name,f.code,f.img);
              
          }        
     }
	//servDetUser(JSON.stringify(e))
                if(e.data.length==0 && testKey(sd)){
   updContServ('user-anon', 'Anonymous', sd, '/app/images/services/contacts.png');      
                }
     }); 
      
   }
        return;    
   /*  
        }else if (data.substring(0, 5)=="bits:"){
             var data=data.slice(5);
  
try{
        var res = data.split(":");
    //alert(res);
            if(res.length>1){
            service = res[0];
            ref = res[1];
                
                
            }
    
        //var code = data.substring(12, 18);
              var sData = {
    name:data,
    recp:ref,
    amt:0,
    ref:ref
};
            //alert(code);
       // gotoServ('merchant',sData);
    gotoServ(service,sData);
}catch (err){
$('#scn-note').html('Cant find Product.');
}
        
        return;
            
       
  var data =jQuery.parseJSON( data );
        
        var recp=data.bcode;
        var amt=0;
        var ref='000000';
        veriPay(recp,amt,ref);

      */  

        }
        }
    
    else if(data.substring(0, 5)=="b:m:p"){
    sequence.goTo(2, -1);   
        if (navigator.vibrate) {
    // vibration API supported
    navigator.vibrate(300);
}      
        
        doFetch({ action: 'setProfile', user: localStorage.getItem('bitsoko-user-name'), term:data.slice(6) }).then(function(e){


                
showNotices('signed in to terminal');
                
            });  
    return;    
        
    }else{
    
    //console.log('this is not a valid bitsoko code');
    $('#scn-note').html('Invalid! Please scan a valid code.');
   // $('#scn-note-inner').html('Plea');
}
  
    qry.timer = setTimeout(qry.loop,qryLoopTime);
}

// stay and mod

function veriPay(recp,amt,ref) {
  
       $('#scn-note').html('Verifying..');
    var amt=0;
$.ajax({
  type: "GET",
  url: bsoko.settings.datapath,
  data: { action: 'veriMerch', recp: recp }
})
  .done(function( data ) {
      console.log(data);
    try{ 

    var name= $.parseJSON(data).name;   
        
    var sData = {
    name:name,
    recp:recp,
    action:send,
    amt:amt,
    ref:ref
                };
        
        gotoServ('merchant',sData);
      //startPay(name,recp,amt,ref);
        clearTimeout(qry.timer);
        qry.video.pause();
               
 }
catch(err) {
     $('#scn-note').html('Invalid Merchant.');
    qry.timer = setTimeout(qry.loop,qryLoopTime);
}   
  })
.error(function() {
    $('#scn-note').html('Unable to Verify Merchant.');
    qry.timer = setTimeout(qry.loop,qryLoopTime);
  })
.always(function() {
     
  }); 
  
       
}

//go to functions

function hideNotices(tm) {
    
    setTimeout(function(){ 
          try{document.getElementById('notify').close()}catch(err){};
                         },tm);
    //console.log('trying to rehide..');
       
}
// go to functions
// function showNotices(msg,tm,bt) {
//     if(!tm || tm==undefined){
//         tm=6000;
//     }else if(tm==0){tm==60000}
//     if(!bt || bt==undefined){
        
       
// //Materialize.toast('loading profile...', 3000);
//     }else{
//          //document.getElementById('notify-but').style.display = "block";
//         tm=60000;
//     }
//     //try{document.getElementById('notify').close()}catch(err){};
//     //console.log(msg);
//     $("#notify div").html(msg);
//     $('#notify').css('background-color','rgba(255, 252, 252, 0.98)');
//     $('#notify').css('padding-top','20px');
    
//     setTimeout(function(){//document.getElementById('notify').showModal()
//     },1000);
//     hideNotices(tm);
    
// }
// stay
function startPay(name,recp,amount,action,ref){
 console.log(name,recp,amount,action,ref);
 return
if (amount <=0 || amount == "undefined" || amount === undefined || amount === null){

   currentTransaction.amount=0;
 //$( "#conf-iamt" ).focus();   
}
   
                
      if (action=='send'){
    
    
           if (navigator.vibrate) {
    // vibration API supported
    navigator.vibrate([200,200,200]);
}
    }else{
    $("#conf-act").html('from');
         if (navigator.vibrate) {
    // vibration API supported
    navigator.vibrate(600);
}
    }                                                    
   

}

// function testPayment(data,e){
//     var func=$("#servid").attr( "soko-serv" ).toLowerCase();
//     console.log(func);
// if (func=='airtime' && data.length==10 ){
//     $( "#conf-amt" ).html( 10 );
//     $( "#conf-iamt" ).val( 10 );
//     $( "#conf-iamt" ).attr( 'min','10' );
// return true;
// }else if (func=='send'){
//     $( "#conf-amt" ).html( 10 );
//     $( "#conf-iamt" ).val( 10 );
//     $( "#conf-iamt" ).attr( 'min','10' );
// return true;
// }else if (func=='merchant'){
//     $( "#conf-amt" ).html( 10 );
//     $( "#conf-iamt" ).val( 10 );
//     $( "#conf-iamt" ).attr( 'min','10' );
// return true;
// }else if (func=='mobile'){
//     $( "#conf-amt" ).html( 10 );
//     $( "#conf-iamt" ).val( 10 );
//     $( "#conf-iamt" ).attr( 'min','50' );
// return true;
// }else{
    
// $( "#conf-iamt" ).attr( 'min','0' );
// return false;
    
// }
// }
// move to init.js
function loadWallet(primWalA){  
  primWalA=primWalA ? primWalA : '';

  localStorage.setItem('bitsoko-enable-autoreload','true');
        doFetch({action:'addVisit', data: primWalA}).then(function(e){
      console.log(e); 
       
   });
    data = primWalA;
     showAddr('bitcoin:'+data);
    $( ".username-addr" ).html( data );
        var stor=getObjectStore('data', 'readwrite').get('user-profile-'+localStorage.getItem('bits-user-name'));
	stor.onsuccess = function (event) {
  try{
  
       var upData = JSON.parse(event.target.result); 
	//initialisePush(JSON.stringify(upData.bitsokoUserID));
  
    $( ".username-label" ).html(upData.name);
   $( ".userProfImg" ).attr( "src", upData.image );
  }catch(err){
  
    $( ".username-label" ).html('Anonymous');
   $( ".userProfImg" ).attr( "src", '' );
  }    
  };
	stor.onerror = function () {
  
    $( ".username-label" ).html('Anonymous');
   $( ".userProfImg" ).attr( "src", '' );
  };    
   
    //showNav();
     //reqContacts()
    //updateContacts();
         fetchRates().then(function(e){
                 getBal();
                 //updateWallpaper();
            //setWallpaper();
             
      doFetch({ action: 'getServs', user: localStorage.getItem('bits-user-name') }).then(function(e){
          if(e.data.length==0){
              
      doFetch({ action: 'noServices', loc: localStorage.getItem('bits-settings-country')});
          }
              
              
      });
    });
    updateBal();
    	getLoc();

  updatePromos();

        localConverter().then(function(loCon){
   $( ".conf-curr" ).html( loCon.symbol );
          
        
    });
    
}
//to functions.js
function reqLoc(){
   navigator.permissions.query({name:'geolocation'}).then(function(p)
{  
       
       var locButton = document.querySelector('.js-loc-button-notification'); 
  var locButtonTitle = document.querySelector('.js-loc-button-notification-title');
  var locButtonTitleText = document.querySelector('.js-loc-button-notification-title-text');  
  if (p.state === 'granted') {
    getLoc();  
          locButtonTitle.textContent = 'Location On';  
            locButton.checked = true;
		  
  locButton.style.background = "rgba(15, 95, 118, 0.86)";
  } else if (p.state === 'prompt') {
      
          locButtonTitle.textContent = 'Location Off';  
            locButton.checked = false;
		  
  locButton.style.background = "#ddd";
      getLoc(); 
  }else {
   locButton.checked = false;   
          locButtonTitle.textContent = 'Location Disabled';
          locButtonTitleText.textContent = 'change your settings'; 
  locButton.style.background = "#ddd";
  //locButton.disabled = true;
  }
  p.onchange = function() {  
    
    if (p.state === 'granted') {
   getLoc();
         var locButton = document.querySelector('.js-loc-button-notification'); 
      locButton.disabled = false;     
       var locButton = document.querySelector('.js-loc-button-notification'); 
  var locButtonTitle = document.querySelector('.js-loc-button-notification-title');    
          locButtonTitle.textContent = 'Location On';  
            locButton.checked = true;
		  
  locButton.style.background = "rgba(15, 95, 118, 0.86)";
  } else if (p.state === 'prompt') {
     
          var locButton = document.querySelector('.js-loc-button-notification'); 
       locButton.disabled = false; 
  var locButtonTitle = document.querySelector('.js-loc-button-notification-title');    
          locButtonTitle.textContent = 'Location Off';  
            locButton.checked = false;
		  
  locButton.style.background = "#ddd";
  }
  };
});
 //
    
}
// to functions
function updateSettings(){
    reqLoc();
  doFetch({ action: 'getSets', country: localStorage.getItem('bitsoko-settings-country') }).then(function(e){
            
    localStorage.setItem('bitsoko-bits-addr',e.bitsaddr);
  }); 
    

}

//
// function recoverWallet(user){
    
//    // if (!reCovering) {
//    // reCovering = true;
//     $( "#rec-user" ).blur();
//     $( "#rec-pass" ).blur();
//     var type;
//      var waldata;  
    
//         var user=$('#rec-user').val();
//         var pass=$('#rec-pass').val();
// //alert(parseInt($('#user').val().length));
//     if (parseInt(pass)>=1000 && parseInt(user.length)>=4){

// $('#rec-panel-loader-spinner').css('display','block');  
//          listFiles('wallets.json',function(r){
       
//     //loadWallet();
//        console.log(r);
                
//       /*
//       saveFiles('wallets.json',e.wallets,function(r){
       
//         recoverwal(JSON.stringify(e.wallets));
//     loadWallet();
//        console.log(r);
//        console.log(e);
//    }); 
   
//    */
                
                
                
                
//    }); 
        
//         /*
               
//         doFetch({ action: 'recWal', name: $('#rec-user').val()}).then(function(e){
//             if(e.status=='bad'){
// $("#googSign").bind( "touchstart click", function(event, ui) {

//      if (!flag) {
//     flag = true;
//     setTimeout(function(){ flag = false; }, 300);
//       if($('#setpass').val().length > 4){
          
//               createBTC(id,$('#setpass').val()); 
          
//                 }else{
//               $('#setpass').focus();      
//                 }  
         
//      }

// });  
                
//             }else{
       
//         recoverwal(JSON.stringify(e.wallets));
//     loadWallet();
                
//             }
//         });
//  */
//         }else if (parseInt(user.length)<4){
//             $('#rec-panel-loader').css('display','block');
//             $('#rec-panel-loader-spinner').css('display','none');
//             $('#rec-panel-loader-msg').html('Recheck your Username!');
// //showNotices('Re-Check your Username or Password!');
//         }else if (parseInt(pass)<1000){
//             $('#rec-panel-loader').css('display','block');
//             $('#rec-panel-loader-spinner').css('display','none');
//             $('#rec-panel-loader-msg').html('Passcode too short!');
// //showNotices('Re-Check your Username or Password!');
//         }
//       //  }
// }

//  
// function recUserMeta(data){
//     doFetch({ action: 'recUserMeta', meta: JSON.stringify(data)}).then(function(data){
//     console.log($.parseJSON(data));
//      if( $.parseJSON(data).status=='ok'){
        
//      }else if ( $.parseJSON(data).status=='bad'){
          
//      }else{
        
//      }
//     }).catch(function(then){
    
//       console.log('error: unable to post user meta ');
    
//     });
// }
  
// function setUserMeta(data){
//     //$('#signup-panel-loader').html('checking username..');
//     //if (!creatingNew) {
//     //creatingNew = true;
//        var user=data.name;
    
//     user = user.replace(/[^a-zA-Z0-9]/g, '');
// //alert(parseInt($('#user').val().length));
//     //parseInt(pass)>=1000 && 
//     console.log(data.picture);
//     var pic=encodeURIComponent(data.picture);
//     if (parseInt(user.length)>=4){
//     doFetch({ action: 'updUserMeta', name: localStorage.getItem('bits-user-name'), meta: JSON.stringify(data)}).then(function(data){
//     console.log($.parseJSON(data));
//      if( $.parseJSON(data).status=='ok'){
        
//      }else if ( $.parseJSON(data).status=='bad'){
          
//      }else{
        
//      }
//     }).catch(function(then){
    
//       console.log('error: unable to post user meta ');
    
//     });
        
   
//         }else if (parseInt(user.length)<4){
//             $('#signup-panel-loader').html('Username is too short!');
//             $('#user').focus();
// //showNotices('Re-Check your Username or Password!');
//         }
       

// //}
// }


//stays
function updateWallet(user,coinAddr, privHash,created){
    newWal ={primary:'true',privhash:privHash, pubaddr: coinAddr,created: created};
    
      var retrievePageOfFiles = function(request, result) {
           
    request.execute(function(resp) {
       
      result = result.concat(resp.items);
       
      var nextPageToken = resp.nextPageToken;
      if (nextPageToken) {
        request = gapi.client.drive.files.list({
          'pageToken': nextPageToken
        });
        retrievePageOfFiles(request, result);
      } else {
          var allWals=[];
    for( var i=0,id=id,allWals=allWals; i < result.length; i++ ){
         
        if(result[i].title=='wallets.json'){
          
          downloadFile(result[i], function(e){
              
              try{
                  var preWals=JSON.parse(e.responseText);
                      
              if(preWals.length>1){
                  
                  for( var j=0,id=id,allWals=allWals; j < preWals.length; j++ ){
                      preWals[j].primary='false';
                      allWals.push(preWals[j]);
                      
                  }
                      
              }else{
                  throw 'no wallet'
              }}catch(err){
                  console.log(err+" creating..");
                   // createWallet(id);
                  
              }
              
          });
            
        }
          
        
    }
          
              allWals.push(newWal);
      saveFiles('wallets.json',[JSON.stringify(allWals)],function(r){
       console.log(r);
      
       recoverwal(allWals);
   // loadWallet();
   }); 
          }
         
    })
    };
  
  var initialRequest = gapi.client.drive.files.list({
    'q': '\'appfolder\' in parents'
  });
  retrievePageOfFiles(initialRequest, []);
                
      /*
      saveFiles('wallets.json',e.wallets,function(r){
       
        recoverwal(JSON.stringify(e.wallets));
    loadWallet();
       console.log(r);
       console.log(e);
   }); 
   
   */
                
                  
    /*
     doFetch({ action: 'updWal', type: addrtype(coinAddr), name: user, pubkey: coinAddr, privkey: privHash }).then(function(data) {
            
  var pres=false;
     if( data.status=='ok'){
   
        
    doFetch({ action: 'recWal', name: user })
        .then(function(e){
   saveFiles('wallets.json',e.wallets,function(r){
       
        recoverwal(JSON.stringify(e.wallets));
    loadWallet();
       console.log(r);
       console.log(e);
   });
        }); 
         
         
    console.log('wallet created');
    //return false;
     }else if ( data.status=='bad'){
showNotices('Wallet already exists.');     
     }else{
showNotices('Error creating Wallet. Please try again.');     
     }
      });
    */
    
}

//move to functions
    function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5000; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
 
/*
function createWallet(type){
    
        console.log('creating new bitcoin');
    try{
    var name = '';
    if (type==undefined){
    //console.log('undi--');
        var type='btc';
    }
    var user=localStorage.getItem('bitsoko-user-name');
        var pass=$('#setpass').val();
        
        if (type=='btc'){
            var name = 'Bitcoin';
            //$('#walType').html(name);
            createBTC(user,pass);
        
        console.log('creating bitcoin');
            
        }else if (type=='ltc'){
            //
            return;
            //
            
            var name = 'Litecoin';
            $('#walType').html(name);
            
            createLTC(user,pass);
        
        }else{
        console.log('Wallet not supported yet..');
            return;
        }
        
   $('#choose-panel-loader').css('display','block');
console.log('creating new address');
    //alert('finishing');
    } catch (err){
    
    //$( "#create-panel" ).panel( "close" );
      $( "#choose-panel" ).panel( "close" );
    }
}
*/

//stays
function updateBal(notif){
    
    localConverter().then(function(e){
    
 var infiat = parseInt(localStorage.getItem('bitsoko-wallets-bal'))/100000000;
     var infiat=infiat*parseInt(e.xrate)*parseInt(e.rate);
        
        
    $( ".bitsoko-balance" ).html(infiat.toFixed(2));
    $( ".bitsoko-balance-currency" ).html(" "+e.symbol);
        
	var inbits = parseInt(localStorage.getItem('bitsoko-wallets-bal'))/100000000;
	inbits.toFixed(8)
    $( "#balance-coins" ).html( inbits+" btc");
    });
 
    $( "#balance-counter" ).css( 'opacity','1' );
    $( "#balance-counter-upd" ).css( 'display','none' );
    
    //if (){
    if (notif=='false'){
    
    }else{
     if (isHidden()){
         //txtFld.value += "Tab Hidden!\n";
       //doNotification ('Wallet Balance','Your balance is '+infiat.toFixed(2),5);
	     
Materialize.toast('Your balance is '+infiat.toFixed(2), 3000);
	     
     }else{
         //txtFld.value += "Tab Visible!\n";
          
     //   showNotices('Your new balance is '+fiat.toFixed(2));
    }
        }
            
 
}

//   function procserv(e,cb) {
      
//        localStorage.setItem('bitsoko-pay-callback',cb);
//      startPay(currPayName(),currPayRecp(),currPayAmt(),currPayRef());
     
      
//   }

 
//stays
function setBalFig() {
     
var ttr = getObjectStore('data', 'readwrite').get("bits-wallets-"+localStorage.getItem('bits-user-name')).onsuccess = function (event) {
   
     var wallets=$.parseJSON(event.target.result); 

    for(var i = 0; i < wallets.length; ++i) {
        if (wallets[i].publicAddress==localStorage.getItem('bits-user-wallet')){
         
wallets[i].balance=parseFloat(localStorage.getItem('bitsoko-wallets-bal'));
		
    
var req = getObjectStore('data', 'readwrite').put(JSON.stringify(wallets), "bits-wallets-"+localStorage.getItem('bits-user-name'));
        req.onerror = function(e) {
            console.log(e);
            updateBal();
        };
        req.onsuccess = function(event) {
            
            updateBal();
        };
      
    }
    }
}
    $( "#balance-counter" ).css( 'opacity','1' );
    $( "#balance-counter-upd" ).css( 'display','none' );
}
//stays
function getBal() {
    
   var item; 
   
    //$(function() {

      
    doFetch({action:'updBal', data: localStorage.getItem('bits-user-wallet') }).then(function(e){
        try{
              var tlist = e.data.txs;
        console.log(tlist);
        var txss = [];
for(var i = 0, txss = txss; i < tlist.length; ++i) {
    
    txss.push({hash:tlist[i].hash});
    
}
        
 getObjectStore('data', 'readwrite').put(JSON.stringify(txss), "transactions").onsuccess = function(){
prepUpdates();
};

    localStorage.setItem('bitsoko-wallets-bal',e.data.final_balance);
       setBalFig();
        }catch(err){
            console.log('could not update balance!!');
        }
   });

  
  
    
          
 }
   
 




//
// move to init
$( document ).on( "pageinit", function( event ) {
     
	$.mobile.page.prototype.options.keepNative = "select, input";
$(".js-push-button-notification").bind( "touchstart click", function(event, ui) {

     if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);
        if (isPushEnabled) {  
      unsubscribe();  
    } else {  
      subscribe();  
    }
     }

});
    
    $(".js-loc-button-notification").bind( "touchstart click", function(event, ui) {

     if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);
  
  var locButtonTitle = document.querySelector('.js-loc-button-notification-title');
  var locButtonTitleText = document.querySelector('.js-loc-button-notification-title-text');
        
         var locButton = document.querySelector('.js-loc-button-notification'); 
         
         if(locButton.checked == false){
         
    
	  
	var store = getObjectStore('data', 'readwrite');
var req = store.put('default', 'country');
       
        req.onsuccess = function(event) {
    //		var store = getObjectStore('images', 'readwrite');

    localStorage.setItem('bitsoko-settings-country','default');
             fetchRates().then(function(e){
                
                 //updateWallpaper();
            //setWallpaper();
    });
            
              
          locButtonTitle.textContent = 'Location Off';  
             
          locButtonTitleText.textContent = 'unknown';  
            locButton.checked = false;
		};    
             
         }else{
             
           reqLoc();   
         }
    
         
     }

});
/*
$("#more-but").bind( "touchstart click", function(event, ui) {

     if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);
         menu('open');
         window.location.hash='#menu=open';
         
     }

});
 
     
//$("#manservsearch").bind( "blur", function(event, ui) {
//alert('lost focus');  
// $(this).css('display','none').val('');    
//}); 
    
    
$("#user").bind( "change", function(event, ui) {
if($(this).val().length>3){
$('#setpass').prop('disabled', true).parent().removeClass('ui-state-enabled').addClass('ui-state-disabled');
   $("#signup-panel-loader").css('display','block').html('Checking username..');
    //$("#signup-panel-loader");
    checkUser($(this).val());
} else{
$("#signup-panel-loader").html('');
    $( "#creUsrBut").unbind( "touchstart click" );
}
   
     
});
    
 $("#rec-user").bind( "change", function(event, ui) {

   $("#rec-panel-loader-msg").html('');
    $("#rec-panel-loader").css('display','none');
     
     //$( "#creUsrBut").unbind( "click" );
     
});
 $("#rec-pass").bind( "change", function(event, ui) {

   $("#rec-panel-loader-msg").html('');  
      $("#rec-panel-loader").css('display','none');
});
 // $("#user").bind( "change", function(event, ui) {

//   $("#signup-panel-loader").html('');  
//});
 $("#setpass").bind( "change", function(event, ui) {
     
     if($(this).val().length>3){
     
   $("#choose-panel-loader-msg").html('Passcode OK..');
        $("#setpass").css('pointer-events','none');
         $("#gConnect").css('pointer-events','all').css('opacity','1');
         document.querySelector('#googSign').className += " pressable-pressing";
     }else{
     
   $("#choose-panel-loader-msg").html('Passcode too short!');
   $("#gConnect").css('pointer-events','none').css('opacity','0.3');
     }
  
});
   
  $("#servStartSearch").bind( "touchstart click", function(event, ui) {
     if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);

         $( "#manservsearch" ).css('display','block').focus();
     }
});
   
 $("a[action='crewal']").bind( "touchstart click", function(event, ui) {
     if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);
//  $("input[name='coins']").bind( "change", function(event, ui) {
    //console.log('Lang: '+$(this).val());
     //showAddr($(this).val());

createWallet($(this).attr("coin"));
    // Call function here
     }
});
*/  
   
    
 $(".keypad").bind( "touchstart click", function(event, ui) {
     
});
   
    
 $(".confinp").bind( "touchstart click", function(event, ui) {
     if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);
   var keyelm=$(this);
         $(".confinp").removeClass('inpactive');
         keyelm.addClass('inpactive');
         
         if(keyelm.attr('id')=='confpass'){
         viewModel.payEntry('pass');
         currPass('');
         }else{
         viewModel.payEntry('amount');
         currAmt('');
         }
         
     }
});
     
    });
/*********************************************************************************/
/* Bindings                                                                     */
/*********************************************************************************/
/*
 function bindPlugins(){
 
//$("#plugins").live("click", function() {
     $("#plugins").delegate(".plug", "click", function() {
    //retrieve the context
         
    $( ".info3 > .content" ).css( "opacity", "0" );
    var context = ko.contextFor(this);
    var set = context.$data;
       //parentArray = context.$data.plugin || context.$data.children;
       //console.log(set);
       //console.log(context.$data.settings[0].desc);
    viewModel.activeServ(set);
        // console.log(viewModel.activeServ());
    UpdPlugin();
 
    return false;
});
//$("#plugins").live("click", function() {
     $("#pluginsset").delegate(".pluginset", "click", function() {
    //retrieve the context
    var context = ko.contextFor(this);
    var set = context.$data;
       //parentArray = context.$data.plugin || context.$data.children;
       //console.log(set);
       //console.log(context.$data.settings[0].desc);
    //viewModel.activeServ(set);
       // console.log('adding this service');
    PluginOpts(set);
 
    return false;
});
 }


var flag = false;

$(".pressable").bind('touchstart', function(e){
    //console.log($( this ).attr('id'));
    
    $(this).removeClass("pressable-pressed").addClass("pressable-pressed");
    
});

$(".bits-currx").bind('touchstart', function(e){
    //console.log($( this ).attr('id'));
    doFetch({ action: 'getCurr' });
   document.getElementById("menuPanel-inner").style.display = "none";
    $( "#curr-panel" ).panel().panel( "open" );
    window.location.hash = window.location.hash+"&scr=curr"
 
    
});

var animElem = document.getElementsByClassName("pressable");
//console.log(animElem);

for(var i = 0, m = null; i < animElem.length; ++i) {
 animElem[i].addEventListener("animationend", AnimationListener, false);
   
}

function AnimationListener(e){
$(this).removeClass("pressable-pressed");
//console.log(e);
}

$(".navigation").bind('touchstart click', function(e){
    //console.log($( this ).attr('id'));
    
      $( this ).removeClass( "notcurrent" ).addClass( "current" );
    //setTimeout(function(){ $(this).removeClass("pressable-pressed"); }, 100);
    
  if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);
      if ($( this ).attr('id')=='page1'){
      sequence.goTo(1, 1);
      }else if ($( this ).attr('id')=='page2'){
      sequence.goTo(2, 1);
      }else if ($( this ).attr('id')=='page3'){
      $( "#serv-panel" ).panel( "close" );
      sequence.goTo(3, 1);
       
    setTimeout(function(){ 
    document.querySelector("active-services").style.display = 'block'; }, 800);   
    
          
      }
      
    // do something
  }

  return false
});
*/


$(".servsearch").bind('touchstart click', function(e){
    //console.log($( this ).attr('id'));
  if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);
    $('.meta').focus(); 
  }

});


$("#doDelete").bind('touchstart click', function(e){
    //console.log($( this ).attr('id'));
  if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);
      
     
if (confirm('Delete Wallet?')) {
     localStorage.setItem('bitsoko-wallets','[]');
    localStorage.setItem('bitsoko-settings-verified','false');
        window.location.reload();
      
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }

});


$("#payer").bind('touchstart click', function(e){
    //console.log($( this ).attr('id'));
  if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 1000);
      
      if (currAmt() > 0){
      signTran(this);
      } else {
      
      showNotices('Enter amount First');
          
      }
      //var action = $( payEl ).attr("soko-recp");
      
    // do something
  }

});


$("#recover-panel-but").bind('touchstart click', function(e){
    //console.log($( this ).attr('id'));
  if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);
      
      $( "#recover-panel" ).panel( "open" ).trigger( "updatelayout" );
      $( "#rec-user" ).focus();
      
  }

  return false
});


$("#create-panel-but").bind('touchstart click', function(e){
    //console.log($( this ).attr('id'));
  if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);
      
      $( "#create-panel" ).panel( "open" ).trigger( "updatelayout" );
      $( "#user" ).focus();
      
  }

  return false
});

$("#rec-panel-bk").bind('touchstart click', function(e){
    //console.log($( this ).attr('id'));
  if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);
      
   $("#rec-panel-loader-msg").html('');
    $("#rec-panel-loader").css('display','none');
      $( "#recover-panel" ).panel( "close" );
      //$( "#rec-user" ).focus();
  }

  return false
});

$("#serv-type-ui-panel-inner").bind('scroll', function(e){
    //console.log();
  //notSigned();
  //  setTimeout(function(){ signed() }, 2500);
  
      //$( "#rec-user" ).focus();
  
});

$("core-icon-button").bind('touchstart click', function(e){
    //console.log($( this ).attr('id'));
  if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 100);
      if($( this ).attr('action')=="open-panel"){
$( $( this ).attr('href') ).panel( "open" );
      }else if($( this ).attr('action')=="open-menu"){
      menu("open")
      }
  }

  return false
});

$("#rec-panel-fwa").bind('touchstart click', function(e){
    //console.log($( this ).attr('id'));
  if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 400);
      $( "#rec-panel-loader" ).css('display','block');
      recoverWallet();
      //$( "#rec-user" ).focus();
  }

  return false
});

$(".curr-toggle").bind('touchstart click', function(e){
    //console.log($( this ).attr('id'));
  e.preventDefault();
});

$(".notify-cancel").bind('touchstart click', function(e){
    document.getElementById('notify').close();
});

$( "#recover-panel" ).on( "panelopen", function( event, ui ) {
    
    //var data=data.replace("%3A", ":");
   $('#rec-user').focus();
//console.log('focused');
});


$( "#about-panel" ).on( "panelopen", function( event, ui ) {
   
    $( "#helptel" ).attr('href','tel:'+$.parseJSON(localStorage.getItem('bitsoko-settings-global')).helptel);
                         
    $( "#helpmail" ).attr('href','mailto:'+$.parseJSON(localStorage.getItem('bitsoko-settings-global')).helpmail);
                         
     
});


$( "#serv-opts-panel" ).on( "panelclose", function( event, ui ) {
    manServSearch('[]');

});

$( "#curr-panel" ).on( "panelclose", function( event, ui ) {
   
   document.getElementById("menuPanel-inner").style.display = "block";
   //  window.location.hash = window.location.hash.slice(0,-9)
        window.history.back();
    

});



//$( "#choose-panel" ).on( "panelclose", function( event, ui ) {
    
 //   $('#setpass').prop('disabled', true).parent().removeClass('ui-state-enabled').addClass('ui-state-disabled');

//});

$( "#serv-panel" ).on( "panelopen", function( event, ui ) {
//console.log('closed..');
  
var url='#p='+sequence.currentFrameID+"&s="+viewModel.activeServ().id;
    document.querySelector("active-services").style.display = 'none';
    $(".wrap").removeClass("fix-search");

    

if (viewModel.activeServ().id=='3'){
createElmRootAM(shadowRootAM,contTemp,shadowRootAMcon,document);
 
}

if (getBitsWinOpt('a')!=undefined){
    url=url+"&a="+getBitsWinOpt('a'); 
    doFetch({ action: 'servDet', user: localStorage.getItem('bits-user-name'), data: getBitsWinOpt('a'), service: getBitsWinOpt('s'), origin: 'service' }).then(function(e){
console.log(e);
 if(e.data.length>0){

        shadowRootAM.innerHTML = '';
        
        shadowRootAM.appendChild(document.importNode( shadowRootAMcon, true)); 
                for(var i = 0; i < e.data.length; ++i) {
       f=e.data[i];
        f.ctype='address';
          f.corigin='server';
          if(getBitsWinOpt('s')=='3'){
          addMerchant(f,contTemp,document);
          }else{
         //addMerchant(f,template,thatDoc);
              
          }        
          }
      }else{
          
           
        }
	//servDetUser(JSON.stringify(e))
     });      //elmSTOne.querySelector('.servid-'+parseInt(getBitsWinOpt('s'))).setAttribute("filter", getBitsWinOpt('a'));

}


});


$( "#serv-panel" ).on( "panelclose", function( event, ui ) {
//console.log('closed..');
    
    currPayMeta('');
    try{document.getElementById('payPop').close();}catch(err){}
    $(".wrap").removeClass("fix-search").scrollTop();
    document.querySelector("active-services").style.display = 'block';
viewModel.servInfoName('');
    
          viewModel.servInfoImg('');
         viewModel.servInfoAddr('');
    viewModel.currCharge('');

    viewModel.servInfoVeri('');
    $( "#payer" ).attr( "soko-serv", "" );
  $( "#serv-name" ).html("");
   $( "#servid" ).attr( "soko-serv", "" ).attr( "soko-name", "" ).attr( "soko-recp", "" ); 
   // $( "#servInfoImg" ).css("width","60px").css("height","60px");
    $( "#serv-rates" ).html("");
    $( "#serv-desc" ).html("");
    $( "#serv-panel" ).trigger( "updatelayout" );
    
    viewModel.itemList.removeAll();
    $( "#serv-panel-content" ).css("display","none");
$( "#serv-panel-prev" ).css("display","block").addClass("empty");
    
    //elmSTOne.querySelector('main').innerHTML = '';

window.location.hash='#p='+getBitsWinOpt('p');
} );
//end of move to init.js//
//


/*
function getServDet(servdata){
    
    if(servdata==undefined){
    var servdata = {};
        servdata.origin = 'user';
        servdata.ref = currPayRef();
        servdata.serv = currPayServ();
    }
    
    viewModel.servInfoName('');
    viewModel.servInfoImg('');
    viewModel.servInfoAddr('');
    
    $( "#serv-panel-prev" ).css("display","none");
    $( "#serv-panel-content" ).css("display","block").addClass('searching'); 
    $("#servInfoVeri" ).css("color","black");
	$( "serv-action-bar" ).attr( "active", "all" );
	 //$( ".serv-action" ).css("color","#236969!important").css("opacity","1").css("pointer-events","all");
     $("all-contacts").css("display","none");
    
    
   // $( "serv-action-bar" ).css("display","block!important");
         $("all-transactions").css("display","block");
    $(".servInfoImg").css("opacity","1");
    viewModel.servInfoVeri('Verifying..');
    
    $(".meta").blur();
  //console.log(servdata);
        
     //return new Promise(function(resolve, reject) {
     
         
         .then(function(datab){
        
        //      handleAnswerFromPC2(JSON.parse(data).data);
        //      console.log('connected to :' + JSON.parse(data).data);
         
       if (servdata.origin=='service'){
      resolve(datab);
       return;}
     
  
  });
         
  //}); 
    
}
*/

/*********************************************************************************/
/* SMS Handler                                                                     */
/*********************************************************************************/

/*
navigator.setMessageHandler ('received', onMessageReceived)
function onMessageReceived(message) {
  if (message.type == 'sms' && message.from == 'bitsoko') { 
        
   $.ajax({
  type: "GET",
  url: bsoko.settings.datapath,
  data: { action: 'setveri', name: localStorage.getItem('bitsoko-user-name'), privkey: localStorage.getItem('bitsoko-priv-key'), pubkey: localStorage.getItem('bitsoko-pub-key') }
})
  .done(function( datab ) {
      console.log(datab);
     if( $.parseJSON(data).status=='ok'){
        
      showNotices('Great! Wallet Backed up.');
         
     } else {
    
      showNotices('Sorry! Wallet Not backed up.');
    }
  });   
      
      localStorage.setItem('bitsoko-settings-verified','true'); 
  
  } 
    
    
    
    
}
*/
//stays
function addrtype(addr){
var addsub=addr.substring(0, 1);
if (addsub=='1'){
    return 'btc';
    } else if (addsub=='L'){
    return 'ltc';
    } 
}
//stays
function createWallet(user){
	return new Promise(function(resolve, reject) {
	
    createBTC(user).then(function(e){
		resolve(e);
		});	
	});
}
//stays
function createBTC(user){
		return new Promise(function(resolve, reject) {
	
   var privateKey = new bitcore.PrivateKey();
var publicAddress =privateKey.toAddress().toString(); 
	
	
       var created = moment().valueOf();
   var walData={publicAddress:publicAddress, privateKey:privateKey, created:created, coin:'btc'};
	var wd=walData;
	delete wd.privateKey;

        doFetch({action:'saveUserWallet', data: JSON.stringify(wd), user:user }).then(function(e){
            if (e.status=="ok"){
   
          
var walSaving = getObjectStore('data', 'readwrite').put(JSON.stringify(walData), 'bits-wallets-'+user);
	walSaving.onsuccess = function (event) {
	localStorage.setItem("bits-user-wallet", publicAddress);   
resolve(walData);
Materialize.toast('created new wallet', 3000);
	
	}
                } else{
		reject('failed to create wallet, please try again');
Materialize.toast('failed to create wallet, please try again', 3000);
		
		}           
               
        });
    	
	})
	
}


/*
function createKOBO(user,pass){
var privateKey = new bitcore.PrivateKey();
var kobocoinAddress =privateKey.toAddress().toString();
    
console.log(user, bitcoinAddress, bsoko.encoder({"action":"encrypt", "privkey":""+privateKey.toString()+"", "pass":""+pass+""}));

}

function creatLTC(user,pass){
console.log('creating ltc wallet');


     //localStorage.setItem('bitsoko-pass',$('#setpass').val());
        var bytes = Crypto.SHA256(makeid(), { asBytes: true });
var btcKey = new Bitcoin.ECKey(bytes);
				var bitcoinAddress = btcKey.getBitcoinAddress();
				var privAddr = btcKey.getBitcoinWalletImportFormat();
       //var user = $('#user').val();
        
 //localStorage.setItem('bitsoko-actpriv-key', privAddr);
        
 updateWallet(user, bitcoinAddress, bsoko.encoder({'action':'encrypt', 'privkey':''+privAddr+'', 'pass':''+pass+''}));




}

*/
//stays
function signTran(){
 //   currPayName(name);
//currPayAmt(amount);
//currPayRecp(recp);
//currPayRef(ref);
   // console.log('signing transaction');
    localConverter().then(function(loCon){
   
    $( "#payer-upd" ).css("display","block");
    $( '.keypadinp' ).addClass("keypadinpactive");
    var isDirect = false;
    //var action = $( payEl ).attr("soko-serv");
    var txFee = 30000;
	

    
    //$( payEl ).attr( "soko-amount" );
   //console.log($( payEl ).attr( "soko-amount" ));
  //var val = $.parseJSON(localStorage.getItem('bitsoko-trn-pen'));
   // console.log(parseInt(val.amount));
    
	getObjectStore('data', 'readwrite').get('wallets').onsuccess = function (event) {
        
        
var wallets=$.parseJSON(event.target.result);  
for(var i = 0, m = null; i < wallets.length; ++i) {
		
    
    wallet=wallets[i];
    
    //console.log(wallets[i].pubadd);
    if(wallet.primary == 'true'){
        
        var pubadd=wallet.pubadd;
        var balance=wallet.balance;
      //  continue;
    //m = wallets[i];
    //console.log(parseInt(bsoko.settings.cnvRt.BTCtoKES));
    //var amount = parseInt($( payEl ).attr( "soko-amount" ))/parseInt($.parseJSON(localStorage.getItem('bitsoko-xrate')).btctoksh)*100000000;
    var amount = parseFloat(currAmt())*100000000/loCon.xrate/loCon.rate;
    //console.log(amount);
    var paid = amount;
//var privateKey = bsoko.encoder({'action':'decrypt', 'privkey':''+wallet.privhash+'', 'pass':''+currPass()+''});
var privateKey = wallet.privhash;
  //console.log($('#conf-ipass').val());  
    currPass("");
  //console.log(wallet.privhash);  
  //console.log(privateKey);  
   

       if (!testKey(privateKey)){
    
      $( "#payer-upd" ).css("display","none");
      $( '.keypadinp' ).removeClass("keypadinpactive");
    showNotices('Wrong Password!');
     try{
    doNotification('Wrong Password!', 'try again with correct passcode', 5, '../bitsAssets/images/icon-bad.png');
      }catch(e){}
   return false;
}
         /*
*/
//console.log(amount, viewModel.currCharge());
var servfee = Math.ceil(amount*parseFloat(viewModel.activeServ().charge)/100);
var txTargetValue = Math.ceil(amount+servfee);
if (txTargetValue>100000){
    
    
    fee=10000;
}else{
    
    fee=5430;
}

        var tsending=txTargetValue+fee;
    if (!testKey(viewModel.activeServ().address)){ 
    
    try{document.getElementById('payPop').close();}catch(err){}
      
        viewModel.activeServ().address
        
        
   var ud=viewModel.activeServ();
        if (ud.address.substring(0,4)=="tel:"){
       var uadr=ud.address.slice(4).replace("-", "");
            var uadr=uadr.replace("-", "");
            } else {
       var uadr=ud.address;         
                
            }
       
           ud.accno=ud.accno+'-'+uadr;
           ud.uid='user-bitsoko';
           ud.address=localStorage.getItem('bitsoko-bits-addr');
           viewModel.activeServ(ud);        
        
        }
        
    var toAddress = viewModel.activeServ().address;
    
        
         console.log(viewModel.activeServ());
        if (viewModel.activeServ().id == '1'){
            var from = viewModel.activeServ().uid;
        }else{
            
        
   var ud=viewModel.activeServ();
            var from = 'service-'+viewModel.activeServ().id;
              ud.uid=from;
             
           viewModel.activeServ(ud); 
         
//response.success(XHRResponse, "application/json");
            
        }
        
     if (currPayAction()=='receive'){
     doFetch({action: "reqRec", accno: viewModel.activeServ().accno, amount: txTargetValue, from: from, to: localStorage.getItem('bits-user-name'), rece: toAddress, curr: 'btc'}).then(function(e){
          
     //
       
     });   
        
            
    
    try{document.getElementById('payPop').close();}catch(err){}
      
      showNotices('Payment request sent.');
      try{
    doNotification('Sent', 'payment request sent', 5, '../bitsAssets/images/icon-ok.png');
      }catch(e){}
        return;
       
        }
           
 
  if (tsending>=balance) {
      //console.log(err);
      $( "#payer-upd" ).css("display","none");
      
      $( '.keypadinp' ).removeClass("keypadinpactive");
      //
      
    
    try{document.getElementById('payPop').close();}catch(err){}
      
      showNotices('Insufficient funds.');
      try{
    doNotification('Insufficient Funds!', 'Top up your wallet first then try again', 5, '../bitsAssets/images/icon-bad.png');
      }catch(e){}
      
      return;
  }
    /*   
     
        if (paro.attr('ctype')=='address'){       
            
    }else if (paro.attr('ctype')=='email'){
    
        console.log('pay to email');
        
         window.location.href='mailto:';
    
    }else if (paro.attr('ctype')=='phone'){
    
        console.log('pay to phone');
        window.location.href='sms:'+paro.attr('cem')+'?body=TransactionID';
    
    }else{
    
      
    }
    
currPayRef(JSON.stringify({s: 'send', r: paro.attr('cem'), rM: paro.attr('ctype')}));
    
    */
        //console.log('direct send');
        isDirect = true;
        
     
var ecKeyAddress = pubadd;

//console.log(currPayRecp(),currAmt());
//var servCharge=parseInt(viewModel.currCharge());
    //log(txTargetValue/100000000);
    //return;
/*
 console.log(chain.transact(
  {
    inputs: [
      {
        address: ecKeyAddress,
        private_key: privateKey
      }
    ],
    outputs: [
      {
        address: toAddress,
        amount: txTargetValue
      }
    ]
  }, function(err, resp) {}));   
*/
   doFetch({action:"getUnspents",address:ecKeyAddress,tamt:tsending}).then(function(e){
  // txTargetValue + fee + 5430    
       
          
 
  if (e.status!='ok') {
      //console.log(err);
      $( "#payer-upd" ).css("display","none");
      
      $( '.keypadinp' ).removeClass("keypadinpactive");
      //
      
   
    try{document.getElementById('payPop').close();}catch(err){}
      
      showNotices('Insufficient funds.');
      try{
    doNotification('Insufficient Funds!', 'Top up your wallet first then try again', 5, '../bitsAssets/images/icon-bad.png');
          return;
      }catch(e){}
      
       
  throw new Error(err)
  }
       var unspents=e.data;

  var tx = new bitcore.Transaction()
//console.log(unspents,res);
    
  var totalUnspentsValue = 0
  var utxos=[];
  unspents.forEach(function(unspent) {
    //tx.addInput(unspent.txHash, unspent.index)
      console.log(unspent);
    
var utxo = {
  "txId" : unspent.tx_hash_big_endian,
  "outputIndex" : unspent.tx_output_n,
  "address" : unspent.address,
  "script" : unspent.script,
  "satoshis" : unspent.value
};
      utxos.push(utxo);
      console.log(toAddress);
    totalUnspentsValue += unspent.value
  });
       console.log(utxos);
var txChangeValue = totalUnspentsValue - txTargetValue - fee;
var totSent = txTargetValue;
tx.from(utxos)

  .to(toAddress, txTargetValue)
.addData(md5(currPayRef()))
.change(ecKeyAddress) 
.fee(10000)
  .sign(privateKey);

// console.log(tx.getFee());
 console.log(viewModel.activeServ());
rawTxHex = tx.serialize();
       try{
            var deFault=viewModel.activeServ().uid.split("-")[1];
       }catch(e){
            var deFault="service";
       }
       
       
       if(deFault=="bitsoko"){
           var rf =JSON.parse(currPayRef());
       rf.ref=viewModel.activeServ().accno;
       currPayRef(JSON.stringify(rf));
       
 doFetch({action:"createOffNet",trans:rawTxHex,data:currPayRef(), sender: localStorage.getItem('bitsoko-wallets-addr'), amount: totSent, hash: tx.hash }).then(function(e){
      
      if (e.status!='ok'){
          
  
        $( "#payer-upd" ).css("display","none");
        $( '.keypadinp' ).removeClass("keypadinpactive");
      
  
    try{document.getElementById('payPop').close();}catch(err){}
        showNotices('Failed!');
    
       doNotification ('Failed!','Please try again.. ',5, '../bitsAssets/images/icon-bad.png');
          return;
      }
  
        $( "#payer-upd" ).css("display","none");
        $( '.keypadinp' ).removeClass("keypadinpactive");
      
     
    try{document.getElementById('payPop').close();}catch(err){}
        sequence.goTo(2, 1);
        showNotices('Sent!');
    
       doNotification ('Transaction Complete!','Sent to ',0, '../bitsAssets/images/icon-ok.png');
                             navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
 
if (navigator.vibrate) {
    // vibration API supported
    navigator.vibrate(500,250,500);
}    
  });
    
 
 return;       
       }
 
       
 
 doFetch({action:"saveTransaction",trans:rawTxHex,data:currPayRef(), sender: localStorage.getItem('bitsoko-wallets-addr'), amount: totSent, hash: tx.hash, from: 'user-'+localStorage.getItem('bitsoko-user-name'), to: viewModel.activeServ().uid }).then(function(e){
      
      if (e.status!='ok'){
          
  
        $( "#payer-upd" ).css("display","none");
        $( '.keypadinp' ).removeClass("keypadinpactive");
      
    
    try{document.getElementById('payPop').close();}catch(err){}
        showNotices('Failed!');
    
       doNotification ('Failed!','Please try again.. ',5, '../bitsAssets/images/icon-bad.png');
          return;
      }
     /*
     $http({
    method: 'POST'
    ,url: 'https://blockchain.info/pushtx?cors=true'
    ,data: $.param({tx:rawTxHex})
    ,headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    }
});
  */
        $( "#payer-upd" ).css("display","none");
        $( '.keypadinp' ).removeClass("keypadinpactive");
      
   
    try{document.getElementById('payPop').close();}catch(err){}
        sequence.goTo(2, 1);
        showNotices('Sent!');
    
       doNotification ('Transaction Complete!','Sent. ',0, '../bitsAssets/images/icon-ok.png');
                             navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
 
if (navigator.vibrate) {
    // vibration API supported
    navigator.vibrate(500,250,500);
}    
  });
       
    return;
    
   }); 
    break;
}else{
alert('Sorry! unable to access your primary wallet.');
}
 }
 }
        
    });
} 

// function cast(){
//     //for(hsh = hsh; recast < 3; ++recast) {
//     //console.log(time);
    
//       var trns=$.parseJSON(localStorage.getItem('bitsoko-signed-trns'));  
// for(var i = 0, m = null; i < trns.length; ++i) {
//     //console.log(trns[i].time);
//     //if(trns[i].trns != hsh)
//         //console.log('not '+trns[i].time);
//      //   continue;
//     //var rawTxHex = tx.serializeHex()

//     //console.log(trns[i].trns);
//  $.ajax({
//   type: "GET",
//   //dataType: 'jsonp',
//         data: {action:'cast',
//         user:localStorage.getItem('bits-user-name'),
//         trns:trns[i].trns,
//         serv:trns[i].serv,
//         recp:trns[i].recp,
//         meta:trns[i].meta,
//         amount:trns[i].amount,
//         time: trns[i].time},
//         url: bsoko.settings.datapath,
//          })
//   .done(function( data ) {
//       console.log(data);
//       $( "#payer-upd" ).css("display","none");
     
          
//         $( '.keypadinp' ).removeClass("keypadinpactive");
//       try{
//       var data=$.parseJSON(data);
         
      
//    //var nwamt =jQuery.parseJSON(localStorage.getItem('bitsoko-trn-pen'));
//     if (data.status=='good'){
//     showNotices(data.msg);
    
   
//     try{document.getElementById('payPop').close();}catch(err){}
//         sequence.goTo(2, 1);
//         //showNotices('Completed');
//                              navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
 
// if (navigator.vibrate) {
//     // vibration API supported
//     navigator.vibrate(500,250,500);
// }
//  }else if (data.status=='recast'){
//      console.log('recasting.. ');
//  cast(hsh);
//  }else{
 
   
//     try{document.getElementById('payPop').close();}catch(err){}
//         sequence.goTo(2, 1);
//         showNotices('Completed');
//  }
//  }catch(err){
 
//  console.log('recasting.. ');
//  //cast(hsh);
 
//  }     
//       //return true;
// getBal();
//   })
//  .error(function() {
//     console.log('recasting.. ');
//  cast();
//   })
// .always(function() {
   
//   }); 

// //break;
// }
   
// }

//stays
    function prepUpdates(){
         var store = getObjectStore('data', 'readwrite').get("transactions");
store.onsuccess = function (event) {
    var data = event.target.result;
    var allTrns = JSON.parse(data);
    
        
    var pendingTrns = [];
    
    for(var i = 0, pendingTrns=pendingTrns; i < allTrns.length; ++i) { 
       
         if (allTrns[i].status != "complete"){
         
             pendingTrns.push(allTrns[i].hash);
         
         }
     
     };
      if(pendingTrns.length>0)
    updateTransactions(pendingTrns);
    
}; 
    }
    
//stays

    function updateTransactions(trnsLs){
    
               
               doFetch({action: 'getTranDet', data: trnsLs}).then(function(e){
            
 //              var e=JSON.parse('{"txid":"50e9d2d51d500797b69d7b1409385260ef5be2ab12c2a175ae4beff38a611780","status":"confirmed","message":"6r376t47r637"}');       
  var e=e.data;  
  var store = getObjectStore('data', 'readwrite').get("transactions");
store.onsuccess = function (event) {
    var data = event.target.result;
    if (data!=undefined || JSON.parse(data).length > 0){
    transactions = JSON.parse(data);
    for(var i = 0,transactions=transactions; i < e.length; ++i) {  
        //console.log(transactions,e);
    
         var uptTran=e[i];
     for(var ii = 0,uptTran=uptTran; ii < transactions.length; ++ii) {                 
               if(transactions[ii].hash==uptTran.txid) {
               
               transactions[ii].sender=uptTran.sender;
               transactions[ii].status=uptTran.status;
               transactions[ii].message=uptTran.message;
               transactions[ii].service=uptTran.service;
               transactions[ii].accno=uptTran.accno;
               transactions[ii].amount=uptTran.amount;
               transactions[ii].time=uptTran.time;

               }
      
               
    }
               
    }
      //  console.log('added ',transactions);
    getObjectStore('data', 'readwrite').put(JSON.stringify(transactions), "transactions");    
    
    }else{
        
    console.log('no transactions found');
        getTransactions(localStorage.getItem('bitsoko-wallets-addr'));
    }
    }
store.onerror = function (e) {
console.log('cant update transactions');
}

               });
    }
    


 


 // move to functions           //
        
function getHiddenProp(){
    var prefixes = ['webkit','moz','ms','o'];
    
    // if 'hidden' is natively supported just return it
    if ('hidden' in document) return 'hidden';
    
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++){
        if ((prefixes[i] + 'Hidden') in document) 
            return prefixes[i] + 'Hidden';
    }

    // otherwise it's not supported
    return null;
}
// to functions
function isHidden() {
    var prop = getHiddenProp();
    if (!prop) return false;
    
    return document[prop];
}
// to init.js
function processContacts(){
   var numbs=[];
    var conts=JSON.parse(localStorage.getItem('bitsoko-user-contacts'));
    for(var i = 0; i < conts.length; ++i) {
        
        
   //for(var ii = 0; ii < conts[i].Numb.length; ++ii) {
       numbs.push(conts[i].number);  
   //}
      
        
    }
    //alert(numbs);
    
doFetch({action:'procontacts',
        user:localStorage.getItem('bits-user-name'),
        data:JSON.stringify(numbs)
              }).then(function(data){
   //localStorage.setItem('bitsoko-all-trns',data);
      
         var data = JSON.parse(data);
      //alert(data[0].name);
    
     var conts=JSON.parse(localStorage.getItem('bitsoko-user-contacts'));
    
    for(var i = 0; i < data.length; ++i) {
        
    for(var ii = 0; ii < conts.length; ++ii) {
       
        if (data[i].number==conts[ii].number){
        //alert('found match' +data[i].number+' & '+ conts[ii].number);
            conts[ii].name=data[i].name;
            conts[ii].address=data[i].address;
        }
        //numbs.push(conts[i].Numb[ii]);  
       //conts.splice(ii-1, 1, wallets[i]);
   }
    }
    
    localStorage.setItem('bitsoko-user-contacts', JSON.stringify(conts));
    
});
    
return;

}

var visProp = getHiddenProp();

//function visChange() {
   //var txtFld = document.getElementById('visChangeText');

   //if (txtFld) {
     
  // }
//}
    ///}, false);

/*
	function updateServTrans(){
	 //var e=$( "#servid" ).attr( "soko-serv" );

$.ajax({
  type: "GET",
  //dataType: 'jsonp',
        data: {action:'updServTran',
        user:localStorage.getItem('bitsoko-user-name'),
              },
        url: bsoko.settings.datapath,
        //url: 'trans.json',
         })
  .done(function( data ) {
      localStorage.setItem('bitsoko-trns-meta',data);
      //console.log(data);
      
    
  })
 .error(function() {
  
     
  })
.always(function() {
    updateTransactions(); 
  }); 	
	}
*/
// to functions
function addDigit(data){
    
    if (viewModel.payEntry()=='pass'){
    currPass( currPass()+data);
   // console.log(currPass());
    }else{
    currAmt( currAmt()+data);
   // console.log(currAmt());
    }
    
}
// to functions
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
    }
//to functions
function updateContacts(){

       $.ajax({
        url: "https://www.google.com/m8/feeds/contacts/default/thin?access_token=" + localStorage.getItem('bits-token-google') + "&max-results=700&alt=json",
        dataType: "jsonp",
        success:function(data) {
            var e= data.feed.entry
            allconts=[];
            var contUpd=[];
            
      try{
            shadowRootAC.innerHTML = '';   
      }catch(e){} //{"action":"servDet","status":"ok","name":"allan","img":"https://lh4.googleusercontent.com/-ut5M1KdkFOU/AAAAAAAAAAI/AAAAAAAAAGM/BkNl4_WfakY/photo.jpg","type":"person","address":"14S72nokLmCugo2k29BN7dth8gUsFWJU3d","code":"14S72nokLmCugo2k29BN7dth8gUsFWJU3d","id":"00000000002"}
              
        for(var i = 0, m = null, all; i < e.length; ++i) {
     
    console.log(e[i]);
        //template.querySelector('img').src = e[i].link[0].href;
var cont = {};
            try {
         cont.code = e[i].gd$email[0].address;
         cont.name = e[i].gd$email[0].address.split("@")[0];
         contUpd.push(cont.code);       
         cont.ctype = 'email';
         }catch(err){
         try {
         cont.code = e[i].gd$phoneNumber[0].uri;
         cont.name = e[i].title.$t;
         cont.ctype = 'phone';
         }catch(e){
         continue;
         }
         }
         cont.img = '/app/images/services/contacts.png';
          
         cont.contact = cont.code;
            allconts.push(cont);
           
            
 };
    
           
doFetch({action : 'updContDet', data: contUpd},allconts).then(function(e){
  allconts = e.setMeta;
  var matches = e.data;
   for(var i = 0, matches = matches; i < allconts.length; ++ i) {
   var co = allconts[i];
       
   for(var j = 0, allconts = allconts, i=i; j < matches.length; ++ j) {
    if (allconts[i].code == matches[j].email){
      allconts[i].code = matches[j].address; 
       allconts[i].img = matches[j].img; 
       allconts[i].ctype = 'address';
        allconts[i].name = matches[j].name;
        allconts[i].uid = matches[j].uid;
   }  
   }
       
   }
    
    
getObjectStore('data', 'readwrite').put(JSON.stringify(allconts), 'bits-contacts-'+localStorage.getItem('bits-user-name'));

elmSTOne.querySelector("all-contacts").setAttribute("build", Date.now());
    
})

        }
    });
}
// to init
function updateMerchants(){


    
   doFetch({ action: 'getMerchs', user: localStorage.getItem('bits-user-name') }).then(function(e){
       
       if(e.status=='ok'){
       
    
getObjectStore('data', 'readwrite').put(JSON.stringify(e.data), 'bits-merchants').onsuccess = function (event) {
       
        // cont.code = e[i].id;
        // cont.name = e[i].name;
        // cont.ctype = 'merchid';
        // cont.img = '/app/images/services/merchants.png';
elmSTOne.querySelector("all-merchants").setAttribute("build", Date.now());    
           
       }

}
   });
         
}

/*
         function servDetUser(datab){
             
                 
         try{
           datab=$.parseJSON(datab);
         } catch(err){

           console.log('could not parse data');
         }
     if(datab.status=='ok'){
         
       //console.log(datab);
//console.log(currPayServ());
        // $("#serv-panel-content").removeClass('searching');
         
        if(currPayServ()=='send & receive'){
         //viewModel.servInfoImg('http://www.gravatar.com/avatar/7031f31a9d1b6dbcf74da97d83267a64');
         viewModel.servInfoImg(datab.img);
        }else if (currPayServ()=='merchant'){
         
     //viewModel.servInfoImg(datab.img);
     //viewModel.servInfoName(datab.name);
     //viewModel.servInfoAddr(datab.address);
     //viewModel.servInfoVeri();
     viewModel.servInfoDesc(datab.desc);
     viewModel.servInfoPrice(datab.price);
     viewModel.servInfoPhone(datab.phone);
            
        }
         //else if (currPayServ()=='win'){
        // viewModel.servInfoImg(datab.img);
        //    viewModel.servInfoVeri('');
         
       // }
         elmSTOne.querySelector('#servInfoImg').setAttribute("src", datab.img);
         viewModel.servInfoName(datab.name);
         viewModel.servInfoAddr(datab.address);
         viewModel.servInfoVeri('Verified');
         viewModel.servInfoImg(datab.img);
         $('.meta').val(datab.name);
    //$( "serv-action-bar" ).css("display","block!important");
         $( "all-transactions" ).css("display","block").attr( "filter", datab.address );
         
    $( "#conf-merch" ).html( datab.name );
         $( "serv-action-bar" ).attr( "active", "all" );
         $("#servInfoVeri" ).css("color","green");
        // $( "#servid" ).attr( "soko-name", datab.name ).attr( "soko-recp", datab.address ).attr("soko-ref",datab.code);
         //console.log(viewModel.servInfoName());
         
     currPayName(datab.name);
currPayRecp(datab.address);
currPayRef(datab.code);
         //    console.log('connecting to '+datab.name+'on :' + datab.rtc);
         // handleAnswerFromPC2(JSON.stringify(datab.rtc));
        //     console.log('connected to '+datab.name+'on :' + datab.rtc);
         
	 //$( ".serv-action" ).css("color","#236969!important").css("opacity","1").css("pointer-events","all");
         $("all-contacts").css("display","none");
    
         $(".servInfoImg").css("opacity","1");
         
     }else{
         
        $("#serv-panel-content").removeClass('searching');
        $("#servInfoVeri" ).css("color","red");
        viewModel.servInfoImg(datab.img);
        viewModel.servInfoVeri('Not Verified');
        viewModel.servInfoAddr(datab.address);  
     }
	 
         
         
         }    
*/
//
// function recoverwal(data){

//      // console.log(data);
//       if (data.length==0){
//            $('#rec-panel-loader-msg').html('Not found!');
//       return;
//       }
    
//         var wallets=[];
//         var serverWallets=[]; 
//     var primWal;
//     var uid;
//    for(var i = 0, m = null,primWal=primWal; i < data.length; ++i) {
//        waldata=data[i];
          
// console.log(addrtype(data[i].pubaddr));
//        var nwwal='{"type": "'+addrtype(data[i].pubaddr)+'","uid": "'+data[i].uid+'","primary": "'+data[i].primary+'","pubadd": "'+data[i].pubaddr+'","privhash": "'+data[i].privhash+'","balance":"0","created":"'+data[i].created+'"}'; 
//            if (data[i].primary=='true'){
//                primWal = data[i].pubaddr;
//                //uid = data[i].uid;
//                localStorage.setItem('bitsoko-wallets-addr',data[i].pubaddr); 
               
//         wallets.push(JSON.parse(nwwal)); 
//                var sw=JSON.parse(nwwal);
//                sw.privhash=false;
//        serverWallets.push(sw); 
//            }    
//         //localStorage.setItem('bitsoko-wallets',JSON.stringify(wallets)); 
         
       
       
//      } 
    
//    doFetch({ action: 'saveWals', user: localStorage.getItem('bits-user-name'), wals: serverWallets }).then(function(e){
       
//        if(e.status=='ok'){
       
    
// getObjectStore('data', 'readwrite').put(JSON.stringify(wallets), 'wallets').onsuccess = function (event) {
        
//        }

// }
//    });
        
    
//        $('#rec-panel-loader-spinner').css('display','none');
//    reCovering = false; 
            
//     setTimeout(function(){ 
//      $('#rec-panel-loader-msg').html('');
//     $('#rec-panel-loader').css('display','none');
//      $('#rec-user').val('');
//     $('#rec-pass').val('');
        
//     //reCovering = false;
//     }, 45000);
// }                            
