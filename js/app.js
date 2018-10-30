var testController;

testController = function($scope, $rootScope) {
  var end, returnToQuestion, setQuestionWithChosen, setStartState, showAnswers, showErrorInfo, showNextQuestion, showPreviousQuestion, goBack,vm;
  returnToQuestion = function() {
    vm.questionMode = true;
    vm.answerMode = false;
    return vm.currentQuestionID = 1;
  };
  end = function(questionID) {
    vm.questionMode = false;
    console.log(vm.questions);
    console.log(vm.myAnswer);
    for(i=0;i<vm.myAnswer.length;i++){
      if(vm.questions[i+1].answer==vm.myAnswer[i].answer){
          vm.rightQuestion++;
      }
    }
    console.log(vm.rightQuestion);
    return vm.answerMode = true;
  };
  showErrorInfo = function(state) {
    if (state) {
      return vm.wrong = false;
    } else {
      return vm.wrong = true;
    }
  };
  goBack = function(){
    vm.questions[vm.currentQuestionID].start = false;
  }
  setStartState = function(questionID) {
    vm.questions[questionID].start = true;
  };
  
  showNextQuestion = function(questionID) {
    return vm.currentQuestionID = vm.questions[questionID].next;
  };
  showPreviousQuestion = function(questionID) {
    return vm.currentQuestionID = vm.questions[questionID].previous;
  };
  showAnswers = function() {};
  setQuestionWithChosen = function(questionID, option,item) {
    switch (questionID) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        vm.questions[questionID].chosen = option;
        vm.questions[questionID].answerState = true;
    }
    myChosen=option;
    myChosenDes=item;
    vm.questions[questionID].start = true;
    if (option) {
      vm.questions[questionID].right = true;
    }
    if(questionID<=vm.myAnswer.length){
      vm.myAnswer[questionID-1]={questionID:questionID,answer:myChosen,description:myChosenDes};
    }else{
      vm.myAnswer.push({questionID:questionID,answer:myChosen,description:myChosenDes});
    }
  };
  vm = this;
  vm.result = [1, 2, 3];
  vm.options = [{"A": 'Ctrl + alt + a',"B": 'Ctrl + x'},
  {"A":'Ctrl + y',"B":'Ctrl + p'},
  {"A":'F11',"B":'F5'},
  {"A":'Print Screen',"B":'Alt + Print Screen'},
  {"A":'Ctrl + Shift + Del',"B":'Ctrl + A'},
  {"A":'直接关闭电源',"B":'打开任务管理器，结束需要关闭的程序'},
  {"A":'网络连接不正常导致 ',"B":'打印机没有共享',"C":'驱动有故障',"D":'打印机数据线连接不正常',"E":'以上答案都正确'},
  {"A":'运行于windows上的可执行文件',"B":'已安装的软件快捷方式'},
  {"A":'右键网络图标---打开网络和共享中心---更改适配器配置---右键本地连接---属性---协议版本4',"B":'拔掉网线'},
  {"A":'重启打印机',"B":'打开硒鼓舱门，取出硒鼓。握住硒鼓的两端，轻轻地从前到后摇晃硒鼓 5 次，使硒鼓中的碳粉均匀分布。'},
  {"A":'安装打印机的电脑上操作开始----控制面板----打印机和传真----右击----共享',"B":'共享我的文档文件夹'}];
  vm.questions = {
    1: {
      title: '如何利用QQ快速截图？',
      options: vm.options[0],
      answer: "A",
      next: 2,
      previous: false,
      answerState: false,
      chosen: false,
      right: false,
      start: false
    },
    2: {
      title: "如何恢复上一步操作此方式与ctrl+z的功能正好相反？",
      options: vm.options[1],
      answer: "A",
      next: 3,
      previous: 1,
      answerState: false,
      chosen: false,
      right: false,
      start: false
    },
    3: {
      title: "浏览器不小心变成了全屏如何恢复？",
      options: vm.options[2],
      answer: "A",
      next: 4,
      previous: 2,
      answerState: false,
      chosen: false,
      right: false,
      start: false
    },
    4: {
      title: "如何截取当前窗口屏幕截图到剪切板？",
      options: vm.options[3],
      answer: "B",
      next: 5,
      previous: 3,
      answerState: false,
      chosen: false,
      right: false,
      start: false
    },
    5: {
      title: "如何利用快捷键清理浏览器缓存？",
      options: vm.options[4],
      answer: "A",
      next: 6,
      previous: 4,
      answerState: false,
      chosen: false,
      right: false,
      start: false
    },
    6: {
      title: "电脑程序卡死如何强行关闭程序，并不影响其他窗口操作？",
      options: vm.options[5],
      answer: "B",
      next: 7,
      previous: 5,
      answerState: false,
      chosen: false,
      right: false,
      start: false
    },
    7: {
      title: "打印机无法连接可能是由下列哪些问题引起的？",
      options: vm.options[6],
      answer: "E",
      next: 8,
      previous: 6,
      answerState: false,
      chosen: false,
      right: false,
      start: false
    },
    8: {
      title: "以exe结尾的是什么类型的文件？",
      options: vm.options[7],
      answer: "A",
      next: 9,
      previous: 7,
      answerState: false,
      chosen: false,
      right: false,
      start: false
    },
    9: {
      title: "IP地址冲突如何解决？",
      options: vm.options[8],
      answer: "A",
      next: false,
      previous: 8,
      answerState: false,
      chosen: false,
      right: false,
      start: false
    },
    10: {
      title: "激光打印机，新换的硒鼓打印出来的字颜色不均匀，如何操作？",
      options: vm.options[9],
      answer: "B",
      next: 11,
      previous: 9,
      answerState: false,
      chosen: false,
      right: false,
      start: false
    },
    11: {
      title: "打印机怎么设置共享？",
      options: vm.options[10],
      answer: "A",
      next: false,
      previous: 10,
      answerState: false,
      chosen: false,
      right: false,
      start: false
    },
  };
  vm.questionMode = true;
  vm.answerMode = false;
  vm.currentQuestionID = 1;
  vm.showNextQuestion = showNextQuestion;
  vm.showAnswers = showAnswers;
  vm.setQuestionWithChosen = setQuestionWithChosen;
  vm.setStartState = setStartState;
  vm.showPreviousQuestion = showPreviousQuestion;
  vm.returnToQuestion = returnToQuestion;
  vm.end = end;
  vm.goBack=goBack;
  vm.rightQuestion=0;
  vm.myAnswer = new Array();
  return true;
};

angular.module('test', []);

angular.module('test').controller('testController', testController);