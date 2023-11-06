const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");
const { error } = require("console");

function pwd(print) {
    print(process.cwd())
}

function date(print) {
    print(Date())
}

function echo(print, args) {
    print(args)
}

function ls(print) {
    fs.readdir(".", (error, files)=>{
        print(files.join(" "))
    })
}

function cat(print, args) {
    fs.readFile(args, "utf-8", (error, data) => {
        if (error) throw Error(error);
        print(data)
    })
}

function head(print, args) {
    fs.readFile(args, "utf-8", (error, data) => {
        if (error) throw Error(error);
        print(data.split("\n").at(0))
    });
}

function tail(print, args) {
    fs.readFile(args, "utf-8", (error, data) => {
        if (error) throw Error(error);
        print(data.split(" ").at(-1));
    });
}

function curl(print, args) {
    if(!args.startsWith("https://")) {
        args = "https://" + args;
    }
    utils.request(args, (error, response) => {
        if (error) return Error(error);
        print(response)
    });
}

module.exports = { pwd, date, echo, ls, cat, head, tail, curl};
