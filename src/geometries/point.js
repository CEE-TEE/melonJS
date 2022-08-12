/**
 * @classdesc
 * represents a point in a 2d space
 */
class Point {
    constructor(x = 0, y = 0) {
        /**
         * the position of the point on the horizontal axis
         * @public
         * @type {Number}
         * @default 0
         */
        this.x = x;

        /**
         * the position of the point on the vertical axis
         * @public
         * @type {Number}
         * @default 0
         */
        this.y = y;
    }

    /** @ignore */
    onResetEvent(x = 0, y = 0) {
       this.x = x;
       this.y = y;
    }

    /**
     * clone this Point
     * @name clone
     * @returns {Point} new Point
     */
    clone() {
        return new Point(this.x, this.y);
    }
}
export default Point;
