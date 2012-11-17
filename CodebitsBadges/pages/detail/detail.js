// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/detail/detail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            var item = options.item;

            var pageTitle = element.querySelector(".titlearea .pagetitle");
            pageTitle.innerText = item.title;

            var badgeImage = element.querySelector("#badgeImage");
            badgeImage.src = item.img.replace("_normal", "_big");

            var badgeDescription = element.querySelector("#badgeDescription");
            badgeDescription.innerText = item.description;

            var badgeUserCount = element.querySelector("#badgeUserCount");
            badgeUserCount.innerText = item.usercount;
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
