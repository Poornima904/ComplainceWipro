sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        AuditLog1: function(oEvent) {
            debugger
            MessageToast.show("Custom handler invoked.");
            var cdialog = new sap.m.Dialog({
                title: "AuditLog",
                endButton: new sap.m.Button({
                  text: "Close",
                  press: async function () {
                    cdialog.close();
                  },
                  layoutData: new sap.m.FlexItemData({
                    growFactor: 5,
                    alignSelf: "End" 
                  })
                })
              });
              cdialog.addContent(new sap.m.VBox({
                width: "50vw"
              }));

              function generateUniqueId() {
                // Generate a random number
                var randomNumber = Math.floor(Math.random() * 1000000);

                // Get the current timestamp
                var timestamp = new Date().getTime();

                // Combine timestamp and random number to create a unique ID
                var uniqueId = timestamp + '-' + randomNumber;

                return uniqueId;
            }
            var oTimelineItem = new sap.suite.ui.commons.TimelineItem(("thisuniqid1" + generateUniqueId()), {
                dateTime: "12/6/24",
                title: "title of the log",
                userNameClickable: false,
                // userNameClicked: "onUserNameClick",
                // select: "onPressItems",
                userPicture: "Photo",
                text: 'log1',
                // userName: "Comments"
            
            });
            cdialog.addContent(oTimelineItem);
            cdialog.open();

        }
    };
});
