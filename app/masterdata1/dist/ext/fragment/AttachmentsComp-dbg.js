sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
	"sap/ui/core/Item",
	"sap/m/MessageToast"
], function(MessageToast) {
    'use strict';
	var that = this;

    return {
        onPress: function(oEvent) {
            debugger
            MessageToast.show("Custom handler invoked.");
        },
		onAfterItemAdded: function(oEvent) {
			debugger;
			var item = oEvent.getParameter("item");
		
			var _createEntity = function(item) {
				var data = {
					mediaType: item.getMediaType(),
					fileName: item.getFileName(),
					size: item.getFileObject().size
				};
		
				var settings = {
					url: "/odata/v4/my/Files",
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
						})
						.fail((err) => {
							reject(err);
						});
				});
			};
		
			_createEntity(item)
				.then((id) => {
					var url = `/odata/v4/my/Files(${id})/content`;
					item.setUploadUrl(url);
					var oUploadSet = this.byId("uploadSet");
					oUploadSet.setHttpRequestMethod("PUT");
					oUploadSet.uploadItem(item);
				})
				.catch((err) => {
					console.log(err);
				});
		},
        
			onUploadCompleted: function (oEvent) {
				var oUploadSet = this.byId("uploadSet");
				oUploadSet.removeAllIncompleteItems();
				oUploadSet.getBinding("items").refresh();
			},

			onRemovePressed: function (oEvent) {
				oEvent.preventDefault();
				oEvent.getParameter("item").getBindingContext().delete();
				MessageToast.show("Selected file has been deleted");
			},

			onOpenPressed: function(oEvent) {
				debugger;
				oEvent.preventDefault();
				var item = oEvent.getSource();
				var fileName = item.getFileName();
			
				var _download = function(item) {
					var settings = {
						url: item.getUrl(),
						method: "GET",
						headers: {
							"Content-type": "application/octet-stream"
						},
						xhrFields: {
							responseType: 'blob'
						}
					};
			
					return new Promise((resolve, reject) => {
						$.ajax(settings)
							.done((result) => {
								resolve(result);
							})
							.fail((err) => {
								reject(err);
							});
					});
				};
			
				_download(item)
					.then((blob) => {
						var url = window.URL.createObjectURL(blob);
						// Open the URL in a new tab
						window.open(url, '_blank');
					})
					.catch((err) => {
						console.log(err);
					});
			},
			

			_download: function (item) {
				var settings = {
					url: item.getUrl(),
					method: "GET",
					headers: {
						"Content-type": "application/octet-stream"
					},
					xhrFields: {
						responseType: 'blob'
					}
				}

				return new Promise((resolve, reject) => {
					$.ajax(settings)
						.done((result) => {
							resolve(result)
						})
						.fail((err) => {
							reject(err)
						})
				});
			},

			_createEntity: function (item) {
				var data = {
					mediaType: item.getMediaType(),
					fileName: item.getFileName(),
					size: item.getFileObject().size
				};

				var settings = {
					url: "/my/Files",
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					data: JSON.stringify(data)
				}

				return new Promise((resolve, reject) => {
					$.ajax(settings)
						.done((results, textStatus, request) => {
							resolve(results.ID);
						})
						.fail((err) => {
							reject(err);
						})
				})
			},

			_uploadContent: function (item, id) {
				var url = `/my/Files(${id})/content`
				item.setUploadUrl(url);
				var oUploadSet = this.byId("uploadSet");
				oUploadSet.setHttpRequestMethod("PUT")
				oUploadSet.uploadItem(item);
			},

			//formatters
			formatThumbnailUrl: function (mediaType) {
				var iconUrl;
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