
let Ship = function(num, orientation) {
    let ship = {};
    const SHIP_TYPES = ["SUBMARINE", "DESTROYER", "PATROLLER",  "BATTLESHIP", "CARRIER"];

    function setShipType() {
        if(num < 2) {
            return;
        } else {
            ship.shipType = SHIP_TYPES[num - 2];
        }
    }

    function _init() {
        setShipType();
        ship.shipOrientation = orientation;
        ship.shipBody = Array.apply(null, Array(num));


        ship.hit = function hit(tileNum) {
            ship.shipBody[tileNum] = 'HIT';
        }

        ship.isSunk = function isSunk() {
            for(let i = 0; i < ship.shipBody.length; i++) {
                let shipTile = ship.shipBody[i];
                if(shipTile == undefined || shipTile != 'HIT') {
                    return false;
                }
            }

            return true;
        }
    }

    _init();

    return ship;
};

module.exports = Ship;