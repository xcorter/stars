/**
 * Created by fs on 04.05.16.
 */
Timer = function() {

    var period, timer;

    function getPeriod() {
        return period;
    }

    function incrementTimer() {
        timer += (period / 1000);
    }

    function getTime() {
        return timer;
    }

    /**
     * @param periodParam time in miliseconds
     */
    function init(periodParam) {
        period = periodParam;
        timer = 0.00;
    }

    return {
        init: init,
        getPeriod: getPeriod,
        incrementTimer: incrementTimer,
        getTime: getTime
    }
}();