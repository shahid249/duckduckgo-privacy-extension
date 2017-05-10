const Parent = window.DDG.base.View;

function Whitelist (ops) {

    this.model = ops.model;
    this.pageView = ops.pageView;
    this.template = ops.template;

    Parent.call(this, ops);

    console.log("new Whitelist");

    // bind events
    this.setup();


};

Whitelist.prototype = $.extend({},
    Parent.prototype,
    {

        _removeItem: function (e) {

            var itemIndex = $(e.target).data("item");

            this.model.removeDomain(itemIndex);
            this.rerender();

        },

        setup: function() {
            this._cacheElems('.js-whitelist', [ 'remove' ]);

            this.bindEvents([
              [this.$remove, 'click', this._removeItem]
            ]);
        },

        rerender: function() {
            this.unbindEvents();
            this._rerender();
            this.setup();
        }

    },


);

module.exports = Whitelist;