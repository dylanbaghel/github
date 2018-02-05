function getProfile(e) {
    var msg;
    e.preventDefault();
    e.preventDefault();
    console.log('Fetching....');
    var username = document.getElementById('username').value;
    if (!username || username == '') {
       username = 'dylanbaghel';
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var user = JSON.parse(xhttp.responseText);
            document.getElementById('profile').innerHTML = `<div class="card">
                                                                    <div class="card card-header">
                                                                        <h3 class="card-title">${user.name}</h3>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <div class="row">
                                                                            <div class="col-md-3">
                                                                                <img src="${user.avatar_url}">
                                                                            </div>
                                                                            <div class="col-md-9">
                                                                                <span class="badge badge-primary">Public Repos                                                                                              ${user.public_repos}</span>
                                                                                <span class="badge badge-danger">Public Repos                                                                                              ${user.public_gists}</span>
                                                                                <br><br>
                                                                                <ul class="list-group">
                                                                                    <li class="list-group-item">Website: <a href="${"http://" + user.blog}" target="_blank">${user.blog}</a></li>
                                                                                    <li class="list-group-item">Email: ${user.email}</li>
                                                                                    <li class="list-group-item">Location: ${user.location}</li>
                                                                                </ul><br><br>
                                                                                <a class="btn btn-primary" href="${user.html_url}"                                                                                       target="_blank">Visit User</a>
                                                                            </div>
                                                                        </div>
                                                                     </div>
                                                                 </div>`;
            var msg = document.getElementById('msg');
            msg.innerHTML = "";
            msg.className = "";
        }

        if (xhttp.status == 404) {
            var msg = document.getElementById('msg');
            msg.innerHTML = "Not Found";
            msg.className = "alert alert-danger";
        }

    }
    xhttp.open('GET', 'https://api.github.com/users/' + username, true);
    xhttp.send();

}

document.getElementById('userform').addEventListener('submit', getProfile, false);