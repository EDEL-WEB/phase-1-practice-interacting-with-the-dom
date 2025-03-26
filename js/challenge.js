document.getElementById("minus").onclick = function() {
    var count = document.getElementById("count").innerHTML;
    count--;
    document.getElementById("count").innerHTML = count;
    };
document.getElementById("plus").onclick = function() {
    var count = document.getElementById("count").innerHTML;
    count++;
    document.getElementById("count").innerHTML = count;
    }
    document.getElementById("heart").onclick = function() {
        var count = document.getElementById("count").innerHTML;
        var likes = document.querySelector(".likes");
        var li = document.createElement("li");
        li.innerHTML = count + " has been liked";
        likes.appendChild(li);
    }
    document.getElementById("pause").onclick = function() {
        var pause = document.getElementById("pause");
        if (pause.innerHTML == "pause") {
            clearInterval(interval);
            pause.innerHTML = "resume";
        } else {
            interval = setInterval(function() {
                var count = document.getElementById("count").innerHTML;
                count++;
                document.getElementById("count").innerHTML = count;
            }, 1000);
            pause.innerHTML = "pause";
        }
    }

