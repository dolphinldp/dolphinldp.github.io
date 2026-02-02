---
title: 2. Setting Up Document Website
slug: /assign/week01/webpage
---

# 2. Setting Up Document website

This week I will be setting up the my document website for my fabacademy project. I will be using Docusaurus framework to create the website. Docusaurus is a static site generator that is designed to make it easy to create and maintain page. I will be learning how to set up Docusaurus and how to use it to create and maintain my project documentation.

## 2.1 What is Docusaurus?

Docusaurus is a static site generator that is designed to make it easy to create and maintain documentation. It is built using React and Markdown, which makes it easy to create and maintain documentation without having to write HTML or CSS. Docusaurus also comes with a number of built-in features that make it easy to create and maintain documentation, such as a search bar, table of contents, and syntax highlighting.

<img src="https://docusaurus.io/img/week1/docusaurus_keytar.svg" alt="docusaurus" width="200"/>

## 2.2 Why use Docusaurus?

My fabacademy local instructor recommended me to use opensource framework  to create and maintain my project website. 
And I had some experience with Nodejs,HTML and CSS . Docusaurus is an opensource framewrok , and I found it to be easy to use and maintain. 


## 2.3 How to set up Docusaurus

To set up Docusaurus, you need to install Node.js and npm on your computer. For my case, I use Nodejs 20.

```bash
nvm use 20
nvm list
```

![nodejs-version](/img/week01/nodejs-version.jpg)


Once you have installed Node.js and npm, you can use the following command to install Docusaurus:

```bash
npx @docusaurus/init@latest init dolphin-liu classic
```

This command will create a new Docusaurus project in a directory called `dolphin-liu`. You can then navigate to the `dolphin-liu` directory and see the run options of  Docusaurus:

```bash
cd dolphin-liu
npm run
```
![doc-run-option](/img/week01/npm-run-option.jpg)


You can start the Docusaurus development server by running the following command:
![doc-start](/img/week01/doc-start.jpg)

This will start the Docusaurus development server, and you can view your documentation by navigating to `http://localhost:3000` in your web browser.

## 2.4 Creating and editing documentation

Once you have set up Docusaurus, you can start creating and editing your documentation. Docusaurus uses Markdown to create documentation, which makes it easy to write and maintain documentation without having to write HTML or CSS. You can create new pages by adding Markdown files to the `docs` directory in your Docusaurus project. You can also customize the appearance of your documentation by editing the `docusaurus.config.js` file in your Docusaurus project.

## 2.5 Deploying your documentation

Once you have created and edited your documentation, you can deploy it to a hosting service like GitHub Pages or Netlify. Docusaurus comes with built-in support for deploying your documentation to GitHub Pages, which makes it easy to publish your documentation online. 

Gitlab CI/CD will automatically deploy the documentation to the `gh-pages` branch of your repository. You can then view your documentation online by navigating to `https://fabacademy.org/2026/labs/<lab>/students/<name>` in your web browser.

Edit the .gitlab-ci.yml file in your repository to enable Gitlab CI/CD to deploy your documentation to Fabacademy Pages.

```yaml 
image: node:latest

cache:
  paths:
    - node_modules/

pages:
  script:
    - npm install
    - npm run build
    - mv build public

  artifacts:
    paths:
      - public
  only:
    - main 
```

This will build your documentation and deploy it to Fabacademy Pages. 

![doc-deploy](/img/week01/doc-deploy.jpg)


![doc-deploy](/img/week01/doc-deploy2.jpg)

You can then view your documentation online by navigating to `https://fabacademy.org/2026/labs/chaihuo/students/dolphin-liu/` in your web browser.

![doc-show](/img/week01/doc-site.jpg)

## 2.6 References

- [Docusaurus Documentation](https://docusaurus.io/docs/en/installation)