sap.ui.define(["sap/m/MessageToast","sap/m/Input","sap/ui/core/Fragment"],function(e,t,a){"use strict";return{onlinkClick:function(e){debugger;var a=e.getSource();var n=a.getParent().getItems()[1];var s=new t({placeholder:"Enter Extension Date",value:"{/ExtensionDate }",width:"15%"});n.addItem(s);a.setVisible(false)}}});
//# sourceMappingURL=ExtesionReq.js.map