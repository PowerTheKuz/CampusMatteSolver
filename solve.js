function getAll(){
    var opgs = document.getElementsByClassName('chapter-link partial-href');  
    return opgs 
};

function getAnswer(){
    var t = {answers: []};
    if (n.data.answer){
        if (n.data.answer.words.length > 0){
            for (s = 0;s < n.data.answer.words.length; s++){
                t.answers.push(String(n.data.answer.words[s].word));
            };
        };
        if (n.data.answer.formulas.length > 0){
            for (s = 0;s < n.data.answer.formulas.length; s++){
                t.answers.push(String(n.data.answer.formulas[s].formula));
            };
        };
        if (n.data.answer.numbers.length > 0){
            for (s = 0;s < n.data.answer.numbers.length; s++){
                t.answers.push(String(n.data.answer.numbers[s].number));
            };
        };
    }
    if (n.data.answers > 0){
        for (s = 0;s < n.data.answers.length; s++){
            t.answers.push(String(n.data.answers[s]));
        };
    }
    return JSON.stringify(t);
};

function getInfo(){
    url = document.URL.split('/');
    last = url[url.length - 1];

    var Id = last.split('?')[0];
    var taskId = window.getParameterByName('taskId');
    var assignmentId = window.getParameterByName('assignmentId');
    var subId = global.subjectId;

    return [Id, taskId, assignmentId, subId];
};

function postAnswer(){
    var info = getInfo();

    var data = {
        assignmentId: info[2],
        answer: getAnswer(),
        assignmentNodeId: info[1],
        result: 100,
        latency: 100
    };

    var r = $.post('/Assignment2/StoreAssignment/' + String(info[3]), data);
    console.log(r);
};

function solve(){
    if (document.getElementsByClassName('success response')[0].getAttribute('style') != null){
        return
    }
    postAnswer();
};
