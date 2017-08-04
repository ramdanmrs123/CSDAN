(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/client.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

function makeShort() {
    var longUrl = document.getElementById("longurl").value;
    var request = gapi.client.urlshortener.url.insert({
        'resource': {
            'longUrl': longUrl
        }
    });
    request.execute(function(response) {
        if (response.id != null) {
            str = "";
            str += "<div class='output' contenteditable='true' onClick='document.execCommand(&quot;selectAll&quot;,false,null)' title='Click and CTRL+C'>" + response.id + "</div>";
            document.getElementById("output").innerHTML = str;
        } else {
            alert("ERROR: creating short url \n" + response.error);
        }
    });
}

function load() {
    gapi.client.setApiKey('AIzaSyDgfMeZ39vWH1n59ZdiEJrjxggvzfBpEAI');
    gapi.client.load('urlshortener', 'v1', function() {
        document.getElementById("output").innerHTML = makeShort();
    });
}
window.onload = load;