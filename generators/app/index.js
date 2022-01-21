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
            },
            {
                type: 'list',
                name: 'aws_service',
                message: 'Which AWS service do you want to use?',
                choices: [
                    {
                        name: 'AWS-lambda',
                        value: 'aws-lambda'
                    }
                ]
            }
        ])

        if (this.answer.aws_service === 'aws-lambda') {
            this.lambda = await this.prompt([
                {
                    type: 'input',
                    name: 'function_name',
                    message: 'What is the name of the lambda-function?',
                    default: this.appname
                },
                {
                    type: 'input',
                    name: 'handler_name',
                    message: 'What is the name of the lambda-handler?',
                    default: this.appname
                },
                {
                    type: 'list',
                    name: 'runtime',
                    message: 'What is the name of the lambda-runtime?',
                    choices: [
                        {
                            name: 'nodejs',
                            value: 'nodejs'
                        },
                        {
                            name: 'python',
                            value: 'python'
                        }
                    ]
                }
            ])
        }
    }

    writing() {
        this.log("Hold Tight!!! We are generating a scaffold project for ", this.answer.name);


        if (this.answer.aws_service === 'aws-lambda') {
            this.fs.copyTpl(
                `${this.templatePath()}/modules/aws-lambda/*tf`,
                this.destinationPath(`${this.answer.name}/modules/aws-lambda/`),
                {
                    lambda_function_name: this.lambda.function_name,
                    lambda_handler: this.lambda.handler_name,
                    lambda_runtime: this.lambda.runtime
                }
            )
        }
        this.fs.copyTpl(
            `${this.templatePath()}/*tf`,
            this.destinationRoot(this.answer.name)
        );
    }
};

