sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        // onPress: function(oEvent) {
        //     MessageToast.show("Custom handler invoked.");
        // },
        onAfterItemAdded: function (oEvent) {
            debugger;
            var url1 = this._view.getModel().sServiceUrl
            // var url1 = `/odata/v4/my/`
            url1 = url1.replace('/odata/v4/my/', '/odata/v4/my');
            var item = oEvent.getParameter("item");

            var _createEntity = function (item) {
                debugger;
                var bPath = item.getBindingContext().sPath;
                var data = {
                    mediaType: item.getMediaType(),
                    fileName: item.getFileName(),
                    size: item.getFileObject().size,
                    IsActiveEntity: false
                };

                var settings = {
                    // url: "/odata/v4/my/files",
                    // url: url1 + `Liability_attachments`,
                    url: url1 + bPath + "/to_EmployeeFiles",
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    data: JSON.stringify(data)
                };

                return new Promise((resolve, reject) => {
                    $.ajax(settings)
                        .done((results, textStatus, request) => {
                            resolve(results.ID);
                            debugger
                            // uid = results.ID;

                        })
                        .fail((err) => {
                            reject(err);
                        });
                });
            };

            _createEntity(item)
                .then((id) => {
                    // var url = `/odata/v4/my/files(${id})/content`;
                    var url = url1 + `/EmployeeFiles(ID=${id},IsActiveEntity=false)/content`
                    item.setUploadUrl(url);
                    var oUploadSet = this.byId("uploadSet");
                    oUploadSet.setHttpRequestMethod("PUT");
                    oUploadSet.uploadItem(item);
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        onUploadCompleted: async function (oEvent) {
            debugger
            var oUploadSet = this.byId("uploadSet");
            oUploadSet.removeAllIncompleteItems();
            oUploadSet.getBinding("items").refresh();
        },

        onRemovePressed: function (oEvent) {
            debugger
            oEvent.preventDefault();
            oEvent.getParameter("item").getBindingContext().delete();
            MessageToast.show("Selected file has been deleted");
        },

      
        //formatters
        formatThumbnailUrl: function (mediaType) {
            var iconUrl;
            debugger
            switch (mediaType) {
                case "image/png":
                    iconUrl = "sap-icon://card";
                    break;
                case "text/plain":
                    iconUrl = "sap-icon://document-text";
                    break;
                case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                    iconUrl = "sap-icon://excel-attachment";
                    break;
                case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                    iconUrl = "sap-icon://doc-attachment";
                    break;
                case "application/pdf":
                    iconUrl = "sap-icon://pdf-attachment";
                    break;
                default:
                    iconUrl = "sap-icon://attachment";
            }
            return iconUrl;
        }
    };
});



