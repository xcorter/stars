/**
 * Created by fs on 04.05.16.
 */
Text = function() {
    /**
     * @type {*[]}
     */
    var frames = [
        {
            beginTime: 10,
            endTime: 20,
            text: "Только звезды помнят",
            display: false,
            top: 20,
            left: 0
        },
        {
            beginTime: 12,
            endTime: 20,
            text: "сотворенине мира",
            display: false,
            top: 150,
            left: 0
        },
        {
            beginTime: 25,
            endTime: 35,
            text: "Помнят и отражают",
            display: false,
            top: 20,
            left: 0
        },
        {
            beginTime: 27,
            endTime: 35,
            text: "каждую страницу теогонии",
            display: false,
            top: 150,
            left: 0
        },
        {
            beginTime: 40,
            endTime: 50,
            text: "Их блеском доносится",
            display: false,
            top: 20,
            left: 0
        },
        {
            beginTime: 45,
            endTime: 55,
            text: "гордыня кассиопеи",
            display: false,
            top: 150,
            left: 0
        },
        {
            beginTime: 52,
            endTime: 60,
            text: "ярость нереид",
            display: false,
            top: 20,
            left: 0
        },
        {
            beginTime: 57,
            endTime: 67,
            text: "страх Кефея",
            display: false,
            top: 150,
            left: 0
        },
        {
            beginTime: 63,
            endTime: 75,
            text: "слезы Андромеды",
            display: false,
            top: 20,
            left: 0
        },
        {
            beginTime: 80,
            endTime: 120,
            text: "Ты услышишь их",
            display: false,
            top: 20,
            left: 0
        },
        {
            beginTime: 85,
            endTime: 120,
            text: "очень скоро...",
            display: false,
            top: 150,
            left: 0
        }
    ],
        viewer = null;

    /**
     * @param frame
     */
    function renderFrame(id, frame) {
        if (frame.display) {
            return;
        }
        var nodeId = 'frameViewer' + id;
        if (!frame.hasOwnProperty('viewer')) {
            var style = createTextStyle(frame);
            $('body').append('<div id="' + nodeId + '" class="frame" ' + style + '></div>');
            viewer = $('#' + nodeId);
            viewer.text(frame.text);
            frame.viewer = viewer;
        }
        frame.viewer.show();
        frame.display = true;
    }

    /**
     * @param frame
     */
    function hideFrame(frame) {
        if (!frame.display) {
            return;
        }
        if (frame.hasOwnProperty('viewer')) {
            frame.viewer.hide();
        }
        frame.display = false;
    }

    function createTextStyle(frame) {
        return "style='top: " + frame.top + 'px; left: ' + frame.left + "px;'";

    }

    /**
     * @param time
     */
    function setFrame(time) {
        for (var i = 0; i < frames.length; i++) {
            if (frames[i].beginTime < time && frames[i].endTime > time) {
                renderFrame(i, frames[i]);
            } else {
                hideFrame(frames[i]);
            }
        }
    }


    return {
        setFrame: setFrame
    }
}();