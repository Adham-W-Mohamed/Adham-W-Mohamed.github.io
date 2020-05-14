$(function () {
    $("#fetch").click(fetchData);
    
    
    function fetchData() {
        const id = $("#userId").val();

        fetch(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => response.json())
            .then(renderPost);
    }
    
    function renderPost(data) {
        let rawHtml = "<ul>";
        for(let inx in data){
            let row = data[inx];
            rawHtml += `<li><strong>${row.title}</strong><br/>${row.body}<br/> <input type="button" class="btnPostComment" value="Comment" postId="${inx}"></li>`;
        }
        rawHtml += "</ul>";
        $('#UserData').html(rawHtml);
    }
});