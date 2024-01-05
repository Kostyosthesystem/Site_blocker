        function checkPassword() {
            var password = document.getElementById("passwordInput").value;
            if (password === "989") {
                document.body.style.display = "none";
            } else {
                document.getElementById("passwordInput").value = "";
                alert("lol.");
