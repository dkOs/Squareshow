// ***************************************************************
// author : Ben Dakhlia
//
// History
//      2013.01.10 First version of the plugin
//
// ***************************************************************

(function ($) {
    $.fn.squaredshow = function (options) {

        var defaults = {
            nbrLines: 2,
            imgUrl: [''],
            colors : [
                '#142A06',
                '#437E4C',
                '#869956',
                '#B08F42',
                '#B46839',
                '#A43941',
                '#BB426B',
                '#8A2F5C',
                '#6D416D',
                '#413264',
                '#5690A5',
                '#2E849D',
                '#276686',
                '#23436E'
            ],
            imgWidth: 50,
            titleMsg: '',
            titlePosition: 'left',
            titleMargin: 20,
            titleFontSize: 40,
            annimation: false,
            annimationInterval: 1000,
            annimationSpeed: 'fast',
            ellipsisText: "..."
        };
        var options = $.extend(defaults, options);

        return this.each(function () {
            obj = $(this);

            // DEFAULT SETTINGS    
            var nbrTilesPerLine = Math.floor(2000 / options.imgWidth);
            var currentId = $(this).attr('id');
            var divList = new Array();
            var divIndex = 0;

            // BUILDING THE SQUARESHOW
            for (var j = 0; j < options.nbrLines ; j++) {
                obj.append("<div id='target" + j + "'></div>");

                $("#target" + j).css('background-color', '#A2A2A2');
                $("#target" + j).css('width', '2000px');
                $("#target" + j).css('height', options.imgWidth + 'px');
                $("#target" + j).css('margin', '0px 0px 0px 0px');
                $("#target" + j).css('padding', '0px 0px 0px 0px');


                for (var i = 0; i < nbrTilesPerLine; i++) {
                    var rndImg = options.imgUrl[Math.floor((Math.random() * options.imgUrl.length))]; // Pick the random imageURL
                    var rndColor = options.colors[Math.floor((Math.random() * options.colors.length))]; // Pick the random color

                    var divhtml = "<div id='DIV" + j + "_" + i + "'><div id='DIV_IMG" + j + "_" + i + "'><div id='DIV_OVER" + j + "_" + i + "'></div></div>";
                    $(divhtml).appendTo("#target" + j);

                    $("#DIV" + j + "_" + i).css('border', '0px solid #FFFFFF');
                    $("#DIV" + j + "_" + i).css('color', '#000000');
                    $("#DIV" + j + "_" + i).css('background-color', rndColor);
                    $("#DIV" + j + "_" + i).css('width', options.imgWidth + 'px');
                    $("#DIV" + j + "_" + i).css('height', options.imgWidth + 'px');
                    $("#DIV" + j + "_" + i).css('position', 'relative');
                    $("#DIV" + j + "_" + i).css('display', 'inline-block');
                    $("#DIV" + j + "_" + i).css('margin', '0px 0px 0px 0px');
                    $("#DIV" + j + "_" + i).css('padding', '0px 0px 0px 0px');
                    $("#DIV" + j + "_" + i).css('overflow', 'hidden');

                    $("#DIV_IMG" + j + "_" + i).css('border', '0px solid #FFFFFF');
                    $("#DIV_IMG" + j + "_" + i).css('width', options.imgWidth + 'px');
                    $("#DIV_IMG" + j + "_" + i).css('height', options.imgWidth + 'px');
                    $("#DIV_IMG" + j + "_" + i).css('position', 'relative');
                    $("#DIV_IMG" + j + "_" + i).css('margin', '0px 0px 0px 0px');
                    $("#DIV_IMG" + j + "_" + i).css('padding', '0px 0px 0px 0px');
                    $("#DIV_IMG" + j + "_" + i).css('overflow', 'hidden');
                    $("#DIV_IMG" + j + "_" + i).css('background-image', 'url("' + rndImg + '")');
                    $("#DIV_IMG" + j + "_" + i).css('background-size', options.imgWidth + 'px ' + options.imgWidth + 'px');

                    $("#DIV_OVER" + j + "_" + i).addClass("OverBlock");
                    $("#DIV_OVER" + j + "_" + i).css('width', options.imgWidth + 'px');
                    $("#DIV_OVER" + j + "_" + i).css('height', options.imgWidth + 'px');
                    $("#DIV_OVER" + j + "_" + i).css('z-index', '99');

                    divList[divIndex] = "DIV_IMG" + j + "_" + i;
                    divIndex = divIndex + 1;

                }
            }

            if (options.titleMsg != '') {
                // force the relative elements inside the main DIV
                $("#" + currentId).css('position', 'relative');

                var divhtmltitle = "<div id='targettxt'>" + options.titleMsg + "</div></div>";
                $(divhtmltitle).appendTo("#" + currentId);

                $("#targettxt").css('font-size', options.titleFontSize + 'px');
                $("#targettxt").css('color', '#FFFFFF');
                $("#targettxt").css('font-family', 'Segoe UI Light, Segoe WP Light, Segoe UI, Helvetica, sans-serif');
                $("#targettxt").css('padding', options.titleMargin + 'px ' + options.titleMargin + 'px  ' + options.titleMargin + 'px  ' + options.titleMargin + 'px');
                $("#targettxt").css('position', 'absolute');
                $("#targettxt").css('top', '0px');
                $("#targettxt").css('left', '0px');

            }

            // Add the annimation of the tiles changing
            if (options.annimation) {
                var tid = setInterval(mycode, options.annimationInterval);
                function mycode() {
                    var rndDiv = divList[Math.floor((Math.random() * divList.length))]; // Pick the random imageURL
                    var rndImg = options.imgUrl[Math.floor((Math.random() * options.imgUrl.length))]; // Pick the random imageURL
                    $("#" + rndDiv).fadeOut("slow");
                    $("#" + rndDiv).css('background-image', 'url("' + rndImg + '")');
                    $("#" + rndDiv).fadeIn("fast");
                }
            }

        });
    };
})(jQuery);

