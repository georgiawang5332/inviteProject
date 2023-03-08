var app = {
    submitForm: function (event) {
        "use strict";

        var b = document.getElementById("theButton"),
            thank = document.getElementById("thankyou"),
            isComing = document.getElementById("comingYes").checked === true,
            isBringing = document.getElementById("bringingYes").checked === true,
            // ispersonalinfo = document.getElementById("personalinfoYes").checked === true,
            names = document.getElementById("persons").value.trim(),
            message = "",
            inputs = document.getElementsByTagName("input");

        event.preventDefault();

        b.innerHTML = "發送中...";
        window.setTimeout(function () {
            b.innerHTML = "謝謝";
            b.className += " 發送";

            if (!isComing) {
                message = "無法出席，獻上最誠摯的祝福給這對佳偶 :)";
            } else if(isComing) {

                // if (!isBringing) {
                //     message = "未攜伴參加，一位賓客! :)";
                // } else if (names !== "") {
                //     message = "您與您的家人朋友" + names.split(", ").join(" and ") + " 18號 不見不散!";
                // } else {
                //     message = "沒加入家人朋友姓名嗎? 不管如何都歡迎，後續再跟您索取資訊，感恩。";
                // }
            }
            thank.innerHTML = message;

            for (var i = 0; i < inputs.length; i += 1) {
                inputs[i].setAttribute("disabled", true);
            }
        }, 900);
    },

    init: function () {
        "use strict";
        document.getElementById("theForm").onsubmit = app.submitForm;
    }
};

app.init();
