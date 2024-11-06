function updateWordCounter(event) {
    var maxCheck = false;
    var minCheck = false;

    if (document.getElementById("maxWordCount").value != "") {
        maxCheck = true;
    }
    if (document.getElementById("minWordCount").value != "") {
        minCheck = true;
    }

    const words = document.getElementById("textArea").value.match(/\w+(-\|'\w+)*/g);
    var maxWords = parseInt(document.getElementById("maxWordCount").value);
    var minWords = parseInt(document.getElementById("minWordCount").value);

    if (typeof words == null) {
        const words = [""];
    }

    if (!maxCheck) {
        if (words) {
            maxWords = words.length;
        } else {
            maxWords = 0;
        }
        
    }
    if (!minCheck) {
        minWords = 0;
    }

    if (minCheck) {
        if ((words) && (words.length >= minWords)) {
        document.getElementById("wordCount").style = "color: #a3be8c;";
        document.getElementById("wordCount").textContent = words.length;
        } else {
        document.getElementById("wordCount").style = "color: #bf616a;";
        if (words) {
            document.getElementById("wordCount").textContent = words.length.toString().concat(" (", (words.length - minWords).toString(), ")");
        }
        document.getElementById("wordCount").textContent = 0;
        }
    }

    if (maxCheck) {
        if ((words) && (words.length <= maxWords)) {
            document.getElementById("wordCount").style = "color: #a3be8c;";
            document.getElementById("wordCount").textContent = words.length;
        } else {
        document.getElementById("wordCount").style = "color: #bf616a;";
        }
        if (words) {
            document.getElementById("wordCount").textContent = words.length.toString().concat(" (", (maxWords - words.length).toString(), ")");
        } else {
            document.getElementById("wordCount").style = "color: #a3be8c;";
            document.getElementById("wordCount").textContent = 0;
        }
    }
    if ((!maxCheck) && (!minCheck)) {
        document.getElementById("wordCount").style = "color: #8fbcbb;";
        if (words) {
            document.getElementById("wordCount").textContent = words.length;
        } else {
            document.getElementById("wordCount").textContent = 0;
        }
        
    }
    if ((maxCheck) && (minCheck)) {
        if ((words) && (words.length >= minWords) && (words.length <= maxWords)) {
        document.getElementById("wordCount").style = "color: #a3be8c;";
        document.getElementById("wordCount").textContent = words.length;
        } else {
        document.getElementById("wordCount").style = "color: #bf616a;";
        if (words) {
            if (words.length < minWords) {
                document.getElementById("wordCount").textContent = words.length.toString().concat(" (", (words.length - minWords).toString(), ")");
            } else {
                document.getElementById("wordCount").textContent = words.length.toString().concat(" (", (maxWords - words.length).toString(), ")");
            }
        } else {
            document.getElementById("wordCount").textContent = 0;
        }
        
        }
    }
    }

document.getElementById("textArea").addEventListener("input", updateWordCounter);