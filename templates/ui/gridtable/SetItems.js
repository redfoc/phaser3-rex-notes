var SetItems = function (items) {
    if (items === undefined) {
        this.items.length = 0;
    } else {
        this.items = items;
    }

    var table = this.childrenMap.table;
    table.setCellsCount(this.items.length);
    table.updateTable(true);

    // Controller
    var bottomOY = table.bottomTableOY,
        topOY = table.topTableOY;
    var scroller = this.childrenMap.scroller;
    var slider = this.childrenMap.slider;
    if (scroller) {
        scroller
            .setBounds(bottomOY, topOY)
            .setValue(topOY);
        // Scroller also reflects to slider
    } else if (slider) {
        slider.setValue(0);
    } else {
        table.setTableOY(topOY);
    }
    if (slider) {
        slider.setEnable(bottomOY !== topOY);
    }
    return this;
}

export default SetItems;