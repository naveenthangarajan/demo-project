function create_sample_table(parentNode, head, body, foot, data) {
    if (typeof head == "undefined") {head = true;}
    if (typeof body == "undefined") {body = true;}
    if (typeof foot == "undefined") {foot = true;}
    if (!data) {
        
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then((data1)=>{
                var data=data1;
                console.log(data);
            })
        }
    var table = document.createElement("table");
    var tr, th, td;
    // header
    tr = document.createElement("tr");
    var headers = data.head || [];
    for (var i=0;i<headers.length;i++) {
        th = document.createElement("th");
        th.innerHTML = headers[i];
        tr.appendChild(th);
    }
    if (head) {
        var thead = document.createElement("thead");
        thead.appendChild(tr);
        table.appendChild(thead);
    } else {
        table.appendChild(tr);
    }
    // end header

    // body
    var table_body = data.body || [];
    if (body) {
        var tbody = document.createElement("tbody");
    }
    for (var i=0;i<table_body.length;i++) {
        tr = document.createElement("tr");
        for (var j=0;j<table_body[i].length;j++) {
            td = document.createElement("td");
            td.innerHTML = table_body[i][j];
            tr.appendChild(td);
        }
        if (body) {
            tbody.appendChild(tr);
        } else {
            table.appendChild(tr);
        }
    }
    if (body) {
        table.appendChild(tbody);
    }
    // end body

    // footer
    if (foot) {
        var tfoot = document.createElement("tfoot");
        tr = document.createElement("tr");
        var footer = data.foot || [];
        for (var i=0;i<footer.length;i++) {
            th = document.createElement("th");
            th.innerHTML = footer[i];
            tr.appendChild(th);
        }
        tfoot.appendChild(tr);
        table.appendChild(tfoot);
    }
    // end footer

    if (parentNode) {
        parentNode.appendChild(table);
    }
    //return table;
}
