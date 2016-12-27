'use strict';
const path = require('path');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
	
		writing(){

			this.fs.copy(
			this.templatePath(),
			this.destinationPath('simpleJQueryUIStarter'),
			{ title: 'Templating with Yeoman' });
			
		}
	
}
