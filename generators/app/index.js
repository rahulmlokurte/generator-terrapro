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
    }
};

