(function(){"use strict";var e={7147:function(e,s,i){var t=i(3862),n=i(3396);const o=(0,n._)("meta",{content:"width=device-width, initial-scale=1, shrink-to-fit=no",name:"viewport"},null,-1);function a(e,s){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n.Wm)(i)],64)}var l=i(89);const r={},c=(0,l.Z)(r,[["render",a]]);var d=c,u=i(2483),m=i(7139),p=i(5174);const g=e=>((0,n.dD)("data-v-27aa6db9"),e=e(),(0,n.Cn)(),e),f={class:"container"},h={class:"column-container",style:{width:"30%"}},b=g((()=>(0,n._)("h1",null,"JPlag Report",-1))),v=g((()=>(0,n._)("p",{class:"section-title"},"Main Info:",-1))),_={id:"basicInfo"},w=["title"],S=g((()=>(0,n._)("div",{id:"logo-section"},[(0,n._)("img",{id:"logo",alt:"JPlag",src:p})],-1))),y={class:"column-container",style:{width:"35%"}},I={id:"metrics"},C=g((()=>(0,n._)("p",{class:"section-title"},"Metric:",-1))),k={id:"metrics-list"},F=g((()=>(0,n._)("p",{class:"section-title"},"Distribution:",-1))),D={class:"column-container",style:{width:"35%"}},M=g((()=>(0,n._)("p",{class:"section-title"},"Top Comparisons:",-1))),O={id:"comparisonsList"};function x(e,s,i,t,o,a){const l=(0,n.up)("TextInformation"),r=(0,n.up)("IDsList"),c=(0,n.up)("MetricButton"),d=(0,n.up)("DistributionDiagram"),u=(0,n.up)("ComparisonsTable");return(0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("div",h,[b,v,(0,n._)("div",_,[(0,n.Wm)(l,{"has-additional-info":e.hasMoreSubmissionPaths,value:e.submissionPathValue,"additional-info-title":"",label:"Directory path"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.overview.submissionFolderPath,(e=>((0,n.wg)(),(0,n.iD)("p",{key:e,title:e},(0,m.zw)(e),9,w)))),128))])),_:1},8,["has-additional-info","value"]),(0,n.Wm)(l,{"has-additional-info":!0,value:e.overview.language,"additional-info-title":"File extensions:",label:"Language"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.overview.fileExtensions,(e=>((0,n.wg)(),(0,n.iD)("p",{key:e},(0,m.zw)(e),1)))),128))])),_:1},8,["value"]),(0,n.Wm)(l,{value:e.overview.matchSensitivity,label:"Match Sensitivity"},null,8,["value"]),(0,n.Wm)(l,{"has-additional-info":!0,value:e.store.getters.getSubmissionIds.size,"additional-info-title":"Submission IDs:",label:"Submissions"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{ids:e.store.getters.getSubmissionIds,onIdSent:e.handleId},null,8,["ids","onIdSent"])])),_:1},8,["value"]),(0,n.Wm)(l,{value:e.overview.dateOfExecution,label:"Date of execution"},null,8,["value"]),(0,n.Wm)(l,{value:e.overview.durationOfExecution,label:"Duration (in ms)"},null,8,["value"])]),S]),(0,n._)("div",y,[(0,n._)("div",I,[C,(0,n._)("div",k,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.overview.metrics,((s,i)=>((0,n.wg)(),(0,n.j4)(c,{id:s.metricName,key:s.metricName,"is-selected":e.selectedMetric[i],metric:s,onClick:s=>e.selectMetric(i)},null,8,["id","is-selected","metric","onClick"])))),128))])]),F,(0,n.Wm)(d,{distribution:e.distributions[e.selectedMetricIndex],class:"full-width"},null,8,["distribution"])]),(0,n._)("div",D,[M,(0,n._)("div",O,[(0,n.Wm)(u,{clusters:e.overview.clusters,"top-comparisons":e.topComps[e.selectedMetricIndex]},null,8,["clusters","top-comparisons"])])])])}var N=i(4870),T=i(6108),Z=i(6838);const z=e=>((0,n.dD)("data-v-043c3160"),e=e(),(0,n.Cn)(),e),P={class:"wrapper"},L={class:"text-container"},A={class:"label-text"},E=["title"],H={key:0,alt:"hide info",src:T},W={key:1,alt:"additional info",src:Z},j={class:"additional-info-title"},V=z((()=>(0,n._)("hr",null,null,-1)));function q(e,s,i,t,o,a){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",P,[(0,n._)("div",L,[(0,n._)("p",A,(0,m.zw)(e.label),1),(0,n._)("p",{class:(0,m.C_)([{anonymous:e.anonymous},"value-text"]),title:e.anonymous?"":e.value},(0,m.zw)(e.anonymous?"Hidden":e.value),11,E)]),(0,n._)("button",{class:(0,m.C_)([{hidden:!e.hasAdditionalInfo},"collapse-button"]),onClick:s[0]||(s[0]=(...s)=>e.toggleIsCollapsed&&e.toggleIsCollapsed(...s))},[e.isCollapsed?((0,n.wg)(),(0,n.iD)("img",H)):((0,n.wg)(),(0,n.iD)("img",W))],2)]),(0,n._)("div",{class:(0,m.C_)([{hidden:!e.isCollapsed},"additional-info"])},[(0,n._)("p",j,(0,m.zw)(e.additionalInfoTitle),1),(0,n.WI)(e.$slots,"default",{},void 0,!0)],2),V],64)}var B=(0,n.aZ)({name:"TextInformation",props:{label:{type:String,required:!0},value:{required:!0},hasAdditionalInfo:{type:Boolean,default:!1},additionalInfoTitle:{type:String,default:""},anonymous:{type:Boolean,default:!1}},setup(){const e=(0,N.iH)(!1),s=()=>e.value=!e.value;return{isCollapsed:e,toggleIsCollapsed:s}}});const Y=(0,l.Z)(B,[["render",q],["__scopeId","data-v-043c3160"]]);var R=Y;const U={class:"wrapper"};function J(e,s,i,t,o,a){const l=(0,n.up)("BarChart");return(0,n.wg)(),(0,n.iD)("div",U,[(0,n.Wm)(l,{chartData:e.chartData,options:e.options,class:"chart"},null,8,["chartData","options"])])}var K=i(6610),$=i(3840),G=i(4051);$.kL.register(...$.zX),$.kL.register(G.Z);var X=(0,n.aZ)({name:"DistributionDiagram",components:{BarChart:K.vz},props:{distribution:{type:Array,required:!0}},setup(e){let s=(0,N.iH)(Math.max(...e.distribution));const i=["91-100%","81-90%","71-80%","61-70%","51-60%","41-50%","31-40%","21-30%","11-20%","0-10%"],t={label:"Count",backgroundColor:"rgba(149, 168, 241, 0.5)",borderWidth:2,borderColor:"rgba(149, 168, 241, 1)",tickColor:"#000000"};let o=(0,N.iH)({labels:i,datasets:[{...t,data:e.distribution}]});const a=(0,N.iH)({responsive:!0,maintainAspectRatio:!1,indexAxis:"y",scales:{x:{suggestedMax:s.value+5,ticks:{color:"#000000"}},y:{ticks:{color:"#000000"}}},plugins:{datalabels:{color:"#000000",font:{weight:"bold"},anchor:"end",align:"end",clamp:!0},legend:{display:!1}}});return(0,n.YP)((()=>e.distribution),(e=>{o.value={labels:i,datasets:[{...t,data:e}]},s.value=Math.max(...e),a.value.scales.x.suggestedMax=s.value+5})),{chartData:o,options:a}}});const Q=(0,l.Z)(X,[["render",J],["__scopeId","data-v-786dd611"]]);var ee=Q,se=i(164);const ie=e=>((0,n.dD)("data-v-5f3c273b"),e=e(),(0,n.Cn)(),e),te={class:"metric-name"},ne={class:"tooltip"},oe=ie((()=>(0,n._)("img",{alt:"?",src:se},null,-1))),ae={class:"tooltiptext"};function le(e,s,i,t,o,a){return(0,n.wg)(),(0,n.iD)("div",{class:(0,m.C_)(["wrapper",{selected:e.isSelected}])},[(0,n._)("div",null,[(0,n._)("p",te,(0,m.zw)(e.metric.metricName),1),(0,n._)("div",ne,[oe,(0,n._)("span",ae,(0,m.zw)(e.metric.description),1)])])],2)}var re=(0,n.aZ)({name:"MetricButton",props:{metric:{type:Object,required:!0},isSelected:{type:Boolean,default:!1}},setup(){return{}}});const ce=(0,l.Z)(re,[["render",le],["__scopeId","data-v-5f3c273b"]]);var de=ce,ue=i(7068);const me=e=>((0,n.dD)("data-v-4d7dd930"),e=e(),(0,n.Cn)(),e),pe=me((()=>(0,n._)("tr",{class:"head-row"},[(0,n._)("th",null,"No."),(0,n._)("th",null,"Submission 1"),(0,n._)("th"),(0,n._)("th",null,"Submission 2"),(0,n._)("th",null,"Match %")],-1))),ge=["onClick"],fe=["onClick"],he=["onClick"],be=me((()=>(0,n._)("img",{alt:">>",src:ue},null,-1))),ve=[be],_e=["onClick"],we=["onClick"],Se=["onClick"];function ye(e,s,i,t,o,a){const l=(0,n.up)("ClustersList"),r=(0,n.up)("GDialog");return(0,n.wg)(),(0,n.iD)("table",null,[pe,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.topComparisons,((s,i)=>((0,n.wg)(),(0,n.iD)("tr",{key:s.firstSubmissionId+s.secondSubmissionId+s.matchPercentage,class:"selectable"},[(0,n._)("td",{onClick:i=>e.navigateToComparisonView(s.firstSubmissionId,s.secondSubmissionId)},(0,m.zw)(i+1)+". ",9,ge),(0,n._)("td",{onClick:i=>e.navigateToComparisonView(s.firstSubmissionId,s.secondSubmissionId),class:(0,m.C_)({"anonymous-style":e.isAnonymous(s.firstSubmissionId)})},(0,m.zw)(e.isAnonymous(s.firstSubmissionId)?"Hidden":e.displayName(s.firstSubmissionId)),11,fe),(0,n._)("td",{onClick:i=>e.navigateToComparisonView(s.firstSubmissionId,s.secondSubmissionId)},ve,8,he),(0,n._)("td",{onClick:i=>e.navigateToComparisonView(s.firstSubmissionId,s.secondSubmissionId),class:(0,m.C_)({"anonymous-style":e.isAnonymous(s.secondSubmissionId)})},(0,m.zw)(e.isAnonymous(s.secondSubmissionId)?"Hidden":e.displayName(s.secondSubmissionId)),11,_e),(0,n._)("td",{onClick:i=>e.navigateToComparisonView(s.firstSubmissionId,s.secondSubmissionId)},(0,m.zw)(e.formattedMatchPercentage(s.matchPercentage)),9,we),(0,n._)("td",null,[e.isInCluster(s.firstSubmissionId,s.secondSubmissionId)?((0,n.wg)(),(0,n.iD)("img",{key:0,alt:">>",src:Z,onClick:s=>e.toggleDialog(i)},null,8,Se)):(0,n.kq)("",!0)]),e.isInCluster(s.firstSubmissionId,s.secondSubmissionId)?((0,n.wg)(),(0,n.j4)(r,{key:0,modelValue:e.dialog[i],"onUpdate:modelValue":s=>e.dialog[i]=s},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{clusters:e.getClustersFor(s.firstSubmissionId,s.secondSubmissionId),comparison:s},null,8,["clusters","comparison"])])),_:2},1032,["modelValue","onUpdate:modelValue"])):(0,n.kq)("",!0)])))),128))])}i(6699);var Ie=i(5718);const Ce={class:"wrapper"},ke={id:"members"},Fe={id:"dialog-header"};function De(e,s,i,t,o,a){const l=(0,n.up)("ClusterRadarChart"),r=(0,n.up)("GDialog");return(0,n.wg)(),(0,n.iD)("div",Ce,[(0,n._)("h1",null," Clusters for comparison "+(0,m.zw)(e.comparison.firstSubmissionId)+" > "+(0,m.zw)(e.comparison.secondSubmissionId),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.clusters,((i,t)=>((0,n.wg)(),(0,n.iD)("p",{key:t,onClick:s[2]||(s[2]=(...s)=>e.toggleDialog&&e.toggleDialog(...s))},[(0,n.Uk)((0,m.zw)(t+1)+". Members: ",1),(0,n._)("span",ke,(0,m.zw)(e.getMemberNames(i)),1),(0,n.Uk)(" - Average similarity: "+(0,m.zw)(i.averageSimilarity)+"% ",1),(0,n.Wm)(r,{modelValue:e.dialog,"onUpdate:modelValue":s[1]||(s[1]=s=>e.dialog=s),fullscreen:""},{default:(0,n.w5)((()=>[(0,n._)("div",Fe,[(0,n._)("button",{onClick:s[0]||(s[0]=(...s)=>e.toggleDialog&&e.toggleDialog(...s))},"Close")]),(0,n.Wm)(l,{cluster:i},null,8,["cluster"])])),_:2},1032,["modelValue"])])))),128))])}const Me=e=>((0,n.dD)("data-v-9946ce7c"),e=e(),(0,n.Cn)(),e),Oe={class:"wrapper"},xe={key:0,class:"wrapper"},Ne={key:1,class:"no-member"},Te=Me((()=>(0,n._)("span",null,"This cluster has no members.",-1))),Ze=[Te];function ze(e,s,i,o,a,l){const r=(0,n.up)("RadarChart");return(0,n.wg)(),(0,n.iD)("div",Oe,[e.hasNoMember?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",xe,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":s[0]||(s[0]=s=>e.selectedMember=s)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cluster.members.keys(),((e,s)=>((0,n.wg)(),(0,n.iD)("option",{key:s},(0,m.zw)(e),1)))),128))],512),[[t.bM,e.selectedMember]]),(0,n.Wm)(r,{chartData:e.chartData,options:e.options,class:"chart"},null,8,["chartData","options"])])),e.hasNoMember?((0,n.wg)(),(0,n.iD)("div",Ne,Ze)):(0,n.kq)("",!0)])}const Pe={fill:!0,backgroundColor:"rgba(149, 168, 241, 0.5)",borderColor:"rgba(149, 168, 241, 1)",pointBackgroundColor:"rgba(149, 168, 241, 1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(255, 99, 132)"},Le={legend:{display:!1},scales:{r:{suggestedMin:50,suggestedMax:100}}};$.kL.register(...$.zX),$.kL.register(G.Z);var Ae=(0,n.aZ)({name:"ClusterRadarChart",components:{RadarChart:K.HM},props:{cluster:{type:Object,required:!0}},setup(e){let s=!1;const i=()=>{const i=e.cluster.members.keys().next().value;return s=!i,i},t=s=>{let i=new Array;return e.cluster.members.get(s)?.forEach((e=>i.push(e.matchedWith))),i},o=s=>{let i=new Array;return e.cluster.members.get(s)?.forEach((e=>i.push(a(e.percentage)))),i},a=e=>Math.round(100*(e+Number.EPSILON))/100,l=(0,N.iH)(i()),r=(0,N.iH)({labels:t(i()),datasets:[{...Pe,label:i(),data:o(i())}]}),c=(0,N.iH)(Le);return(0,n.YP)((()=>l.value),(e=>{r.value={labels:t(e),datasets:[{...Pe,label:e,data:o(e)}]}})),{selectedMember:l,chartData:r,options:c,hasNoMember:s}}});const Ee=(0,l.Z)(Ae,[["render",ze],["__scopeId","data-v-9946ce7c"]]);var He=Ee,We=(0,n.aZ)({name:"ClustersList",components:{ClusterRadarChart:He,GDialog:Ie.Yf},props:{comparison:{type:Object,required:!0},clusters:{type:Array,required:!0}},setup(){const e=(0,N.iH)(!1),s=()=>e.value=!e.value,i=e=>{const s=e.members.keys(),i=Array.from(s);let t="";const n=5;return t=i.slice(0,n).join(", "),i.length>n&&(t+=",..."),t};return{dialog:e,toggleDialog:s,getMemberNames:i}}});const je=(0,l.Z)(We,[["render",De],["__scopeId","data-v-14c6799e"]]);var Ve=je,qe=i(65),Be=(0,n.aZ)({name:"ComparisonsTable",components:{ClustersList:Ve,GDialog:Ie.Yf},props:{topComparisons:{type:Array,required:!0},clusters:{type:Array,required:!0}},setup(e){const s=(0,qe.oR)();let i=e=>e.toFixed(2);const t=(0,N.iH)([]);e.topComparisons.forEach((()=>t.value.push(!1)));const n=e=>s.getters.submissionDisplayName(e),o=e=>{t.value[e]=!0},a=(e,i)=>{s.state.single||Oi.push({name:"ComparisonView",params:{firstId:e,secondId:i}})},l=(s,i)=>e.clusters.some((e=>e.members.includes(s)&&e.members.includes(i))),r=e=>s.state.anonymous.has(e),c=(s,i)=>{let t=[];return e.topComparisons.forEach((e=>{e.firstSubmissionId.includes(s)&&i.includes(e.secondSubmissionId)?t.push({matchedWith:e.secondSubmissionId,percentage:e.matchPercentage}):e.secondSubmissionId.includes(s)&&i.includes(e.firstSubmissionId)&&t.push({matchedWith:e.firstSubmissionId,percentage:e.matchPercentage})})),t},d=e.clusters.map((e=>{let s=new Map;return e.members.forEach((i=>{let t=e.members.filter((e=>!e.includes(i)));s.set(i,c(i,t))})),{averageSimilarity:e.averageSimilarity,strength:e.strength,members:s}})),u=(e,s)=>d.filter((i=>i.members.has(e)&&i.members.has(s)));return{clustersWithParticipatingMatches:d,dialog:t,displayName:n,isAnonymous:r,getClustersFor:u,toggleDialog:o,formattedMatchPercentage:i,navigateToComparisonView:a,isInCluster:l}}});const Ye=(0,l.Z)(Be,[["render",ye],["__scopeId","data-v-4d7dd930"]]);var Re=Ye,Ue=i(2482);class Je{constructor(e,s,i,t,n,o,a,l,r,c){(0,Ue.Z)(this,"_submissionFolderPath",void 0),(0,Ue.Z)(this,"_baseCodeFolderPath",void 0),(0,Ue.Z)(this,"_language",void 0),(0,Ue.Z)(this,"_fileExtensions",void 0),(0,Ue.Z)(this,"_matchSensitivity",void 0),(0,Ue.Z)(this,"_submissionIdsToComparisonFileName",void 0),(0,Ue.Z)(this,"_dateOfExecution",void 0),(0,Ue.Z)(this,"_durationOfExecution",void 0),(0,Ue.Z)(this,"_metrics",void 0),(0,Ue.Z)(this,"_clusters",void 0),this._submissionFolderPath=e,this._baseCodeFolderPath=s,this._language=i,this._fileExtensions=t,this._matchSensitivity=n,this._dateOfExecution=o,this._durationOfExecution=a,this._metrics=l,this._clusters=r,this._submissionIdsToComparisonFileName=c}get submissionIdsToComparisonFileName(){return this.submissionIdsToComparisonFileName}get submissionFolderPath(){return this._submissionFolderPath}get baseCodeFolderPath(){return this._baseCodeFolderPath}get language(){return this._language}get fileExtensions(){return this._fileExtensions}get matchSensitivity(){return this._matchSensitivity}get dateOfExecution(){return this._dateOfExecution}get durationOfExecution(){return this._durationOfExecution}get metrics(){return this._metrics}get clusters(){return this._clusters}}const Ke=(0,qe.MT)({state:{submissionIdsToComparisonFileName:new Map,anonymous:new Set,files:{},submissions:{},local:!1,zip:!1,single:!1,fileString:"",fileIdToDisplayName:new Map},getters:{filesOfSubmission:e=>s=>Array.from(e.submissions[s],(([e,s])=>({name:e,value:s}))),submissionDisplayName:e=>s=>e.fileIdToDisplayName.get(s),getSubmissionIds(e){return Array.from(e.fileIdToDisplayName.keys())},getComparisonFileName:e=>(s,i)=>e.submissionIdsToComparisonFileName.get(s)?.get(i),getComparisonFileForSubmissions:(e,s)=>(e,i)=>{const t=s.getComparisonFileName(e,i),n=Object.keys(Ke.state.files).find((e=>e.endsWith(t)));return void 0!=n?Ke.state.files[n]:void 0}},mutations:{addAnonymous(e,s){for(let i=0;i<s.length;i++)e.anonymous.add(s[i])},saveComparisonFileLookup(e,s){e.submissionIdsToComparisonFileName=s},removeAnonymous(e,s){for(let i=0;i<s.length;i++)e.anonymous.delete(s[i])},resetAnonymous(e){e.anonymous=new Set},saveFile(e,s){e.files[s.fileName]=s.data},saveSubmissionNames(e,s){e.fileIdToDisplayName=s},saveSubmissionFile(e,s){e.submissions[s.name]||(e.submissions[s.name]=new Map),e.submissions[s.name].set(s.file.fileName,s.file.data)},setLoadingType(e,s){e.local=s.local,e.zip=s.zip,e.single=s.single,e.fileString=s.fileString}}});var $e=Ke;class Ge{static getOverview(e){const s=e.submission_folder_path,i="",t=e.language,n=e.file_extensions,o=e.match_sensitivity,a=e.submission_id_to_display_name,l=new Map(Object.entries(a)),r=e.date_of_execution,c=e.execution_time,d=[],u=[];return e.metrics.forEach((e=>{const s=e,i=[];s.topComparisons.forEach((e=>{const s={firstSubmissionId:e.first_submission,secondSubmissionId:e.second_submission,matchPercentage:e.match_percentage};i.push(s)})),d.push({metricName:s.name,metricThreshold:s.threshold,distribution:s.distribution,comparisons:i,description:s.description})})),$e.commit("saveSubmissionNames",l),e.clusters&&e.clusters.forEach((e=>{const s=e,i={averageSimilarity:s.average_similarity,strength:s.strength,members:s.members};u.push(i)})),Ge.saveSubmissionsToComparisonNameMap(e),new Je(s,i,t,n,o,r,c,d,u,new Map)}static saveSubmissionsToComparisonNameMap(e){const s=e.submission_ids_to_comparison_file_name,i=Object.entries(s),t=new Map;for(const[n,o]of i)t.set(n,new Map(Object.entries(o)));$e.commit("saveComparisonFileLookup",t)}}const Xe={class:"container"},Qe={class:"column-list"},es=["onClick"];function ss(e,s,i,t,o,a){return(0,n.wg)(),(0,n.iD)("div",Xe,[(0,n._)("div",Qe,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.ids,((s,i)=>((0,n.wg)(),(0,n.iD)("p",{key:i,class:(0,m.C_)({selected:!e.store.state.anonymous.has(s)&&0!==e.store.state.anonymous.size}),onClick:i=>e.emitIdsSent([s])},(0,m.zw)(e.store.getters.submissionDisplayName(s)),11,es)))),128))]),(0,n._)("button",{onClick:s[0]||(s[0]=s=>e.emitIdsSent(e.ids))},"Hide/Show all")])}var is=(0,n.aZ)({emits:["idSent"],name:"IDsList",props:{ids:{type:Array,required:!0}},setup(e,{emit:s}){const i=e=>{s("idSent",e)};return{store:$e,emitIdsSent:i}}});const ts=(0,l.Z)(is,[["render",ss],["__scopeId","data-v-fa56f466"]]);var ns=ts,os=i(5941),as=(0,n.aZ)({name:"OverviewView",components:{IDsList:ns,ComparisonsTable:Re,DistributionDiagram:ee,MetricButton:de,TextInformation:R},setup(){const e=(0,qe.oR)(),s=(0,n.Fl)((()=>{const s=Object.keys(e.state.files).find((e=>e.endsWith("overview.json")));return void 0!=s?e.state.files[s]:os.log("Could not find overview.json")})),t=()=>{let t;if(e.state.local)try{t=Ge.getOverview(i(Object(function(){var e=new Error("Cannot find module '../files/overview.json'");throw e.code="MODULE_NOT_FOUND",e}())))}catch(n){Oi.back()}else if(e.state.zip){const e=JSON.parse(s.value);t=Ge.getOverview(e)}else e.state.single&&(t=Ge.getOverview(JSON.parse(e.state.fileString)));return t};let o=t();const a=s=>{s.length===e.getters.getSubmissionIds.length?e.state.anonymous.size>0?e.commit("resetAnonymous"):e.commit("addAnonymous",s):e.state.anonymous.has(s[0])?e.commit("removeAnonymous",s):0===e.state.anonymous.size?e.commit("addAnonymous",e.getters.getSubmissionIds.filter((e=>e!==s[0]))):e.commit("addAnonymous",s)};let l=(0,N.iH)(o.metrics.map((()=>!1))),r=(0,N.iH)(0);l.value[r.value]=!0;const c=e=>{l.value=l.value.map((()=>!1)),l.value[e]=!0,r.value=e};let d=(0,N.iH)(o.metrics.map((e=>e.distribution))),u=(0,N.iH)(o.metrics.map((e=>e.comparisons)));const m=o.submissionFolderPath.length>1,p=m?"Click arrow to see all paths":o.submissionFolderPath[0];return{overview:o,selectedMetricIndex:r,selectedMetric:l,distributions:d,topComps:u,hasMoreSubmissionPaths:m,submissionPathValue:p,handleId:a,selectMetric:c,store:e}}});const ls=(0,l.Z)(as,[["render",x],["__scopeId","data-v-27aa6db9"]]);var rs=ls,cs=i(689),ds=i(5671);const us=e=>((0,n.dD)("data-v-0c10f37a"),e=e(),(0,n.Cn)(),e),ms={class:"container"},ps=us((()=>(0,n._)("img",{alt:"show",src:cs},null,-1))),gs=[ps],fs={class:"title-section"},hs=us((()=>(0,n._)("h1",null,"JPlag Comparison",-1))),bs=us((()=>(0,n._)("img",{alt:"hide",src:ds},null,-1))),vs=[bs];function _s(e,s,i,t,o,a){const l=(0,n.up)("TextInformation"),r=(0,n.up)("MatchTable"),c=(0,n.up)("FilesContainer");return(0,n.wg)(),(0,n.iD)("div",ms,[(0,n._)("button",{id:"show-button",class:(0,m.C_)({hidden:!e.hideLeftPanel}),title:"Show sidebar",onClick:s[0]||(s[0]=(...s)=>e.togglePanel&&e.togglePanel(...s))},gs,2),(0,n._)("div",{id:"sidebar",class:(0,m.C_)({hidden:e.hideLeftPanel})},[(0,n._)("div",fs,[hs,(0,n._)("button",{id:"hide-button",title:"Hide sidebar",onClick:s[1]||(s[1]=(...s)=>e.togglePanel&&e.togglePanel(...s))},vs)]),(0,n.Wm)(l,{anonymous:e.isAnonymous(e.firstId),value:e.store.getters.submissionDisplayName(e.firstId),label:"Submission 1"},null,8,["anonymous","value"]),(0,n.Wm)(l,{anonymous:e.store.state.anonymous.has(e.secondId),value:e.store.getters.submissionDisplayName(e.secondId),label:"Submission 2"},null,8,["anonymous","value"]),(0,n.Wm)(l,{value:e.comparison.match_percentage,label:"Match %"},null,8,["value"]),(0,n.Wm)(r,{id1:e.firstId,id2:e.secondId,matches:e.comparison.allMatches,onMatchSelected:e.showMatch},null,8,["id1","id2","matches","onMatchSelected"])],2),(0,n.Wm)(c,{"container-id":1,files:e.filesOfFirst,matches:e.comparison.matchesInFirstSubmission,"files-owner":"Submission 1",onToggleCollapse:e.toggleCollapseFirst,onLineSelected:e.showMatchInSecond},null,8,["files","matches","onToggleCollapse","onLineSelected"]),(0,n.Wm)(c,{"container-id":2,files:e.filesOfSecond,matches:e.comparison.matchesInSecondSubmissions,"files-owner":"Submission 2",onToggleCollapse:e.toggleCollapseSecond,onLineSelected:e.showMatchInFirst},null,8,["files","matches","onToggleCollapse","onLineSelected"])])}function ws(e,s,i){return String(e).concat(s).concat(String(i))}function Ss(e){if(e.name.includes(".")){const s=e.name.split(".");return s[s.length-1]}return""}const ys=e=>((0,n.dD)("data-v-2c3d2250"),e=e(),(0,n.Cn)(),e),Is={class:"match-table-container"},Cs=ys((()=>(0,n._)("tr",null,[(0,n._)("th",null,"Submission 1"),(0,n._)("th",null,"Submission 2")],-1))),ks=ys((()=>(0,n._)("tr",null,[(0,n._)("th",null,"File 1"),(0,n._)("th",null,"File 2"),(0,n._)("th",null,"Tokens")],-1))),Fs=["onClick"],Ds={class:"td-content"},Ms={class:"td-content"};function Os(e,s,i,t,o,a){return(0,n.wg)(),(0,n.iD)("div",Is,[(0,n._)("table",null,[Cs,ks,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.matches,((s,i)=>((0,n.wg)(),(0,n.iD)("tr",{key:String(i).concat(s.startInFirst).concat(s.startInSecond),style:(0,m.j5)({background:s.color}),onClick:i=>e.$emit("matchSelected",i,s)},[(0,n._)("td",null,[(0,n._)("div",Ds,[(0,n._)("p",null,(0,m.zw)(s.firstFile),1),(0,n._)("p",null,"("+(0,m.zw)(s.startInFirst+1)+" - "+(0,m.zw)(s.endInFirst+1)+")",1)])]),(0,n._)("td",null,[(0,n._)("div",Ms,[(0,n._)("p",null,(0,m.zw)(s.secondFile),1),(0,n._)("p",null,"("+(0,m.zw)(s.startInSecond+1)+" - "+(0,m.zw)(s.endInSecond+1)+")",1)])]),(0,n._)("td",null,(0,m.zw)(s.tokens),1)],12,Fs)))),128))])])}var xs=(0,n.aZ)({name:"MatchTable",props:{matches:{type:Array},id1:{type:String},id2:{type:String}},setup(){return{}}});const Ns=(0,l.Z)(xs,[["render",Os],["__scopeId","data-v-2c3d2250"]]);var Ts=Ns;class Zs{constructor(e,s,i){(0,Ue.Z)(this,"_firstSubmissionId",void 0),(0,Ue.Z)(this,"_secondSubmissionId",void 0),(0,Ue.Z)(this,"_match_percentage",void 0),(0,Ue.Z)(this,"_filesOfFirstSubmission",void 0),(0,Ue.Z)(this,"_filesOfSecondSubmission",void 0),(0,Ue.Z)(this,"_colors",void 0),(0,Ue.Z)(this,"_allMatches",void 0),(0,Ue.Z)(this,"_matchesInFirstSubmission",void 0),(0,Ue.Z)(this,"_matchesInSecondSubmissions",void 0),this._firstSubmissionId=e,this._secondSubmissionId=s,this._match_percentage=i,this._filesOfFirstSubmission=new Map,this._filesOfSecondSubmission=new Map,this._colors=[],this._allMatches=[],this._matchesInFirstSubmission=new Map,this._matchesInSecondSubmissions=new Map}get filesOfFirstSubmission(){return this._filesOfFirstSubmission}set filesOfFirstSubmission(e){this._filesOfFirstSubmission=e}get filesOfSecondSubmission(){return this._filesOfSecondSubmission}set filesOfSecondSubmission(e){this._filesOfSecondSubmission=e}get colors(){return this._colors}set colors(e){this._colors=e}get allMatches(){return this._allMatches}set allMatches(e){this._allMatches=e}get matchesInFirstSubmission(){return this._matchesInFirstSubmission}set matchesInFirstSubmission(e){this._matchesInFirstSubmission=e}get matchesInSecondSubmissions(){return this._matchesInSecondSubmissions}set matchesInSecondSubmissions(e){this._matchesInSecondSubmissions=e}get firstSubmissionId(){return this._firstSubmissionId}get secondSubmissionId(){return this._secondSubmissionId}get match_percentage(){return this._match_percentage}}class zs{static getComparison(e){const s=$e.getters.filesOfSubmission(e.id1),i=$e.getters.filesOfSubmission(e.id2),t=this.convertToFilesByName(s),n=this.convertToFilesByName(i),o=e.matches,a=this.generateColorsForMatches(o.length),l=o.map(((e,s)=>this.mapMatch(e,a[s]))),r=this.groupMatchesByFileName(l,1),c=this.groupMatchesByFileName(l,2),d=new Zs(e.id1,e.id2,e.similarity);return d.filesOfFirstSubmission=t,d.filesOfSecondSubmission=n,d.colors=a,d.allMatches=l,d.matchesInFirstSubmission=r,d.matchesInSecondSubmissions=c,d}static convertToFilesByName(e){const s=new Map;return e.forEach((e=>{s.get(e.name)||s.set(e.name,{lines:[],collapsed:!1}),s.set(e.name,{lines:e.value.split(/\r?\n/),collapsed:!1})})),s}static groupMatchesByFileName(e,s){const i=new Map;return e.forEach((e=>{const t=1===s?e.firstFile:e.secondFile;if(i.get(t)||i.set(t,[]),1===s){const s={start:e.startInFirst,end:e.endInFirst,linked_panel:2,linked_file:e.secondFile,linked_line:e.startInSecond,color:e.color};i.get(t)?.push(s)}else{const s={start:e.startInSecond,end:e.endInSecond,linked_panel:1,linked_file:e.firstFile,linked_line:e.startInFirst,color:e.color};i.get(t)?.push(s)}})),i}static generateColorsForMatches(e){const s=[],i=Math.trunc(360/e);for(let t=0;t<e;t++){const e=t*i;s.push(`hsla(${e}, 80%, 50%, 0.3)`)}return s}static mapMatch(e,s){return{firstFile:e.file1,secondFile:e.file2,startInFirst:e.start1,endInFirst:e.end1,startInSecond:e.start2,endInSecond:e.end2,tokens:e.tokens,color:s}}}const Ps={class:"files-container"};function Ls(e,s,i,t,o,a){const l=(0,n.up)("CodePanel"),r=(0,n.up)("VueDraggableNext");return(0,n.wg)(),(0,n.iD)("div",Ps,[(0,n._)("h1",null,"Files of "+(0,m.zw)(e.filesOwner),1),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.files.keys(),((s,i)=>((0,n.wg)(),(0,n.j4)(l,{key:s.concat(i.toString()),collapse:e.files.get(s)?.collapsed,"file-index":i,lines:e.files.get(s)?.lines?e.files.get(s)?.lines:[],matches:e.matches.get(s)?e.matches.get(s):[],"panel-id":e.containerId,title:s,onToggleCollapse:i=>e.$emit("toggle-collapse",s),onLineSelected:e.lineSelected},null,8,["collapse","file-index","lines","matches","panel-id","title","onToggleCollapse","onLineSelected"])))),128))])),_:1})])}const As=e=>((0,n.dD)("data-v-578b2558"),e=e(),(0,n.Cn)(),e),Es=["id"],Hs={class:"file-title"},Ws={style:{width:"90%"}},js={key:0,alt:"hide info",src:T},Vs={key:1,alt:"additional info",src:Z},qs={key:0,class:"code-container"},Bs={key:1,class:"code-container"},Ys=As((()=>(0,n._)("p",null,"Empty File",-1))),Rs=[Ys];function Us(e,s,i,t,o,a){const l=(0,n.up)("LineOfCode");return(0,n.wg)(),(0,n.iD)("div",{id:e.panelId.toString().concat(e.title).concat(e.fileIndex.toString()),class:"code-panel-container"},[(0,n._)("div",Hs,[(0,n._)("p",Ws,(0,m.zw)(e.title),1),(0,n._)("button",{class:"collapse-button",style:{width:"10%"},onClick:s[0]||(s[0]=s=>e.$emit("toggleCollapse"))},[e.collapse?((0,n.wg)(),(0,n.iD)("img",js)):((0,n.wg)(),(0,n.iD)("img",Vs))])]),(0,n._)("div",{class:(0,m.C_)({hidden:!e.collapse})},[e.isEmpty(e.lines)?((0,n.wg)(),(0,n.iD)("div",Bs,Rs)):((0,n.wg)(),(0,n.iD)("div",qs,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.lines,((s,i)=>((0,n.wg)(),(0,n.j4)(l,{id:String(e.panelId).concat(e.title).concat(i),key:i,color:e.coloringArray[i],"is-first":e.isFirst[i],"is-last":e.isLast[i],"line-number":i+1,text:s,visible:e.collapse,onClick:s=>e.$emit("lineSelected",s,e.linksArray[i].panel,e.linksArray[i].file,e.linksArray[i].line)},null,8,["id","color","is-first","is-last","line-number","text","visible","onClick"])))),128))]))],2)],8,Es)}const Js=["id"];function Ks(e,s,i,t,o,a){return(0,n.wg)(),(0,n.iD)("div",{class:(0,m.C_)([{"first-line":e.isFirst,"last-line":e.isLast,visible:e.visible},"line-wrap"]),style:(0,m.j5)({background:e.color})},[(0,n._)("pre",{id:e.text,ref:"lineRef",class:(0,m.C_)([{"match-line":"#ECECEC"!==e.color},"java"])},(0,m.zw)(e.lineNumber)+" "+(0,m.zw)(e.text),11,Js)],6)}var $s=i(5792),Gs=(0,n.aZ)({name:"LineOfCode",props:{visible:{type:Boolean,required:!0},text:{type:String,required:!0},lineNumber:{type:Number,required:!0},color:{required:!0},fileIndex:{type:Number},isFirst:{type:Boolean},isLast:{type:Boolean}},setup(e){let s=!1,i=(0,N.iH)(null);return(0,n.ic)((()=>{e.visible&&!s&&($s.Z.highlightElement(i.value),s=!0)})),{lineRef:i}}});const Xs=(0,l.Z)(Gs,[["render",Ks],["__scopeId","data-v-9fe1d740"]]);var Qs=Xs,ei=(0,n.aZ)({name:"CodePanel",components:{LineOfCode:Qs},props:{title:{type:String},fileIndex:{type:Number},lines:{type:Array,required:!0},matches:{type:Array},panelId:{type:Number},collapse:{type:Boolean}},setup(e){const s=(0,N.iH)({}),i=e=>0===e.length||e.every((e=>!e.trim())),t=(0,N.iH)({}),n=(0,N.iH)({}),o=(0,N.iH)({});e.matches.forEach((e=>{for(let i=e.start;i<=e.end;i++)s.value[i]=e.color,t.value[i]={panel:e.linked_panel,file:e.linked_file,line:e.linked_line};o.value[e.start]=!0,n.value[e.end]=!0}));for(let a=0;a<e.lines.length;a++)s.value[a]||(s.value[a]="#FFFFFF",t.value[a]="-1",o.value[a]=!1,n.value[a]=!1);return{coloringArray:s,linksArray:t,isFirst:o,isLast:n,isEmpty:i}}});const si=(0,l.Z)(ei,[["render",Us],["__scopeId","data-v-578b2558"]]);var ii=si,ti=i(8249),ni=(0,n.aZ)({name:"FilesContainer",components:{CodePanel:ii,VueDraggableNext:ti.J},props:{containerId:{type:Number,required:!0},filesOwner:{type:String,required:!0},files:{type:Map,required:!0},matches:{type:Map,required:!0}},setup(e,{emit:s}){const i=(e,i,t,n)=>{s("lineSelected",e,i,t,n)};return{lineSelected:i}}});const oi=(0,l.Z)(ni,[["render",Ls],["__scopeId","data-v-6f052d16"]]);var ai=oi,li=i(5941),ri=(0,n.aZ)({name:"ComparisonView",components:{FilesContainer:ai,MatchTable:Ts,TextInformation:R},props:{firstId:{type:String,required:!0},secondId:{type:String,required:!0}},setup(e){const s=(0,qe.oR)(),i=(0,u.tv)();let t;if(s.state.local)try{t=zs.getComparison(Object(function(){var e=new Error("Cannot find module 'undefined'");throw e.code="MODULE_NOT_FOUND",e}()))}catch(f){i.back()}else if(s.state.zip){let i=s.getters.getComparisonFileForSubmissions(e.firstId,e.secondId);i?t=zs.getComparison(JSON.parse(i)):li.log("Could not find comparison file.")}else s.state.single&&(t=zs.getComparison(JSON.parse(s.state.fileString)));if(!t)return void li.warn("Could not build comparison file");const n=(0,N.iH)(t.filesOfFirstSubmission),o=(0,N.iH)(t.filesOfSecondSubmission),a=e=>{const s=n.value.get(e);s&&(s.collapsed=!s.collapsed)},l=e=>{const s=o.value.get(e);s&&(s.collapsed=!s.collapsed)},r=(e,s,i,t)=>{n.value.get(i)?.collapsed||a(i),document.getElementById(ws(s,i,t))?.scrollIntoView()},c=(e,s,i,t)=>{o.value.get(i)?.collapsed||l(i),document.getElementById(ws(s,i,t))?.scrollIntoView()},d=(e,s)=>{r(e,1,s.firstFile,s.startInFirst),c(e,2,s.secondFile,s.startInSecond)},m=e=>{li.log("called isAnonymous in ComparisonView"),s.state.anonymous.has(e)},p=(0,N.iH)(!0),g=()=>{p.value=!p.value};return{comparison:t,filesOfFirst:n,filesOfSecond:o,hideLeftPanel:p,store:s,toggleCollapseFirst:a,toggleCollapseSecond:l,showMatchInFirst:r,showMatchInSecond:c,showMatch:d,togglePanel:g,isAnonymous:m}}});const ci=(0,l.Z)(ri,[["render",_s],["__scopeId","data-v-0c10f37a"]]);var di=ci;const ui=e=>((0,n.dD)("data-v-3cde69de"),e=e(),(0,n.Cn)(),e),mi=ui((()=>(0,n._)("img",{alt:"JPlag",src:p},null,-1))),pi=ui((()=>(0,n._)("h1",null,"JPlag Report Viewer",-1))),gi=ui((()=>(0,n._)("h2",null,"Select an overview or comparison file or a zip to display.",-1))),fi=ui((()=>(0,n._)("div",{class:"drop-container"},[(0,n._)("p",null,"Drop a .json or .zip on this page")],-1))),hi={key:0,class:"local-files-container"},bi=ui((()=>(0,n._)("p",{class:"local-files-text"},"Detected local files!",-1)));function vi(e,s,i,o,a,l){return(0,n.wg)(),(0,n.iD)("div",{class:"container",onDragover:s[1]||(s[1]=(0,t.iM)((()=>{}),["prevent"])),onDrop:s[2]||(s[2]=(0,t.iM)(((...s)=>e.uploadFile&&e.uploadFile(...s)),["prevent"]))},[mi,pi,gi,fi,e.hasLocalFile?((0,n.wg)(),(0,n.iD)("div",hi,[bi,(0,n._)("button",{class:"local-files-button",onClick:s[0]||(s[0]=(...s)=>e.continueWithLocal&&e.continueWithLocal(...s))}," Continue with local files ")])):(0,n.kq)("",!0)],32)}var _i=i(4730),wi=i.n(_i),Si=i(6554),yi=i.n(Si),Ii=i(5941),Ci=(0,n.aZ)({name:"FileUploadView",setup(){let e;try{i(Object(function(){var e=new Error("Cannot find module '../files/overview.json'");throw e.code="MODULE_NOT_FOUND",e}())),e=!0}catch(c){Ii.log(c),e=!1}const s=()=>{Oi.push({name:"OverviewView"})},t=(e,s)=>{Oi.push({name:"ComparisonView",params:{firstId:e,secondId:s}})},n=e=>{const s=e.dir.split("/"),i=s.findIndex((e=>"submissions"===e));return s[i+1]},o=e=>{wi().loadAsync(e).then((async e=>{for(const s of Object.keys(e.files))if(/((.+\/)*)submissions\/(.+)\/(.+)/.test(s)&&!/^__MACOSX\//.test(s)){const i=yi().parse(s),t=n(i);await e.files[s].async("string").then((e=>{$e.commit("saveSubmissionFile",{name:t,file:{fileName:i.base,data:e}})}))}else await e.files[s].async("string").then((e=>{$e.commit("saveFile",{fileName:s,data:e})}));$e.commit("setLoadingType",{local:!1,zip:!0,single:!1,fileString:""}),s()}))},a=e=>{let i=JSON.parse(e);i["submission_folder_path"]?($e.commit("setLoadingType",{local:!1,zip:!1,single:!0,fileString:e}),s()):i["id1"]&&i["id2"]&&($e.commit("setLoadingType",{local:!1,zip:!1,single:!0,fileString:e}),t(i["id1"],i["id2"]))},l=e=>{let s=e.dataTransfer?.files;if(!s)return;let i=[...s];if(i.length>1||0===i.length)return;let t=new FileReader;t.onload=e=>{let s=Ss(i[0]);if("zip"===s)o(i[0]);else if("json"===s){let s=e.target?.result;if(!s)return;"string"===typeof s&&a(s)}},t.readAsText(i[0])},r=()=>{$e.commit("setLoadingType",{local:!0,zip:!1,single:!1,fileString:""}),s()};return{continueWithLocal:r,uploadFile:l,hasLocalFile:e}}});const ki=(0,l.Z)(Ci,[["render",vi],["__scopeId","data-v-3cde69de"]]);var Fi=ki;const Di=[{path:"/",name:"FileUploadView",component:Fi},{path:"/overview",name:"OverviewView",component:rs},{path:"/comparison",name:"ComparisonView",component:di,props:!0}],Mi=(0,u.p7)({history:(0,u.PO)("/JPlag"),routes:Di});var Oi=Mi;i(6233);(0,t.ri)(d).use(Oi).use($e).mount("#app")},7068:function(e,s,i){e.exports=i.p+"img/double_arrow_black_18dp.138ba432.svg"},689:function(e,s,i){e.exports=i.p+"img/double_arrow_black_24dp.6ffebc17.svg"},164:function(e,s,i){e.exports=i.p+"img/help_outline_black_18dp.92160fb9.svg"},6838:function(e,s,i){e.exports=i.p+"img/keyboard_double_arrow_down_black_18dp.1dc03f43.svg"},5671:function(e,s,i){e.exports=i.p+"img/keyboard_double_arrow_left_black_24dp.5c0d792d.svg"},6108:function(e,s,i){e.exports=i.p+"img/keyboard_double_arrow_up_black_18dp.5defbec8.svg"},5174:function(e,s,i){e.exports=i.p+"img/logo-nobg.fe65cd9a.png"}},s={};function i(t){var n=s[t];if(void 0!==n)return n.exports;var o=s[t]={exports:{}};return e[t](o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(s,t,n,o){if(!t){var a=1/0;for(d=0;d<e.length;d++){t=e[d][0],n=e[d][1],o=e[d][2];for(var l=!0,r=0;r<t.length;r++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](t[r])}))?t.splice(r--,1):(l=!1,o<a&&(a=o));if(l){e.splice(d--,1);var c=n();void 0!==c&&(s=c)}}return s}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,n,o]}}(),function(){i.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(s,{a:s}),s}}(),function(){i.d=function(e,s){for(var t in s)i.o(s,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){i.p="/JPlag/"}(),function(){var e={143:0};i.O.j=function(s){return 0===e[s]};var s=function(s,t){var n,o,a=t[0],l=t[1],r=t[2],c=0;if(a.some((function(s){return 0!==e[s]}))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(r)var d=r(i)}for(s&&s(t);c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},t=self["webpackChunkreport_viewer"]=self["webpackChunkreport_viewer"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var t=i.O(void 0,[998],(function(){return i(7147)}));t=i.O(t)})();
//# sourceMappingURL=app.1c122f79.js.map