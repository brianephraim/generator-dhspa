'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var FeatureGenerator = yeoman.generators.Base.extend({
// var FeatureGenerator = yeoman.generators.NamedBase.extend({
  // init: function () {
    // console.log('You called the feature subgenerator with the argument ' + this.name + '.');
  // },
  killLiveGrunt:function(){
  	var path = this.dest._base+'/app/generated/utility/gruntreset.txt';
  	this.dest['delete'](path)
  	this.write(path,new Date())
  },
  askFor: function () {
  	var done = this.async();

  	var prompts = [
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
        return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      };
      this.featureNameDashed = dash(props.featureName);

      done();
    }.bind(this));
  },

  files: function () {
    var fs = require('fs');

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

	  for(var i=0,l=filesArray.length;i<l;i++){
	    var source = 'feature/'+filesArray[i];
	    
	    var dest = (filesArray[i]).replace('feature',this.featureName);
	    dest = 'app/features/' + this.featureName + '/' + dest;
	 
	    this.template(source,dest);
	  }
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
  	
  	this.dest['delete'](jsonPath)
  	this.write(jsonPath,JSON.stringify(parsedJSON, null, 4))

  	this.on('end', function () {
	  this.installDependencies({
	    skipInstall: this.options['skip-install'],
	    callback: function () {
	      this.spawnCommand('grunt', ['myTemplates:all','routesAndRequireConfigTasksDev']);
	    }.bind(this) // bind the callback to the parent scope
	  });
	});
  }
});

module.exports = FeatureGenerator;





