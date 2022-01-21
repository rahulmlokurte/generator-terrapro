const Generator = require('yeoman-generator');
const path = require("path");
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
        this.log("Hold Tight!!! We are generating a scaffold project for ", this.answer.name);

        this.fs.copyTpl(
            `${this.templatePath()}/*tf`,
            this.destinationRoot()
        );
    }
};

