---
title: "A new AWS SDK"
date: "2021-06-03"
---

Use Cloud 9 and the Rust SDK to interact with DynomoDB

In this post we will do the following:
Install the AWS Cloud9 Integrated Development Environment
Install Rust and Cargo using our Cloud9 environment




## Prerequisites

In this post I am assuming that you have an AWS account already created. Create an AWS Account. If you don’t have an account yet, visit the [**Create and activate an AWS Account Guide**](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) to create one.

In reality i am trying to present the most straightforward steps to completing these objectives. But there is a lot more involved and more that you should be aware of. Make sure you visit the Rust book, The AWS Cloud9 and DynamoDB documentation, and the basic of the bash command line (if you are not already familiar with those concepts).

## About Cloud9

The AWS Cloud9 IDE will allow us to quickly get started using AWS services. Cloud9 offers code-editing with runtime debuggers, and a built-in terminal. It contains a collection of tools that you use to code, build, run, test, and debug software, and helps us release software to the cloud.
Cloud9 is accessed through the browser, so there is no need to install an IDE and related dependencies on your own computer. Cloud9 provides ways for us to switch color themes, bind shortcut keys, and enable programming language-specific syntax coloring and code formatting.
> Much of what we do as Developers is code, build, run, test, debug, and release software.
In this post we will get a basic Cloud9 setup up and running. If you want more more information on any of the steps introduced in this post or want to see additional setup options, check out the official [**documentation for Cloud9**](https://docs.aws.amazon.com/cloud9/latest/user-guide/welcome.html).
For the purpose of our project, we will instruct AWS Cloud9 to create an Amazon EC2 instance, and then connect the environment to that newly created EC2 instance. This type of setup is called an EC2 environment.
## A note on pricing
When using a Cloud9 environment, you only pay for what you use, as you use it; there are no minimum fees and no upfront commitments. You are charged the normal AWS rates for any AWS resources that you create or use within your environment.
### Check the [**AWS Billing and Cost dashboard**](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html) frequently as you work within AWS to avoid any surprising charges.
## Setting up a Cloud9 environment
Open the AWS [**Cloud9 console**](https://console.aws.amazon.com/cloud9/)
Click on *Create environment*
Give your new Environment a name and description
Select the environment type that creates a new EC2 instance with direct access through SSH
Select the instance type that is free tier eligible
Select the Linux distribution that you want your EC2 instance to use (if unsure, select Amazon Linux 2)
Select one of the cost saving settings to suspend your instance, and associated costs, when not in use
Leave the advanced network settings to their default values
Create a tag if you would like

Once you finish the above steps, you should have a running instance of Cloud9 opened up in your browser. Next we will begin installing Rust and Cargo.

## Installing Rust and Cargo
The following steps use some commands in the terminal to install the latest stable version of the Rust compiler. The Cloud9 terminal is probably near the bottom of the screen in a *bash* tab. If you do not see the terminal, visit the [***Tour of the AWS Cloud9 page***](https://docs.aws.amazon.com/cloud9/latest/user-guide/tour-ide.html) to learn how to access the terminal.
Enter the following command into the Cloud9 terminal:
`curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh`

The command downloads a script and starts the installation of the rustup tool, which installs the latest stable version of Rust. For help with the installation process, consult the official [***guide for installing Rust**](https://doc.rust-lang.org/book/ch01-01-installation.html). 

If the install is successful, the following line will appear: “Rust is installed now. Great!”. To finish up, restart your terminal by typing `exit` and then open up a new terminal tab.

Cargo is Rust’s build system and package manager. Cargo handles a lot of tasks for you, such as building code, downloading libraries your code depends on (also called *dependencies*), and building those libraries. Check whether Cargo is installed by entering the following into your terminal:
`cargo --version`
If you see a version number, you have it! If you see an error, such as “command not found”, run the install script again and make sure there are no errors.
## Creating the Rust SDK project
To create a new rust project, enter the following command into the Cloud9 terminal:
`cargo new rust-sdk-example`
Cargo will create a folder with the same name as you specify in the *cargo new* command. Navigate to that folder using `cd rust-sdk-example` (replace rust-sdk-example with the name you gave your project).
Test out the default project by entering `cargo run` in the terminal. If the program runs successfully you should see “Hello, world” displayed. If the program did not work, check to make sure you are in the right directory by entering `pwd`.
To use the Rust AWS SDK, we must add [**Tokio**] as a dependency within your Rust project to execute asynchronous code. Rust uses a file called *Cargo.toml* to add dependencies.
Within your Cargo.toml file, immediately under *[dependencies]* add dependencies for DynamoDB and Tokio:
```
dynamodb = { git = "https://github.com/awslabs/aws-sdk-rust", tag = "v0.0.4-alpha", package = "aws-sdk-dynamodb" }
tokio = { version = "1", features = ["full"] }
```

By adding these two dependencies to the toml file, Rust will automatically install them the next time our program is run; if you enter `cargo run` once again, you can watch as the dependencies are installed.

## Installing DynamoDB
To be continued...