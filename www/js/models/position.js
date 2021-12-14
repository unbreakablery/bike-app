"use strict";

import m from "mithril";

const position = {
    currentPosition: {},
    options: {
        frequency: 3000
    },
    watchID: null,

    getPosition: function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position.geoSuccess,
                position.geoError
            );
        }
    },

    watch: function() {
        if (navigator.geolocation) {
            position.watchID = navigator.geolocation.watchPosition(
                position.geoSuccess,
                position.geoError,
                position.options
            );
        }
    },

    geoSuccess: function(pos) {
        position.currentPosition = pos.coords;
        m.redraw();
    },

    geoError: function(error) {
        console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
};

export default position;
