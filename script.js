//logic
(function () {
    let tblArr = ['key', 'value', 'type', 'optional', 'sample', 'description'];
    let objLeft = document.getElementById('left');
    let objRight = document.getElementById('right');

    for (var x in data) {
        if (x !== 'apis') {
            elemById(x, data[x]);
        } else {
            createElem({
                elem: 'div',
                html: `<a href="#api_name">API Summary</a>`,
                parent: objLeft
            });
            for (var y in data[x]) {
                let id = 'anchor_' + data[x][y].name.replace(/ /g, '_');
                createElem({
                    elem: 'div',
                    html: `<a href="#${id}" onclick="activate(this)">${data[x][y].name}</a>`,
                    parent: objLeft
                });

                //name
                let tname = createElem({
                    id: id,
                    elem: 'div',
                    class: 'name',
                    html: data[x][y].name,
                    parent: objRight
                });
                //description
                let tdescription = createElem({
                    elem: 'div',
                    class: 'desc',
                    html: data[x][y].description,
                    parent: objRight
                });

                //box
                let box = createElem({
                    elem: 'div',
                    class: 'box',
                    parent: objRight
                });

                //path and method 
                let pathMethodBox = createElem({
                    elem: 'div',
                    class: 'pathMethodBox',
                    parent: box
                });
                let method = createElem({
                    elem: 'span',
                    class: 'method',
                    parent: pathMethodBox,
                    html: data[x][y].method
                });
                let path = createElem({
                    elem: 'span',
                    class: 'path',
                    parent: pathMethodBox,
                    html: data[x][y].path
                });

                //headers
                let headerCont = createElem({
                    elem: 'div',
                    class: 'headerCont',
                    html: 'Headers',
                    parent: box
                });
                let headerTable = createElem({
                    elem: 'table',
                    class: 'headerTable',
                    parent: box,
                    attr: {
                        border: '1'
                    }
                });
                let headerThead = createElem({
                    elem: 'thead',
                    parent: headerTable,
                    html: `<tr><th>Key</th><th>Value</th><th>Type</th><th>Optional</th><th>Sample</th><th>Description</th></tr>`
                });
                let headerTbody = createElem({
                    elem: 'tbody',
                    parent: headerTable
                });
                for (var t in data[x][y].headers) {
                    let tr = createElem({
                        elem: 'tr',
                        parent: headerTbody
                    });
                    for (var r in tblArr) {
                        createElem({
                            elem: 'td',
                            parent: tr,
                            html: strClean(data[x][y].headers[t][tblArr[r]])
                        });
                    }
                }

                //body
                let bodyCont = createElem({
                    elem: 'div',
                    class: 'bodyCont',
                    html: 'Body',
                    parent: box
                });
                let bodyTable = createElem({
                    elem: 'table',
                    class: 'bodyTable',
                    parent: box,
                    attr: {
                        border: 1
                    }
                });
                let bodyThead = createElem({
                    elem: 'tbody',
                    parent: bodyTable,
                    html: `<tr><th>Key</th><th>Value</th><th>Type</th><th>Optional</th><th>Sample</th><th>Description</th></tr>`
                });
                let bodyTbody = createElem({
                    elem: 'tbody',
                    parent: bodyTable
                });
                for (var t in data[x][y].body) {
                    let tr = createElem({
                        elem: 'tr',
                        parent: bodyTbody
                    });
                    for (var r in tblArr) {
                        createElem({
                            elem: 'td',
                            parent: tr,
                            html: strClean(data[x][y].body[t][tblArr[r]])
                        });
                    }
                }

                // response
                let responseCont = createElem({
                    elem: 'div',
                    class: 'responseCont',
                    html: 'Sample Response',
                    parent: box
                });
                let responseTable = createElem({
                    elem: 'table',
                    class: 'responseTable',
                    parent: box,
                    attr: {
                        border: '1'
                    }
                });
                let responseContent = createElem({
                    elem: 'tbody',
                    class: 'responseContent',
                    parent: responseTable,
                    html: '<pre>' + JSON.stringify(data[x][y].response, null, 4) + '</pre>'
                });




            }
        }
    }
})();
//functions
function elemById(id, html) {
    document.getElementById(id).innerHTML = html;
}
function createElem(o) {
    let obj = document.createElement(o.elem);
    if (o.class) {
        obj.classList.add(o.class);
    }
    if (o.html) {
        obj.innerHTML = o.html;
    }
    if (o.attr) {
        for (var x in o.attr) {
            obj.setAttribute(x, o.attr[x]);
        }
    }
    if (o.id) {
        obj.id = o.id;
    }
    o.parent.appendChild(obj);
    return obj;
}
function strClean(str) {
    return str.replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}
function activate(o) {
    let el = document.getElementsByTagName('a');
//    for (var x in el) {
    for (var i = 0; i < el.length; i++) {
        el[i].classList.remove('active');
        console.log(el[i]);
    }
    o.classList.add('active');
}