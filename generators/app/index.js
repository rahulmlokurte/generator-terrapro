const Generator = require('yeoman-generator');
yosay = require('yosay');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    async prompting() {
        this.log(
            yosay(
                'Welcome to the Terraform project generator'
            )
        )

        this.answer = await this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your project?',
                default: this.appname
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is the description of your project?',
                default: 'A Terraform project'
            }
        ]);
    }

    writing() {
        this.log("The Project name is: ", this.answer.name);
        this.log("The description of project is: ", this.answer.description);
    }
};

