sap.ui.define(["sap/m/MessageToast","sap/m/Dialog","sap/m/Button","sap/m/library","sap/m/Table","sap/m/Column","sap/m/Text","sap/m/ColumnListItem","sap/ui/table/Table","sap/ui/table/Row","sap/m/Label","sap/ui/table/Column","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t,n,a,r,i,l,s,d,o,u,w,p,g){"use strict";var h=a.ButtonType;var m;return{complianceAuditLogsPress:function(e){debugger;m=new t({title:"Entity Audit Logs",verticalScrolling:true,contentHeight:"70vh",contentWidth:"70vw",beginButton:new n({type:h.Emphasized,text:"OK",press:function(e){debugger;e.getSource().getParent().close()}}),endButton:new n({text:"Close",press:function(e){debugger;e.getSource().getParent().close()}})});var a=new r({fixedLayout:"Strict"});a.addStyleClass("overflowClass");var d=new i({header:new l({text:"DateTime",textAlign:"Center"}),width:"20%",hAlign:"Center"});var o=new i({header:new l({text:"User",textAlign:"Center"}),width:"15%",hAlign:"Center"});var u=new i({header:new l({text:"Operation Type",textAlign:"Center"}),width:"15%",hAlign:"Center"});var w=new i({header:new l({text:"Entity",textAlign:"Center"}),width:"20%",hAlign:"Center"});var C=new i({header:new l({text:"Changes",textAlign:"Center"}),width:"30%",hAlign:"Center"});a.addColumn(d);a.addColumn(o);a.addColumn(u);a.addColumn(w);a.addColumn(C);let v=[];var x=new l({text:"{DateTime}"});var c=new l({text:"{User}"});var A=new l({text:"{OperationType}"});var b=new l({text:"{Entity}"});var y=new r({visible:"{= %{OperationType} === 'UPDATE' }"});var T=new i({header:new l({text:"Field"})});var f=new i({header:new l({text:"OldValue"})});var E=new i({header:new l({text:"NewValue"})});y.addColumn(T);y.addColumn(f);y.addColumn(E);let O=[];var L=new l({text:"{Field}"});var D=new l({text:"{OldValue}"});var S=new l({text:"{NewValue}"});O.push(L);O.push(D);O.push(S);var B=new s({cells:O});y.bindAggregation("items","toChanges",B);v.push(x);v.push(c);v.push(A);v.push(b);v.push(y);var F=new s({cells:v});var P=new p("Entity",g.Contains,"Compliance");a.bindAggregation("items",{path:"/EntityAuditLogs",template:F,filters:[P]});m.addContent(a);this._view.addDependent(m);m.open()}}});
//# sourceMappingURL=ComplianceAuditLogs.js.map