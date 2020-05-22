#!/usr/bin/env node
const program = require("commander");
const { addCustomer, findCustomer,updateCustomer,deleteCustomer,findAllCustomer } = require("./index");
const {prompt}=require("inquirer");

const questions = [
    {
        type: "input",
        name: "firstname",
        message:"first name"
    },
    {
        type: "input",
        name: "lastname",
        message:"last name"
    },
    {
        type: "input",
        name: "phone",
        message:"phone"
    },
    {
        type: "input",
        name: "emial",
        message:"emial"
    }
];

const questionsFind = [
    {
        "type": "input",
        "name": "name",
        "message":"name"
    }
];

program.version("1.0.0")
    .description("自定义命令行界面")

program
    .command('add')
    .alias("a")
    .description("添加用户")
    .action(() => { 
        prompt(questions)
            .then(answers => addCustomer(answers));
    })

program
    .command("find <name>")
    .alias("f")
    .description("查找用户")
    .action((name) => { 
        findCustomer(name);
    })


//test
program.parse(process.argv);