(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            
            element.querySelector("#visitSiteButton").addEventListener("click", function () {
                var siteUri = new Windows.Foundation.Uri('http://codebits.eu');

                Windows.System.Launcher.launchUriAsync(siteUri);
            });

            var badgesListView = element.querySelector("#badgesListView").winControl;
            badgesListView.oniteminvoked = this._itemInvoked.bind(this);
        },

        _itemInvoked: function(args) {
            var selectedItem = Data.allBadges.getAt(args.detail.itemIndex);

            WinJS.Navigation.navigate("/pages/detail/detail.html", 
                { item: selectedItem });
        }
    });
})();
