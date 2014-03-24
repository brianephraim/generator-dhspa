'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var FeatureGenerator = yeoman.generators.Base.extend({
// var FeatureGenerator = yeoman.generators.NamedBase.extend({
  // init: function () {
    // console.log('You called the feature subgenerator with the argument ' + this.name + '.');
  // },
  askFor: function () {
  	var done = this.async();

  	var prompts = [
      // {
      //   type: 'confirm',
      //   name: 'someOption',
      //   message: 'Would you like to enable this option?',
      //   default: true
      // },
      {
        type: 'input',
        name: 'featureName',
        message: 'What do you want to call this feature?',
        default: 'testFeature'
      }
    ];



    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;
      this.featureName = props.featureName;
      var dash = function(string){
        return string + '-';
      };
      this.featureNameDashed = dash(props.featureName);

      done();
    }.bind(this));
  },
  routes: function(){
  	var jsonPath = this.dest._base+'/app/config/routes.json';
  	var parsedJSON = require(jsonPath);
  	var self = this;
  	parsedJSON[0].subRoutes.push({
		"routeName":this.featureName,
		"bundle":this.featureName,
		"viewElm":"basexView"
	})
  	
  	// this['remove'](jsonPath)
  	this.dest['delete'](jsonPath)
  	this.write(jsonPath,JSON.stringify(parsedJSON, null, 4))
  	
  	console.log('////////')
  	console.log('////////')
  	console.log('////////')
  	console.log('////////')
  	console.log('////////')
  	console.log('////////')
  	console.log(1)
  	console.log('////////')
  	console.log('////////')
  	console.log('////////')
  	console.log('////////')
  	console.log('////////')
  	console.log('////////')
  },
  files: function () {
    var fs = require('fs');
	console.log(fs.readdirSync('./'))
	console.log('zxcvzxcv')
	console.log(this.sourceRoot())
	  // this.template('2013-11-12-<%= widgetNameAllLower %>.md','2013-11-12-<%= widgetNameAllLower %>.md');
	  // this.template('css/app.css','css/app.css');
	  // this.template('css/reset.css','css/reset.css');
	  // this.template('css/<%= widgetNameAllLower %>.css','css/<%= widgetNameAllLower %>.css');
	  // this.template('index-async.html','index-async.html');
	  // this.template('index.html','index.html');
	  // this.template('js/app.js','js/app.js');
	  // this.template('js/<%= widgetNameAllLower %>.js','js/<%= widgetNameAllLower %>.js');

	  //this.copy('_package.json', 'package.json');
	  //this.copy('_bower.json', 'bower.json');
	  var stuffDir = this.sourceRoot()+'/feature';

	  
	  var getFolderContentArray = function(dir){
	    var a = [];
	    pushToArrayWithRecurs(dir)
	    
	    function pushToArrayWithRecurs(someDir){
	      var someDirContents = fs.readdirSync(someDir);
	      for(var i=0,l=someDirContents.length;i<l;i++){
	        if(someDirContents[i] !== '.DS_Store'){
	          var someDirItem = someDir + '/' + someDirContents[i];
	          var isDir = fs.lstatSync(someDirItem).isDirectory();
	          if(isDir){
	            pushToArrayWithRecurs(someDir + '/' + someDirContents[i])
	          } else {
	            //console.log(someDirItem.replace(dir+'/',''))
	            a.push(someDirItem.replace(dir+'/',''))
	            //a.push(someDirItem.replace(dir+'/',''))
	          }
	        }
	        
	      }
	    }
	    return a;
	  }
	  var filesArray = getFolderContentArray(stuffDir);
	  console.log(filesArray)
	  // var moment = require('moment')

	  for(var i=0,l=filesArray.length;i<l;i++){
	    var source = 'feature/'+filesArray[i];
	    console.log(source)
	    
	    var dest = (filesArray[i]).replace('feature',this.featureName);
	    dest = 'app/features/' + this.featureName + '/' + dest;
	  //   // .replace('widgetYYYY-MM-DD',moment(new Date()).format("YYYY-MM-DD"));
	  //   dest = dest === '_bower.json' ? 'bower.json' : dest;
	  //   dest = dest === '_package.json' ? 'package.json' : dest;
	  //   dest = dest === '_gitignore' ? '.gitignore' : dest;
	  //   dest = dest === '_bowerrc' ? '.bowerrc' : dest;
	  //   if(dest.indexOf('-notemplate') !== -1){
	  //     dest = dest.replace('-notemplate','');
	  //     console.log('------ '+dest)
	  //     this.copy(source,dest);
	  //   } else {
	      this.template(source,dest);
	  //   }
	  }
  }
});

module.exports = FeatureGenerator;





