"use strict";(self.webpackChunkgameover=self.webpackChunkgameover||[]).push([[235],{3235:(x,p,r)=>{r.r(p),r.d(p,{BrowserModule:()=>q});var c=r(6895),u=r(3599),e=r(1571),v=r(4729),d=r(433),m=r(5553),Z=r(9135);const g=function(o){return["/details",o]};function f(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",68),e.NdJ("mouseenter",function(){e.CHM(t);const n=e.MAs(6),a=e.MAs(9),l=e.oxw();return e.KtG(l.playVideo(n,a))})("mouseleave",function(){e.CHM(t);const n=e.MAs(6),a=e.MAs(9),l=e.oxw();return e.KtG(l.stopVideo(n,a))}),e.TgZ(1,"article",69)(2,"figure",70)(3,"div",71),e._UZ(4,"img",72),e.qZA(),e._UZ(5,"video",73,74),e.ALo(7,"sliceuntile"),e.TgZ(8,"div",75,76)(10,"div",77)(11,"span",78),e._uU(12,"Loading..."),e.qZA()()(),e.TgZ(13,"span",79),e._uU(14,"Free"),e.qZA()()()()}if(2&o){const t=s.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(7,g,t.id)),e.xp6(3),e.Q6J("src",t.thumbnail,e.LSH)("alt",t.title),e.xp6(1),e.Q6J("src",e.xi3(7,4,t.thumbnail,"videoplayback.webm"),e.LSH)}}function _(o,s){1&o&&e._UZ(0,"i",94)}function h(o,s){1&o&&e._UZ(0,"i",95)}function A(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",6)(1,"article",80),e.NdJ("mouseenter",function(){e.CHM(t);const n=e.MAs(7),a=e.MAs(10),l=e.oxw();return e.KtG(l.playVideo(n,a))})("mouseleave",function(){e.CHM(t);const n=e.MAs(7),a=e.MAs(10),l=e.oxw();return e.KtG(l.stopVideo(n,a))}),e.TgZ(2,"div",81)(3,"div",82)(4,"figure",83),e._UZ(5,"img",72)(6,"video",73,74),e.ALo(8,"sliceuntile"),e.TgZ(9,"div",75,76)(11,"div",77)(12,"span",78),e._uU(13,"Loading..."),e.qZA()()()(),e.TgZ(14,"figcaption",84)(15,"div",85)(16,"h3",86),e._uU(17),e.qZA(),e.TgZ(18,"span",87),e._uU(19,"Free"),e.qZA()(),e.TgZ(20,"p",88),e._uU(21),e.ALo(22,"term"),e.qZA()()(),e.TgZ(23,"footer",89)(24,"span",90),e._uU(25),e.qZA(),e.TgZ(26,"div",91),e.YNc(27,_,1,0,"i",92),e.YNc(28,h,1,0,"i",93),e.qZA()()()()()}if(2&o){const t=s.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(15,g,t.id)),e.xp6(4),e.Q6J("src",t.thumbnail,e.LSH)("alt",t.title),e.xp6(1),e.Q6J("src",e.xi3(8,9,t.thumbnail,"videoplayback.webm"),e.LSH),e.xp6(11),e.Oqu(t.title),e.xp6(4),e.hij(" ",e.xi3(22,12,t.short_description,10),"... "),e.xp6(4),e.Oqu(t.genre),e.xp6(2),e.Q6J("ngIf",null==t.platform?null:t.platform.includes("PC")),e.xp6(1),e.Q6J("ngIf",null==t.platform?null:t.platform.includes("Web"))}}function T(o,s){1&o&&(e.TgZ(0,"footer",96)(1,"span",97)(2,"span",98),e._uU(3,"Loading..."),e.qZA()()())}const w=[{path:"",component:(()=>{class o{constructor(t,i,n){this._ActivatedRoute=t,this._GamesService=i,this._Router=n,this.games=[],this.curentLength=13,this.curentCat=this._ActivatedRoute.snapshot.params.category??"all",this.curentC="",this.curentS="",this.curentYear=(new Date).getFullYear(),this.loading=!0,this._Router.routeReuseStrategy.shouldReuseRoute=()=>!1}seeMore(){scrollY+innerHeight+200>=document.body.offsetHeight&&(this.games.length>this.curentLength?this.curentLength+=13:this.loading=!1)}ngOnInit(){console.log(this.curentCat),this.getGameByCat(),$(".select2").customSelect({placeholder:'<span style="color: darkgray;">Browse By Genre:</span>',transition:400,hideCallback:()=>{var t=$(".select-cust2 .custom-select").find('[class$="value"]').text(),i=$(".select-cust3 .custom-select").find('[class$="value"]').text();console.log("browser",t,i),this.curentC!==t&&this.getGamesBySPC(t,"browser",i)}}),$(".select3").customSelect({placeholder:'<span style="color: darkgray;">Sort By:</span>',transition:400,hideCallback:()=>{var t=$(".select-cust2 .custom-select").find('[class$="value"]').text(),i=$(".select-cust3 .custom-select").find('[class$="value"]').text();console.log("browser",t,i),this.curentS!==i&&this.getGamesBySPC(t,"browser",i)}}),$(`#Genre option[value=${this.curentCat}]`).attr("selected","selected"),$(".select-cust2 .custom-select > button").html(this.curentCat)}getGameByCat(){var t=$(".select-cust3 .custom-select").find('[class$="value"]').text();this._GamesService.getGamesBySPC(this.curentCat,"browser",t).subscribe({next:i=>{console.log(i),this.games=i}})}getGamesBySPC(t,i,n){this._GamesService.getGamesBySPC(t,i,n).subscribe({next:a=>{console.log(a),this.games=a}})}gernerChange(t){this._GamesService.getGamesByCat(t).subscribe({next:i=>{this.games=i}})}playVideo(t,i){this._GamesService.playVideo(t,i)}stopVideo(t,i){this._GamesService.stopVideo(t,i)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.gz),e.Y36(v.B),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-browser"]],hostBindings:function(t,i){1&t&&e.NdJ("scroll",function(){return i.seeMore()},!1,e.Jf7)},decls:171,vars:13,consts:[[1,"games"],[1,"container","py-4"],[1,"h4","text-light","text-capitalize"],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-3","g-4","mt-2"],["class","col","class","mb-3 cp",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"row","row-cols-1","row-cols-md-2","g-4"],[1,"col"],[1,"d-flex","align-items-center","gap-2","select-cust2"],["for","Genre"],["id","Genre","aria-label",".form-select-sm example",1,"form-select","form-select-sm","border-0","select2"],["value","mmorpg"],[1,"text-uppercase"],["value","shooter"],["value","strategy"],["value","moba"],["value","racing"],["value","sports"],["value","social"],["value","sandbox"],["value","open-world"],["value","survival"],["value","pvp"],["value","pve"],["value","pixel"],["value","voxel"],["value","zombie"],["value","turn-based"],["value","first-person"],["value","third-Person"],["value","top-down"],["value","tank"],["value","space"],["value","sailing"],["value","side-scroller"],["value","  'superhero',\n "],["value","permadeath"],["value","card"],["value","battle-royale"],["value","mmo"],["value","mmofps"],["value","mmotps"],["value","3d"],["value","2d"],["value","anime"],["value","fantasy"],["value","sci-fi"],["value","fighting"],["value","action-rpg"],["value","action"],["value","military"],["value","martial-arts"],["value","flight"],["value","low-spec"],["value","tower-defense"],["value","horror"],["value","mmorts"],[1,"d-flex","align-items-center","gap-2","select-cust3"],["for","Sort"],["id","Sort","aria-label",".form-select-sm example",1,"form-select","form-select-sm","border-0","select3"],["value","release-date"],["value","popularity"],["value","alphabetical"],["value","relevance"],[1,"area","py-5"],[1,"container"],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-3","row-cols-xl-4","g-4"],["class","col",4,"ngFor","ngForOf"],["class","d-flex align-items-center flex-grow-1 justify-content-center",4,"ngIf"],[1,"mb-3","cp",3,"mouseenter","mouseleave"],[3,"routerLink"],[1,"position-relative"],[1,"image"],[1,"w-100",3,"src","alt"],["preload","none","muted","true","loop","",1,"w-100","h-100","position-absolute","top-0","start-0","d-none",3,"src"],["vid",""],[1,"layer","position-absolute","top-0","start-0","w-100","h-100","bg-primary","bg-opacity-50","d-none","justify-content-center","align-items-center"],["spinner",""],["role","status",1,"spinner-grow","c-blue",2,"width","3rem","height","3rem"],[1,"visually-hidden"],[1,"badge","bg-blue","text-white","p-2","position-absolute","bottom-0","end-0","m-2"],[1,"mb-3","h-100",3,"routerLink","mouseenter","mouseleave"],[1,"card","h-100","cp","bg-transparent","shadow"],[1,"card-body"],[1,"image","position-relative"],[1,"text","mt-3"],[1,"d-flex","align-items-center","justify-content-between"],[1,"h6"],[1,"badge","bg-blue","text-white","p-2"],[1,"small","text-center"],[1,"d-flex","card-footer","justify-content-between","align-items-center"],[1,"badge","bg-second2","text-dark","fs-10"],[1,"d-flex","align-items-center","gap-2"],["class","fa-brands fa-windows",4,"ngIf"],["class","fa-solid fa-window-maximize",4,"ngIf"],[1,"fa-brands","fa-windows"],[1,"fa-solid","fa-window-maximize"],[1,"d-flex","align-items-center","flex-grow-1","justify-content-center"],[1,"spinner-border"],[1,"sr-only"]],template:function(t,i){1&t&&(e.TgZ(0,"header",0)(1,"div",1)(2,"h2",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,f,15,9,"div",4),e.ALo(6,"slice"),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"label",8),e._uU(11," Genre/Tag: "),e.qZA(),e.TgZ(12,"select",9)(13,"option",10)(14,"div",11),e._uU(15,"mmorpg"),e.qZA()(),e.TgZ(16,"option",12)(17,"div",11),e._uU(18,"shooter"),e.qZA()(),e.TgZ(19,"option",13)(20,"div",11),e._uU(21,"strategy"),e.qZA()(),e.TgZ(22,"option",14)(23,"div",11),e._uU(24,"moba"),e.qZA()(),e.TgZ(25,"option",15)(26,"div",11),e._uU(27,"racing"),e.qZA()(),e.TgZ(28,"option",16)(29,"div",11),e._uU(30,"sports"),e.qZA()(),e.TgZ(31,"option",17)(32,"div",11),e._uU(33,"social"),e.qZA()(),e.TgZ(34,"option",18)(35,"div",11),e._uU(36,"sandbox"),e.qZA()(),e.TgZ(37,"option",19)(38,"div",11),e._uU(39,"open-world"),e.qZA()(),e.TgZ(40,"option",20)(41,"div",11),e._uU(42,"survival"),e.qZA()(),e.TgZ(43,"option",21)(44,"div",11),e._uU(45,"pvp"),e.qZA()(),e.TgZ(46,"option",22)(47,"div",11),e._uU(48,"pve"),e.qZA()(),e.TgZ(49,"option",23)(50,"div",11),e._uU(51,"pixel"),e.qZA()(),e.TgZ(52,"option",24)(53,"div",11),e._uU(54,"voxel"),e.qZA()(),e.TgZ(55,"option",25)(56,"div",11),e._uU(57,"zombie"),e.qZA()(),e.TgZ(58,"option",26)(59,"div",11),e._uU(60,"turn-based"),e.qZA()(),e.TgZ(61,"option",27)(62,"div",11),e._uU(63,"first-person"),e.qZA()(),e.TgZ(64,"option",28)(65,"div",11),e._uU(66,"third-Person"),e.qZA()(),e.TgZ(67,"option",29)(68,"div",11),e._uU(69,"top-down"),e.qZA()(),e.TgZ(70,"option",30)(71,"div",11),e._uU(72,"tank"),e.qZA()(),e.TgZ(73,"option",31)(74,"div",11),e._uU(75,"space"),e.qZA()(),e.TgZ(76,"option",32)(77,"div",11),e._uU(78,"sailing"),e.qZA()(),e.TgZ(79,"option",33)(80,"div",11),e._uU(81,"side-scroller"),e.qZA()(),e.TgZ(82,"option",34)(83,"div",11),e._uU(84,"'superhero',"),e.qZA()(),e.TgZ(85,"option",35)(86,"div",11),e._uU(87,"permadeath"),e.qZA()(),e.TgZ(88,"option",36)(89,"div",11),e._uU(90,"card"),e.qZA()(),e.TgZ(91,"option",37)(92,"div",11),e._uU(93,"battle-royale"),e.qZA()(),e.TgZ(94,"option",38)(95,"div",11),e._uU(96,"mmo"),e.qZA()(),e.TgZ(97,"option",39)(98,"div",11),e._uU(99,"mmofps"),e.qZA()(),e.TgZ(100,"option",40)(101,"div",11),e._uU(102,"mmotps"),e.qZA()(),e.TgZ(103,"option",41)(104,"div",11),e._uU(105,"3d"),e.qZA()(),e.TgZ(106,"option",42)(107,"div",11),e._uU(108,"2d"),e.qZA()(),e.TgZ(109,"option",43)(110,"div",11),e._uU(111,"anime"),e.qZA()(),e.TgZ(112,"option",44)(113,"div",11),e._uU(114,"fantasy"),e.qZA()(),e.TgZ(115,"option",45)(116,"div",11),e._uU(117,"sci-fi"),e.qZA()(),e.TgZ(118,"option",46)(119,"div",11),e._uU(120,"fighting"),e.qZA()(),e.TgZ(121,"option",47)(122,"div",11),e._uU(123,"action-rpg"),e.qZA()(),e.TgZ(124,"option",48)(125,"div",11),e._uU(126,"action"),e.qZA()(),e.TgZ(127,"option",49)(128,"div",11),e._uU(129,"military"),e.qZA()(),e.TgZ(130,"option",50)(131,"div",11),e._uU(132,"martial-arts"),e.qZA()(),e.TgZ(133,"option",51)(134,"div",11),e._uU(135,"flight"),e.qZA()(),e.TgZ(136,"option",52)(137,"div",11),e._uU(138,"low-spec"),e.qZA()(),e.TgZ(139,"option",53)(140,"div",11),e._uU(141,"tower-defense"),e.qZA()(),e.TgZ(142,"option",54)(143,"div",11),e._uU(144,"horror"),e.qZA()(),e.TgZ(145,"option",55)(146,"div",11),e._uU(147,"mmorts"),e.qZA()()()()(),e.TgZ(148,"div",6)(149,"div",56)(150,"label",57),e._uU(151," Sort By: "),e.qZA(),e.TgZ(152,"select",58)(153,"option",59)(154,"div"),e._uU(155,"release-date"),e.qZA()(),e.TgZ(156,"option",60)(157,"div"),e._uU(158,"popularity"),e.qZA()(),e.TgZ(159,"option",61)(160,"div"),e._uU(161,"alphabetical"),e.qZA()(),e.TgZ(162,"option",62)(163,"div"),e._uU(164,"relevance"),e.qZA()()()()()()()(),e.TgZ(165,"section",63)(166,"div",64)(167,"div",65),e.YNc(168,A,29,17,"div",66),e.ALo(169,"slice"),e.YNc(170,T,4,0,"footer",67),e.qZA()()()),2&t&&(e.xp6(3),e.AsE(" Top Free ","all"===i.curentCat?"":i.curentCat," Games for Browser In ",i.curentYear,"! "),e.xp6(2),e.Q6J("ngForOf",e.Dn7(6,5,i.games,0,3)),e.xp6(163),e.Q6J("ngForOf",e.Dn7(169,9,i.games,0,i.curentLength)),e.xp6(2),e.Q6J("ngIf",i.loading))},dependencies:[c.sg,c.O5,u.rH,d.YN,d.Kr,c.OU,m.Y,Z.m]}),o})()}];let U=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(w),u.Bz]}),o})();var b=r(4586);let q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,U,b.D,d.u5]}),o})()}}]);